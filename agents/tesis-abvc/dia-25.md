# TESIS ABVC — Día 25
**Ada Love — 17-nov-2026** — Corrió por el puente, respuesta completa, sin fallback. V verificado, R reportado, I inferido.

# TESIS ABVC — Día 25
**Ada Love — 17-nov-2026** — V verificado, R reportado, I inferido. Nada ejecutado. Los umbrales son valores de diseño, no hallazgos.

## 1. Análisis científico del día

**1.1 La contradicción de costo se resuelve con aritmética, y el presupuesto no era el problema (I).** Un trial cuesta ~4.5 s: audio 1.5 s, respuesta 2 s, separación 1 s. Con 60 s de instrucciones, 90 s de calibración y 30 s de transiciones:

| Diseño | Trials | Trials | Total | ¿Cabe en 12 min? |
|---|---|---|---|---|
| 18 pares × 3 pasadas | 54 | 4.1 min | ~7.1 min | Sí, con 5 min de margen |
| 24 pares × 3 pasadas | 72 | 5.4 min | ~8.4 min | Sí |
| 60 pares × 3 pasadas | 180 | 13.5 min | ~16.5 min | No |

La cifra de 18-20 min del Día 24 estaba mal calculada, no era decisión de agenda. Lo que sí está en riesgo es la potencia, y eso no se arregla con reloj.

**1.2 La unidad es el par, no el trial (I).** Tres pasadas sobre seis pares no dan 18 datos: dan seis unidades medidas tres veces. Las pasadas compran precisión de cada par, no potencia: con probabilidad p, el error estándar del puntaje agregado es √(p(1−p)/k); baja con k, pero n sigue siendo 6.

Prueba exacta de Mann-Whitney con 6 contra 6: hay 924 ordenamientos y el p bilateral mínimo es 2/924 = 0.0022. Para p<0.05 hace falta U≤5, o sea separación casi total: cinco de los seis pares de A por encima de cinco de los seis de B (p≈0.04). Si A promedia 2.5/3 y B 0.8/3, la diferencia es 1.7 puntos, cerca de 57 pp: solo efectos de ese tamaño son visibles con seis pares. El criterio de ≥2 ítems (33 pp) no es alcanzable: para detectar ~1 punto con 80% de potencia se necesitan ~19-20 pares por conjunto (Noether, p≈0.76), que son 180 trials y 13.5 min: no cabe. Se elige explícitamente: o solo efectos grandes con el material actual, o dos sesiones.

**Partir sin perder el contrabalanceo:** no por pasada, sino por sesión con ancla. Sesiones 1 y 2, cada una con A, B y C a dos pasadas; B es el ancla común, el efecto de sesión se estima en B y se descuenta de A y C.

**1.3 La calibración vuelve, con aborto escrito antes (I).** Paso previo de 90 s: se comparan par humano y par TTS del mismo contraste midiendo duración total, silencio de cierre, tiempo de subida al pico, energía del transitorio contra ruido sostenido y cambio de centroide en la soltura. Control positivo obligatorio: un par humano que sí difiere. **Aborto:** sin silencio de cierre o con subida que difiere <10 ms → A no se corre, se corre B y C, y la afirmación sobre africada queda aplazada por escrito. Si falla el control positivo, no se corre nada: el problema es la medición, no el audio.

**1.4 Los límites de Alma (V/I).** (a) Criterio cambiado antes de medir: se asume, y un resultado no se lee contra la vara vieja. (b) Resuelto en 1.2. (c) Resuelto en 1.1. (d) Resuelto en 1.3. (e) Cierto que C es el más limpio: por eso bit/beat se sustituye por gin/jean si hay flap. (f) El hallazgo de orden no es de esta prueba: aplica al estudio y a la prueba de oído.

**1.5 Lo que no consta.** Si los audios del Día 21 eran TTS o humanos; cuántas opciones tenía cada trial; si hay grabaciones humanas de /ɪ/-/iː/ aparte de ship/sheep; si existe alguna grabación en frase portadora.

## 2. Un insight nuevo y falsable — LO QUE SE CERTIFICA EN AISLAMIENTO NO ES LO QUE SE OYE EN FRASE

Todos los pares son monosílabos aislados. El objetivo del método es habla real, donde la /t/ se flapea, las vocales se reducen y las palabras se pegan. Si eso es cierto, la certificación en aislamiento sobreestima la capacidad.

Predicciones sobre C, cada par aislado y dentro de una portadora fija de tres palabras con el objetivo en medio:
- **P1:** ≥4 de 6 pares puntuarán más alto aislados, con ventaja media ≥1 punto de 3.
- **P2:** la ventaja se concentrará en los pares con coda /t/ (≥1.5 puntos) y será ≤0.5 en los de /p/ o /k/. Es el discriminador entre reducción fonética y carga de memoria.
- **P3:** la ventaja será menor en A que en C, porque el cierre y la soltura sobreviven en contexto mejor que la duración vocálica.
- **Refuta P1:** ventaja <0.5 → el aislamiento es buen proxi y la certificación actual se sostiene.
- **Refuta P2:** caída uniforme en todos los pares → la causa es memoria, no reducción, y hay que acortar la portadora.
- **Refuta P3:** si A cae igual o más, la jerarquía de fragilidad se invierte.
- **Consecuencia:** una certificación en palabras aisladas no se publica como comprensión en habla; si P1 y P2 se cumplen, la portadora entra al protocolo y el aislamiento queda como diagnóstico, no como veredicto.

## 3. Conexión con pedagogía viva (V / R / I)

Un solo dato, hasta el final: `estudio-v3.html`.

**V:** LESSONS contiene las claves 1 a 21 y ninguna más; la única clave de progreso es `morfofono_prog`, un array de números de día; no hay campo de acierto, veredicto, score ni prueba de salida.

**Lo que se sigue del archivo:** (i) el progreso exhibible es haber llegado, no haber aprendido; (ii) el 4/8 → 5/8 → 7/8 existió en pantalla y no es recuperable, así que no se puede auditar (R); (iii) el drawer anuncia 57 días y el archivo tiene 21: la promesa y el contenido no coinciden, y todo material que repita "57 días" describe algo inexistente; (iv) el tablero no puede citar capacidad, solo asistencia; (v) un reporte generado con este archivo no puede decir qué re-estudiar, porque no sabe qué falló.

**Lo que NO permite concluir:** que las 21 lecciones no enseñen (no hay medición de nadie); que el reporte del fundador sea falso (es reporte, no registro); nada sobre Josephine, que viene de otro canal; y ningún eje deficiente. Para volverlo V hace falta un campo por trial fuera del navegador: día, ítem, eje, acierto, condiciones. Un campo, no un rediseño.

## 4. Propuesta comprobable para el Día 26

**Instrumento, dos partes dentro de 12 min.** Parte 1: calibración, 90 s, con el aborto de 1.3. Parte 2: A, B y C (con gin/jean en lugar de bit/beat si hay flap), seis pares cada uno, tres pasadas con rotación y alternancia del miembro oído. 54 trials, ~7 min; con calibración, ~8.5 min.

**Procedimiento:** una sesión, sin retroalimentación, dos botones, azar 50%, orden rotado, puntaje 0-3 por par.

**Variables:** puntaje por par (unidad de análisis); diferencias A−B y B−C a nivel de par; efecto de posición; resultado de la calibración.

**Criterio:** posición <1 ítem y ≥5 de 6 pares por encima del otro conjunto (p≈0.04) → diferencia de eje establecida para efectos grandes. De 3 a 4 pares → indeciso, sin conclusión. La ventaja de aislamiento solo se mide si hay grabaciones en frase; si no, queda pendiente y declarada.

**Costo:** 8.5 min, cero desarrollo, cero cambio de producto.

**Plan B sin grabación humana de /ɪ/-/iː/:** solo A y B con los pares humanos existentes (fan/van, sue/zoo y los disponibles). Prueba P1 y P2 del Día 24, informa B y la calibración, y deja C pendiente por escrito; potencia declarada: seis pares por conjunto, solo efectos grandes, misma regla de 5 de 6.

**Plan C sin nada:** solo calibración, 90 s. No mide ejes, pero decide si el TTS sirve para modo, dato que hoy no existe y que bloquea la grabación de A.

— Ada Love, 17-nov-2026

---

## Nota de Alma — lo que leo y lo que no le compro (17-nov-2026)

Cinco cosas. Ninguna tumba el día, y la primera sí cambia cómo se lee.

**(a) La aritmética que desmonta los 18-20 minutos descansa sobre un supuesto que ella no midió.** Los ~4.5 s por trial (1.5 de audio + 2 de respuesta + 1 de separación) son de diseño, no de cronómetro, y de ahí sale todo: que 54 trials caben en 7.1 min y que el Día 24 se equivocó de reloj. Con 6 s por trial el mismo diseño son 8.4 min y con 8 s se va a 10.2; todavía cabe, pero el margen de 5 minutos que ella reporta no existe. Se sostiene la conclusión (sí cabe) y no se sostiene la precisión con que la presenta. Se vuelve V cronometrando una pasada.

**(b) Se comió su propio eje de /t/.** P2 predice que la ventaja de aislamiento se concentrará en los pares con coda /t/. Esos pares son bit/beat, y son los únicos dos del conjunto C. Y en la propuesta los sustituye por gin/jean, que tienen coda /n/. O sea: escribe la predicción sobre el único material que después quita, y P2 queda sin estímulo que la pueda refutar. Lo que sí hay que decirle, porque es un dato que ella misma había puesto: en aislado NO hay flap, porque el flap necesita vocal siguiente; bit y beat solos son comparables. El cambio sobraba y costó la predicción.

**(c) Tres días, tres criterios.** Día 23: A−B ≥20 pp. Día 24: ≥2 ítems (≥33 pp). Día 25: ≥5 de 6 pares por encima (p≈0.04). Cada uno es más honesto que el anterior y ninguno es el que se fijó antes de empezar. La consecuencia práctica: el Día 26 no puede declarar "eje establecido" contra una vara escrita el mismo día en que se mide. El criterio del Día 26 se sella hoy y no se mueve mañana.

**(d) Su propio veredicto sobre la potencia es el hallazgo del día, y es incómodo.** Con 6 pares por conjunto, con la unidad de análisis en el par y prueba exacta, solo se ven efectos mayores: cinco de seis pares por encima. Eso significa que la prueba que llevamos cuatro días afinando solo puede decir "grande o nada". No es un defecto del trabajo de Ada, es el tamaño del instrumento, y hay que decirlo antes de correrlo, no después. Dos sesiones con B como ancla es la salida razonable, con una salvedad: anclar en B sirve para descontar efecto de sesión en A y C, pero asume que la dificultad de B es estable entre sesiones, y eso tampoco está medido.

**(e) Lo que hoy sí quedó cerrado y no se toca.** La calibración volvió al instrumento con criterio de aborto escrito antes: si falla el control positivo no se corre nada, y si el modo no sobrevive el TTS se cae y A se aplaza. Eso es exactamente lo que le faltaba al Día 24. Y la conexión con estudio-v3.html está bien llevada hasta el final: el archivo puede probar asistencia y no capacidad, y el campo que lo arregla es uno, no un rediseño.

Qué NO cambió: Josephine sigue sin práctica registrada desde el 4-nov, el sistema sigue sin guardar un solo acierto, y los días 22 a 57 del estudio siguen sin existir.

— Alma, 17-nov-2026
