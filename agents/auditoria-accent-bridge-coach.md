# AUDITORÍA PROFUNDA — ACTION BRIDGES COACH (25-oct, tras clonar repo de Replit)
Repo: github.com/babayaba71-maker/accent-bridge-coach (clonado, 167 archivos TS/TSX)

## Arquitectura (profesional, confirmada)
Monorepo pnpm + TypeScript 5.9: React 18 + shadcn/ui (artifacts/accent-bridges) · Express 5 API (artifacts/api-server) · PostgreSQL + Drizzle ORM (tablas: enrollments, a2_progress con sync entre dispositivos) · Zod · OpenAPI/Orval. Rutas API: health, enrollments, a2-progress, progress.

## Contenido doctrinal (fuerte, ya alineado)
Curriculum bilingüe EN/ES completo en curriculum.tsx (A2: schwa bə-NA-nə, PUENTE -ANDO, -LY, -ED, connected speech; B1: IPA, "oír antes de producir"). JOYA: el quiz de colocación (assessment.tsx) dice en B1-Middle: "Your ear is ahead of your mouth — which is exactly the right order" = oído primero, doctrina pura en el producto.

## 🔴 EL HALLAZGO GORDO: LA APP ESTÁ SORDA Y MUDA
CERO audio en todo el código: sin speechSynthesis, sin MP3s, sin TTS, sin ElevenLabs. Los botones "Listen" del shadowing y "Record Your Attempt" del minimal-pairs son DECORATIVOS (sin handler). Una app de método oído-primero SIN OÍDOS: la capa de sonido completa falta.

## MAPEO A LAS 4 ETAPAS
| Etapa | Estado en Coach |
|---|---|
| 1 Oído | ❌ NO EXISTE (sin audio) |
| 2 Ojos/imagen | ❌ NO EXISTE (sin imágenes en lecciones) |
| 3 Letras/comprensión | 🟡 PARCIAL (quiz con IPA en teoría; ejercicios de opción múltiple sí) |
| 4 Boca | ❌ NO EXISTE (botón decorativo, sin rúbrica) |

## LA COSTURA (orden propuesto — palomita pendiente de JJ)
1. **CAPA DE SONIDO** (costura crítica): la cadena de audio del piloto (Sarah MP3 horneados + fallback TTS) inyectada al Coach — los drills bit/beat, las anclas bə-NA-nə, el shadowing. Material compilado DE ABAJO (piloto) HACIA ARRIBA (Coach).
2. TELEMETRÍA: Coach → logMorfofonoSession (a2-progress ya persiste; falta el cable al expediente 4 canales).
3. MYOGYM: rúbrica E01 (inicial/vocal/final) + grabación + latencia en el botón Record.
4. ETAPA 2: imágenes CVC (Fósil) en los drills.
5. TESTIMONIOS REALES + quiz alimentando expediente.

## LO QUE NO SE TOCA
El quiz de colocación (excelente), el copy bilingüe, la identidad visual, el pricing de 3 tiers. La doctrina del Coach ya es correcta — lo que falta es MOTOR, y el motor es nuestro.
