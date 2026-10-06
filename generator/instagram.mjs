// Baixa do Instagram público de cada lead: foto de perfil (logo), as fotos mais curtidas,
// bio, link da bio e telefone comercial. Salva em prospects/<slug>/assets/ e prospects/<slug>/instagram.json.
// Depois é só rodar `npm run build` que os sites passam a usar as fotos reais.
//
// Uso: node generator/instagram.mjs            (todos os leads ainda sem fotos)
//      node generator/instagram.mjs <slug>...  (só esses)
//
// Precisa de acesso a instagram.com (rode na sua máquina). Faz uma pausa entre perfis
// para não ser bloqueado. Se o Instagram pedir login, espere alguns minutos e rode de novo:
// quem já tem fotos é pulado.

import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const leads = JSON.parse(fs.readFileSync(path.join(ROOT, 'leads', 'leads.json'), 'utf8'));
const alvo = process.argv.slice(2);
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126 Safari/537.36';
const UA_APP = 'Instagram 316.0.0.38.109 Android (30/11; 420dpi; 1080x2220; samsung; SM-G973F; beyond1; exynos9820; pt_BR; 562750302)';
// Rotas em ordem de preferência. A de app mobile é a que responde em IPs de datacenter (GitHub Actions).
const ROTAS = [
  { nome: 'app', headers: { 'user-agent': UA_APP, 'x-ig-app-id': '567067343352427' } },
  { nome: 'web', headers: { 'user-agent': UA, 'x-ig-app-id': '936619743392459' } },
];

async function perfil(user) {
  const erros = [];
  for (const rota of ROTAS) {
    const r = await fetch(`https://i.instagram.com/api/v1/users/web_profile_info/?username=${encodeURIComponent(user)}`, {
      headers: { ...rota.headers, accept: '*/*', 'accept-language': 'pt-BR,pt;q=0.9' },
    });
    const txt = await r.text();
    if (r.ok) {
      const j = JSON.parse(txt);
      if (j?.data?.user) return j.data.user;
      if (j?.data && j.data.user === null) throw new Error('perfil não encontrado');
    }
    erros.push(`${rota.nome} HTTP ${r.status} ${txt.slice(0, 90).replace(/\s+/g, ' ')}`);
  }
  throw new Error(erros.join(' | '));
}

async function baixar(url, destino) {
  const r = await fetch(url, { headers: { 'user-agent': UA } });
  if (!r.ok) throw new Error(`imagem HTTP ${r.status}`);
  fs.writeFileSync(destino, Buffer.from(await r.arrayBuffer()));
}

let ok = 0;
let falhasSeguidas = 0;
for (const lead of leads) {
  if (alvo.length && !alvo.includes(lead.slug)) continue;
  const pasta = path.join(ROOT, 'prospects', lead.slug, 'assets');
  if (!alvo.length && fs.existsSync(path.join(pasta, 'logo.jpg'))) continue;
  const igJson = path.join(ROOT, 'prospects', lead.slug, 'instagram.json');
  if (!alvo.length && fs.existsSync(igJson) && JSON.parse(fs.readFileSync(igJson, 'utf8')).erro) continue;
  const user = lead.instagram.replace(/^@/, '');
  try {
    let u;
    try { u = await perfil(user); }
    catch (e) {
      if (/não encontrado/.test(e.message)) throw e;
      console.log(`… @${user}: ${e.message} (esperando 60 s)`);
      await sleep(60000);
      u = await perfil(user);
    }
    fs.mkdirSync(pasta, { recursive: true });
    await baixar(u.profile_pic_url_hd || u.profile_pic_url, path.join(pasta, 'logo.jpg'));

    // Só fotos (sem vídeos), das mais curtidas para as menos curtidas.
    const posts = (u.edge_owner_to_timeline_media?.edges || [])
      .map((e) => e.node)
      .filter((n) => !n.is_video)
      .sort((a, b) => (b.edge_liked_by?.count || 0) - (a.edge_liked_by?.count || 0))
      .slice(0, 9);
    const nomes = ['hero', 'sobre', ...posts.slice(2).map((_, i) => `post-${String(i + 1).padStart(2, '0')}`)];
    for (const [i, n] of posts.entries()) await baixar(n.display_url, path.join(pasta, `${nomes[i]}.jpg`));

    const ultimoPost = u.edge_owner_to_timeline_media?.edges?.[0]?.node?.taken_at_timestamp;
    const info = {
      nome: u.full_name,
      bio: u.biography,
      link_bio: u.external_url,
      seguidores: u.edge_followed_by?.count,
      posts: u.edge_owner_to_timeline_media?.count,
      ultimo_post: ultimoPost ? new Date(ultimoPost * 1000).toISOString().slice(0, 10) : null,
      categoria: u.category_name || u.business_category_name,
      telefone: u.business_phone_number || null,
      email: u.business_email || null,
      endereco: u.business_address_json ? JSON.parse(u.business_address_json) : null,
    };
    fs.writeFileSync(path.join(ROOT, 'prospects', lead.slug, 'instagram.json'), JSON.stringify(info, null, 1));
    ok++;
    falhasSeguidas = 0;
    console.log(`✓ @${user}: ${posts.length} fotos, ${info.seguidores} seguidores, link da bio: ${info.link_bio || '—'}`);
  } catch (e) {
    console.log(`✗ @${user}: ${e.message}`);
    if (/não encontrado/.test(e.message)) {
      fs.mkdirSync(path.join(ROOT, 'prospects', lead.slug), { recursive: true });
      fs.writeFileSync(path.join(ROOT, 'prospects', lead.slug, 'instagram.json'), JSON.stringify({ erro: 'perfil não encontrado' }));
    }
    if (++falhasSeguidas >= 6) { console.log('Muitas falhas seguidas: Instagram limitou. Rode de novo em alguns minutos.'); break; }
    await sleep(4000 + Math.random() * 4000);
    continue;
  }
  await sleep(6000 + Math.random() * 5000);
}
console.log(`\n${ok} perfil(is) atualizado(s). Rode: npm run build && npm run planilha`);
