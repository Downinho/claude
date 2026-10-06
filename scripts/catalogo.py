"""Gera dist/catalogo.html: índice local de todas as prévias (NÃO subir para o servidor)."""
import json, pathlib, html
ROOT = pathlib.Path(__file__).resolve().parent.parent
leads = {l['slug']: l for l in json.load(open(ROOT/'leads/leads.json', encoding='utf-8'))}
links = json.load(open(ROOT/'dist/links.json', encoding='utf-8'))
cards = []
for k in links:
    l = leads.get(k['slug'], {'nome': k['slug'], 'categoria': 'Exemplo', 'prioridade': '-', 'instagram': ''})
    cards.append(f'''<a class="c" href="demo/{k['slug']}/index.html" target="_blank" data-cat="{html.escape(l['categoria'])}">
<iframe src="demo/{k['slug']}/index.html" loading="lazy" tabindex="-1"></iframe>
<div><b>{html.escape(l['nome'])}</b><span>{html.escape(l['categoria'])} · {html.escape(l.get('instagram',''))} · Prior. {l['prioridade']}{' · 📷' if k['fotos'] else ''}</span></div></a>''')
cats = sorted({c.split('data-cat="')[1].split('"')[0] for c in cards})
btns = ''.join(f'<button onclick="f(this)">{html.escape(c)}</button>' for c in cats)
open(ROOT/'dist/catalogo.html','w',encoding='utf-8').write(f'''<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Catálogo de prévias</title><style>
body{{font-family:system-ui,sans-serif;margin:0;background:#f4f4f5;color:#18181b}}header{{padding:24px 16px;background:#0f1b2d;color:#fff}}h1{{margin:0 0 4px}}
nav{{display:flex;flex-wrap:wrap;gap:6px;padding:12px 16px;position:sticky;top:0;background:#f4f4f5;z-index:2}}button{{border:1px solid #d4d4d8;background:#fff;border-radius:99px;padding:6px 12px;cursor:pointer}}button.on{{background:#0f1b2d;color:#fff}}
main{{display:grid;gap:16px;padding:16px;grid-template-columns:repeat(auto-fill,minmax(280px,1fr))}}.c{{background:#fff;border-radius:14px;overflow:hidden;text-decoration:none;color:inherit;box-shadow:0 4px 20px -10px #0003}}
.c iframe{{width:1280px;height:900px;border:0;transform:scale(.25);transform-origin:0 0;pointer-events:none;margin-bottom:-675px}}.c div{{padding:12px;display:grid;gap:2px}}.c span{{font-size:.8rem;color:#71717a}}
</style></head><body><header><h1>{len(links)} prévias Downway</h1>Clique para abrir. 📷 = já tem fotos do Instagram. Uso interno: não suba este arquivo.</header>
<nav><button class="on" onclick="f(this,1)">Todas</button>{btns}</nav><main>{''.join(cards)}</main>
<script>function f(b,all){{document.querySelectorAll('nav button').forEach(x=>x.classList.remove('on'));b.classList.add('on');document.querySelectorAll('.c').forEach(c=>c.style.display=all||c.dataset.cat==b.textContent?'':'none')}}</script></body></html>''')
print('dist/catalogo.html ok')
