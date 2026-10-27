# ESCANEO: Pronunciation Palace / PronunLab (la app del sobrino)
*Escaneo minucioso 27-oct ~12:45 PM — directo de https://pronunciation-palace.lovable.app*

## Qué es
App Lovable del sobrino para práctica avanzada de pronunciación. Internamente se llama **PronunLab** ("Your AI-powered pronunciation lab"). Posicionada como **B1 Intermediate English**: diptongos, triptongos, stress, connected speech. UI completa en inglés.

## Arquitectura (verificada del bundle)
- React SPA estándar Lovable (Vite): Tailwind + shadcn/Radix + Framer Motion + recharts
- **10 páginas**: Home, Lessons, Practice, Pairs (minimal pairs), Quiz, Ranks (leaderboard), Progress (dashboard), Auth (email/password + forgot/reset), Forgot/Reset
- **Backend: SUPABASE** (phdonkofvkinmsdhhkjl.supabase.co): auth de usuarios + tabla `exercise_progress` (guarda score por ejercicio) → dashboard de progreso, streaks, leaderboard
- Deploy: lovable.app (hosting Lovable)

## LA JOYA: el sistema de medición (destapado del código)
**Web Speech API del navegador (window.SpeechRecognition / webkitSpeechRecognition) — 100% GRATIS, cero APIs de pago, cero llaves.**
- Flujo de práctica en 4 pasos: **Listen Only → Listen + Read → Record → Compare**
- El modelo de audio = TTS del navegador (speechSynthesis) con control de velocidad (1x)
- **Algoritmo del score (extraído):** el estudiante habla → el navegador transcribe → la app normaliza ambas → compara palabra por palabra → `score = palabras reconocidas ÷ palabras objetivo × 100` → **cada palabra en VERDE (match) o ROJO (no match)** + feedback "Focus on: [palabras falladas]"
- El score se guarda a Supabase → progreso/streaks/leaderboard

## Contenido actual (B1+ — para bajar a A2)
- Lecciones: diptongos y TRIPTONGOS (FIRE, LAYER, POWER), stress, connected speech, "Pronunciation Theory" cards
- Ejercicios tipo: /iː/ "The sheep sleep in the green field." (¡sheep otra vez!) con IPA
- Minimal Pairs page + Quiz + Ranks
- Filtros por sonido (vowels/diphthongs/consonants) y nivel (Beginner/Intermediate/Advanced)

## Caveats honestos
1. **SpeechRecognition funciona en Chrome/Android** (el teléfono de Josephine ✓); iOS Safari = soporte parcial
2. El score es transcripción-por-palabra: tolerante con acento (no es evaluación fonémica fina — para eso se pagaría Azure Pronunciation Assessment). Para A2 con formas completas = perfecto arranque
3. Falsos positivos posibles en homófonos (heard/herd cuentan como match)
4. Sin micrófono propio de alta calidad: la boca seria se mide con el maestro (doctrina intacta: la máquina es receptora indulgente)

## DOS CAMINOS PARA "ACTION BRIDGES"
**PATH A — EL CLON:** el sobrino conecta Lovable→GitHub (o comparte el proyecto) → fork → conservamos auth + leaderboard para escala futura. Requiere su cooperación.
**PATH B — LA RECONSTRUCCIÓN NUESTRA (recomendada para Josephine HOY):** construimos ACTION BRIDGES como puerta propia en Pages con el MISMO motor gratis (Web Speech API) pero soldado al ecosistema: UI en español neutro (práctica en inglés), currículo A2 de conexión (pronombres → to be → infinitivos → "I have to go" → +and), audio modelo = Sarah horneado (mejor que el TTS del navegador), telemetría a logMorfofonoSession (expediente 4 canales), $0 para siempre.
Los dos caminos no se excluyen: B sirve a Josephine esta semana; A queda para la capa avanzada multi-alumno con leaderboard.

## Currículo A2 (directriz JJ 27-oct)
1. Pronombres: I have, you have, she has...
2. To be: I am, you are...
3. Infinitivos: to have, to go, to work, to take, to make
4. CONEXIÓN: "I have" + "to go" = "I have to go"
5. + Conectores: "I have to go and do something" (la cadena and/then = práctica infinita)
Ella lo dice EN VOZ ALTA, conectándolo, explicándoselo. El score verde/rojo palabra por palabra = la acertación visual del canal ojo.
