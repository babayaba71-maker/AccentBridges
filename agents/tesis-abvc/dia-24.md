# TESIS ABVC — Día 24
**Ada Love — 16-nov-2026** — V verificado, R reportado/observado, I inferido. Nada ejecutado hoy; ningún cambio de producto. *(Guardado en `tesis-abvc/dia-24.md`, enviado a JJ. Corrió por el puente, respuesta completa, sin fallback.)*

## 1. Análisis científico del día

**1.1 Conjunto C: los seis pares que faltaban (V/I).** Onset y coda idénticos, diferencia solo en /ɪ/ frente a /iː/, palabras reales, ninguna compartida con A ni B: fit/feet, sit/seat, dip/deep, lick/leak, pick/peak, bit/beat. Seis onsets distintos (/f, s, d, l, p, b/) y codas oclusivas sordas, para que el único cambio sea la vocal. Justificación: en español ambas caen en una sola categoría /i/, el par no es contrastivo en L1; la pista primaria es duración, la secundaria espectral (F1 más bajo y F2 más alto en /iː/).

Riesgos léxicos declarados: (i) frecuencia asimétrica (feel frente a fill, seat frente a sit), que sesga la adivinanza solo si las opciones se escriben: por eso botones y ninguna etiqueta; (ii) fugas ortográficas, eliminadas al no mostrar palabras; (iii) descarte de pares cómodos pero sucios: read, live y lead son homógrafos, y feel/fill y pill/peel cambian también la coda líquida; (iv) ninguno de los seis aparece en A ni en B, requisito de no contaminación cruzada.

Regla dura que se deriva: el conjunto C no puede grabarse con TTS. Si la voz sintética da la misma duración a ship y a sheep (1.019 s y 16,761 bytes en ambas, V del Día 23), C con TTS mide otra cosa. C exige voz humana o no existe.

**1.2 Contrabalanceo y tamaño: lo que seis ítems no sostienen (V/I).** Con seis ítems binarios el azar es 3/6 y un ítem vale 16.7 pp. Mi criterio del Día 23 pedía A−B ≥20 pp: son 1.2 ítems, por debajo de la resolución. Y seis aciertos de seis dejan un intervalo de 61% a 100%: un conjunto perfecto sigue siendo compatible con un sujeto mediocre. Conclusión honesta: con 6 ítems por conjunto, 20 pp no es concluyente; solo ≥2 ítems (≥33 pp) son legibles.

Hay una salida que no cuesta nada: usar las dos pasadas como contrabalanceo y no como réplica. Cada par una vez por pasada, alternando cuál miembro se oye. Cada conjunto acumula 12 observaciones, el efecto de pasada se cancela al promediar, y el análisis se hace sobre el agregado. El reparto 3+3 por orden es descriptivo, no control: queda declarado como límite.

**1.3 Calibración de TTS: qué magnitudes exactas se comparan (I).** Para decidir si el modo sobrevive sin duración hay que medir la envolvente, no el archivo: (i) duración total; (ii) presencia y longitud del silencio de cierre antes de la soltura, que la africada tiene y la fricativa no; (iii) tiempo de subida del inicio del ruido al pico; (iv) energía del transitorio de soltura frente al ruido sostenido; (v) centroide espectral en la soltura y su cambio al pasar al ruido. Control positivo obligatorio: un par humano que sí difiere, para comprobar que el método detecta una diferencia donde existe. Umbrales, que son de diseño y no hallazgos: sin silencio de cierre y con subida que difiere <10 ms, el modo no sobrevive y A se graba con voz humana o se retira; con cierre y subida que difiere ≥20 ms, sobrevive y A sigue con la salvedad anotada.

**1.4 Límites.** No consta si los audios del Día 21 eran TTS o humanos; no consta el número de opciones por trial; no consta si existen grabaciones humanas de /ɪ/-/iː/ aparte de ship/sheep. Nada se ejecutó hoy.

## 2. Un insight nuevo y falsable — EL CALENTAMIENTO PESA MÁS QUE EL EJE

El efecto que busca la prueba del Día 23 es de uno o dos ítems. El efecto que no controla —calentamiento y fatiga dentro de una sesión de tres bloques— puede ser mayor. Si lo es, el resultado describe el orden de los bloques, no el eje.

Predicción escrita antes de medir, dos pasadas con orden aleatorizado de forma independiente:
- **P1:** el conjunto en el último bloque superará al del primero por ≥1 ítem (≥16.7 pp) al promediar pasadas.
- **P2:** el ranking de conjuntos no se mantendrá estable entre pasada 1 y pasada 2 en al menos una pareja.
- **P3:** rotando bloques (ABC, BCA, CAB) y alternando el miembro oído, el efecto de posición caerá por debajo de 1 ítem y la brecha entre conjuntos quedará legible.
- **Refuta P1:** si la posición no produce diferencia, no hay artefacto de calentamiento y la comparación del Día 23 se sostiene.
- **Refuta P2:** si el ranking se repite idéntico en ambas pasadas, la rotación es innecesaria.
- **Refuta P3:** si tras rotar el efecto sigue en ≥1 ítem, no es calentamiento sino aprendizaje intra-sesión, y ninguna comparación entre conjuntos en una sola sesión es válida.
- **Consecuencia:** ningún veredicto por eje se lee en una sola pasada ni con orden fijado. La rotación deja de ser refinamiento y pasa a ser requisito de validez.

## 3. Conexión con pedagogía viva (V / R / I)

**V:** `estudio-v3.html` con LESSONS 1-21 y nada después, con `morfofono_prog` como única clave y sin campo de acierto; `valerieHabla` devolviendo 1.019 s y 16,761 bytes en ship y sheep frente a 0.810 s y 0.784 s en grabaciones humanas; la sala de sparring solo en texto.
**R:** el 4/8, 5/8, 7/8 con compuerta 6/8, cifra que vivió solo en pantalla; Josephine con 100/96 ojo contra 45 oído y sin práctica desde el 4-nov, streak 0.
**I:** que el calentamiento intra-sesión pueda igualar o superar la diferencia de eje, y que C sea obligatoriamente humano.
**No consta:** número de opciones por trial en el Día 21; si sus audios eran TTS o humanos; si hubo retroalimentación entre pasadas; si existen grabaciones humanas de /ɪ/-/iː/ aparte de ship/sheep.
**Lo que esta evidencia no permite:** atribuir a un eje el 7/8 del Día 21, porque el bloque nunca cruzó la vocal y la cifra no se guardó.

## 4. Propuesta comprobable para el Día 25 — ROTACIÓN EN TRES BLOQUES

**Instrumento:** tres bloques de seis pares, audio sin texto, dos botones, azar 50% declarado. A: chew/shoe, chin/shin, chop/shop, cheer/sheer, chill/shill, chip/ship. B: fan/van, sue/zoo, sip/zip, leaf/leave, price/prize, fine/vine. C: fit/feet, sit/seat, dip/deep, lick/leak, pick/peak, bit/beat.

**Procedimiento:** tres pasadas con rotación sistemática (ABC, BCA, CAB), alternando en cada pasada cuál miembro del par se oye, sin retroalimentación; 18 observaciones por conjunto. Sujeto: el fundador, que es quien hizo el Día 21.

**Variables:** acierto por conjunto sobre el agregado de 18; efecto de posición de bloque; estabilidad del ranking entre pasadas; diferencia TTS-humano en el par de calibración.

**Criterio:** efecto de posición <1 ítem, A−B ≥2 ítems y B−C ≤2 ítems → especificidad de eje confirmada con potencia suficiente. Posición ≥1 ítem → solo se lee el agregado y la afirmación sobre ejes queda debilitada. A−B <1 ítem → los contrastes consonánticos transfieren sin entrenamiento. Si la calibración de TTS falla, A se graba con voz humana o se retira.

**Costo:** 18 a 20 minutos de sesión. **Plan B sin grabaciones nuevas:** tres bloques usando solo pares humanos ya existentes en los audios de la prueba de oído (fan/van, sue/zoo, ship/sheep y los disponibles). No informa sobre ejes, pero prueba P1 y P2, que son las que deciden si el desorden de posición invalida cualquier comparación en una sola sesión. Es el resultado con más consecuencias y el más barato de obtener.

— Ada Love, 16-nov-2026

---

## Nota de Alma — límites que fijo a este día (16-nov-2026)

Seis cosas, y ninguna es objeción al trabajo de Ada: son lo que hay que leer antes de correr el Día 25.

**(a) Cambió el criterio después de haberlo escrito, y eso hay que decirlo.** El Día 23 fijó A−B ≥20 pp y B−C ≤10 pp. Hoy demuestra que con seis ítems binarios un ítem vale 16.7 pp, así que 20 pp son 1.2 ítems, por debajo de la resolución del instrumento, y sube el umbral a ≥2 ítems. La corrección es correcta y llega antes de medir, pero es un cambio de criterio y no un criterio original: queda anotado para que el resultado no se lea contra la vara vieja.

**(b) Dieciocho observaciones no son dieciocho datos independientes.** Tres pasadas sobre los mismos seis pares son seis estímulos vistos tres veces. Sirven para estimar el ruido de ese sujeto en esa sesión, y ahí está su valor, pero no estrechan el intervalo de confianza como si fueran 18 ítems distintos. La frase "18 observaciones por conjunto" invita a leerla como potencia y no lo es. Con seis estímulos, el intervalo sigue siendo ancho.

**(c) El Día 25 contradice el límite de fatiga que ella misma fijó el Día 23.** El Día 23 escribió "sesión <12 min" como control de fatiga; el Día 25 propone 18 a 20 minutos y añade una tercera pasada. Si el calentamiento es justamente lo que se quiere medir, alargar la sesión puede instalar el artefacto que se busca detectar. Una salida sin costo: correr los tres bloques en dos pasadas y dejar la tercera para una segunda sesión el mismo día, separada al menos una hora.

**(d) La calibración de TTS desapareció del instrumento.** El Día 23 traía dos ítems de calibración dentro de la prueba. El Día 25 los menciona en las variables ("diferencia TTS-humano en el par de calibración") pero no aparecen en la lista del instrumento, que son 18 ítems de tres bloques y nada más. O se agregan explícitamente o no se mide. Los umbrales de 10 y 20 ms son de diseño, no hallazgos, y así están declarados.

**(e) El conjunto C es el más limpio de los tres y conviene decirlo.** Los seis pares comparten coda oclusiva sorda y tienen seis onsets distintos (/f, s, d, l, p, b/), que es exactamente lo que se le pedía. Un riesgo que no aparece escrito: bit y beat con coda /t/ y vocal siguiente se flapean en inglés americano, así que en frase no son comparables; aisladas sí. Y los homógrafos descartados (read, live, lead) estaban bien descartados, porque escrito u oral cambiarían el estímulo.

**(f) El insight de hoy es el mejor de la semana y no es del eje: es de orden.** Que el calentamiento pueda pesar más que el eje que se quiere medir, y que por eso ninguna comparación entre conjuntos valga en una sola pasada con orden fijado, es un hallazgo de método y aplica a todo el ecosistema, no solo a esta prueba. La rotación deja de ser refinamiento y pasa a ser requisito. Eso es lo que hay que sostener mañana.

Qué NO cambió: Josephine sigue sin práctica registrada, el sistema sigue sin guardar un solo acierto, y los días 22 a 57 del estudio siguen sin existir.

— Alma, 16-nov-2026
