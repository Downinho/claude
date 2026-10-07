// FILME C — PARE DE FAZER NA MÃO (38 s · 24 fps · 9:16)
// Fio: o código FL-1045-120-B é redigitado como FL-1054-120-B. O tempo congela. A automação corrige e envia.
// 3D: gancho (teclas Ctrl/C/V gastas + centro de usinagem desfocado atrás do vidro), congelamento, liberação.
// 2D: PDF + planilha, relógio, e-mails, orçamento manual, congelamento da UI, editor de fluxo, PDF do orçamento.
import { BokehPass } from "three/addons/postprocessing/BokehPass.js";
import { RoundedBoxGeometry } from "three/addons/geometries/RoundedBoxGeometry.js";

export const DURATION = 38;

const T = { desk: 3.2, clock: 7.0, mail: 8.6, quote: 11.0, freeze: 12.6, freeze3d: 13.8, enter: 16.2, flow: 18.6, doc: 24.6, release: 27.6, sig: 34.4 };
const BEAT = 60 / 92;

const COPY = {
  pt: {
    hook: ["UM DÍGITO.", "UMA PEÇA ERRADA."], v1: "Código da peça. Quantidade. Prazo.", v3: "Digitado de novo no orçamento.",
    rep: ["COPIAR.", "COLAR.", "CONFERIR.", "REPETIR."], freeze: ["QUANTO TEMPO", "ISSO CUSTA?"],
    lab: "DOWNWAY · AUTOMAÇÃO DE PROCESSOS", q: ["E se esse trabalho parasse", "de depender de alguém?"],
    v4: ["A Downway automatiza planilhas,", "orçamentos e relatórios."], doc: ["DO DADO AO DOCUMENTO.", "SEM REDIGITAR."],
    v5: ["Dentro do seu processo.", "Do jeito que ele funciona."], end: ["DEIXE A TECNOLOGIA FAZER", "O TRABALHO REPETITIVO."],
    cta: "AGENDE UM DIAGNÓSTICO SEM CUSTO", dec: ",",
  },
  en: {
    hook: ["ONE DIGIT.", "ONE WRONG PART."], v1: "Part number. Quantity. Lead time.", v3: "Typed in again for the quote.",
    rep: ["COPY.", "PASTE.", "CHECK.", "REPEAT."], freeze: ["WHAT IS THIS", "COSTING YOU?"],
    lab: "DOWNWAY · PROCESS AUTOMATION", q: ["What if this work stopped", "depending on one person?"],
    v4: ["Downway automates spreadsheets,", "quotes and reports."], doc: ["FROM DATA TO DOCUMENT.", "NO RETYPING."],
    v5: ["Built into your process.", "The way it actually runs."], end: ["LET TECHNOLOGY DO", "THE REPETITIVE WORK."],
    cta: "BOOK AN ASSESSMENT", dec: ".",
  },
  es: {
    hook: ["UN DÍGITO.", "UNA PIEZA EQUIVOCADA."], v1: "Número de pieza. Cantidad. Plazo.", v3: "Y otra vez, a mano, en la cotización.",
    rep: ["COPIAR.", "PEGAR.", "REVISAR.", "REPETIR."], freeze: ["¿CUÁNTO TE", "CUESTA ESTO?"],
    lab: "DOWNWAY · AUTOMATIZACIÓN DE PROCESOS", q: ["¿Y si ese trabajo dejara", "de depender de una persona?"],
    v4: ["Downway automatiza hojas de cálculo,", "cotizaciones e informes."], doc: ["DEL DATO AL DOCUMENTO.", "SIN VOLVER A TECLEAR."],
    v5: ["Dentro de tu proceso.", "Tal como funciona."], end: ["DEJA QUE LA TECNOLOGÍA", "HAGA EL TRABAJO REPETITIVO."],
    cta: "AGENDA UN DIAGNÓSTICO", dec: ",",
  },
};

// textos de interface (software neutro, nativo em cada idioma)
const UIX = {
  pt: {
    pdfTitle: "FL-1045-120-B_revB.pdf", sheetTitle: "cotacoes_outubro", part: "FLANGE DE ACOPLAMENTO", scale: "ESC 1:2",
    heads: ["Item", "Código", "Descrição", "Qtd", "Material", "Prazo"],
    rows: [["1", "EX-2210-040", "Eixo Ø40 × 210", "12", "SAE 4140", "10 d"], ["2", "BU-0832-A", "Bucha bronze Ø32", "24", "TM-23", "7 d"], ["3", "PL-0610-12", "Placa base 610 × 12", "4", "ASTM A36", "12 d"], ["4", "EN-1120-Z", "Engrenagem Z20 m2", "8", "SAE 1045", "15 d"], ["5", "CP-0450-B", "Chaveta 8 × 7 × 45", "40", "SAE 1045", "5 d"]],
    desc: "Flange de acoplamento Ø120", days: "15 d",
    inbox: "Caixa de entrada", search: "Pesquisar e-mails", now: "agora",
    mails: [["Cliente — Compras", "RE: RE: Orçamento flange — rev.3"], ["PCP", "Consolidar relatório de produção (turno A + B)"], ["Comercial", "Código da peça??"], ["Cliente — Compras", "Pedido 4471 — confirmar prazo"], ["Diretoria", "Relatório semanal — versão final (2)"], ["Qualidade", "Desenho rev.B — conferir antes de enviar"]],
    old: [["Expedição", "Romaneio 0912 — conferido"], ["Financeiro", "Faturamento parcial — outubro"], ["Compras", "Cotação aço SAE 1045 — barras"]],
    qTitle: "Novo orçamento — Nº 2318 rev.3", fClient: "Cliente", fDate: "Data", fCode: "Código da peça", fQty: "Quantidade", fMat: "Material", fLead: "Prazo", fDesc: "Descrição", fObs: "Observações",
    client: "Cliente — Compras", date: "07/10/2026", lead: "15 dias úteis", send: "Enviar orçamento", draft: "Salvar rascunho", toast: "Nova mensagem",
    neq: "≠ FL-1045-120-B · desenho rev. B",
    flow: "Fluxo · Orçamento sob desenho", run: "Executando", done: "Concluído", log: "Registro de execução",
    n: ["Ler desenho (PDF)", "Validar código", "Gerar orçamento", "Enviar"], tags: ["PDF", "REGRA", "MODELO", "SAÍDA"],
    p: ["origem: FL-1045-120-B_revB.pdf", "regra: planilha.B7 = desenho.código", "modelo: orçamento padrão → PDF", "para: Compras (cliente) · anexar PDF"],
    r: ["código = FL-1045-120-B · rev. B", "B7 = FL-1054-120-B ≠ desenho", "corrigido → FL-1045-120-B", "ORC-2318-rev4.pdf · 1 pág.", "enviado 17:48:12"],
    logs: ["desenho lido · FL-1045-120-B rev. B", "B7 diverge do desenho (1054 / 1045)", "B7 → FL-1045-120-B", "ORC-2318-rev4.pdf gerado", "enviado · Compras (cliente)"],
    docT: "ORÇAMENTO", docN: "Nº 2318 · rev. 4", logo: "LOGO DO CLIENTE", co: "Sua empresa Ltda.", dH: ["Item", "Código", "Descrição", "Material", "Qtd", "Unit.", "Total"],
    unit: "186,40", total: "7.456,00", terms: ["Prazo de entrega: 15 dias úteis", "Validade da proposta: 10 dias", "Condição: 28 ddl"], val: "Código validado contra o desenho FL-1045-120-B rev. B",
    sign: "Responsável comercial", sentT: "Enviado ao cliente · 17:48", sentS: "Orçamento 2318 rev.4 — FL-1045-120-B · PDF anexo",
  },
  en: {
    pdfTitle: "FL-1045-120-B_revB.pdf", sheetTitle: "quotes_october", part: "COUPLING FLANGE", scale: "SCALE 1:2",
    heads: ["Item", "Part no.", "Description", "Qty", "Material", "Lead"],
    rows: [["1", "EX-2210-040", "Shaft Ø40 × 210", "12", "SAE 4140", "10 d"], ["2", "BU-0832-A", "Bronze bushing Ø32", "24", "TM-23", "7 d"], ["3", "PL-0610-12", "Base plate 610 × 12", "4", "ASTM A36", "12 d"], ["4", "EN-1120-Z", "Spur gear Z20 m2", "8", "SAE 1045", "15 d"], ["5", "CP-0450-B", "Key 8 × 7 × 45", "40", "SAE 1045", "5 d"]],
    desc: "Coupling flange Ø120", days: "15 d",
    inbox: "Inbox", search: "Search mail", now: "now",
    mails: [["Customer — Purchasing", "RE: RE: Flange quote — rev.3"], ["Planning", "Consolidate production report (shift A + B)"], ["Sales", "Part number??"], ["Customer — Purchasing", "PO 4471 — confirm lead time"], ["Management", "Weekly report — final version (2)"], ["Quality", "Drawing rev.B — check before sending"]],
    old: [["Shipping", "Packing list 0912 — checked"], ["Finance", "Partial invoicing — October"], ["Purchasing", "Quote: SAE 1045 steel bars"]],
    qTitle: "New quote — No. 2318 rev.3", fClient: "Customer", fDate: "Date", fCode: "Part number", fQty: "Quantity", fMat: "Material", fLead: "Lead time", fDesc: "Description", fObs: "Notes",
    client: "Customer — Purchasing", date: "10/07/2026", lead: "15 business days", send: "Send quote", draft: "Save draft", toast: "New message",
    neq: "≠ FL-1045-120-B · drawing rev. B",
    flow: "Flow · Quote from drawing", run: "Running", done: "Completed", log: "Run log",
    n: ["Read drawing (PDF)", "Validate part number", "Generate quote", "Send"], tags: ["PDF", "RULE", "TEMPLATE", "OUTPUT"],
    p: ["source: FL-1045-120-B_revB.pdf", "rule: sheet.B7 = drawing.part_no", "template: standard quote → PDF", "to: Purchasing (customer) · attach PDF"],
    r: ["part_no = FL-1045-120-B · rev. B", "B7 = FL-1054-120-B ≠ drawing", "corrected → FL-1045-120-B", "QT-2318-rev4.pdf · 1 page", "sent 17:48:12"],
    logs: ["drawing read · FL-1045-120-B rev. B", "B7 differs from drawing (1054 / 1045)", "B7 → FL-1045-120-B", "QT-2318-rev4.pdf generated", "sent · Purchasing (customer)"],
    docT: "QUOTATION", docN: "No. 2318 · rev. 4", logo: "CUSTOMER LOGO", co: "Your Company Inc.", dH: ["Item", "Part no.", "Description", "Material", "Qty", "Unit", "Total"],
    unit: "186.40", total: "7,456.00", terms: ["Delivery: 15 business days", "Offer valid for: 10 days", "Payment: net 28"], val: "Part number validated against drawing FL-1045-120-B rev. B",
    sign: "Sales representative", sentT: "Sent to customer · 17:48", sentS: "Quote 2318 rev.4 — FL-1045-120-B · PDF attached",
  },
  es: {
    pdfTitle: "FL-1045-120-B_revB.pdf", sheetTitle: "cotizaciones_octubre", part: "BRIDA DE ACOPLAMIENTO", scale: "ESC 1:2",
    heads: ["Ítem", "Código", "Descripción", "Cant.", "Material", "Plazo"],
    rows: [["1", "EX-2210-040", "Eje Ø40 × 210", "12", "SAE 4140", "10 d"], ["2", "BU-0832-A", "Buje de bronce Ø32", "24", "TM-23", "7 d"], ["3", "PL-0610-12", "Placa base 610 × 12", "4", "ASTM A36", "12 d"], ["4", "EN-1120-Z", "Engranaje Z20 m2", "8", "SAE 1045", "15 d"], ["5", "CP-0450-B", "Chaveta 8 × 7 × 45", "40", "SAE 1045", "5 d"]],
    desc: "Brida de acoplamiento Ø120", days: "15 d",
    inbox: "Bandeja de entrada", search: "Buscar correo", now: "ahora",
    mails: [["Cliente — Compras", "RE: RE: Cotización brida — rev.3"], ["Planificación", "Consolidar informe de producción (turno A + B)"], ["Comercial", "¿¿Código de la pieza??"], ["Cliente — Compras", "Pedido 4471 — confirmar plazo"], ["Dirección", "Informe semanal — versión final (2)"], ["Calidad", "Plano rev.B — revisar antes de enviar"]],
    old: [["Despacho", "Remito 0912 — verificado"], ["Finanzas", "Facturación parcial — octubre"], ["Compras", "Cotización acero SAE 1045 — barras"]],
    qTitle: "Nueva cotización — N.º 2318 rev.3", fClient: "Cliente", fDate: "Fecha", fCode: "Código de pieza", fQty: "Cantidad", fMat: "Material", fLead: "Plazo", fDesc: "Descripción", fObs: "Observaciones",
    client: "Cliente — Compras", date: "07/10/2026", lead: "15 días hábiles", send: "Enviar cotización", draft: "Guardar borrador", toast: "Nuevo mensaje",
    neq: "≠ FL-1045-120-B · plano rev. B",
    flow: "Flujo · Cotización bajo plano", run: "En ejecución", done: "Completado", log: "Registro de ejecución",
    n: ["Leer plano (PDF)", "Validar código", "Generar cotización", "Enviar"], tags: ["PDF", "REGLA", "PLANTILLA", "SALIDA"],
    p: ["origen: FL-1045-120-B_revB.pdf", "regla: hoja.B7 = plano.código", "plantilla: cotización estándar → PDF", "para: Compras (cliente) · adjuntar PDF"],
    r: ["código = FL-1045-120-B · rev. B", "B7 = FL-1054-120-B ≠ plano", "corregido → FL-1045-120-B", "COT-2318-rev4.pdf · 1 pág.", "enviado 17:48:12"],
    logs: ["plano leído · FL-1045-120-B rev. B", "B7 difiere del plano (1054 / 1045)", "B7 → FL-1045-120-B", "COT-2318-rev4.pdf generado", "enviado · Compras (cliente)"],
    docT: "COTIZACIÓN", docN: "N.º 2318 · rev. 4", logo: "LOGO DEL CLIENTE", co: "Su empresa S.A.", dH: ["Ítem", "Código", "Descripción", "Material", "Cant.", "Unit.", "Total"],
    unit: "186,40", total: "7.456,00", terms: ["Plazo de entrega: 15 días hábiles", "Validez de la oferta: 10 días", "Condición: 28 días"], val: "Código validado contra el plano FL-1045-120-B rev. B",
    sign: "Responsable comercial", sentT: "Enviado al cliente · 17:48", sentS: "Cotización 2318 rev.4 — FL-1045-120-B · PDF adjunto",
  },
};

// ---------- trilha (cues) ----------
// gancho: Ctrl+C / Ctrl+V em grade rítmica
const KEYCYCLE = 1.2;
const KEYHITS = [];
for (let c = 0; c * KEYCYCLE < T.desk; c++) { const b = c * KEYCYCLE + 0.1; KEYHITS.push(b, b + 0.14, b + 0.6, b + 0.74); }
cue(0, "drone", { until: T.freeze, level: 0.7 });
cue(0, "machine", { until: T.freeze });
KEYHITS.filter((k) => k < T.desk - 0.05).forEach((k) => cue(k, "key"));
cue(T.desk - 0.25, "whoosh", { dur: 0.3 });
cue(4.3, "click"); cue(4.78, "key"); cue(4.86, "key");
cue(5.56, "click"); cue(5.62, "keys", { until: 6.62 }); cue(6.72, "key");
cue(T.clock, "clock", { until: T.freeze, accel: true });
[8.75, 9.35, 9.8, 10.15, 10.42, 10.64].forEach((k) => cue(k, "notif"));
cue(11.15, "keys", { until: 11.75 });
[11.5, 11.95, 12.3].forEach((k) => cue(k, "notif"));
cue(T.freeze, "freeze");
cue(13.4, "drone", { until: T.enter, level: 0.18 });
cue(T.enter + 0.1, "relay");
cue(T.flow, "pulse", { bpm: 92, until: T.release });
[19.35, 20.3, 22.3, 23.25].forEach((k) => cue(k, "tick"));
cue(20.75, "glitch"); cue(21.6, "relay");
cue(23.85, "chime");
cue(T.doc, "whoosh", { dur: 0.4 });
[24.85, 25.05, 25.25].forEach((k) => cue(k, "tick"));
cue(26.2, "notif");
cue(T.release, "machine", { until: T.sig }); cue(T.release, "room", { until: T.sig });
cue(T.release, "clock", { until: T.sig, accel: false });
cue(30.6, "resolve", { dur: 4 });
cue(T.sig, "sub"); cue(T.sig, "end");

// ---------- 3D ----------
let K, S, bokeh, kb, keys = {}, bg, bgSharp, beacon, beaconMat, winGlow, spindle, motes, moteData = [], sun, warm;
export let stage;

function keyTex(label, wU, worn, mod) {
  const pxW = Math.round(160 * wU), pxH = 160;
  const c = document.createElement("canvas"); c.width = pxW; c.height = pxH;
  const r = document.createElement("canvas"); r.width = pxW; r.height = pxH;
  const g = c.getContext("2d"), gr = r.getContext("2d");
  g.clearRect(0, 0, pxW, pxH); gr.fillStyle = "#000"; gr.fillRect(0, 0, pxW, pxH);
  g.beginPath(); g.roundRect(2, 2, pxW - 4, pxH - 4, 22); g.fillStyle = "#2a2c30"; g.fill();
  // textura fina de plástico
  for (let i = 0; i < 900 * wU; i++) { const v = 34 + rnd(i * 3.7 + wU) * 16; g.fillStyle = `rgba(${v},${v},${v + 3},0.5)`; g.fillRect(rnd(i * 1.3 + label.length) * pxW, rnd(i * 2.9) * pxH, 1.5, 1.5); }
  // legenda
  g.fillStyle = "#e2e5e9"; g.textBaseline = "middle";
  if (mod) { g.font = `600 ${46}px Inter, sans-serif`; g.textAlign = "left"; g.fillText(label, 22, 50); }
  else { g.font = `600 ${78}px Inter, sans-serif`; g.textAlign = "left"; g.fillText(label, 24, 58); }
  gr.fillStyle = "rgb(150,150,150)"; gr.beginPath(); gr.roundRect(2, 2, pxW - 4, pxH - 4, 22); gr.fill();
  if (worn > 0) {
    // brilho polido de uso: centro liso, legenda parcialmente apagada
    const cx = mod ? pxW * 0.42 : pxW * 0.5, cy = pxH * 0.56, rx = (mod ? pxW * 0.36 : pxW * 0.4), ry = pxH * 0.36;
    for (let k = 0; k < 18; k++) {
      const f = k / 17; g.save(); g.globalAlpha = 0.06 * worn; g.fillStyle = "#4a4e55"; g.beginPath(); g.ellipse(cx + (rnd(k) - 0.5) * 8, cy + (rnd(k + 9) - 0.5) * 8, rx * (1 - f * 0.7), ry * (1 - f * 0.7), 0, 0, 7); g.fill(); g.restore();
    }
    // apaga parte da legenda (desgaste irregular)
    g.save(); g.globalCompositeOperation = "source-atop";
    for (let k = 0; k < 140 * worn; k++) { const a = rnd(k * 5.1) * 7, d = Math.sqrt(rnd(k * 2.3)) * rx * 0.9; g.fillStyle = `rgba(46,48,52,${0.35 + rnd(k) * 0.5})`; g.beginPath(); g.ellipse(cx + Math.cos(a) * d, cy + Math.sin(a) * d * (ry / rx), 3 + rnd(k * 7) * 7, 2 + rnd(k * 3) * 5, a, 0, 7); g.fill(); }
    g.restore();
    const rg = gr.createRadialGradient(cx, cy, 0, cx, cy, rx);
    rg.addColorStop(0, `rgb(${Math.round(150 - 72 * worn)},${Math.round(150 - 72 * worn)},0)`); rg.addColorStop(0.75, `rgb(${Math.round(150 - 90 * worn)},${Math.round(150 - 90 * worn)},0)`); rg.addColorStop(1, "rgb(150,150,0)");
    gr.save(); gr.translate(cx, cy); gr.scale(1, ry / rx); gr.translate(-cx, -cy); gr.fillStyle = rg; gr.beginPath(); gr.arc(cx, cy, rx, 0, 7); gr.fill(); gr.restore();
  }
  const THREE = K.THREE;
  const map = new THREE.CanvasTexture(c); map.colorSpace = THREE.SRGBColorSpace; map.anisotropy = 8;
  const rough = new THREE.CanvasTexture(r); rough.colorSpace = THREE.NoColorSpace;
  return { map, rough };
}

function cncTexture(sharp) {
  const w = 1024, h = 614, c = document.createElement("canvas"); c.width = w; c.height = h;
  const g = c.getContext("2d");
  if (!sharp) g.filter = "blur(3px)";
  let gr = g.createLinearGradient(0, 0, 0, h); gr.addColorStop(0, "#15171a"); gr.addColorStop(0.62, "#1d1f23"); gr.addColorStop(1, "#111214");
  g.fillStyle = gr; g.fillRect(-20, -20, w + 40, h + 40);
  // luminárias de teto
  for (let i = 0; i < 4; i++) { g.fillStyle = "rgba(235,240,250,0.9)"; g.fillRect(80 + i * 250, 30 + i * 4, 150, 7); g.fillStyle = "rgba(235,240,250,0.12)"; g.fillRect(60 + i * 250, 20 + i * 4, 190, 28); }
  // estrutura do galpão
  g.fillStyle = "#24272b"; g.fillRect(0, 70, w, 10); for (let i = 0; i < 6; i++) g.fillRect(i * 200 + 10, 70, 12, 300);
  // piso epóxi com reflexo
  gr = g.createLinearGradient(0, 430, 0, h); gr.addColorStop(0, "#2a2d31"); gr.addColorStop(1, "#16171a"); g.fillStyle = gr; g.fillRect(0, 430, w, h - 430);
  g.fillStyle = "rgba(220,170,40,0.55)"; g.fillRect(0, 520, w, 6);
  // centro de usinagem vertical (enclausurado), visto de frente-lado
  const mx = 230, my = 150, mw = 500, mh = 320;
  gr = g.createLinearGradient(mx, my, mx, my + mh); gr.addColorStop(0, "#c3c7cc"); gr.addColorStop(0.7, "#a6abb1"); gr.addColorStop(1, "#7d838a");
  g.fillStyle = gr; g.beginPath(); g.moveTo(mx, my + 30); g.lineTo(mx + 40, my); g.lineTo(mx + mw - 40, my); g.lineTo(mx + mw, my + 30); g.lineTo(mx + mw, my + mh); g.lineTo(mx, my + mh); g.closePath(); g.fill();
  g.fillStyle = "#2f4e73"; g.fillRect(mx, my + mh - 70, mw, 36);                  // faixa inferior
  g.fillStyle = "#2a2d31"; g.fillRect(mx, my + mh - 34, mw, 34);                  // base
  // portas de correr com visores verticais
  const dx = mx + 40, dw = 300, dy = my + 40, dh = mh - 120;
  g.fillStyle = "#b4b9bf"; g.fillRect(dx, dy, dw, dh); g.fillStyle = "#80868d"; g.fillRect(dx + dw / 2 - 2, dy, 4, dh);
  [dx + 22, dx + dw / 2 + 22].forEach((wx) => {
    g.fillStyle = "#15181c"; g.fillRect(wx, dy + 16, dw / 2 - 44, dh - 32);
    const rg = g.createRadialGradient(wx + 50, dy + 90, 5, wx + 50, dy + 90, 120); rg.addColorStop(0, "rgba(230,238,250,0.95)"); rg.addColorStop(1, "rgba(110,130,160,0.2)");
    g.fillStyle = rg; g.fillRect(wx, dy + 16, dw / 2 - 44, dh - 32);
  });
  g.fillStyle = "rgba(240,245,255,0.28)"; for (let i = 0; i < 46; i++) { g.beginPath(); g.arc(dx + 30 + rnd(i) * 240, dy + 30 + rnd(i * 3) * 140, 4 + rnd(i * 5) * 12, 0, 7); g.fill(); } // névoa de refrigerante
  g.fillStyle = "#4a4f56"; g.fillRect(dx + 120, dy + 16, 60, 70); g.fillStyle = "#30343a"; g.fillRect(dx + 140, dy + 86, 20, 34); // cabeçote
  g.fillStyle = "#3d4248"; g.fillRect(dx + 30, dy + 140, 240, 14); // mesa
  g.fillStyle = "#e3e6ea"; g.fillRect(dx + dw / 2 - 30, dy + dh / 2, 8, 30); g.fillRect(dx + dw / 2 + 22, dy + dh / 2, 8, 30); // puxadores
  // painel do operador em braço
  g.fillStyle = "#2b2e33"; g.fillRect(mx + mw - 120, my + 50, 96, 170);
  g.fillStyle = "#0c0e10"; g.fillRect(mx + mw - 110, my + 62, 76, 56);
  g.fillStyle = "rgba(90,162,245,0.5)"; g.fillRect(mx + mw - 106, my + 66, 68, 48);
  for (let i = 0; i < 16; i++) { g.fillStyle = i === 13 ? "#3fb27f" : i === 14 ? "#c94a3a" : "#5b6068"; g.fillRect(mx + mw - 108 + (i % 4) * 18, my + 128 + Math.floor(i / 4) * 20, 12, 12); }
  // esteira de cavacos
  g.fillStyle = "#5b6168"; g.beginPath(); g.moveTo(mx + mw, my + mh - 40); g.lineTo(mx + mw + 110, my + mh - 120); g.lineTo(mx + mw + 130, my + mh - 100); g.lineTo(mx + mw + 30, my + mh); g.closePath(); g.fill();
  g.fillStyle = "#3a3e44"; g.fillRect(mx + mw + 100, my + mh - 60, 60, 60);
  // torre de sinalização (o farol 3D fica por cima)
  g.fillStyle = "#2a2d31"; g.fillRect(mx + mw - 40, my - 60, 8, 60);
  g.fillStyle = "#6b2a1f"; g.fillRect(mx + mw - 46, my - 112, 20, 17); g.fillStyle = "#6b5a1f"; g.fillRect(mx + mw - 46, my - 95, 20, 17); g.fillStyle = "#1f5a3a"; g.fillRect(mx + mw - 46, my - 78, 20, 17);
  // segunda máquina ao fundo e ponte rolante
  g.fillStyle = "#5f656c"; g.fillRect(900, 250, 124, 190); g.fillStyle = "#30343a"; g.fillRect(915, 275, 80, 80);
  g.fillStyle = "#c79a1e"; g.fillRect(0, 100, w, 14);
  g.fillStyle = "#0e0f11"; g.fillRect(0, 240, 120, 200);
  g.filter = "none"; g.fillStyle = "rgba(6,7,9,0.38)"; g.fillRect(0, 0, w, h);
  // reflexo da sala no vidro (faixas diagonais leves)
  g.save(); g.globalAlpha = 0.05; g.fillStyle = "#e8f0ff"; g.translate(w * 0.62, 0); g.rotate(0.35); g.fillRect(0, -100, 60, h * 2); g.fillRect(110, -100, 20, h * 2); g.restore();
  if (!sharp) { const c2 = document.createElement("canvas"); c2.width = w; c2.height = h; const g2 = c2.getContext("2d"); g2.filter = "blur(5px)"; g2.drawImage(c, 0, 0); return c2; }
  return c;
}

export async function setup(kit, mode) {
  if (!kit) return;
  K = kit; const { THREE, MAT } = kit;
  stage = kit.createStage({ bg: 0x0b0c0e, fov: 30, bloom: 0.45, bloomThreshold: 0.85, env: { top: 3.0, left: 2.4, right: 0.9, fill: 1.0, front: 1.6 }, envIntensity: 1.0, fogNear: 30, fogFar: 80, exposure: 1.05 });
  S = stage.scene;
  stage.camera.near = 0.02; stage.camera.far = 40; stage.camera.updateProjectionMatrix();
  bokeh = new BokehPass(S, stage.camera, { focus: 0.6, aperture: 0.02, maxblur: 0.012 });
  stage.composer.insertPass(bokeh, 1);

  kit.keyLight(S, { pos: [0.4, 3, -2.2], intensity: 0.9, size: 2, color: 0xf2efe8 });                 // monitor/teto atrás
  const front = new THREE.DirectionalLight(0xdfe7f2, 0.5); front.position.set(-1, 1.5, 2); S.add(front);
  kit.rimLight(S, { pos: [2.5, 0.8, -2.5], intensity: 3, color: 0x6fa0e0, target: [0.6, 0, -0.2] });
  sun = new THREE.DirectionalLight(0xffe2b8, 0); sun.position.set(-3, 2.2, -0.5); sun.target.position.set(0.8, 0, -0.2); S.add(sun, sun.target);
  warm = new THREE.PointLight(0xffb060, 0, 3, 2); warm.position.set(1.2, 0.6, -0.9); S.add(warm);

  // mesa
  const desk = new THREE.Mesh(new THREE.PlaneGeometry(4, 2.4), MAT.paint(0x141518, { roughness: 0.62, clearcoat: 0.1 }));
  desk.rotation.x = -Math.PI / 2; desk.position.set(1.2, -0.03, -0.35); desk.receiveShadow = true; S.add(desk);

  // teclado
  kb = new THREE.Group(); S.add(kb); kb.rotation.x = 0.06;
  const U = 0.19;
  const caseM = MAT.aluminum({ color: 0x3b3e43, roughness: 0.38 });
  const kcase = new THREE.Mesh(new RoundedBoxGeometry(2.6, 0.06, 1.08, 3, 0.02), caseM); kcase.position.set(1.25, 0.0, -0.38); kcase.castShadow = kcase.receiveShadow = true; kb.add(kcase);
  const plate = new THREE.Mesh(new THREE.BoxGeometry(2.5, 0.01, 1.0), MAT.darkSteel({ color: 0x17181b, roughness: 0.6 })); plate.position.set(1.25, 0.032, -0.38); kb.add(plate);
  const sideM = MAT.plastic(0x27292d, { roughness: 0.58, sheen: 0 });
  const geoCache = {};
  const capGeo = (wU) => {
    if (geoCache[wU]) return geoCache[wU];
    const w = wU * U - 0.014, h = 0.075, d = U - 0.014;
    const g = new RoundedBoxGeometry(w, h, d, 4, 0.012), p = g.attributes.position;
    for (let i = 0; i < p.count; i++) { const y = p.getY(i), k = (y + h / 2) / h; p.setX(i, p.getX(i) - Math.sign(p.getX(i)) * 0.016 * k); p.setZ(i, p.getZ(i) - Math.sign(p.getZ(i)) * 0.022 * k); }
    g.computeVertexNormals(); geoCache[wU] = { g, w, h, d }; return geoCache[wU];
  };
  const addKey = (label, wU, x, row, worn = 0, mod = false) => {
    const { g, w, h, d } = capGeo(wU);
    const grp = new THREE.Group(); grp.position.set(x + (wU * U) / 2, 0.04, -row * U);
    const cap = new THREE.Mesh(g, sideM); cap.position.y = h / 2; cap.castShadow = cap.receiveShadow = true; grp.add(cap);
    const tex = keyTex(label, wU, worn, mod);
    const top = new THREE.Mesh(new THREE.PlaneGeometry(w - 0.036, d - 0.048), new THREE.MeshPhysicalMaterial({ map: tex.map, roughnessMap: tex.rough, roughness: 1, metalness: 0, transparent: true, alphaTest: 0.3, clearcoat: 0 }));
    top.rotation.x = -Math.PI / 2; top.position.y = h + 0.0008; top.receiveShadow = true; grp.add(top);
    kb.add(grp); return grp;
  };
  const row = (r, list, x0 = 0) => { let x = x0; for (const [l, wU, worn, mod] of list) { const k = addKey(l, wU, x, r, worn || 0, !!mod); keys[l + r] = k; x += wU * U; } };
  row(0, [["Ctrl", 1.25, 1, 1], ["Fn", 1.25, 0.15, 1], ["Alt", 1.25, 0.25, 1], ["", 6.25, 0.3], ["Alt Gr", 1.25, 0, 1]]);
  row(1, [["Shift", 2.25, 0.35, 1], ["Z", 1, 0.2], ["X", 1, 0.3], ["C", 1, 1], ["V", 1, 1], ["B", 1], ["N", 1, 0.1], ["M", 1, 0.1], [",", 1], [".", 1]]);
  row(2, [["Caps", 1.75, 0, 1], ["A", 1, 0.3], ["S", 1, 0.4], ["D", 1, 0.2], ["F", 1, 0.1], ["G", 1], ["H", 1], ["J", 1], ["K", 1], ["L", 1]]);
  row(3, [["Tab", 1.5, 0.3, 1], ["Q", 1], ["W", 1, 0.1], ["E", 1, 0.2], ["R", 1, 0.1], ["T", 1], ["Y", 1], ["U", 1], ["I", 1], ["O", 1]]);
  row(4, [["Esc", 1, 0.1, 1], ["1", 1], ["2", 1], ["3", 1], ["4", 1], ["5", 1], ["6", 1], ["7", 1], ["8", 1], ["9", 1], ["0", 1]]);

  // fundo: centro de usinagem visto pelo vidro (plano voltado para a câmera)
  const THREEc = (cv) => { const t = new THREE.CanvasTexture(cv); t.colorSpace = THREE.SRGBColorSpace; return t; };
  bg = new THREE.Group(); S.add(bg);
  const bgMat = new THREE.MeshBasicMaterial({ map: THREEc(cncTexture(false)), fog: false });
  const bgMatSharp = new THREE.MeshBasicMaterial({ map: THREEc(cncTexture(true)), fog: false, transparent: true, opacity: 0 });
  const PW = 2.67, PH = 1.6;
  const back = new THREE.Mesh(new THREE.PlaneGeometry(12, 8), new THREE.MeshBasicMaterial({ color: 0x0f1012, fog: false })); back.position.z = -0.01; bg.add(back);
  const plane = new THREE.Mesh(new THREE.PlaneGeometry(PW, PH), bgMat); bg.add(plane);
  bgSharp = new THREE.Mesh(new THREE.PlaneGeometry(PW, PH), bgMatSharp); bgSharp.position.z = 0.002; bg.add(bgSharp);
  const tx = (px) => (px / 1024) * PW - PW / 2, ty = (py) => PH / 2 - (py / 614) * PH;
  beaconMat = new THREE.MeshBasicMaterial({ color: 0xffa020, fog: false });
  beacon = new THREE.Mesh(new THREE.SphereGeometry(0.022, 16, 12), beaconMat); beacon.position.set(tx(230 + 500 - 36), ty(150 - 95), 0.01); bg.add(beacon);
  winGlow = new THREE.Mesh(new THREE.PlaneGeometry(tx(250 + 470 - 164) - tx(304), (mh0 => mh0)(110 / 614 * PH)), new THREE.MeshBasicMaterial({ color: 0xdfe8ff, transparent: true, opacity: 0.12, fog: false, blending: THREE.AdditiveBlending }));
  winGlow.position.set((tx(292) + tx(548)) / 2, ty(285), 0.005); bg.add(winGlow);
  spindle = new THREE.Mesh(new THREE.PlaneGeometry(0.16, 0.21), new THREE.MeshBasicMaterial({ color: 0x2c3036, fog: false, transparent: true, opacity: 0.8 }));
  spindle.position.set(tx(420), ty(250), 0.006); bg.add(spindle);

  // poeira suspensa (congelamento e liberação)
  motes = new THREE.InstancedMesh(new THREE.SphereGeometry(1, 8, 6), new THREE.MeshBasicMaterial({ color: new THREE.Color(0xdfe4ec).multiplyScalar(1.15) }), 160);
  for (let i = 0; i < 160; i++) moteData.push({ x: -0.2 + Math.random() * 1.8, y: 0.12 + Math.random() * 0.5, z: -0.7 + Math.random() * 0.9, s: 0.0012 + Math.random() * 0.0022, vx: (Math.random() - 0.3) * 0.02, vy: (Math.random() - 0.6) * 0.012, ph: Math.random() * 6 });
  S.add(motes);
}

function placeBg(dist, lift = 0.8) {
  const cam = stage.camera, dir = new K.THREE.Vector3(); cam.getWorldDirection(dir);
  const up = new K.THREE.Vector3(0, 1, 0).applyQuaternion(cam.quaternion);
  bg.position.copy(cam.position).addScaledVector(dir, dist).addScaledVector(up, lift); bg.quaternion.copy(cam.quaternion);
}
function pressKey(k, down) { if (k) k.position.y = 0.04 - 0.032 * down; }
// curva de pressão: desce rápido, sobe com leve atraso
const press = (t, a, b) => (t < a || t > b + 0.08 ? 0 : t < a + 0.04 ? E.outCubic((t - a) / 0.04) : t < b ? 1 : 1 - E.outCubic((t - b) / 0.08));
function setMotes(t, mode) {
  const THREE = K.THREE, m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), p = new THREE.Vector3(), s = new THREE.Vector3();
  for (let i = 0; i < moteData.length; i++) {
    const d = moteData[i]; let x = d.x, y = d.y, z = d.z;
    if (mode === "drift") { const k = t - T.release; x += d.vx * k + Math.sin(k * 0.6 + d.ph) * 0.006; y += d.vy * k + Math.cos(k * 0.5 + d.ph) * 0.005; }
    p.set(x, y, z); s.setScalar(mode ? d.s : 0); m4.compose(p, q, s); motes.setMatrixAt(i, m4);
  }
  motes.instanceMatrix.needsUpdate = true;
}

export function render3d(t) {
  const THREE = K.THREE;
  const hook = t < T.desk, frz = t >= T.freeze3d && t < T.enter, rel = t >= T.release && t < T.sig;
  if (!hook && !frz && !rel) return false;
  const U = 0.19, Cx = 4.75 * U, Vx = 5.75 * U;
  const cam = stage.camera;
  let fp; // ponto de foco
  if (hook) {
    const cyc = t % KEYCYCLE, base = 0.1;
    pressKey(keys.Ctrl0, Math.max(press(cyc, base - 0.06, base + 0.3), press(cyc, base + 0.54, base + 0.9)));
    pressKey(keys.C1, press(cyc, base + 0.14, base + 0.24));
    pressKey(keys.V1, press(cyc, base + 0.74, base + 0.84));
    const k = seg(t, 0, T.desk);
    stage.look([lerp(0.86, 0.88, k), lerp(0.27, 0.25, k), lerp(0.68, 0.6, k)], [1.02, 0.07, -0.5], 30);
    placeBg(5.2, 0.62);
    const rf = E.inOutCubic(seg(t, 1.45, 2.05));
    fp = new THREE.Vector3(lerp(0.95, 0.9, rf), 0.1, lerp(-0.19, -2, rf));
    bokeh.uniforms.aperture.value = 0.03;
    bokeh.uniforms.maxblur.value = lerp(0.01, 0.018, rf);
    const dir = new THREE.Vector3(); cam.getWorldDirection(dir);
    const near = new THREE.Vector3(Cx, 0.1, -0.19).sub(cam.position).dot(dir);
    bokeh.uniforms.focus.value = lerp(near, 5.2, rf);
    beaconMat.color.setRGB(1, 0.62, 0.12).multiplyScalar(0.4 + 3.2 * Math.pow(Math.max(0, Math.sin(t * 6.5)), 6));
    spindle.position.x = -0.24 + Math.sin(t * 2.2) * 0.09; winGlow.material.opacity = 0.1 + 0.05 * Math.sin(t * 31);
    bgSharp.material.opacity = rf * 0.6; sun.intensity = 0; warm.intensity = 0;
    setMotes(t, null);
    stage.bloom.strength = 0.45;
    return true;
  }
  if (frz) {
    // tudo parado: Ctrl abaixado, V a meio curso; só a câmera anda
    pressKey(keys.Ctrl0, 1); pressKey(keys.C1, 0); pressKey(keys.V1, 0.55);
    const k = E.inOutCubic(seg(t, T.freeze3d, T.enter));
    stage.look([lerp(1.55, 1.42, k), lerp(0.2, 0.22, k), lerp(0.42, 0.36, k)], [lerp(1.0, 0.95, k), 0.07, -0.2], 30);
    placeBg(5.2, 0.62);
    const dir = new THREE.Vector3(); cam.getWorldDirection(dir);
    bokeh.uniforms.aperture.value = 0.03; bokeh.uniforms.maxblur.value = 0.014;
    bokeh.uniforms.focus.value = new THREE.Vector3(Vx, 0.1, -0.19).sub(cam.position).dot(dir);
    beaconMat.color.setRGB(1, 0.62, 0.12).multiplyScalar(1.6);
    spindle.position.x = -0.24 + Math.sin(T.freeze * 2.2) * 0.09; winGlow.material.opacity = 0.12;
    bgSharp.material.opacity = 0; sun.intensity = 2.2; warm.intensity = 0;
    setMotes(t, "still");
    stage.bloom.strength = 0.5;
    return true;
  }
  // liberação: teclas em repouso, foco vai para a máquina (farol verde), tempo volta a andar
  pressKey(keys.Ctrl0, 0); pressKey(keys.C1, 0); pressKey(keys.V1, 0);
  const k = seg(t, T.release, T.sig), e = E.inOutCubic(k);
  stage.look([lerp(0.3, 0.55, e), lerp(0.3, 0.42, e), lerp(0.5, 0.42, e)], [lerp(0.92, 1.0, e), lerp(0.07, 0.2, e), lerp(-0.18, -0.6, e)], 30);
  placeBg(5.2, 0.62);
  const dir = new THREE.Vector3(); cam.getWorldDirection(dir);
  const rf = E.inOutCubic(seg(t, 28.5, 29.6));
  const near = new THREE.Vector3(Cx, 0.1, -0.19).sub(cam.position).dot(dir);
  bokeh.uniforms.aperture.value = 0.03; bokeh.uniforms.maxblur.value = 0.014;
  bokeh.uniforms.focus.value = lerp(near, 3.6, rf);
  bgSharp.material.opacity = rf * 0.25;
  beaconMat.color.setRGB(0.25, 1, 0.55).multiplyScalar(1.4);
  spindle.position.x = -0.24 + Math.sin(t * 2.2) * 0.09; winGlow.material.opacity = 0.1 + 0.05 * Math.sin(t * 31);
  sun.intensity = 1.6; warm.intensity = 0.6;
  setMotes(t, "drift");
  stage.bloom.strength = 0.42;
  return true;
}

// ---------- 2D: utilidades ----------
const UI = { win: "#17181b", bar: "#1e1f23", panel: "#131417", line: "#2c2e33", line2: "#222428", ink: "#e6e8eb", mute: "#8e939b", dim: "#5e636b", acc: "#2282f0", soft: "#5aa2f5", amber: "#e3a33a", green: "#3fb27f" };
const MONO = (s, w = 500) => F.m(s, w);
const fitSize = (lines, size, maxW, fontFn = F.d, ls = 0) => { let s = size; for (const l of lines) { const w = measure(l, fontFn(s), ls); if (w > maxW) s = Math.min(s, Math.floor((s * maxW) / w)); } return s; };

function label(s, t, t0, t1) {
  const a = seg(t, t0, t0 + 0.3) * (1 - seg(t, t1 - 0.25, t1)); if (a <= 0) return;
  const n = Math.floor(clamp((t - t0) / 0.02, 0, s.length));
  const size = fitSize([s], 28, W - 168, (z) => MONO(z), 6);
  ctx.save(); ctx.globalAlpha = a;
  ctx.fillStyle = C.brand; ctx.fillRect(84, 316, 40 * E.outCubic(seg(t, t0, t0 + 0.5)), 3);
  txt(s.slice(0, n), 84, 296, { font: MONO(size), color: C.ink, align: "left", ls: 6 });
  ctx.restore();
}
function caption(s, t, t0, t1, y = 1560) {
  const a = seg(t, t0, t0 + 0.35) * (1 - seg(t, t1 - 0.3, t1)); if (a <= 0) return;
  const lines = Array.isArray(s) ? s : [s], size = fitSize(lines, 40, W - 140, (z) => F.b(z, 500));
  const y0 = y - (lines.length - 1) * 26;
  ctx.save(); ctx.shadowColor = "rgba(0,0,0,0.85)"; ctx.shadowBlur = 18;
  lines.forEach((l, i) => txt(l, W / 2, y0 + i * 54, { font: F.b(size, 500), color: C.ink, alpha: a }));
  ctx.restore();
}
function bigTitle(lines, y, t, t0, t1, size = 104, o = {}) {
  const s = fitSize(lines, size, W - 150);
  title(lines, W / 2, y, t, t0, t1, { font: F.d(s), color: C.ink, lh: s * 0.98, ...o });
  // linha de cota azul (assinatura gráfica do site)
  const a = E.outCubic(seg(t, t0 + 0.2, t0 + 0.7)) * (1 - seg(t, t1 - 0.25, t1));
  if (a > 0 && o.rule !== false) { const yy = y + (lines.length - 1) * s * 0.98 + 34; ctx.fillStyle = `rgba(34,130,240,${a})`; ctx.fillRect(W / 2 - 120 * a, yy, 240 * a, 3); ctx.fillRect(W / 2 - 120 * a, yy - 8, 2, 19); ctx.fillRect(W / 2 + 120 * a - 2, yy - 8, 2, 19); }
}
function corners(a = 0.5, rect) {
  if (a <= 0) return;
  ctx.save(); ctx.strokeStyle = `rgba(238,242,247,${a})`; ctx.lineWidth = 2; const m = 48, L = 36;
  for (const [x, y, sx, sy] of [[m, 120, 1, 1], [W - m, 120, -1, 1], [m, H - 120, 1, -1], [W - m, H - 120, -1, -1]]) { ctx.beginPath(); ctx.moveTo(x, y + sy * L); ctx.lineTo(x, y); ctx.lineTo(x + sx * L, y); ctx.stroke(); }
  ctx.restore();
}
function desat(a) { if (a <= 0) return; ctx.save(); ctx.globalCompositeOperation = "saturation"; ctx.fillStyle = `rgba(128,128,128,${clamp(a)})`; ctx.fillRect(0, 0, W, H); ctx.restore(); }
function dark(a) { if (a <= 0) return; ctx.fillStyle = `rgba(0,0,0,${a})`; ctx.fillRect(0, 0, W, H); }
function pointer(x, y, sc = 1, a = 1) {
  ctx.save(); ctx.globalAlpha *= a; ctx.translate(x, y); ctx.scale(sc, sc);
  ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(0, 22); ctx.lineTo(5.5, 17); ctx.lineTo(9.5, 26); ctx.lineTo(13, 24.5); ctx.lineTo(9, 16); ctx.lineTo(16, 16); ctx.closePath();
  ctx.shadowColor = "rgba(0,0,0,0.5)"; ctx.shadowBlur = 6; ctx.shadowOffsetY = 2;
  ctx.fillStyle = "#f4f5f7"; ctx.fill(); ctx.shadowColor = "transparent"; ctx.strokeStyle = "#111"; ctx.lineWidth = 1.3; ctx.stroke();
  ctx.restore();
}
function keyHint(keysArr, x, y, a) {
  if (a <= 0) return;
  ctx.save(); ctx.globalAlpha = a; ctx.font = MONO(30, 500);
  const ws = keysArr.map((k) => (k === "+" ? 30 : ctx.measureText(k).width + 44));
  let xx = x - ws.reduce((s, w) => s + w + 12, -12) / 2;
  keysArr.forEach((k, i) => {
    if (k === "+") { txt("+", xx + 15, y + 10, { font: MONO(30), color: UI.mute }); }
    else { rrect(xx, y - 34, ws[i], 64, 10); ctx.fillStyle = "rgba(30,31,35,0.92)"; ctx.fill(); ctx.strokeStyle = "rgba(255,255,255,0.22)"; ctx.lineWidth = 1.5; ctx.stroke(); ctx.fillStyle = "rgba(255,255,255,0.06)"; ctx.fillRect(xx + 2, y + 22, ws[i] - 4, 6); txt(k, xx + ws[i] / 2, y + 10, { font: MONO(30), color: UI.ink }); }
    xx += ws[i] + 12;
  });
  ctx.restore();
}
function scrim(y0, a = 0.75) { const g = ctx.createLinearGradient(0, y0, 0, H); g.addColorStop(0, "rgba(8,9,11,0)"); g.addColorStop(0.35, `rgba(8,9,11,${a})`); g.addColorStop(1, `rgba(8,9,11,${a})`); ctx.fillStyle = g; ctx.fillRect(0, y0, W, H - y0); }
function room(t, glow = 1) {
  // parede escura do escritório + luz fria do monitor
  ctx.fillStyle = "#0b0c0e"; ctx.fillRect(0, 0, W, H);
  const g = ctx.createRadialGradient(W / 2, 900, 50, W / 2, 900, 900); g.addColorStop(0, `rgba(150,170,200,${0.10 * glow})`); g.addColorStop(1, "rgba(150,170,200,0)");
  ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
}
function screenSheen() {
  // reflexo leve da sala sobre a tela (parece filmado, não colado)
  ctx.save(); ctx.globalAlpha = 0.05; ctx.translate(W * 0.7, 0); ctx.rotate(0.32);
  const g = ctx.createLinearGradient(0, 0, 260, 0); g.addColorStop(0, "rgba(255,255,255,0)"); g.addColorStop(0.5, "rgba(255,255,255,1)"); g.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = g; ctx.fillRect(0, -200, 260, H * 1.5); ctx.restore();
}

// ---------- 2D: desktop com PDF (esquerda) e planilha (direita), coordenadas virtuais 1600×1000 ----------
const CODE_OK = "FL-1045-120-B", CODE_BAD = "FL-1054-120-B";
function drawingPage(X, L, U2) {
  const px = 25, py = 238, pw = 740, ph = 523;
  ctx.save();
  ctx.shadowColor = "rgba(0,0,0,0.5)"; ctx.shadowBlur = 18; ctx.fillStyle = "#e9eaec"; ctx.fillRect(px, py, pw, ph); ctx.shadowColor = "transparent";
  const ink = "#202226", thin = "rgba(32,34,38,0.75)";
  ctx.strokeStyle = ink; ctx.lineWidth = 1.6; ctx.strokeRect(px + 10, py + 10, pw - 20, ph - 20);
  // zonas de margem
  ctx.fillStyle = thin; ctx.font = MONO(8); ctx.textAlign = "center";
  for (let i = 0; i < 8; i++) { ctx.fillText(String(i + 1), px + 10 + (i + 0.5) * (pw - 20) / 8, py + 8); }
  const tf = (s, x, y, o = {}) => txt(s, x, y, { font: MONO(o.size || 11, o.w || 500), color: o.color || ink, align: o.align || "center" });
  const arrow = (x, y, ang) => { ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + Math.cos(ang + 0.32) * 7, y + Math.sin(ang + 0.32) * 7); ctx.lineTo(x + Math.cos(ang - 0.32) * 7, y + Math.sin(ang - 0.32) * 7); ctx.fill(); };
  const dimH = (x1, x2, y, s, ty) => { ctx.strokeStyle = ink; ctx.fillStyle = ink; ctx.lineWidth = 0.9; ctx.beginPath(); ctx.moveTo(x1, y); ctx.lineTo(x2, y); ctx.stroke(); arrow(x1, y, 0); arrow(x2, y, Math.PI); tf(s, (x1 + x2) / 2, ty ?? y - 4); };
  const dimV = (x, y1, y2, s) => { ctx.strokeStyle = ink; ctx.fillStyle = ink; ctx.lineWidth = 0.9; ctx.beginPath(); ctx.moveTo(x, y1); ctx.lineTo(x, y2); ctx.stroke(); arrow(x, y1, Math.PI / 2); arrow(x, y2, -Math.PI / 2); ctx.save(); ctx.translate(x - 4, (y1 + y2) / 2); ctx.rotate(-Math.PI / 2); tf(s, 0, 0); ctx.restore(); };
  // vista frontal (2 px/mm)
  const cx = 200, cy = 480;
  ctx.strokeStyle = ink; ctx.lineWidth = 1.8;
  ctx.beginPath(); ctx.arc(cx, cy, 120, 0, 7); ctx.stroke();
  ctx.beginPath(); ctx.arc(cx, cy, 118, 0, 7); ctx.lineWidth = 0.6; ctx.stroke(); // chanfro
  ctx.lineWidth = 1.8; ctx.beginPath(); ctx.arc(cx, cy, 60, 0, 7); ctx.stroke();
  ctx.beginPath(); ctx.arc(cx, cy, 40, 0, 7); ctx.stroke();
  ctx.lineWidth = 0.7; ctx.setLineDash([14, 3, 3, 3]); ctx.strokeStyle = thin;
  ctx.beginPath(); ctx.arc(cx, cy, 90, 0, 7); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(cx - 140, cy); ctx.lineTo(cx + 140, cy); ctx.moveTo(cx, cy - 140); ctx.lineTo(cx, cy + 140); ctx.stroke(); ctx.setLineDash([]);
  ctx.strokeStyle = ink;
  for (let i = 0; i < 6; i++) { const a = (i / 6) * Math.PI * 2 + Math.PI / 6, hx = cx + Math.cos(a) * 90, hy = cy + Math.sin(a) * 90; ctx.lineWidth = 1.5; ctx.beginPath(); ctx.arc(hx, hy, 11, 0, 7); ctx.stroke(); ctx.lineWidth = 1; ctx.beginPath(); ctx.arc(hx, hy, 18, 0, 7); ctx.stroke(); }
  dimH(cx - 120, cx + 120, py + 52, "Ø120 h9");
  ctx.strokeStyle = thin; ctx.lineWidth = 0.6; ctx.beginPath(); ctx.moveTo(cx - 120, cy); ctx.lineTo(cx - 120, py + 46); ctx.moveTo(cx + 120, cy); ctx.lineTo(cx + 120, py + 46); ctx.stroke();
  // leaders
  const lead = (x0, y0, x1, y1, s, al = "left") => { ctx.strokeStyle = ink; ctx.fillStyle = ink; ctx.lineWidth = 0.8; ctx.beginPath(); ctx.moveTo(x0, y0); ctx.lineTo(x1, y1); ctx.lineTo(x1 + (al === "left" ? 8 : -8), y1); ctx.stroke(); arrow(x0, y0, Math.atan2(y1 - y0, x1 - x0)); tf(s, x1 + (al === "left" ? 12 : -12), y1 + 4, { align: al }); };
  lead(cx + 28, cy - 28, cx + 150, cy - 150, "Ø40 H7");
  lead(cx + Math.cos(Math.PI / 6) * 90 + 9, cy + Math.sin(Math.PI / 6) * 90 + 7, cx + 140, cy + 158, `6× Ø11 ⌴ Ø18 ↧ 6`);
  lead(cx - Math.cos(Math.PI / 4) * 90, cy - Math.sin(Math.PI / 4) * 90, cx - 150, cy - 150, "PCD Ø90", "right");
  // corte A-A
  const sx = 470, s0 = cy;
  const poly = (pts) => { ctx.beginPath(); pts.forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y))); ctx.closePath(); };
  const half = (sg) => {
    const P = [[sx, s0 + sg * 40], [sx, s0 + sg * 120], [sx + 40, s0 + sg * 120], [sx + 40, s0 + sg * 60], [sx + 70, s0 + sg * 60], [sx + 70, s0 + sg * 40]];
    poly(P); ctx.save(); ctx.clip(); ctx.strokeStyle = "rgba(32,34,38,0.55)"; ctx.lineWidth = 0.7; for (let i = -200; i < 300; i += 7) { ctx.beginPath(); ctx.moveTo(sx + i, s0 + 140); ctx.lineTo(sx + i + 280, s0 - 140); ctx.stroke(); } ctx.restore();
    // furo com rebaixo no corte
    ctx.fillStyle = "#e9eaec"; ctx.fillRect(sx, s0 + sg * 90 - 11, 40, 22); ctx.fillRect(sx, s0 + sg * 90 - 18, 12, 36);
    ctx.strokeStyle = ink; ctx.lineWidth = 1.6; poly(P); ctx.stroke();
    ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(sx + 12, s0 + sg * 90 - 11); ctx.lineTo(sx + 40, s0 + sg * 90 - 11); ctx.moveTo(sx + 12, s0 + sg * 90 + 11); ctx.lineTo(sx + 40, s0 + sg * 90 + 11); ctx.moveTo(sx, s0 + sg * 90 - 18); ctx.lineTo(sx + 12, s0 + sg * 90 - 18); ctx.lineTo(sx + 12, s0 + sg * 90 + 18); ctx.lineTo(sx, s0 + sg * 90 + 18); ctx.stroke();
  };
  half(-1); half(1);
  ctx.strokeStyle = ink; ctx.lineWidth = 1.2; ctx.beginPath(); ctx.moveTo(sx, s0 - 40); ctx.lineTo(sx + 70, s0 - 40); ctx.moveTo(sx, s0 + 40); ctx.lineTo(sx + 70, s0 + 40); ctx.stroke();
  ctx.setLineDash([14, 3, 3, 3]); ctx.strokeStyle = thin; ctx.lineWidth = 0.7; ctx.beginPath(); ctx.moveTo(sx - 20, s0); ctx.lineTo(sx + 90, s0); ctx.stroke(); ctx.setLineDash([]);
  tf("A-A", sx + 35, s0 + 160, { size: 13, w: 500 });
  dimH(sx, sx + 40, s0 - 132, "20");
  dimH(sx, sx + 70, s0 - 152, "35");
  dimV(sx + 92, s0 - 60, s0 + 60, "Ø60");
  tf("1×45°", sx + 112, s0 + 128, { size: 10, align: "left" });
  // rugosidade
  ctx.strokeStyle = ink; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(sx + 100, s0 - 30); ctx.lineTo(sx + 106, s0 - 20); ctx.lineTo(sx + 116, s0 - 42); ctx.stroke(); tf("Ra 1" + L.dec + "6", sx + 120, s0 - 30, { size: 10, align: "left" });
  // tolerâncias gerais
  tf("ISO 2768-mK", px + 30, py + ph - 22, { size: 10, align: "left" });
  // carimbo
  const bx = 495, by = 648, bw = 257, bh = 103;
  ctx.fillStyle = "#e9eaec"; ctx.fillRect(bx, by, bw, bh);
  ctx.strokeStyle = ink; ctx.lineWidth = 1.4; ctx.strokeRect(bx, by, bw, bh);
  ctx.lineWidth = 0.8; ctx.beginPath(); [by + 26, by + 58, by + 80].forEach((y) => { ctx.moveTo(bx, y); ctx.lineTo(bx + bw, y); }); ctx.moveTo(bx + 140, by + 58); ctx.lineTo(bx + 140, by + bh); ctx.stroke();
  tf(U2.part, bx + 8, by + 18, { size: 10, align: "left" });
  tf("Nº", bx + 8, by + 36, { size: 7, align: "left", color: thin });
  tf(CODE_OK, bx + 8, by + 51, { size: 16, w: 500, align: "left" });
  tf("REV. B", bx + bw - 8, by + 51, { size: 11, align: "right" });
  tf("AISI 1045", bx + 8, by + 73, { size: 10, align: "left" }); tf(U2.scale + " · mm", bx + 148, by + 73, { size: 10, align: "left" });
  tf("A3 · 1/1", bx + 8, by + 96, { size: 10, align: "left" }); tf("07/10/2026", bx + 148, by + 96, { size: 10, align: "left" });
  ctx.restore();
}
function sheet(t, L, U2, typed, sel) {
  const x0 = 800;
  ctx.fillStyle = "#16171a"; ctx.fillRect(x0, 36, 800, 964);
  // barra de ferramentas
  ctx.fillStyle = UI.bar; ctx.fillRect(x0, 36, 800, 40);
  txt(U2.sheetTitle, x0 + 16, 61, { font: MONO(12), color: UI.mute, align: "left" });
  for (let i = 0; i < 7; i++) { ctx.strokeStyle = "rgba(255,255,255,0.18)"; ctx.lineWidth = 1; rrect(x0 + 300 + i * 30, 46, 20, 20, 4); ctx.stroke(); }
  // barra de fórmula
  ctx.fillStyle = "#1a1b1e"; ctx.fillRect(x0, 76, 800, 36); ctx.strokeStyle = UI.line; ctx.beginPath(); ctx.moveTo(x0, 112.5); ctx.lineTo(x0 + 800, 112.5); ctx.stroke();
  rrect(x0 + 8, 82, 56, 24, 4); ctx.fillStyle = "#101113"; ctx.fill();
  txt(sel.name, x0 + 36, 99, { font: MONO(12), color: UI.ink });
  txt("fx", x0 + 82, 99, { font: "italic 500 13px Inter", color: UI.mute });
  txt(sel.val, x0 + 104, 99, { font: MONO(12), color: UI.ink, align: "left" });
  // cabeçalho de colunas
  const cols = [[840, 50], [890, 190], [1080, 260], [1340, 60], [1400, 100], [1500, 100]];
  ctx.fillStyle = "#1c1d21"; ctx.fillRect(x0, 112, 800, 28); ctx.fillRect(x0, 112, 40, 888);
  "ABCDEF".split("").forEach((c, i) => txt(c, cols[i][0] + cols[i][1] / 2, 131, { font: F.b(12, 500), color: sel.col === i ? UI.ink : UI.mute }));
  ctx.strokeStyle = UI.line2; ctx.lineWidth = 1; ctx.beginPath();
  for (const [x] of cols) { ctx.moveTo(x + 0.5, 112); ctx.lineTo(x + 0.5, 1000); }
  for (let r = 0; r <= 25; r++) { const y = 140 + r * 34; ctx.moveTo(x0, y + 0.5); ctx.lineTo(x0 + 800, y + 0.5); }
  ctx.stroke();
  for (let r = 1; r <= 25; r++) txt(String(r), 820, 140 + (r - 1) * 34 + 22, { font: F.b(11, 500), color: sel.row === r ? UI.ink : UI.dim });
  const cell = (ci, r, s, o = {}) => txt(s, cols[ci][0] + 8, 140 + (r - 1) * 34 + 22, { font: o.font || F.b(13, o.w || 400), color: o.color || "#cfd2d7", align: "left" });
  U2.heads.forEach((h, i) => cell(i, 1, h, { w: 600, color: UI.ink }));
  ctx.fillStyle = "rgba(255,255,255,0.03)"; ctx.fillRect(x0 + 40, 140, 760, 34);
  U2.rows.forEach((row, ri) => row.forEach((v, ci) => cell(ci, ri + 2, v, { font: ci === 1 ? MONO(12.5) : F.b(13, 400) })));
  // linha 7
  cell(0, 7, "6"); cell(1, 7, typed.code, { font: MONO(12.5) });
  if (typed.desc) cell(2, 7, U2.desc); if (typed.qty) cell(3, 7, "40"); if (typed.mat) { cell(4, 7, "AISI 1045"); cell(5, 7, U2.days); }
  // caret
  if (typed.caret && Math.floor(t * 3) % 2 === 0) { ctx.font = MONO(12.5); const w = ctx.measureText(typed.code).width; ctx.fillStyle = UI.ink; ctx.fillRect(cols[1][0] + 9 + w, 140 + 6 * 34 + 9, 1.5, 17); }
  // seleção
  if (sel.row) { const c = cols[sel.col], y = 140 + (sel.row - 1) * 34; ctx.strokeStyle = "#d9dde3"; ctx.lineWidth = 2; ctx.strokeRect(c[0] + 1, y + 1, c[1] - 2, 32); ctx.fillStyle = "#d9dde3"; ctx.fillRect(c[0] + c[1] - 4, y + 30, 6, 6); }
  // abas
  ctx.fillStyle = UI.bar; ctx.fillRect(x0, 964, 800, 36); rrect(x0 + 50, 968, 110, 28, 4); ctx.fillStyle = "#2a2c31"; ctx.fill(); txt("2026-10", x0 + 105, 987, { font: MONO(12), color: UI.ink });
  txt("Q3", x0 + 200, 987, { font: MONO(12), color: UI.dim });
}
function desktop(t, L, U2) {
  // estados do fluxo manual
  const nType = Math.floor(clamp((t - 5.65) / 0.075, 0, CODE_BAD.length));
  const typed = { code: CODE_BAD.slice(0, nType), caret: t > 5.58 && t < 6.7, desc: t > 6.66, qty: t > 6.74, mat: t > 6.82 };
  const sel = t < 5.56 ? { name: "B6", col: 1, row: 6, val: "CP-0450-B" } : t < 6.7 ? { name: "B7", col: 1, row: 7, val: typed.code } : { name: "D7", col: 3, row: 7, val: "40" };
  // janela
  ctx.save(); ctx.shadowColor = "rgba(0,0,0,0.7)"; ctx.shadowBlur = 50; rrect(0, 0, 1600, 1000, 12); ctx.fillStyle = UI.win; ctx.fill(); ctx.restore();
  ctx.save(); rrect(0, 0, 1600, 1000, 12); ctx.clip();
  ctx.fillStyle = UI.bar; ctx.fillRect(0, 0, 1600, 36);
  [0, 1, 2].forEach((i) => { ctx.fillStyle = "#3a3c41"; ctx.beginPath(); ctx.arc(20 + i * 20, 18, 6, 0, 7); ctx.fill(); });
  txt(U2.pdfTitle, 395, 23, { font: MONO(12), color: UI.mute });
  txt("17:31", 1570, 23, { font: MONO(12), color: UI.mute, align: "right" });
  // visualizador de PDF
  ctx.fillStyle = "#25272b"; ctx.fillRect(0, 36, 790, 964);
  ctx.fillStyle = UI.bar; ctx.fillRect(0, 36, 790, 40);
  for (let i = 0; i < 5; i++) { ctx.strokeStyle = "rgba(255,255,255,0.18)"; rrect(14 + i * 30, 46, 20, 20, 4); ctx.stroke(); }
  txt("1 / 1", 395, 61, { font: MONO(12), color: UI.mute }); txt("100%", 770, 61, { font: MONO(12), color: UI.mute, align: "right" });
  drawingPage(0, L, U2);
  // seleção de texto no carimbo
  const sp = E.outCubic(seg(t, 4.3, 4.7));
  if (sp > 0 && t < 5.6) { ctx.font = MONO(16); const w = ctx.measureText(CODE_OK).width; ctx.fillStyle = "rgba(120,140,170,0.38)"; ctx.fillRect(501, 685, (w + 6) * sp, 20); }
  ctx.fillStyle = "#0c0d0f"; ctx.fillRect(790, 36, 10, 964);
  sheet(t, L, U2, typed, sel);
  ctx.restore();
  // cursor
  const cp = keyframes(t, [{ t: 3.2, x: 1180, y: 760 }, { t: 3.9, x: 700, y: 760 }, { t: 4.28, x: 500, y: 692 }, { t: 4.7, x: 640, y: 694 }, { t: 5.0, x: 650, y: 700 }, { t: 5.5, x: 975, y: 362 }, { t: 7.0, x: 978, y: 364 }]);
  pointer(cp.x, cp.y, 1.1);
}
function deskShot(t, L, U2) {
  room(t);
  const cam = keyframes(t, [{ t: 3.2, x: 800, y: 500, s: 0.6 }, { t: 3.85, x: 790, y: 510, s: 0.64 }, { t: 4.3, x: 600, y: 690, s: 1.55 }, { t: 4.95, x: 612, y: 694, s: 1.62 }, { t: 5.5, x: 985, y: 372, s: 1.55 }, { t: 7.0, x: 995, y: 372, s: 1.68 }]);
  const hx = Math.sin(t * 1.7) * 3 + Math.sin(t * 3.1) * 1.5, hy = Math.cos(t * 1.3) * 3;
  ctx.save(); ctx.translate(W / 2 + hx, 900 + hy); ctx.rotate(Math.sin(t * 0.9) * 0.004); ctx.scale(cam.s, cam.s); ctx.translate(-cam.x, -cam.y);
  desktop(t, L, U2);
  ctx.restore();
  screenSheen();
  // dica de atalho Ctrl + C
  keyHint(["Ctrl", "+", "C"], W / 2, 1400, seg(t, 4.72, 4.85) * (1 - seg(t, 5.25, 5.4)));
}

// ---------- 2D: relógio de parede ----------
function wallClock(cx, cy, R, secs, o = {}) {
  ctx.save();
  // aro metálico
  let g = ctx.createLinearGradient(cx - R, cy - R, cx + R, cy + R); g.addColorStop(0, "#c9ced4"); g.addColorStop(0.5, "#6d7279"); g.addColorStop(1, "#b2b7bd");
  ctx.shadowColor = "rgba(0,0,0,0.6)"; ctx.shadowBlur = R * 0.15; ctx.shadowOffsetY = R * 0.04;
  ctx.beginPath(); ctx.arc(cx, cy, R, 0, 7); ctx.fillStyle = g; ctx.fill(); ctx.shadowColor = "transparent";
  g = ctx.createRadialGradient(cx - R * 0.2, cy - R * 0.3, R * 0.1, cx, cy, R * 0.92); g.addColorStop(0, o.face || "#eceae4"); g.addColorStop(1, o.face2 || "#bdbbb4");
  ctx.beginPath(); ctx.arc(cx, cy, R * 0.9, 0, 7); ctx.fillStyle = g; ctx.fill();
  for (let i = 0; i < 60; i++) { const a = (i / 60) * Math.PI * 2, r1 = R * (i % 5 ? 0.83 : 0.77), r2 = R * 0.86; ctx.strokeStyle = "#1c1d20"; ctx.lineWidth = i % 5 ? R * 0.008 : R * 0.022; ctx.beginPath(); ctx.moveTo(cx + Math.sin(a) * r1, cy - Math.cos(a) * r1); ctx.lineTo(cx + Math.sin(a) * r2, cy - Math.cos(a) * r2); ctx.stroke(); }
  if (R > 120) for (let i = 1; i <= 12; i++) { const a = (i / 12) * Math.PI * 2; txt(String(i), cx + Math.sin(a) * R * 0.64, cy - Math.cos(a) * R * 0.64 + R * 0.055, { font: F.b(Math.round(R * 0.15), 500), color: "#1c1d20" }); }
  const hand = (ang, len, wd, col, tail = 0) => { ctx.save(); ctx.translate(cx, cy); ctx.rotate(ang); ctx.fillStyle = col; ctx.shadowColor = "rgba(0,0,0,0.3)"; ctx.shadowBlur = R * 0.02; ctx.shadowOffsetY = R * 0.012; ctx.beginPath(); ctx.moveTo(-wd / 2, tail * R); ctx.lineTo(-wd * 0.35, -len * R); ctx.lineTo(wd * 0.35, -len * R); ctx.lineTo(wd / 2, tail * R); ctx.closePath(); ctx.fill(); ctx.restore(); };
  const s = Math.floor(secs), sm = secs / 60, hm = secs / 3600;
  hand((hm / 12) * Math.PI * 2, 0.45, R * 0.06, "#1c1d20", 0.1);
  hand((sm / 60) * Math.PI * 2, 0.7, R * 0.04, "#1c1d20", 0.12);
  const sa = ((o.smooth ? secs : s) / 60) * Math.PI * 2;
  hand(sa, 0.78, R * 0.014, o.red || "#cf3a2c", 0.22);
  ctx.beginPath(); ctx.arc(cx, cy, R * 0.035, 0, 7); ctx.fillStyle = o.red || "#cf3a2c"; ctx.fill();
  // vidro
  g = ctx.createLinearGradient(cx - R, cy - R, cx + R * 0.3, cy + R * 0.3); g.addColorStop(0, "rgba(255,255,255,0.16)"); g.addColorStop(0.5, "rgba(255,255,255,0)");
  ctx.beginPath(); ctx.arc(cx, cy, R * 0.9, 0, 7); ctx.fillStyle = g; ctx.fill();
  ctx.restore();
}
const clockSecs = (t) => {
  // 17:31:40 → 17:48:00 com aceleração exponencial (o tempo escorre)
  const base = 17 * 3600 + 31 * 60 + 40;
  if (t < T.clock) return base;
  const k = Math.min(t, T.freeze) - T.clock;
  return base + 6.38 * (Math.exp(0.9 * k) - 1);
};
function clockShot(t) {
  ctx.fillStyle = "#121315"; ctx.fillRect(0, 0, W, H);
  const g = ctx.createRadialGradient(W / 2, 880, 100, W / 2, 880, 1000); g.addColorStop(0, "rgba(200,205,215,0.10)"); g.addColorStop(1, "rgba(0,0,0,0)"); ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
  const k = seg(t, T.clock, T.mail), sc = 1 + k * 0.06;
  ctx.save(); ctx.translate(W / 2, 900); ctx.scale(sc, sc); ctx.translate(-W / 2, -900);
  wallClock(W / 2, 900, 380, clockSecs(t));
  ctx.restore();
  const secs = clockSecs(t), hh = Math.floor(secs / 3600), mm = Math.floor((secs % 3600) / 60), ss = Math.floor(secs % 60);
  txt(`${hh}:${String(mm).padStart(2, "0")}:${String(ss).padStart(2, "0")}`, W / 2, 1420, { font: MONO(34), color: "rgba(238,242,247,0.75)", ls: 6, alpha: seg(t, T.clock + 0.2, T.clock + 0.5) });
}
function miniClock(t, a) {
  if (a <= 0) return;
  ctx.save(); ctx.globalAlpha = a; wallClock(948, 300, 74, clockSecs(t), { smooth: clockSecs(t) - clockSecs(t - 1 / 24) > 1.5 }); ctx.restore();
}

// ---------- 2D: cliente de e-mail ----------
const MAILT = [8.75, 9.35, 9.8, 10.15, 10.42, 10.64];
function mailShot(t, L, U2) {
  room(t, 0.8);
  const k = seg(t, T.mail, T.quote), sc = 1 + k * 0.05;
  ctx.save(); ctx.translate(W / 2 + Math.sin(t * 9) * 2 * k, 820); ctx.scale(sc, sc); ctx.translate(-W / 2, -820);
  const x0 = 60, y0 = 410, w = 960, h = 860;
  ctx.save(); ctx.shadowColor = "rgba(0,0,0,0.7)"; ctx.shadowBlur = 50; rrect(x0, y0, w, h, 14); ctx.fillStyle = UI.win; ctx.fill(); ctx.restore();
  ctx.save(); rrect(x0, y0, w, h, 14); ctx.clip();
  ctx.fillStyle = UI.bar; ctx.fillRect(x0, y0, w, 112);
  const n = MAILT.filter((m) => t >= m).length;
  txt(U2.inbox, x0 + 36, y0 + 52, { font: F.b(34, 600), color: UI.ink, align: "left" });
  const unread = 9 + n, bw2 = measure(U2.inbox, F.b(34, 600));
  rrect(x0 + 50 + bw2, y0 + 24, 62, 38, 19); ctx.fillStyle = "#e6e8eb"; ctx.fill(); txt(String(unread), x0 + 81 + bw2, y0 + 52, { font: F.b(24, 700), color: "#111" });
  rrect(x0 + 36, y0 + 70, w - 72, 30, 8); ctx.fillStyle = "#121316"; ctx.fill(); txt(U2.search, x0 + 56, y0 + 91, { font: F.b(17, 400), color: UI.dim, align: "left" });
  // lista
  const rowH = 118;
  const items = [];
  for (let i = n - 1; i >= 0; i--) items.push({ m: U2.mails[i], unread: true, t0: MAILT[i] });
  U2.old.forEach((m) => items.push({ m, unread: false, t0: -1 }));
  // deslocamento animado: novos entram por cima empurrando
  let yOff = 0; if (n > 0) { const p = E.outCubic(seg(t, MAILT[n - 1], MAILT[n - 1] + 0.18)); yOff = -rowH * (1 - p); }
  items.forEach((it, i) => {
    const y = y0 + 112 + i * rowH + yOff + (i === 0 ? 0 : 0);
    if (y > y0 + h) return;
    const fresh = it.t0 > 0 ? seg(t, it.t0, it.t0 + 0.6) : 1;
    ctx.fillStyle = it.unread ? `rgba(255,255,255,${0.035 + (1 - fresh) * 0.08})` : "rgba(0,0,0,0)"; ctx.fillRect(x0, y, w, rowH);
    ctx.strokeStyle = UI.line2; ctx.beginPath(); ctx.moveTo(x0, y + rowH - 0.5); ctx.lineTo(x0 + w, y + rowH - 0.5); ctx.stroke();
    const [from, subj] = it.m, ini = from.split(/[\s—]+/).filter(Boolean).slice(0, 2).map((s) => s[0]).join("").toUpperCase();
    ctx.beginPath(); ctx.arc(x0 + 70, y + rowH / 2, 30, 0, 7); ctx.fillStyle = "#2b2d32"; ctx.fill(); txt(ini, x0 + 70, y + rowH / 2 + 8, { font: F.b(20, 600), color: UI.mute });
    if (it.unread) { ctx.beginPath(); ctx.arc(x0 + 22, y + rowH / 2, 6, 0, 7); ctx.fillStyle = "#d9dde3"; ctx.fill(); }
    txt(from, x0 + 122, y + 48, { font: F.b(26, it.unread ? 650 : 500), color: it.unread ? UI.ink : UI.mute, align: "left" });
    txt(it.t0 > 0 ? U2.now : "16:" + (52 - i * 7), x0 + w - 32, y + 48, { font: MONO(18), color: UI.dim, align: "right" });
    let s = subj; ctx.font = F.b(23, 400); while (ctx.measureText(s).width > w - 170 && s.length > 4) s = s.slice(0, -2); if (s !== subj) s = s.trimEnd() + "…";
    txt(s, x0 + 122, y + 86, { font: F.b(23, 400), color: it.unread ? "#c4c8ce" : UI.dim, align: "left" });
  });
  ctx.restore();
  ctx.restore();
  screenSheen();
  miniClock(t, seg(t, T.mail, T.mail + 0.3));
  // COPIAR. COLAR. CONFERIR. REPETIR.
  scrim(1250, 0.85);
  const words = L.rep, at = [8.95, 9.4, 9.85, 10.3];
  const size = fitSize([words[0] + " " + words[1], words[2] + " " + words[3]], 118, W - 140);
  const lineW = (a, b) => measure(a + " " + b, F.d(size));
  [[0, 1], [2, 3]].forEach(([a, b], li) => {
    const y = 1420 + li * size * 0.95, lw = lineW(words[a], words[b]);
    let x = W / 2 - lw / 2;
    [a, b].forEach((wi) => {
      const p = seg(t, at[wi], at[wi] + 0.18), out = seg(t, T.quote - 0.25, T.quote);
      if (p > 0) { const e = E.outCubic(p); ctx.save(); ctx.globalAlpha = p * (1 - out); if (p < 1) ctx.filter = `blur(${((1 - e) * 8).toFixed(1)}px)`; txt(words[wi], x, y + (1 - e) * 20, { font: F.d(size), color: wi === 3 ? "#ffffff" : C.ink, align: "left" }); ctx.restore(); }
      x += measure(words[wi] + " ", F.d(size));
    });
  });
}

// ---------- 2D: orçamento manual (o erro entra) ----------
function quoteForm(t, L, U2, frozen, noise = 1) {
  const tf = frozen ? Math.min(t, T.freeze) : t;
  const x0 = 70, y0 = 430, w = 940, h = 820;
  ctx.save(); ctx.shadowColor = "rgba(0,0,0,0.7)"; ctx.shadowBlur = 50; rrect(x0, y0, w, h, 14); ctx.fillStyle = UI.win; ctx.fill(); ctx.restore();
  ctx.save(); rrect(x0, y0, w, h, 14); ctx.clip();
  ctx.fillStyle = UI.bar; ctx.fillRect(x0, y0, w, 70);
  [0, 1, 2].forEach((i) => { ctx.fillStyle = "#3a3c41"; ctx.beginPath(); ctx.arc(x0 + 30 + i * 22, y0 + 35, 7, 0, 7); ctx.fill(); });
  txt(U2.qTitle, x0 + w / 2 + 30, y0 + 44, { font: F.b(24, 600), color: UI.ink });
  const nType = Math.floor(clamp((tf - 11.15) / 0.046, 0, CODE_BAD.length));
  const field = (lab, val, x, y, fw, o = {}) => {
    txt(lab, x, y, { font: F.b(19, 500), color: UI.mute, align: "left" });
    rrect(x, y + 14, fw, 62, 8); ctx.fillStyle = "#101114"; ctx.fill(); ctx.strokeStyle = o.focus ? "#d9dde3" : UI.line; ctx.lineWidth = o.focus ? 2 : 1.2; ctx.stroke();
    if (val) txt(val, x + 18, y + 55, { font: o.mono ? MONO(26) : F.b(25, 400), color: UI.ink, align: "left" });
    if (o.caret && Math.floor(t * 3) % 2 === 0) { const vw = measure(val || "", o.mono ? MONO(26) : F.b(25, 400)); ctx.fillStyle = UI.ink; ctx.fillRect(x + 20 + vw, y + 30, 2, 32); }
  };
  const fx = x0 + 40, fw = (w - 120) / 2, gx = fx + fw + 40;
  field(U2.fClient, U2.client, fx, y0 + 120, fw);
  field(U2.fDate, U2.date, gx, y0 + 120, fw);
  field(U2.fCode, CODE_BAD.slice(0, nType), fx, y0 + 240, fw, { mono: true, focus: tf > 11.1 && tf < 11.85, caret: tf > 11.1 && tf < 11.85 && !frozen });
  field(U2.fQty, tf > 11.9 ? "40" : "", gx, y0 + 240, fw);
  field(U2.fMat, tf > 12.0 ? "AISI 1045" : "", fx, y0 + 360, fw);
  field(U2.fLead, tf > 12.08 ? U2.lead : "", gx, y0 + 360, fw);
  field(U2.fDesc, tf > 12.15 ? U2.desc : "", fx, y0 + 480, w - 80);
  txt(U2.fObs, fx, y0 + 600, { font: F.b(19, 500), color: UI.mute, align: "left" });
  rrect(fx, y0 + 614, w - 80, 80, 8); ctx.fillStyle = "#101114"; ctx.fill(); ctx.strokeStyle = UI.line; ctx.lineWidth = 1.2; ctx.stroke();
  // botões
  const hov = tf > 12.45;
  const bw = measure(U2.send, F.b(24, 600)) + 60, bx = x0 + w - 40 - bw, by = y0 + 730;
  rrect(bx, by, bw, 60, 10); ctx.fillStyle = hov ? "#f2f3f5" : "#d9dce1"; ctx.fill(); txt(U2.send, bx + bw / 2, by + 39, { font: F.b(24, 600), color: "#111" });
  const dw = measure(U2.draft, F.b(24, 500)) + 50;
  rrect(bx - dw - 16, by, dw, 60, 10); ctx.strokeStyle = UI.line; ctx.lineWidth = 1.5; ctx.stroke(); txt(U2.draft, bx - dw / 2 - 16, by + 39, { font: F.b(24, 500), color: UI.mute });
  ctx.restore();
  // notificações (toasts) empilhando
  [11.5, 11.95, 12.3].forEach((k, i) => {
    const p = E.outCubic(seg(tf, k, k + 0.22)); if (p <= 0 || noise <= 0) return;
    const ty = 236, tx = lerp(-640, 60 + i * 14, p);
    const m = U2.mails[(i + 1) % U2.mails.length];
    ctx.save(); ctx.globalAlpha = 0.97 * noise; ctx.shadowColor = "rgba(0,0,0,0.6)"; ctx.shadowBlur = 30;
    rrect(tx, ty + i * 84 - 60, 600, 76, 12); ctx.fillStyle = "#24262a"; ctx.fill(); ctx.shadowColor = "transparent"; ctx.strokeStyle = "rgba(255,255,255,0.08)"; ctx.stroke();
    txt(U2.toast + " · " + m[0], tx + 24, ty + i * 84 - 28, { font: F.b(19, 600), color: UI.ink, align: "left" });
    let s = m[1]; ctx.font = F.b(19, 400); while (ctx.measureText(s).width > 540 && s.length > 4) s = s.slice(0, -2);
    txt(s, tx + 24, ty + i * 84 + 0, { font: F.b(19, 400), color: UI.mute, align: "left" });
    ctx.restore();
  });
  // cursor indo para "Enviar"
  const cp = keyframes(tf, [{ t: 11.0, x: 700, y: 1000 }, { t: 11.9, x: 720, y: 960 }, { t: 12.45, x: bx + bw * 0.55, y: by + 32 }, { t: 13, x: bx + bw * 0.55, y: by + 32 }]);
  pointer(cp.x, cp.y, 1.6);
  return { codeBox: [fx, y0 + 254, fw, 62] };
}
function quoteShot(t, L, U2) {
  room(t, 0.8);
  const k = seg(t, T.quote, T.freeze), sc = 1 + k * 0.06, j = k * k * 4;
  ctx.save(); ctx.translate(W / 2 + Math.sin(t * 23) * j, 860 + Math.cos(t * 19) * j); ctx.scale(sc, sc); ctx.translate(-W / 2, -860);
  quoteForm(t, L, U2, false);
  ctx.restore();
  screenSheen();
  miniClock(t, 1);
}
// congelamento da UI: o mesmo quadro parado, dessaturando; poeira suspensa
function frozenUI(t, L, U2, push, desatA, darkA, noise = 1) {
  room(T.freeze, 0.8);
  const sc = 1.06 * push;
  ctx.save(); ctx.translate(W / 2, 860); ctx.scale(sc, sc); ctx.translate(-W / 2, -860);
  const r = quoteForm(T.freeze, L, U2, true, noise);
  ctx.restore();
  screenSheen();
  miniClock(T.freeze, noise);
  desat(desatA); dark(darkA);
  return { r, sc };
}
function dust(a, seed = 1) {
  if (a <= 0) return;
  ctx.save();
  // feixe de luz diagonal muito leve
  ctx.globalAlpha = a * 0.5; ctx.translate(W * 0.15, 0); ctx.rotate(-0.38);
  const g = ctx.createLinearGradient(-220, 0, 220, 0); g.addColorStop(0, "rgba(255,240,220,0)"); g.addColorStop(0.5, "rgba(255,240,220,0.07)"); g.addColorStop(1, "rgba(255,240,220,0)");
  ctx.fillStyle = g; ctx.fillRect(-220, -200, 440, H * 1.6); ctx.restore();
  ctx.save(); ctx.globalAlpha = a;
  for (let i = 0; i < 34; i++) { const x = rnd(i * 3.3 + seed) * W, y = 250 + rnd(i * 7.1 + seed) * 1300, r = 1 + rnd(i * 1.9) * 2.6; ctx.fillStyle = `rgba(235,235,230,${0.18 + rnd(i * 5.5) * 0.3})`; ctx.beginPath(); ctx.arc(x, y, r, 0, 7); ctx.fill(); }
  ctx.restore();
}

// ---------- 2D: editor de fluxo em nós ----------
const RUN = [[19.35, 19.95], [20.3, 21.95], [22.3, 22.9], [23.25, 23.85]];
const WIRE = [[19.95, 20.3], [21.95, 22.3], [22.9, 23.25]];
const FLAG = 20.75, FIX = 21.6;
const NODE = { x: 150, w: 780, h: 150, y: [470, 680, 890, 1100] };
function icon(kind, x, y, col) {
  ctx.save(); ctx.strokeStyle = col; ctx.lineWidth = 2.4; ctx.lineJoin = "round"; ctx.lineCap = "round";
  ctx.beginPath();
  if (kind === 0) { ctx.moveTo(x - 9, y - 13); ctx.lineTo(x + 4, y - 13); ctx.lineTo(x + 10, y - 7); ctx.lineTo(x + 10, y + 13); ctx.lineTo(x - 9, y + 13); ctx.closePath(); ctx.moveTo(x - 4, y); ctx.lineTo(x + 5, y); ctx.moveTo(x - 4, y + 6); ctx.lineTo(x + 5, y + 6); }
  if (kind === 1) { ctx.moveTo(x, y - 14); ctx.lineTo(x + 12, y - 9); ctx.lineTo(x + 12, y + 2); ctx.quadraticCurveTo(x + 10, y + 11, x, y + 15); ctx.quadraticCurveTo(x - 10, y + 11, x - 12, y + 2); ctx.lineTo(x - 12, y - 9); ctx.closePath(); ctx.moveTo(x - 5, y); ctx.lineTo(x - 1, y + 5); ctx.lineTo(x + 6, y - 4); }
  if (kind === 2) { ctx.rect(x - 11, y - 13, 22, 26); ctx.moveTo(x - 6, y - 6); ctx.lineTo(x + 6, y - 6); ctx.moveTo(x - 6, y); ctx.lineTo(x + 6, y); ctx.moveTo(x - 6, y + 6); ctx.lineTo(x + 2, y + 6); }
  if (kind === 3) { ctx.moveTo(x - 13, y - 2); ctx.lineTo(x + 13, y - 12); ctx.lineTo(x + 5, y + 13); ctx.lineTo(x + 1, y + 2); ctx.closePath(); ctx.moveTo(x + 1, y + 2); ctx.lineTo(x + 13, y - 12); }
  ctx.stroke(); ctx.restore();
}
function flowEditor(t, L, U2) {
  ctx.fillStyle = "#111214"; ctx.fillRect(0, 0, W, H);
  // grade pontilhada com leve parallax
  const off = (t - T.flow) * 4;
  ctx.fillStyle = "rgba(255,255,255,0.07)";
  for (let y = 240 + (off % 28); y < H - 200; y += 28) for (let x = 14; x < W; x += 28) ctx.fillRect(x, y, 2, 2);
  // barra superior do editor
  const ty = 360;
  rrect(60, ty, W - 120, 70, 12); ctx.fillStyle = "#18191c"; ctx.fill(); ctx.strokeStyle = UI.line; ctx.lineWidth = 1.5; ctx.stroke();
  txt(U2.flow, 90, ty + 45, { font: F.b(26, 600), color: UI.ink, align: "left" });
  const done = t > 23.9;
  const st = done ? U2.done : U2.run, sw = measure(st, F.b(21, 600)) + 54;
  rrect(W - 90 - sw, ty + 16, sw, 38, 19); ctx.fillStyle = done ? "rgba(34,130,240,0.18)" : "rgba(255,255,255,0.06)"; ctx.fill();
  ctx.beginPath(); ctx.arc(W - 90 - sw + 22, ty + 35, 6, 0, 7); ctx.fillStyle = t > RUN[0][0] ? C.brand : UI.dim; ctx.globalAlpha = done ? 1 : 0.55 + 0.45 * Math.sin(t * 9); ctx.fill(); ctx.globalAlpha = 1;
  txt(st, W - 90 - sw + 36, ty + 42, { font: F.b(21, 600), color: done ? C.soft : UI.ink, align: "left" });
  // fios
  const cx = W / 2;
  for (let i = 0; i < 3; i++) {
    const y1 = NODE.y[i] + NODE.h, y2 = NODE.y[i + 1], ap = E.outCubic(seg(t, T.flow + 0.2 + i * 0.12, T.flow + 0.6 + i * 0.12)); if (ap <= 0) continue;
    const fired = t >= WIRE[i][1];
    ctx.strokeStyle = fired ? "rgba(90,162,245,0.85)" : "rgba(255,255,255,0.22)"; ctx.lineWidth = 2.5;
    ctx.beginPath(); ctx.moveTo(cx, y1); ctx.lineTo(cx, lerp(y1, y2, ap)); ctx.stroke();
    const wp = seg(t, WIRE[i][0], WIRE[i][1]);
    if (wp > 0 && wp < 1) { const py = lerp(y1, y2, E.inOutCubic(wp)); const g = ctx.createRadialGradient(cx, py, 0, cx, py, 22); g.addColorStop(0, "rgba(140,190,255,0.95)"); g.addColorStop(0.3, "rgba(34,130,240,0.5)"); g.addColorStop(1, "rgba(34,130,240,0)"); ctx.fillStyle = g; ctx.beginPath(); ctx.arc(cx, py, 22, 0, 7); ctx.fill(); ctx.strokeStyle = C.soft; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(cx, Math.max(y1, py - 40)); ctx.lineTo(cx, py); ctx.stroke(); }
  }
  // nós
  for (let i = 0; i < 4; i++) {
    const ap = E.outCubic(seg(t, T.flow + i * 0.12, T.flow + 0.45 + i * 0.12)); if (ap <= 0) continue;
    const x = NODE.x, y = NODE.y[i] + (1 - ap) * 24, w = NODE.w, h = NODE.h;
    const [r0, r1] = RUN[i], running = t >= r0 && t < r1, ok = t >= r1;
    const warn = i === 1 && t >= FLAG && t < FIX + 0.25;
    ctx.save(); ctx.globalAlpha = ap;
    const bc = warn ? UI.amber : running || ok ? C.brand : UI.line;
    if (running || warn) { ctx.shadowColor = warn ? "rgba(227,163,58,0.45)" : "rgba(34,130,240,0.45)"; ctx.shadowBlur = 26; }
    rrect(x, y, w, h, 12); ctx.fillStyle = "#1a1b1f"; ctx.fill(); ctx.shadowColor = "transparent";
    ctx.strokeStyle = bc; ctx.lineWidth = running || warn ? 2.5 : 1.5; ctx.stroke();
    // cabeçalho
    rrect(x + 24, y + 22, 52, 52, 10); ctx.fillStyle = ok ? "rgba(34,130,240,0.16)" : "#232529"; ctx.fill();
    icon(i, x + 50, y + 48, ok || running ? C.soft : UI.mute);
    txt(U2.n[i], x + 96, y + 58, { font: F.b(31, 600), color: UI.ink, align: "left" });
    const tag = U2.tags[i], tw = measure(tag, MONO(16), 2) + 24;
    rrect(x + w - 24 - tw - (ok ? 52 : 0), y + 30, tw, 30, 6); ctx.strokeStyle = UI.line; ctx.lineWidth = 1.2; ctx.stroke();
    txt(tag, x + w - 24 - tw / 2 - (ok ? 52 : 0), y + 51, { font: MONO(16), color: UI.mute, ls: 2 });
    if (ok) { const p = E.outBack(seg(t, r1, r1 + 0.12)); ctx.save(); ctx.translate(x + w - 44, y + 45); ctx.scale(0.9 + 0.1 * p, 0.9 + 0.1 * p); ctx.globalAlpha *= clamp(p * 2); ctx.beginPath(); ctx.arc(0, 0, 17, 0, 7); ctx.fillStyle = C.brand; ctx.fill(); ctx.strokeStyle = "#fff"; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(-7, 0); ctx.lineTo(-2, 6); ctx.lineTo(8, -6); ctx.stroke(); ctx.restore(); }
    // parâmetro
    txt(U2.p[i], x + 26, y + 103, { font: MONO(19), color: UI.mute, align: "left" });
    // resultado
    let res = null, rc = C.soft;
    if (i === 0 && t >= r1 - 0.15) res = U2.r[0];
    if (i === 1 && t >= FLAG) {
      if (t < FIX) { res = U2.r[1]; rc = UI.amber; }
      else { res = U2.r[2]; rc = C.soft; }
    }
    if (i === 2 && t >= r1 - 0.15) res = U2.r[3];
    if (i === 3 && t >= r1 - 0.1) res = U2.r[4];
    if (res) {
      const rp = i === 1 && t >= FIX ? seg(t, FIX, FIX + 0.25) : seg(t, i === 1 ? FLAG : r1 - 0.15, (i === 1 ? FLAG : r1 - 0.15) + 0.25);
      ctx.save(); ctx.globalAlpha *= rp;
      txt((rc === UI.amber ? "▲ " : "✓ ") + res, x + 26, y + 134, { font: MONO(20, 500), color: rc, align: "left" });
      ctx.restore();
    }
    // barra de progresso
    if (running && !warn) { const p = seg(t, r0, i === 1 ? FLAG : r1); ctx.fillStyle = "rgba(34,130,240,0.9)"; ctx.fillRect(x + 12, y + h - 4, (w - 24) * p, 3); }
    // portas
    ctx.fillStyle = "#111214"; ctx.strokeStyle = ok ? C.soft : "rgba(255,255,255,0.35)"; ctx.lineWidth = 2;
    if (i > 0) { ctx.beginPath(); ctx.arc(cx, y, 7, 0, 7); ctx.fill(); ctx.stroke(); }
    if (i < 3) { ctx.beginPath(); ctx.arc(cx, y + h, 7, 0, 7); ctx.fill(); ctx.stroke(); }
    ctx.restore();
  }
  // correção do dígito: 54 → 45 (dígitos rolando)
  if (t >= FIX - 0.05 && t < FIX + 0.3) {
    const p = E.inOutCubic(seg(t, FIX - 0.05, FIX + 0.2));
    ctx.save(); ctx.globalAlpha = (1 - seg(t, FIX + 0.15, FIX + 0.3));
    const fx0 = NODE.x + 26 + measure("▲ B7 = FL-10", MONO(20, 500)), y = NODE.y[1] + 134;
    rrect(fx0 - 4, y - 24, measure("54", MONO(20, 500)) + 8, 32, 4); ctx.fillStyle = "rgba(34,130,240,0.25)"; ctx.fill();
    ctx.restore();
  }
  // registro de execução
  const ly = 1300;
  rrect(60, ly, W - 120, 196, 12); ctx.fillStyle = "#151619"; ctx.fill(); ctx.strokeStyle = UI.line; ctx.lineWidth = 1.5; ctx.stroke();
  txt(U2.log.toUpperCase(), 90, ly + 38, { font: MONO(17), color: UI.dim, align: "left", ls: 3 });
  const LT = [[19.95, "17:48:09", "OK  ", 0], [FLAG, "17:48:10", "WARN", 1], [FIX, "17:48:10", "FIX ", 2], [22.9, "17:48:11", "OK  ", 3], [23.85, "17:48:12", "OK  ", 4]];
  const shown = LT.filter((l) => t >= l[0]);
  shown.slice(-4).forEach((l, i) => {
    const a = seg(t, l[0], l[0] + 0.15);
    const col = l[2] === "WARN" ? UI.amber : l[2] === "FIX " ? C.soft : "#9fd0a8";
    txt(l[1], 90, ly + 78 + i * 34, { font: MONO(18), color: UI.dim, align: "left", alpha: a });
    txt(l[2], 210, ly + 78 + i * 34, { font: MONO(18, 500), color: col, align: "left", alpha: a });
    let s = U2.logs[l[3]]; ctx.font = MONO(18); while (ctx.measureText(s).width > W - 120 - 290 && s.length > 4) s = s.slice(0, -2);
    txt(s, 280, ly + 78 + i * 34, { font: MONO(18), color: "#c9cdd3", align: "left", alpha: a });
  });
}

// ---------- 2D: PDF do orçamento gerado ----------
function docPage(t, L, U2, x, y, w, h) {
  const k = (v) => (v * w) / 700; // escala relativa
  ctx.save();
  ctx.shadowColor = "rgba(0,0,0,0.6)"; ctx.shadowBlur = 40; ctx.fillStyle = "#eceef0"; ctx.fillRect(x, y, w, h); ctx.shadowColor = "transparent";
  const ink = "#1c1e22", mute = "#6a6f77";
  const blk = (i) => E.outCubic(seg(t, 24.85 + i * 0.2, 25.05 + i * 0.2));
  // cabeçalho
  let a = blk(0);
  if (a > 0) {
    ctx.globalAlpha = a;
    ctx.setLineDash([5, 4]); ctx.strokeStyle = "#a3a8b0"; ctx.lineWidth = 1.5; ctx.strokeRect(x + k(44), y + k(44), k(150), k(70)); ctx.setLineDash([]);
    txt(U2.logo, x + k(119), y + k(85), { font: MONO(k(12)), color: "#8a8f97" });
    txt(U2.co, x + k(44), y + k(146), { font: F.b(k(16), 600), color: ink, align: "left" });
    txt(U2.docT, x + w - k(44), y + k(78), { font: F.b(k(30), 700), color: ink, align: "right", ls: 2 });
    txt(U2.docN, x + w - k(44), y + k(108), { font: MONO(k(15)), color: mute, align: "right" });
    txt(UIX[window.LANG || "pt"]?.date || "07/10/2026", x + w - k(44), y + k(132), { font: MONO(k(14)), color: mute, align: "right" });
    ctx.fillStyle = ink; ctx.fillRect(x + k(44), y + k(170), w - k(88), 2);
    txt(U2.fClient + ": " + U2.client, x + k(44), y + k(206), { font: F.b(k(15), 500), color: ink, align: "left" });
  }
  // tabela
  a = blk(1);
  if (a > 0) {
    ctx.globalAlpha = a;
    const cols = [44, 86, 222, 404, 488, 530, 596], ty = y + k(250);
    ctx.fillStyle = "#dfe2e6"; ctx.fillRect(x + k(44), ty, w - k(88), k(34));
    U2.dH.forEach((hh, i) => txt(hh, x + k(cols[i] + (i >= 4 ? 0 : 6)), ty + k(23), { font: F.b(k(12), 700), color: ink, align: "left" }));
    const ry = ty + k(34);
    ctx.strokeStyle = "#c5c9cf"; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(x + k(44), ry + k(52)); ctx.lineTo(x + w - k(44), ry + k(52)); ctx.stroke();
    const v = ["1", CODE_OK, U2.desc, "AISI 1045", "40", U2.unit, U2.total];
    v.forEach((s, i) => { let ss = s; if (i === 2) { ctx.font = F.b(k(12), 400); while (ctx.measureText(ss).width > k(180) && ss.length > 4) ss = ss.slice(0, -2); } txt(ss, x + k(cols[i] + (i >= 4 ? 0 : 6)), ry + k(32), { font: i === 1 ? MONO(k(12.5), 500) : F.b(k(12), 400), color: ink, align: "left" }); });
    // destaque do código validado
    const cw = measure(CODE_OK, MONO(k(12.5), 500));
    ctx.strokeStyle = C.brand; ctx.lineWidth = 2; rrect(x + k(cols[1] + 1), ry + k(12), cw + k(10), k(28), 4); ctx.stroke();
    // totais
    txt("Total", x + k(500), ry + k(100), { font: F.b(k(14), 600), color: ink, align: "left" });
    txt(U2.total, x + w - k(44), ry + k(100), { font: F.b(k(18), 700), color: ink, align: "right" });
    ctx.fillStyle = "#c5c9cf"; ctx.fillRect(x + k(480), ry + k(70), w - k(524), 1);
  }
  // rodapé
  a = blk(2);
  if (a > 0) {
    ctx.globalAlpha = a;
    U2.terms.forEach((s, i) => txt(s, x + k(44), y + k(520) + i * k(28), { font: F.b(k(14), 400), color: ink, align: "left" }));
    rrect(x + k(44), y + k(630), w - k(88), k(54), 6); ctx.fillStyle = "rgba(34,130,240,0.10)"; ctx.fill(); ctx.strokeStyle = "rgba(34,130,240,0.6)"; ctx.lineWidth = 1.2; ctx.stroke();
    let s = "✓ " + U2.val; ctx.font = MONO(k(12.5)); while (ctx.measureText(s).width > w - k(120) && s.length > 4) s = s.slice(0, -2);
    txt(s, x + k(62), y + k(663), { font: MONO(k(12.5)), color: "#14569f", align: "left" });
    ctx.fillStyle = "#9aa0a8"; ctx.fillRect(x + w - k(274), y + k(880), k(230), 1);
    txt(U2.sign, x + w - k(159), y + k(904), { font: F.b(k(13), 400), color: mute });
    txt("1/1", x + w / 2, y + h - k(26), { font: MONO(k(11)), color: mute });
  }
  ctx.restore();
}
function docShot(t, L, U2) {
  ctx.fillStyle = "#111214"; ctx.fillRect(0, 0, W, H);
  ctx.fillStyle = "rgba(255,255,255,0.05)"; for (let y = 240; y < H - 200; y += 28) for (let x = 14; x < W; x += 28) ctx.fillRect(x, y, 2, 2);
  const p = E.outExpo(seg(t, T.doc, T.doc + 0.5)), push = 1 + seg(t, T.doc, T.release) * 0.035;
  const w = 650 * lerp(0.6, 1, p) * push, h = w * 1.414, x = W / 2 - w / 2, y = lerp(980, 330, p) - (push - 1) * 300;
  ctx.save(); ctx.globalAlpha = clamp(p * 2); docPage(t, L, U2, x, y, w, h); ctx.restore();
  // envio
  const sp = E.outCubic(seg(t, 26.2, 26.5));
  if (sp > 0) {
    const ty = lerp(1260, 1150, sp);
    ctx.save(); ctx.globalAlpha = sp; ctx.shadowColor = "rgba(0,0,0,0.6)"; ctx.shadowBlur = 40;
    rrect(110, ty, W - 220, 116, 14); ctx.fillStyle = "#1c1d21"; ctx.fill(); ctx.shadowColor = "transparent"; ctx.strokeStyle = "rgba(90,162,245,0.55)"; ctx.lineWidth = 1.5; ctx.stroke();
    ctx.beginPath(); ctx.arc(170, ty + 58, 24, 0, 7); ctx.fillStyle = C.brand; ctx.fill(); ctx.strokeStyle = "#fff"; ctx.lineWidth = 3.5; ctx.beginPath(); ctx.moveTo(160, ty + 58); ctx.lineTo(167, ty + 66); ctx.lineTo(181, ty + 50); ctx.stroke();
    txt(U2.sentT, 214, ty + 50, { font: F.b(27, 600), color: UI.ink, align: "left" });
    let s = U2.sentS; ctx.font = F.b(20, 400); while (ctx.measureText(s).width > W - 360 && s.length > 4) s = s.slice(0, -2);
    txt(s, 214, ty + 84, { font: F.b(20, 400), color: UI.mute, align: "left" });
    ctx.restore();
  }
}

// ---------- composição ----------
export function render2d(t, lang, has3d) {
  const L = COPY[lang] || COPY.pt, U2 = UIX[lang] || UIX.pt;
  window.LANG = lang;
  if (!has3d) {
    if (t < T.desk) { ctx.fillStyle = "#0b0c0e"; ctx.fillRect(0, 0, W, H); }
    else if (t < T.clock) deskShot(t, L, U2);
    else if (t < T.mail) clockShot(t);
    else if (t < T.quote) mailShot(t, L, U2);
    else if (t < T.freeze) quoteShot(t, L, U2);
    else if (t < T.freeze3d) {
      const k = seg(t, T.freeze, T.freeze3d);
      const fr = frozenUI(t, L, U2, 1 + k * 0.03, E.outCubic(seg(t, T.freeze, T.freeze + 0.35)), 0.25 * k);
      dust(seg(t, T.freeze + 0.1, T.freeze + 0.5));
      // anotação: o erro que ninguém viu
      const a = E.outCubic(seg(t, 13.05, 13.35));
      if (a > 0) {
        const [bx, by, bw, bh] = fr.r.codeBox, s = fr.sc, X = (v) => W / 2 + (v - W / 2) * s, Y = (v) => 860 + (v - 860) * s;
        ctx.save(); ctx.globalAlpha = a; ctx.strokeStyle = "rgba(238,242,247,0.95)"; ctx.lineWidth = 2.5;
        const cw = measure(CODE_BAD, MONO(26)) * s, d0 = measure("FL-10", MONO(26)) * s, d1 = measure("54", MONO(26)) * s;
        rrect(X(bx + 18) + d0 - 6, Y(by + 8), d1 + 12, (bh - 16) * s, 6); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(X(bx + 18) + d0 + d1 / 2, Y(by + bh) - 4); ctx.lineTo(X(bx + 18) + d0 + d1 / 2, Y(by + bh) + 40 * a); ctx.stroke();
        const nw = measure(U2.neq, MONO(26)) + 40, nx = Math.min(X(bx + 18) + d0 - 20, W - 60 - nw), ny = Y(by + bh) + 40 * a;
        rrect(nx, ny, nw, 56, 8); ctx.fillStyle = "rgba(14,15,17,0.96)"; ctx.fill(); ctx.strokeStyle = "rgba(238,242,247,0.6)"; ctx.lineWidth = 1.5; ctx.stroke();
        txt(U2.neq, nx + 20, ny + 37, { font: MONO(26), color: "rgba(238,242,247,0.95)", align: "left" });
        ctx.restore();
      }
    }
    else if (t < T.flow) {
      const k = seg(t, T.enter, T.flow);
      frozenUI(t, L, U2, 1.03 + k * 0.01, 1, 0.35, 1 - seg(t, T.enter + 0.05, T.enter + 0.4));
      // a Downway entra como estrutura: grade, cantoneiras azuis
      const ga = E.outCubic(seg(t, 16.4, 17.0)) * (1 - seg(t, 18.3, 18.6));
      if (ga > 0) { ctx.save(); ctx.globalAlpha = ga * 0.08; ctx.strokeStyle = C.soft; ctx.lineWidth = 1; ctx.beginPath(); for (let x = 0; x < W; x += 24) { ctx.moveTo(x + 0.5, 380); ctx.lineTo(x + 0.5, 1330); } for (let y = 380; y < 1330; y += 24) { ctx.moveTo(0, y + 0.5); ctx.lineTo(W, y + 0.5); } ctx.stroke(); ctx.restore(); }
      const cp = E.outCubic(seg(t, T.enter + 0.1, T.enter + 0.5));
      if (cp > 0) {
        ctx.save(); ctx.strokeStyle = C.brand; ctx.lineWidth = 3; const L2 = 60 * cp, x0 = 40, x1 = W - 40, y0 = 375, y1 = 1345;
        for (const [x, y, sx, sy] of [[x0, y0, 1, 1], [x1, y0, -1, 1], [x0, y1, 1, -1], [x1, y1, -1, -1]]) { ctx.beginPath(); ctx.moveTo(x, y + sy * L2); ctx.lineTo(x, y); ctx.lineTo(x + sx * L2, y); ctx.stroke(); }
        ctx.restore();
      }
      const fade = seg(t, 18.35, T.flow); if (fade > 0) { ctx.fillStyle = `rgba(17,18,20,${fade})`; ctx.fillRect(0, 0, W, H); }
    }
    else if (t < T.doc) {
      const k = seg(t, T.flow, T.doc), sc = 1 + k * 0.025;
      ctx.save(); ctx.translate(W / 2, 900); ctx.scale(sc, sc); ctx.translate(-W / 2, -900);
      flowEditor(t, L, U2);
      ctx.restore();
      const fi = 1 - seg(t, T.flow, T.flow + 0.3); if (fi > 0) { ctx.fillStyle = `rgba(17,18,20,${fi})`; ctx.fillRect(0, 0, W, H); }
      const fo = seg(t, T.doc - 0.2, T.doc); if (fo > 0) { ctx.fillStyle = `rgba(17,18,20,${fo})`; ctx.fillRect(0, 0, W, H); }
    }
    else docShot(t, L, U2);
  }

  // ---- 3D: graduação e luz por cima
  if (has3d && t >= T.freeze3d && t < T.enter) { desat(0.85); dark(0.12); }
  if (has3d && t >= T.release) {
    const g = ctx.createLinearGradient(0, 0, W, H * 0.6); g.addColorStop(0, "rgba(255,190,120,0.08)"); g.addColorStop(1, "rgba(255,190,120,0)"); ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
  }

  // ---- textos
  if (t < T.desk) { scrim(1150, 0.55); bigTitle(L.hook, 1400, t, 0.45, T.desk - 0.05, 112, { rule: false }); }
  if (t >= T.desk && t < T.clock) { if (t > 3.6) scrim(1380, 0.6 * seg(t, 3.6, 3.9)); caption(L.v1, t, 3.7, 6.9); }
  if (t >= T.quote && t < T.freeze) { scrim(1360, 0.7); caption(L.v3, t, 11.15, T.freeze + 0.3); }
  if (t >= T.freeze && t < T.enter) { scrim(1150, 0.55); bigTitle(L.freeze, 1430, t, 13.2, T.enter - 0.05, 120); }
  if (t >= T.enter && t < T.flow) { scrim(1380, 0.7); caption(L.q, t, 16.6, 18.4); }
  label(L.lab, t, T.enter + 0.25, T.doc);
  if (t >= T.flow && t < T.doc) caption(L.v4, t, 22.2, 24.55, 1610);
  if (t >= T.doc && t < T.release) { scrim(1300, 0.6); bigTitle(L.doc, 1450, t, 25.2, T.release - 0.05, 100); }
  if (t >= T.release && t < T.sig) {
    scrim(1250, 0.6);
    caption(L.v5, t, 27.9, 30.4);
    bigTitle(L.end, 1420, t, 30.8, T.sig - 0.05, 104);
  }
  if (t > T.enter + 0.1 && t < T.sig) corners(0.45);
  signature(t, T.sig, lang, L.cta);
  vignette(); grain(t, 0.045);
  // corte seco do congelamento: um respiro escuro
  for (const c of [T.desk, T.clock, T.mail, T.quote, T.freeze3d, T.enter, T.release]) { const d = Math.abs(t - c); if (d < 0.06) { ctx.fillStyle = `rgba(0,0,0,${0.5 * (1 - d / 0.06)})`; ctx.fillRect(0, 0, W, H); } }
}
