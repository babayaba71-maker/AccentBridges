# -*- coding: utf-8 -*-
import io, sys

# ============ PATCH 1: oido-ingles.html ============
src = io.open('oido-ingles.html', encoding='utf-8').read()

# 1. GF reset al Empezar
old = '<button class="go" onclick="st=0;step()">Empezar</button>'
new = '<button class="go" onclick="GF=0;st=0;step()">Empezar</button>'
assert src.count(old) == 1, "btn Empezar"
src = src.replace(old, new)

# 2. ladder state + aidHTML junto a th(d)
old = 'function th(d){return Math.max(50,70-5*Math.min(4,AT[d]||0))}'
new = '''function th(d){return Math.max(50,70-5*Math.min(4,AT[d]||0))}
/* ESCALERA DE PISTAS DEL BISTURÍ (orden del Maestro JJ, 15-oct): si el oído no capta,
   zas: 1 fallo → PALABRA en inglés (los ojos entran); 3 fallos → +ANCLA culichi;
   5 fallos → +FIGURA. El umbral 70→50 ya respira con th(d). El estudiante se evalúa
   solo con la práctica — 10-15 repeticiones también es medición. GF se resetea al Empezar. */
let GF=0;const aidLv=()=>GF>=5?3:GF>=3?2:GF>=1?1:0;
function aidHTML(T){const L=aidLv();if(!L||cur.d>=40)return"";let s="<b>A = "+esc(T.a)+"</b>";if(ANCLA[T.a])s+=" · "+esc(ANCLA[T.a]);s+=" &nbsp;·&nbsp; <b>B = "+esc(T.b)+"</b>";if(ANCLA[T.b])s+=" · "+esc(ANCLA[T.b]);let pre=L>=3?"FIGURA \\ud83d\\udc41\\ufe0f (si es un barco, sale un barco): ":L>=2?"ANCLA \\ud83e\\udded (as\\u00ed suena en culichi): ":"OJOS \\ud83d\\udc41\\ufe0f (la palabra en ingl\\u00e9s): ";let e=(EMO[T.a]||"")+" "+(EMO[T.b]||"");return "<p class=\\"m\\" id=\\"aid\\" style=\\"border-left:3px solid var(--ac);padding:6px 10px;margin:8px 0\\">"+pre+s+(L>=3?" &nbsp;"+e:"")+"</p>"}'''
assert src.count(old) == 1, "th()"
src = src.replace(old, new)

# 3. render del bloque same: area de pistas
old = '<p class="m" id="hg">Escucha \U0001F50A A y \U0001F50A B antes de responder.</p><div class="row"><button class="ans" data-a="1" disabled>Iguales</button>'
new = '<p class="m" id="hg">Escucha \U0001F50A A y \U0001F50A B antes de responder.</p>'+ '<span id="aidzone">' + '"+aidHTML(T)+"' + '</span>' + '<div class="row"><button class="ans" data-a="1" disabled>Iguales</button>'
# ojo: show() usa template literal — el aidzone va con concatenación JS correcta dentro del template:
# el template es b+=`...`; hay que insertar ${aidHTML(T)} dentro del template. Reformulamos:
old_tpl = '<p class="m" id="hg">Escucha \U0001F50A A y \U0001F50A B antes de responder.</p>'
new_tpl = '<p class="m" id="hg">Escucha \U0001F50A A y \U0001F50A B antes de responder.</p>${aidHTML(T)}'
assert src.count(old_tpl) == 1, "hg line"
src = src.replace(old_tpl, new_tpl)

# 4. ans(): ladder en el fallo + telemetría de pistas
old = 'if(k=="same"){ok=(a==1)==!!T.s;msg=cur.d>=40?`A = ${T.a} · B = ${T.b}`:(T.s?"Eran iguales.":"Eran distintos.")}'
new = '''if(k=="same"){ok=(a==1)==!!T.s;const preL=GF;msg=cur.d>=40?`A = ${T.a} · B = ${T.b}`:(ok?(T.s?"Eran iguales.":"Eran distintos."):"");}
if(k=="same"&&!ok){GF++;const L=aidLv();const rev=cur.d>=40?"":`Se dijo: <b>${esc(T.a)}</b>${ANCLA[T.a]?" · "+esc(ANCLA[T.a]):""}${EMO[T.a]?" "+EMO[T.a]:""} &nbsp;y&nbsp; <b>${esc(T.b)}</b>${ANCLA[T.b]?" · "+esc(ANCLA[T.b]):""}${EMO[T.b]?" "+EMO[T.b]:""}`;msg=rev+(L>preL?(L==1?" — \\ud83d\\udc41\\ufe0f ZAS: los ojos entran a ayudar.":L==2?" — \\ud83e\\udded ZAS: el ancla culichi entra a ayudar.":" — \\ud83d\\udc41\\ufe0f ZAS: la figura entra. Si es un barco, sale un barco. \\u2693"):"")+" · pistas nivel "+L}'''
assert src.count(old) == 1, "ans same"
src = src.replace(old, new)

# 5. bq(): telemetría aid
old = '+" · int:"+AT[cur.d]+'
new = '+" · int:"+AT[cur.d]+" · aid:"+GF+'
assert src.count(old) == 1, "bq int"
src = src.replace(old, new)

io.open('oido-ingles.html', 'w', encoding='utf-8').write(src)
print("OIDO-INGLES PATCH OK")

# ============ PATCH 2: morfofono-estudio.html ============
src2 = io.open('morfofono-estudio.html', encoding='utf-8').read()

# 1. PAIRS + bancos de pistas
old = '''const PAIRS = [
  ["sheep", "ship"], ["cat", "cut"], ["cot", "cut"], ["fool", "full"],
  ["bed", "bad"], ["wet", "wait"], ["pat", "bat"], ["fan", "van"],
  ["very", "berry"], ["think", "sink"], ["this", "dis"], ["sip", "zip"],
  ["sip", "ship"], ["chair", "share"], ["sing", "sin"]
];'''
new = '''const PAIRS = [
  ["sheep", "ship"], ["cat", "cut"], ["cot", "cut"], ["fool", "full"],
  ["bed", "bad"], ["wet", "wait"], ["pat", "bat"], ["fan", "van"],
  ["very", "berry"], ["think", "sink"], ["this", "dis"], ["sip", "zip"],
  ["sip", "ship"], ["chair", "share"], ["sing", "sin"]
];
/* ESCALERA DE PISTAS DEL BISTURÍ (Maestro JJ, 15-oct): 1 fallo → palabra en inglés (zas, los ojos);
   3 fallos → + ancla culichi (zas); 5 fallos → + figura (si es un barco, sale un barco).
   Rondas de 10: umbral 70 → 65 → 60 → 55 → 50 (respira con cada ronda no pasada).
   10-15 repeticiones = evaluación viva: la persistencia también mide. */
const ANCLA_E = {"sheep":"shiip","ship":"ship","cat":"kat","cut":"kat","cot":"kot","fool":"fuul","full":"ful","bed":"bed","bad":"bad","wet":"uet","wait":"ueit","pat":"pat","bat":"bat","fan":"fan","van":"van","very":"VE-ri","berry":"BE-ri","think":"tink","sink":"sink","this":"dis","dis":"dis","sip":"sip","zip":"zip","chair":"cher","share":"sher","sing":"sing","sin":"sin"};
const EMO_E = {"sheep":"\\ud83d\\udc11","ship":"\\ud83d\\udea2","cat":"\\ud83d\\udc3e","cut":"\\u2702\\ufe0f","cot":"\\ud83d\\udecf\\ufe0f","fool":"\\ud83e\\udd21","full":"\\ud83c\\udf7d\\ufe0f","bed":"\\ud83d\\udecf\\ufe0f","bad":"\\ud83d\\udc4e","wet":"\\ud83d\\udca6","wait":"\\u23f3","pat":"\\ud83d\\udc90","bat":"\\ud83e\\udda0","fan":"\\ud83c\\udf00","van":"\\ud83d\\udeb0","very":"\\u2728","berry":"\\ud83e\\udc53","think":"\\ud83d\\udcad","sink":"\\ud83d\\udeb0\\ud83d\\udca7","this":"\\ud83d\\udc49","dis":"\\ud83d\\ude45","sip":"\\ud83e\\udd64","zip":"\\ud83e\\udd10","chair":"\\ud83e\\ude91","share":"\\ud83e\\udd1d","sing":"\\ud83c\\udfa4","sin":"\\ud83d\\ude08"};
let pairGF = 0;
const pairAidLv = () => pairGF >= 5 ? 3 : pairGF >= 3 ? 2 : pairGF >= 1 ? 1 : 0;
let rondaN = 0, rondaOk = 0, rondasHechas = 0;
const rondaUmbral = () => Math.max(50, 70 - 5 * Math.min(4, rondasHechas));
function pairAidHTML(p) {
  const L = pairAidLv();
  if (!L) return "";
  let s = "";
  if (L >= 1) s += "\\ud83d\\udc41\\ufe0f <b>" + p.a + "</b> / <b>" + p.b + "</b>";
  if (L >= 2) s += " · \\ud83e\\udded " + (ANCLA_E[p.a] || p.a) + " / " + (ANCLA_E[p.b] || p.b);
  if (L >= 3) s += " · " + (EMO_E[p.a] || "\\ud83d\\udd0a") + " " + (EMO_E[p.b] || "\\ud83d\\udd0a");
  return "<div class='faint' style='margin-top:.4rem;border-left:3px solid var(--accent, #e9c46a);padding:6px 10px'>Pistas nivel " + L + ": " + s + "</div>";
}'''
assert src2.count(old) == 1, "PAIRS block"
src2 = src2.replace(old, new)

# 2. playRandomPair: mostrar pistas actuales
old = '''  const res = document.getElementById("pair-feedback");
  if (res) res.innerHTML = "<span class='faint'>Escuchando par A y B... decide abajo.</span>";
  speak(currentPair.a + " ... " + currentPair.b);'''
new = '''  const res = document.getElementById("pair-feedback");
  if (res) res.innerHTML = "<span class='faint'>Escuchando par A y B... decide abajo. Ronda " + (rondaN + 1) + "/10 · umbral " + rondaUmbral() + "%</span>" + pairAidHTML(currentPair);
  speak(currentPair.a + " ... " + currentPair.b);'''
assert src2.count(old) == 1, "playRandomPair res"
src2 = src2.replace(old, new)

# 3. judgePair: bisturí + rondas
old = '''function judgePair(guessedSame) {
  const res = document.getElementById("pair-feedback");
  if (!currentPair || !res) return;
  const ok = guessedSame === currentPair.same;
  logPairAttempt(guessedSame, ok);
  res.innerHTML = ok
    ? `<span style='color:var(--good);font-weight:600'>¡Correcto! Se dijo "${currentPair.a}" y "${currentPair.b}".</span>`
    : `<span style='color:var(--warn);font-weight:600'>Atención: se dijo "${currentPair.a}" y "${currentPair.b}".</span>`;
}'''
new = '''function judgePair(guessedSame) {
  const res = document.getElementById("pair-feedback");
  if (!currentPair || !res) return;
  const ok = guessedSame === currentPair.same;
  const preL = pairAidLv();
  logPairAttempt(guessedSame, ok);
  rondaN++; if (ok) rondaOk++;
  let html = ok
    ? `<span style='color:var(--good);font-weight:600'>¡Correcto! Se dijo "${currentPair.a}" y "${currentPair.b}".${pairGF > 0 ? " Y con pistas nivel " + pairAidLv() + " — la constancia también mide. 🏆" : ""}</span>`
    : `<span style='color:var(--warn);font-weight:600'>Atención: se dijo "${currentPair.a}" y "${currentPair.b}".</span>`;
  if (!ok) {
    pairGF++;
    const L = pairAidLv();
    const rev = ` 👁️ <b>${currentPair.a}</b>${ANCLA_E[currentPair.a] ? " · 🧭 " + ANCLA_E[currentPair.a] : ""}${EMO_E[currentPair.a] ? " " + EMO_E[currentPair.a] : ""} / <b>${currentPair.b}</b>${ANCLA_E[currentPair.b] ? " · 🧭 " + ANCLA_E[currentPair.b] : ""}${EMO_E[currentPair.b] ? " " + EMO_E[currentPair.b] : ""}`;
    html += `<div class='faint' style='margin-top:.4rem;border-left:3px solid var(--warn);padding:6px 10px'>${rev}` +
      (L > preL ? (L === 1 ? " — 👁️ ZAS: la palabra sale en inglés, los ojos entran a ayudar." : L === 2 ? " — 🧭 ZAS: el ancla culichi entra." : " — ⚓ ZAS: la figura entra. Si es un barco, sale un barco.") : "") +
      ` · pistas nivel ${L}</div>`;
  }
  if (rondaN >= 10) {
    const pct = Math.round(rondaOk / 10 * 100);
    const umbral = rondaUmbral();
    if (pct >= umbral) {
      html += `<div class='faint' style='margin-top:.4rem'>🏆 RONDA PASADA: ${pct}% ≥ umbral ${umbral}% — compuerta abierta. ¡El bisturí celebra!</div>`;
      sendExpediente({
        topic: "Morfofono Estudio — Día " + currentDay + " — compuerta igual/distinto",
        userId: studentName || "Estudiante 0",
        passed: true,
        accuracy: pct,
        spokenText: "umbral " + umbral + " · pistas usadas: " + pairGF,
        challengeSentence: "ronda de 10 pases",
        location: "Estudio",
        sessionId: "est-ronda-" + Date.now()
      });
      rondaN = 0; rondaOk = 0; rondasHechas = 0; pairGF = 0;
    } else {
      rondasHechas++;
      html += `<div class='faint' style='margin-top:.4rem'>El umbral respira: ${rondaUmbral()}% en la próxima ronda. Sigue — cada repetición también te evalúa.</div>`;
      rondaN = 0; rondaOk = 0;
    }
  }
  res.innerHTML = html;
}'''
assert src2.count(old) == 1, "judgePair"
src2 = src2.replace(old, new)

# 4. logPairAttempt: nivel de pistas en telemetría
old = '''    spokenText: guessedSame ? "igual" : "distinto",'''
new = '''    spokenText: (guessedSame ? "igual" : "distinto") + " · aid:" + pairAidLv(),'''
assert src2.count(old) == 1, "logPairAttempt spokenText"
src2 = src2.replace(old, new)

io.open('morfofono-estudio.html', 'w', encoding='utf-8').write(src2)
print("MORFOFONO-ESTUDIO PATCH OK")
