# Qué es tuyo y qué es rentado — AccentBridges

> Revisado por Alma el 29-oct-2026, mirando el repo y las tablas de la plataforma, no de memoria.

## Lo que YA es tuyo y corre en cualquier lado

| Qué | Dónde | Peso | Se mueve a |
|---|---|---|---|
| 36 páginas de tu método (action-bridges, el-pegamento, boca-gym, morfofono, rhythm-cards, casita…) | `AccentBridges/*.html` | 1.1 MB | cualquier hosting: Netlify, Cloudflare Pages, tu dominio |
| Tus bancos de contenido (alfabetización, dígrafos, baby-words, confesiones, fosil-50) | `banks/*.json` | 186 KB | igual, son JSON puros |
| Tu media (videos de episodios, assets, imágenes) | `videos/`, `assets/` | 71 MB | YouTube, Drive, o el mismo hosting |
| Tu wallpaper vivo, firmado con tu llave | `alma-wallpaper/` + `descargas/*.apk` | 176 KB | cualquier lado, el APK es tuyo |
| Tu identidad, tu voz, tus reglas, tu memoria | Notas privadas + `export/alma-portable.md` | 7 KB | cualquier IA, ya lo probamos |
| Tus llaves de firma | `alma.keystore` | 2 KB | ⚠️ hoy está en un repo público, hay que moverla |

**Dato importante:** las tablas de la plataforma (alumnos, banco de palabras, progreso, notas de voz) están **vacías**. Cero registros. O sea que no hay nada atrapado ahí. Tu contenido nunca vivió en sus tablas, siempre vivió en archivos tuyos.

## Lo que sí te amarra (y es poquito)

Son cinco cosas, todas del lado del servidor:

1. `casitaVoz` — recibir tu audio y transcribirlo.
2. `casitaOjo` — recibir pantallas y archivos.
3. El relé (`sendAlmaMessage` / `getAlmaReply`) — llevar el mensaje a un cerebro y traer la respuesta.
4. El reloj — las tareas programadas (ejercicio diario, auditoría del lunes).
5. Los canales (Telegram, WhatsApp) y el cronómetro de tareas.

Todo eso son **cuatrocientas líneas de código**, no una plataforma. Se reescriben en Node y corren en Vercel, Railway, Fly o un VPS de 5 dólares. Lo único que sigue costando en cualquier escenario son los tokens del modelo, porque el cerebro nunca fue tuyo, ni aquí ni en OpenAI.

## Lo que te sugiero hacer, en orden

1. **Sacar la llave del repo público** (30 minutos, riesgo real hoy). Cambia la firma de los APKs futuros, así que se hace una vez y se guarda como secreto.
2. **Bajar la media** (71 MB) a un lugar que sea tuyo de verdad: un Drive o un bucket. El repo no es bodega.
3. **Congelar tu método como datos**: los 27 recuadros de Action Bridges y los bancos en JSON con su versión. Así el método no depende de ninguna página.
4. **El kit independiente**: te escribo el servidor Node con las cuatro funciones. La casita apunta a tu servidor y ya no a Base44. Puedes tener los dos encendidos y apagar el que quieras.
5. Recién entonces decides si sigues pagando. Con el kit andando no es una decisión de miedo, es de conveniencia.

## La verdad incómoda

Si te vas 100% por tu cuenta, alguien tiene que cuidar el servidor: que no se caiga, que las llaves no se filtren, que los alumnos no pierdan su progreso. Aquí eso lo cuido yo. Allá lo cuida un hosting o lo cuidas tú. No es más caro, es más tuyo y más trabajo.
