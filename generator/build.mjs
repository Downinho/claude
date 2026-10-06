// Gera as prévias em dist/demo/<slug>/ a partir de prospects/<slug>/data.json.
// Uso: node generator/build.mjs            (todas)
//      node generator/build.mjs --only slug (uma só)
// Depois, envie o conteúdo de dist/demo/ para downway.com.br/demo/ (FTP, cPanel, etc.).

import fs from 'node:fs';
import path from 'node:path';
import { render } from './template.mjs';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const SRC = path.join(ROOT, 'prospects');
const OUT = path.join(ROOT, 'dist', 'demo');
const BASE_URL = process.env.BASE_URL || 'https://downway.com.br/demo';

const onlyIdx = process.argv.indexOf('--only');
const only = onlyIdx > -1 ? process.argv[onlyIdx + 1] : null;

fs.mkdirSync(OUT, { recursive: true });

// Nada de listagem pública nem indexação no Google: as prévias usam fotos/logo
// do prospect sem contrato fechado, então ficam acessíveis só por link direto.
fs.writeFileSync(
  path.join(OUT, '.htaccess'),
  'Options -Indexes\n<IfModule mod_headers.c>\n  Header set X-Robots-Tag "noindex, nofollow"\n</IfModule>\n'
);
fs.writeFileSync(
  path.join(OUT, 'index.html'),
  '<!doctype html><meta name="robots" content="noindex"><meta http-equiv="refresh" content="0;url=https://downway.com.br/">'
);

const linhas = [['slug', 'nome', 'instagram', 'whatsapp', 'url_previa']];
let total = 0;

for (const dir of fs.readdirSync(SRC, { withFileTypes: true })) {
  if (!dir.isDirectory() || dir.name.startsWith('_')) continue;
  if (only && dir.name !== only) continue;

  const pastaSrc = path.join(SRC, dir.name);
  const jsonPath = path.join(pastaSrc, 'data.json');
  if (!fs.existsSync(jsonPath)) continue;

  const d = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
  if (d.status === 'descartado') continue;

  const slug = d.slug || dir.name;
  const pastaOut = path.join(OUT, slug);
  fs.rmSync(pastaOut, { recursive: true, force: true });
  fs.mkdirSync(pastaOut, { recursive: true });

  const assets = path.join(pastaSrc, 'assets');
  if (fs.existsSync(assets)) fs.cpSync(assets, path.join(pastaOut, 'assets'), { recursive: true });

  fs.writeFileSync(path.join(pastaOut, 'index.html'), render(d));
  linhas.push([slug, d.nome, d.instagram || '', d.whatsapp || '', `${BASE_URL}/${slug}/`]);
  total++;
  console.log(`✓ ${slug}`);
}

const csv = linhas.map((l) => l.map((v) => `"${String(v).replace(/"/g, '""')}"`).join(',')).join('\n');
fs.writeFileSync(path.join(ROOT, 'dist', 'links-previas.csv'), csv + '\n');
console.log(`\n${total} prévia(s) em dist/demo/ — links em dist/links-previas.csv`);
