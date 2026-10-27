# ACTION BRIDGES — MAPA DE LA FASE 1 (para palomita de JJ antes de tocar código)
*Base: la copia exacta de PronunLab (repo pronunciation-palace, clonado 27-oct). Regla sellada: enseñar antes de construir.*

## LO QUE NO SE TOCA (el esqueleto profesional, queda intacto)
- Las 13 páginas (Practice, Lessons, MinimalPairs, Quiz, Dashboard, Leaderboard, Profile, Auth completa)
- El motor de medición `useSpeechRecognition.ts` (147 líneas: funciona, es el corazón)
- Supabase: auth de usuarios + exercise_progress + leaderboard + streaks
- El flujo de 4 pasos: Escucha → Escucha y lee → Grábate → Compara

## 1. REBRAND
- PronunLab → **ACTION BRIDGES — El Palacio de Pronunciación** (título, navbar, onboarding, meta)
- Nada de "Pronunciation Palace" en pantalla

## 2. UI EN ESPAÑOL (instrucciones), contenido de práctica EN INGLÉS (doctrina)
- Inventario de strings: navbar, onboarding, botones, feedback, dashboard — todo a español neutro mexicano
- Las frases de práctica, sus modelos y el scoring quedan en inglés

## 3. EL CURRÍCULO A2 DE CONEXIÓN (sustituye triptongos B1+)
Regla anti-búho sellada: CADA MÓDULO ABRE CON SU LECCIÓN DE ENTENDIMIENTO (qué es cada pieza y cómo se relaciona) y LUEGO la práctica. Nada de ejercicios sin lección.

**MÓDULO 1 — LOS LADRILLOS (pronombres + to be)**
Lección: el pronombre dice QUIÉN hace la acción; to be conecta (am/is/are)
Frases: I am ready. · She is my baby. · You are so pretty. · We are family. · They are my friends.

**MÓDULO 2 — LO QUE TENGO (have)**
Lección: have = el verbo ayudante que dice lo que tienes
Frases: I have a baby. · I have time today. · You have a beautiful house. · She has my heart.

**MÓDULO 3 — LO QUE QUIERO (infinitivos con TO)**
Lección: el puente TO une una palabra con un verbo: to go, to work, to make (el TO es el rey)
Frases: I want to go. · I need to work. · I like to cook. · I want to learn.

**MÓDULO 4 — LA CONEXIÓN (have to / want to / need to)**
Lección: la ecuación ladrillo por ladrillo: pronombre + verbo ayudante + puente to + acción = "I have to go" (tengo que ir)
Frases: I have to go. · I have to work today. · I want to stay. · I need to rest now.

**MÓDULO 5 — LA CADENA (conectores: and, then, because)**
Lección: los conectores son los puentes entre IDEAS: and une, then ordena, because explica
Frases: I want to stay and play. · I have to go and do something. · First I work, then I rest. · I study because my baby sleeps. 

**MÓDULO 6 — TU FRASE (graduación)**
I will try again. · I will learn and I will teach. (will = el pegamento del futuro, forma completa primero)

**MINIMAL PAIRS (adaptado a A2, su mundo):** berry/very · ship/sheep · live/life · they/day · sit/seat
**QUIZ A2:** 10 reactivos del contenido de los módulos (nada de triptongos)

## 4. AUDIO
Modelos = Sarah horneados con QA de oído (MP3-first, regla de <break>) — 11 ya horneados, ~15 más por hornear. Cero TTS vivo.

## 5. TELEMETRÍA
Supabase exercise_progress queda (alimenta Dashboard/Leaderboard) + puente a logMorfofonoSession para el Tablero del Maestro (el seguimiento único).

## ORDEN DE EJECUCIÓN (multi-sesión, honesto)
1a. Rebrand + UI español (mecánico, primero) → 1b. Currículo (lecciones + frases + audio) → 1c. Telemetría → 1d. QA de ojo de JJ + deploy (push al repo = la app viva se actualiza si Lovable quedó sincronizado)

*Este mapa se ejecuta TAL CUAL solo con la palomita de JJ. Cambios de currículo/alcance se negocian antes, no durante.*
