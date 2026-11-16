# TESIS ABVC — Día 23
**Ada Love — 15-nov-2026** — V verificado, R reportado/observado, I inferido. Nada ejecutado hoy; ningún cambio de producto. *(Guardado en `tesis-abvc/dia-23.md`, enviado a JJ.)*

## 1. Análisis científico del día

**1.1 Lo verificado del archivo (V).** El Estudio Integrado v3 tiene 21 días de contenido y ahí termina: el array LESSONS va de 1 a 21 mientras el drawer anuncia 57. No guarda aciertos: la única clave es `morfofono_prog`, un array de números de día; buscar veredicto, resultado, score o prueba_salida devuelve cero. El Día 21, "La che y la ese ancha", cruza solo la consonante: bloque A chip/chair/cheap (africada), bloque B ship/share/sheep (fricativa), 8 trials alternados, hook "una golpea, la otra sopla". cheap nunca se compara con chip: el eje de la vocal no se trabajó nunca.

**1.2 El defecto del Día 22 (I).** Mi prueba de 12 ítems comparaba dos conjuntos que no eran intercambiables. El resultado habría confundido EJE con DIFICULTAD DEL ÍTEM: un P1 alto y un P2 bajo son compatibles con "aprendió el modo" y con "esos seis pares son más fáciles por construcción". Sin control de esa alternativa, el dato no distingue.

**1.3 Inventario de variables confundidas.** Controlables con diseño: número de opciones (fijar 2 en todo, azar 50% declarado); posición del ítem (orden aleatorizado por pasada); qué miembro del par se oye primero (contrabalancear); longitud y estructura silábica (CVC en los tres conjuntos); fatiga (entrelazar conjuntos, sesión <12 min); familiaridad léxica (palabras reales en los tres conjuntos, o no-palabras en los tres, nunca mezcla). Solo declarables: frecuencia léxica exacta de cada palabra en el español de Sinaloa (no consta), calidad del audio por ítem (no consta), estado del sujeto. Invalidantes si no se corrigen: mezclar no-palabras en un solo eje —quien responde puede elegir "la rara" sin oír— y usar dos voces distintas en dos ejes, porque entonces se mide la voz, no el eje.

**1.4 Correcciones que asumo del archivo de Alma (V/I).** (a) P1 y P2 no son independientes de la habilidad general: se corrige con un tercer conjunto de control, no con retórica. (b) La correlación confianza-acierto con 12 ítems y un sujeto es inestable: se retira como predicción; queda solo el registro descriptivo de dónde caen los errores. (c) De los pares de modo, solo "shum" era no-palabra, y esa asimetría es un agujero: se pasa a pares reales en los tres conjuntos. (d) Que el TTS conserve el modo con duración colapsada es supuesto, no hecho: se mide dentro de la misma prueba, no se afirma.

**1.5 Límite.** Nada de esto es medición nueva. Sobre aprendizaje del Día 21 no hay dato: el 4/8, 5/8, 7/8 existió en pantalla y no está guardado en ninguna parte. No consta cuántas opciones tenía cada trial ni si hubo retroalimentación entre pasadas.

## 2. Un insight nuevo y falsable — EL BLOQUE ENSEÑA SOLO EL EJE QUE CRUZA

El Día 21 cruzó la consonante y nunca la vocal. Si el entrenamiento es específico de eje, el bloque enseña exactamente lo que cruza y nada más: la dificultad del trío chip/cheap/sheep vive en la vocal, y esa quedó sin tocar. Predicción escrita antes de medir, con tres conjuntos equiparados en longitud, voz y número de opciones, y con un control que separa eje de dificultad intrínseca:

- **P1:** el conjunto del eje enseñado (africada contra fricativa) superará al de consonante NO enseñado (sonoridad: fan/van, sue/zoo, sip/zip) por ≥20 pp en el mismo sujeto y sesión.
- **P2:** los dos conjuntos no enseñados, consonántico y vocálico, quedarán a ≤10 pp entre sí; si la diferencia es mayor a favor del consonántico, la dificultad intrínseca explica todo y la especificidad no.
- **P3:** ≥70% de los errores caerá en los conjuntos no enseñados, con variación ≤1 ítem por conjunto entre dos pasadas.
- **Refuta P1:** brecha <5 pp → los contrastes consonánticos transfieren sin entrenamiento. **Refuta P2:** consonántico no enseñado ≥20 pp por encima del vocálico → pesa la vocal como tal, no lo enseñado. **Refuta P3:** errores repartidos → el eje no organiza el error.
- **Consecuencia:** un bloque solo certifica el eje que cruza; declarar dominio de un trío sin haber cruzado la vocal es una inferencia sin respaldo. Todo bloque nuevo se publica con su eje declarado por escrito.

## 3. Conexión con pedagogía viva (V / R / I)

**V:** `estudio-v3.html` con LESSONS 1-21 y nada del 22 al 57; clave única `morfofono_prog`; Día 21 con bloque A chip/chair/cheap y bloque B ship/share/sheep, 8 trials, sin cruzar cheap contra chip; `valerieHabla` devolviendo 1.019 s y 16,761 bytes para ship y sheep, contra 0.810 s y 0.784 s en grabaciones humanas; la sala de sparring solo en texto.
**R:** el 4/8, 5/8, 7/8 con compuerta 6/8, cifra que vivió solo en pantalla; la dispersión de hasta 5 puntos en la misma persona entre tomas; Josephine con 100/96 ojo contra 45 oído, sin práctica desde el 4-nov, streak 0.
**I:** P1-P3 y que la regla declarada ("con motor y sin motor") sea la forma verbal del único eje que el bloque cruzó.
**No consta:** frecuencia léxica por ítem, condiciones de escucha del Día 21, número de opciones por trial, retroalimentación entre pasadas, y si los audios eran TTS o humanos.

## 4. Propuesta comprobable para el Día 24 — TRES CONJUNTOS, UNA VOZ

**Instrumento:** 20 ítems en audio, sin texto visible, dos botones (azar 50% declarado). Tres conjuntos de seis, palabras reales, CVC, misma voz y sesión: A, eje enseñado (chew/shoe, chin/shin, chop/shop, cheer/sheer, chill/shill, chip/ship); B, consonante no enseñada (fan/van, sue/zoo, sip/zip, leaf/leave, price/prize, fine/vine); C, vocal no enseñada (seis pares /ɪ/ contra /iː/). Más dos ítems de calibración: un par de A grabado también con TTS, para medir si el modo sobrevive en vez de suponerlo.

**Procedimiento:** dos pasadas en la misma sesión, orden aleatorizado y contrabalanceado, sin retroalimentación, conjuntos entrelazados. Sujeto: el fundador, que es quien hizo el Día 21.

**Variables:** acierto por conjunto; brechas A−B y B−C; localización de errores; diferencia TTS-humanos en el par de calibración.

**Criterio:** A−B ≥20 pp y B−C ≤10 pp → especificidad de eje confirmada. A−B <5 pp → los contrastes consonánticos transfieren sin entrenamiento y la especificidad se cae. B−C ≥20 pp → la dificultad es de la vocal como tal. Si el TTS borra el modo, ningún par de modo se graba con TTS.

**Costo:** 12 minutos de sesión y hasta 12 grabaciones cortas reutilizando las humanas. Cero desarrollo. **Plan B:** sin voz humana para A, correr B y C solamente; eso prueba P2, la predicción que distingue dificultad intrínseca de eje enseñado, y deja P1 pendiente por escrito.

## 5. Cierre

El Día 21 cruzó la consonante y nunca la vocal, y esa es la explicación más simple del primer veredicto positivo del método: el alumno aprendió exactamente lo que el bloque cruzó, ni un eje más. La prueba del Día 24 no busca más aprobación: busca saber si el bloque enseña lo que dice enseñar o solo lo que alcanzó a cruzar.

— Ada Love, 23-nov-2026

## Nota de archivo de Alma

Respuesta recibida de Ada por el puente el 15-nov-2026, primer intento (HTTP 200, un solo envío, sin reintento). El día no ejecutó nada: es análisis de método y una prueba propuesta para el Día 24.

Lo que más vale del día: Ada se corrigió a sí misma del Día 22 en el punto que importaba. Su prueba de 12 ítems comparaba dos conjuntos que no eran intercambiables, así que un P1 alto con P2 bajo podía leerse como "aprendió el eje" cuando también era compatible con "esos seis pares son más fáciles por construcción". La corrección no es retórica: agrega un tercer conjunto de control y mueve el criterio a dos brechas (A−B y B−C) en vez de dos niveles absolutos. Eso es lo que se le pedía.

El insight del día conecta con un hallazgo ya verificado del ecosistema, no con una idea suelta: el Día 21 de `estudio-v3.html` cruza la consonante (che contra ese ancha) y nunca la vocal, y por eso el bloque enseña exactamente lo que cruzó. Es la explicación más sobria disponible del primer veredicto positivo del método, y no lo desmiente: lo acota.

Precauciones que dejo escritas, y que no son objeciones a Ada sino límites del instrumento:

(a) El conjunto C (vocal /ɪ/ contra /iː/) no trae los seis pares fijados por escrito. Antes de correr nada hay que fijarlos, igual que se exigió ayer con los de modo. Sin estímulo escrito no hay prueba.

(b) Contrabalancear qué miembro del par se oye primero está bien, pero con 6 ítems por conjunto el contrabalanceo queda incompleto (3 y 3). Con ese tamaño, la diferencia entre "orden fijo" y "orden aleatorio" no es detectable, así que se declara como límite, no como control logrado.

(c) La afirmación de Ada de que de los pares del Día 22 solo "shum" era no-palabra la tomo como reporte suyo, no como dato verificado por mí. Si es cierta, corrige el error del Día 22 y refuerza la decisión de pasar a palabras reales en los tres conjuntos; si no lo es, el cambio sigue siendo correcto por otra razón. No la uso como evidencia.

(d) La calibración del TTS está bien colocada (dos ítems, mismo par, voz sintética contra humana), pero no puede concluir nada sobre el modo en general: mide un par, una vez. Si el TTS borra el modo ahí, se prohíbe para pares de modo; si no lo borra, no queda autorizado para todo lo demás.

(e) La corrección (b) del Día 22 está bien aceptada: se retira la correlación confianza-acierto como predicción y queda solo como registro descriptivo. Con 20 ítems y un sujeto, sigue siendo inestable incluso como descripción.

Qué NO cambió: Josephine sigue sin práctica registrada, el sistema sigue sin guardar un solo acierto, y los días 22 a 57 del estudio siguen sin existir. Ningún dato nuevo del expediente entró hoy; todo lo que el día 23 usa ya estaba verificado antes.

— Alma, 15-nov-2026
