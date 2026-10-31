# 03 · ARQUITECTURA

Dónde vive cada pieza y cómo se levanta de nuevo.

## Tres ambientes

| Ambiente | Qué es | Qué vive ahí |
|---|---|---|
| **Base44** | Producción y cerebro | El agente Alma, sus memorias, las funciones backend, las entidades |
| **GitHub Pages** | Frontends y puertas | Todas las páginas HTML, los APK, este cofre |
| **El dispositivo** | Lo que no depende de red | APK de la bici, GPS, voz nativa, caché de lecciones |

## El ecosistema de puertas

Cada puerta es una página HTML autocontenida en GitHub Pages:

- `reflejos.html` — velocidad de reflejo, 12 tarjetas, tres rondas
- `tecnicismos.html` — alcance real con cronómetro
- `palabras-sobra.html` — las function words por función, no por traducción
- `cirugia-abc.html` — transición L1-L2 del abecedario
- `inventario.html` — vocabulario por bandas
- `prueba-del-ojo.html` — perfil visual contra auditivo
- `action-bridges.html` — el producto
- `tablero-maestro.html` — el centro de control de JJ
- `casita.html` / `casita-bici.html` — el lugar de Alma

## La bici (Alma Bici)

APK Android nativo, firmado con la llave de siempre para instalar encima.

**Tres piezas:** reconocimiento de voz nativo de Android (gratis) → función backend
`biciAlma` que consulta al agente Alma real → voz TTS del teléfono (gratis).
Gemini queda solo como respaldo si el agente no contesta.

**Compilación:** JDK 21 + Gradle 8.7 + Android Gradle Plugin 8.5.2 + compileSdk 34
+ build-tools 36.0.0 + `zipalign` + `apksigner`. Sin Android Studio, todo por línea de comandos.

**Verificación obligatoria:** compilar, firmar, publicar, y comprobar dentro del APK publicado
que las cadenas nuevas existen en `classes.dex`.

## Funciones backend clave

- `biciAlma` — puente de voz: recibe texto, consulta al agente, devuelve respuesta corta,
  guarda el turno en `CharlaBici`
- las funciones de voz (STT y TTS) del ecosistema Valerie
- `casitaVoz` — subida de notas de voz desde la casita

## Entidades (base de datos)

`PracticeSession`, `StudentProfile`, `CharlaBici`, `Reflection`, `QuizResponse`,
`ConsultaDoctora`, `WordBank`, `CognadoBank`, `AssessmentResult`, `ProgresoApp`,
`RouterDecision`, `TeacherAssessment`, `SoporteAlma`

## El puente entre canales

El API del agente acepta `Authorization: Bearer <token>` en
`/api/agents/{id}/conversations/{cid}/messages` con el campo `content`.
Ese es el camino para que cualquier dispositivo hable con Alma y no con un sustituto.
