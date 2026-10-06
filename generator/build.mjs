// Gera as prévias em dist/demo/<slug>/.
// Fontes, nesta ordem (a última vence):
//   1. leads/leads.json                       (dados da pesquisa)
//   2. prospects/<slug>/data.json             (ajustes manuais, opcional)
//   3. prospects/<slug>/assets/               (logo.*, hero.*, sobre.*, e as demais imagens viram galeria)
// Uso: node generator/build.mjs [--only <slug>]
// Depois envie o conteúdo de dist/demo/ para downway.com.br/demo/.

import fs from 'node:fs';
import path from 'node:path';
import { render } from './template.mjs';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const PROSPECTS = path.join(ROOT, 'prospects');
const OUT = path.join(ROOT, 'dist', 'demo');
const config = JSON.parse(fs.readFileSync(path.join(ROOT, 'config.json'), 'utf8'));
const BASE_URL = process.env.BASE_URL || config.baseUrl;

const onlyIdx = process.argv.indexOf('--only');
const only = onlyIdx > -1 ? process.argv[onlyIdx + 1] : null;

const leads = JSON.parse(fs.readFileSync(path.join(ROOT, 'leads', 'leads.json'), 'utf8'));
const porSlug = new Map(leads.map((l) => [l.slug, l]));
// Pastas em prospects/ que não estão no leads.json (ex.: o exemplo) também entram.
for (const dir of fs.readdirSync(PROSPECTS, { withFileTypes: true })) {
  if (dir.isDirectory() && !dir.name.startsWith('_') && !porSlug.has(dir.name)) porSlug.set(dir.name, { slug: dir.name });
}

const IMG = /\.(jpe?g|png|webp|svg|avif)$/i;
function assetsDe(slug) {
  const dir = path.join(PROSPECTS, slug, 'assets');
  if (!fs.existsSync(dir)) return {};
  const files = fs.readdirSync(dir).filter((f) => IMG.test(f)).sort();
  const achar = (nome) => files.find((f) => f.toLowerCase().startsWith(nome + '.'));
  const logo = achar('logo');
  const resto = files.filter((f) => f !== logo);
  const hero = achar('hero') || resto[0];
  const sobre = achar('sobre') || resto[1];
  const a = (f) => f && `assets/${f}`;
  return { logo: a(logo), hero: a(hero), fotoSobre: a(sobre), galeria: resto.length >= 3 ? resto.map(a) : undefined };
}

// instagram.json (gerado por generator/instagram.mjs): WhatsApp, frase da bio e seguidores.
function dadosInstagram(slug) {
  const f = path.join(PROSPECTS, slug, 'instagram.json');
  if (!fs.existsSync(f)) return {};
  const ig = JSON.parse(fs.readFileSync(f, 'utf8'));
  const textos = `${ig.link_bio || ''} ${ig.bio || ''}`;
  const wa = textos.match(/wa\.me\/(\d{10,13})/)?.[1] || textos.match(/api\.whatsapp\.com\/send\?phone=(\d{10,13})/)?.[1];
  const tel = (ig.telefone || '').replace(/\D/g, '');
  const celular = tel.length >= 10 && /^(55)?\d{2}9/.test(tel) ? (tel.startsWith('55') ? tel : '55' + tel) : null;
  const frase = (ig.bio || '').split('\n').map((x) => x.trim()).find((x) => x.length > 20 && x.length < 110 && !/https?:|@|wa\.me/.test(x));
  return Object.fromEntries(Object.entries({ whatsapp: wa || celular, frase, seguidores: ig.seguidores }).filter(([, v]) => v));
}

fs.mkdirSync(OUT, { recursive: true });
// Sem listagem pública e sem indexação: as prévias usam fotos/logo do lead sem contrato.
fs.writeFileSync(path.join(OUT, '.htaccess'), 'Options -Indexes\n<IfModule mod_headers.c>\n  Header set X-Robots-Tag "noindex, nofollow"\n</IfModule>\n');
fs.writeFileSync(path.join(OUT, 'index.html'), '<!doctype html><meta name="robots" content="noindex"><meta http-equiv="refresh" content="0;url=https://downway.com.br/">');

const links = [];
const porNicho = {};
for (const [slug, lead] of porSlug) {
  const grupo = lead.especialidade || lead.nicho || 'outros';
  lead.ordem = porNicho[grupo] = (porNicho[grupo] ?? -1) + 1;
  if (only && slug !== only) continue;
  const manualPath = path.join(PROSPECTS, slug, 'data.json');
  const manual = fs.existsSync(manualPath) ? JSON.parse(fs.readFileSync(manualPath, 'utf8')) : {};
  const assets = assetsDe(slug);
  const d = { proposta: config.proposta, ...lead, ...dadosInstagram(slug), ...Object.fromEntries(Object.entries(assets).filter(([, v]) => v)), ...manual };
  if (!d.nome || d.status === 'descartado') continue;

  const pastaOut = path.join(OUT, slug);
  fs.rmSync(pastaOut, { recursive: true, force: true });
  fs.mkdirSync(pastaOut, { recursive: true });
  const src = path.join(PROSPECTS, slug, 'assets');
  if (fs.existsSync(src)) fs.cpSync(src, path.join(pastaOut, 'assets'), { recursive: true });
  fs.writeFileSync(path.join(pastaOut, 'index.html'), render(d));
  links.push({ slug, url: `${BASE_URL}/${slug}/`, fotos: Boolean(assets.hero || d.hero) });
}

fs.writeFileSync(path.join(ROOT, 'dist', 'links.json'), JSON.stringify(links, null, 1));
const comFoto = links.filter((l) => l.fotos).length;
console.log(`${links.length} prévia(s) em dist/demo/ (${comFoto} com fotos do Instagram, ${links.length - comFoto} com arte gerada)`);
