# TESIS ABVC — Día 26
**Ada Love — 18-nov-2026** — V verificado, R reportado, I inferido. Corrió por el puente, respuesta completa, sin fallback.

## CRITERIO SELLADO (escrito antes del análisis; no se mueve el Día 27)

1. **Unidad de análisis: el par.** Puntaje por par = aciertos en tres pasadas (0 a 3).
2. **Comparación entre conjuntos:** Mann-Whitney exacta, 6 contra 6, bilateral.
3. **"Diferencia de eje establecida":** ≥5 de los 6 pares de un conjunto con puntaje estrictamente mayor que 5 de los 6 del otro (U≤5, p≈0.04).
4. **"Sin diferencia":** ≤2 de 6 pares por encima.
5. **De 3 a 4 pares: indeciso.** Se reporta sin conclusión y no se re-escala a pp.
6. **Invalidación por posición:** si el último bloque supera al primero por ≥1 ítem, el agregado se reporta y la comparación entre conjuntos queda invalidada ese día.
7. No se recalcula después de ver los datos.

Este criterio aplica al ensayo de tres conjuntos cuando corra. El instrumento de hoy es otro y lleva el suyo, también escrito antes de medir.

## 1. Análisis científico del día

**1.1 Restituyo P2 y retiro mi propio cambio (V/I).** El Día 25 sustituí bit/beat por gin/jean "si hay flap". Fue un error mío: el flap necesita vocal siguiente, y en palabra aislada no hay vocal siguiente, así que bit y beat sueltos son comparables. El cambio no protegía nada y dejaba P2 sin el único material que la puede refutar. Conjunto C definitivo: fit/feet, sit/seat, dip/deep, lick/leak, pick/peak, bit/beat. gin/jean se retira.

**1.2 El cronómetro (I, no medido).** Los 4.5 s por trial son supuesto de diseño. El rango honesto es 4.5 a 8 s por trial, con 3 min de sobrecarga:

| s/trial | 54 trials | Total |
|---|---|---|
| 4.5 | 4.1 min | 7.1 min |
| 6.0 | 5.4 min | 8.4 min |
| 8.0 | 7.2 min | 10.2 min |

La conclusión aguanta en todo el rango —cabe en 12 min— y el margen real es de 1.8 a 4.9 min, no de 5. Para volverlo V hay que cronometrar una pasada real de 10 trials; hoy no se midió y no lo presento como medido.

**1.3 El ancla en B es supuesto, no hecho (I).** Sirve para descontar efecto de sesión en A y C solo si la dificultad de B es estable entre sesiones, y eso no está medido. Condición de fallo declarada: si B difiere ≥2 puntos entre sesiones, el ancla no sirve y las sesiones se reportan por separado, sin comparación.

**1.4 Lo nuevo y verificable del ecosistema (R).** Tres fallas del sparring, todas del mismo tipo: el agente afirma sobre lo que no puede observar. (i) Le pidieron collocations y devolvió fonética: el prompt no tiene léxico, el tema se convierte solo. (ii) Dijo "noté que alargaste la s final" sobre una palabra de relleno; no puede oír, recibe texto del STT: alucinación perceptiva. (iii) El alumno dijo "I was trying to say take" porque el STT había escrito JAKE; el agente lo leyó como error de take/takes: convirtió una falla del motor en error del alumno.

**1.5 El hallazgo de oído humano (R).** Josefina dice "boot" donde va "but": STRUT /ʌ/, que no existe en español, sustituida por /u/. Y /buːt/ es palabra real, así que el error no la hace sonar extranjera: la hace decir otra palabra. El STT escribió "but" y borró la evidencia. Mismo patrón que ham→jam.

**1.6 Lo que no consta.** Si el audio de Josefina está guardado; cuántas emisiones suyas hay grabadas desde el 4-nov; si el STT del sparring es el mismo del modo B; las condiciones de escucha de sesiones anteriores.

## 2. Un insight nuevo y falsable — EL ERROR DE COLISIÓN ES EL ÚNICO QUE EL STT BORRA

Hay dos clases de error de vocal: el que suena a acento y el que produce otra palabra. El segundo rompe la comunicación y es exactamente el que la máquina normaliza, porque su trabajo es devolver la palabra más probable.

- **P1:** sobre seis palabras STRUT (but, cut, luck, bus, cup, must) producidas con sustitución por /u/, el STT transcribirá la palabra pretendida en ≥70%, mientras un oído humano criterio marcará la sustitución en ≥70%. Brecha ≥40 pp.
- **P2:** la brecha será mayor cuando la forma sustituida sea palabra real (but→boot) que cuando no lo sea. **Refuta:** sin diferencia → la normalización no va guiada por léxico.
- **P3:** el oído humano también fallará más con contexto fuerte: ≥30% de fallos en frases desambiguadas, ≤10% en neutras.
- **Refuta P1:** brecha <15 pp → el STT es tan sensible como el oído y se puede certificar por transcripción.
- **Refuta P3:** sin efecto de contexto → el humano no repara y el problema es solo del motor.
- **Consecuencia:** ninguna certificación de producción se apoya en transcripción para esta clase de error; el expediente guarda el veredicto del oído criterio, no el texto del STT. Y el agente no puede decir "noté que": sin audio analizado no hay observación.

## 3. Conexión con pedagogía viva (V / R / I)

Un solo dato hasta el final: **but dicho como boot.**

**Lo que se sigue (R, con V de fonética):** el error no es de acento, es de identidad de palabra; /ʌ/ no está en el inventario del español y se resuelve con la vocal más cercana, /u/. La sustitución produce palabra real, así que el receptor no corrige: entiende bota. Y el instrumento que debía detectarlo —el STT— la borró escribiendo "but".

**Lo que se sigue para el ecosistema:** (i) el sparring no puede medir esto: entrega texto y su motor normaliza; (ii) el expediente de Josefina no tiene un solo acierto guardado, así que el hallazgo existe solo porque un oído humano lo oyó; (iii) su canal oído está en 45% y este caso es coherente con ese número, pero no lo confirma: un caso no mide un canal.

**Lo que NO permite concluir:** que la sustitución sea sistemática en ella (n=1 emisión); que /ʌ/ sea su único hueco; que no pueda producirla (la producción no se ha medido nunca); nada sobre otras palabras STRUT.

## 4. Propuesta comprobable para el Día 27

**Brazo A, corre sin la alumna (30 min).** Auditoría de las transcripciones del sparring: contar por turno las afirmaciones perceptivas sin audio analizado ("noté que", "escuché que") y las peticiones de tema convertidas en fonética. **Variable:** porcentaje de turnos con afirmación perceptiva no fundada. **Criterio sellado:** ≥20% → las devoluciones del agente no entran al expediente como evidencia y solo el oído criterio certifica; <10% → el agente es confiable en ese aspecto y el problema es solo de léxico. **Costo:** 30 min, cero desarrollo.

**Brazo B, corre con audio (12 min).** Seis palabras STRUT y seis de control, leídas por un hispanohablante; se compara el veredicto de un oído criterio, a ciegas, contra la transcripción del STT. **Variables:** acierto por palabra y brecha. **Criterio sellado:** ≥40 pp confirma P1; <15 pp la refuta; entre 15 y 40 se reporta como parcial y no se declara. **Costo:** 12 min de grabación, 10 de escucha.

**Plan B sin audio de nadie:** solo brazo A. No prueba el insight, pero mide el defecto del agente que hoy quedó documentado y que es la causa de que el expediente no tenga evidencia de producción. P1-P3 quedan pendientes por escrito.

**Lo que no propongo:** mover otra vez el ensayo de tres conjuntos. Sigue esperando grabaciones humanas de /ɪ/-/iː/, con su criterio ya sellado para cuando corra.

— Ada Love, 18-nov-2026

---

## Nota de Alma — lo que leo, lo que medí y lo que no le compro (18-nov-2026)

Cinco cosas. La segunda es la más grave del día y no la buscábamos.

**(a) Su Brazo A no se puede correr con ese corpus, y lo corrí para comprobarlo.** La propuesta era contar en las transcripciones las afirmaciones perceptivas sin audio analizado ("noté que", "escuché que"). Conté los 47 turnos de Valerie que hay guardados en `SesionVoz`: **cero coincidencias**. Con el criterio que ella selló, eso daría <10% y la conclusión sería "el agente es confiable en ese aspecto". Sería falso. La sesión donde el agente dijo "noté que alargaste la s final" no está en ese corpus: pasó en la app de Lovable, que guarda en Supabase y no en el expediente. **El corpus está partido en dos sistemas y el defectuoso es justo el que no entra al expediente.** Brazo A necesita el otro corpus o no mide nada.

**(b) El hallazgo que sí salió es peor que el que buscábamos, y está en la transcripción de hoy.** En la sesión de Josefina del 18-nov (23 turnos, 8.1 min), Valerie escribió pronunciación figurada en **ortografía española en 9 de sus 24 turnos (38%)**: "ai wouk ap at náin", "ai meid", "aim síting on da sóufa", "ai jad brékfast", "ai drank cófi uith milk", "mór-guich" para mortgage, "tu náit, uen ai tok tu jim", "ail tel jim abáut mai déi". Y el caso letal, textual: **"Jamón es 'ham', suena 'jam', con la jota suave"**. El agente le enseñó a Josefina que ham suena jam: exactamente el error de colisión que hoy diagnosticamos como el más dañino (but→boot, ham→jam). No es un desliz aislado; es el método al revés, porque el núcleo dice que el sonido es la forma y la palabra es local, y la ortografía española le impone al inglés el inventario del español. "mór-guich" no se parece a /ˈmɔːrɡɪdʒ/ y "uith" no tiene TH. Hay que decidir si esa reescritura se prohíbe en el prompt o se prohíbe solo cuando sustituye un contraste que el alumno no tiene.

**(c) Un dato que viene repitiéndose y es falso.** "Josephine sigue sin práctica registrada desde el 4-nov" está en la nota del Día 25 y otra vez en el Día 26 ("su expediente no tiene un solo acierto guardado"). Lo verifiqué: hay sesión el **15-nov** (21 turnos, 8.6 min) y hoy **18-nov** (23 turnos, 8.1 min). Lo que sigue siendo cierto es lo otro: no se guarda un solo acierto, solo la transcripción. Pero la frase sobre la práctica está mal desde ayer y Ada la heredó sin poder verificarla, que es justo el límite que ella misma declaró.

**(d) El criterio de hoy sí quedó bien y hay que decirlo.** Restituye P2 con el argumento correcto (el flap necesita vocal siguiente, así que en palabra aislada bit y beat son comparables) y devuelve el conjunto C completo: fit/feet, sit/seat, dip/deep, lick/leak, pick/peak, bit/beat. Retira gin/jean. Declara el ancla en B como supuesto con condición de fallo escrita (si B difiere ≥2 puntos entre sesiones, el ancla no sirve y las sesiones se reportan por separado). Y el criterio quedó sellado antes de medir, que era la única condición que la nota de ayer puso como no negociable.

**(e) Su Brazo B no lo puede correr nadie hoy, y hay un dato gratis que ya se escapó.** Pide seis palabras STRUT leídas por un hispanohablante y comparar oído criterio contra STT. El diseño es correcto y el audio no existe. El dato que ya perdimos está en la transcripción de hoy: Josefina dijo "but for pay this house" y el STT escribió "but". No sabemos si lo pronunció bien o mal, y sin audio no hay forma de saberlo. Eso no refuta su P1, la deja sin material: el sistema que debía guardar la evidencia no guarda audio.

**Corrección de aritmética menor:** su tabla del 1.2 está bien y el rango honesto de 4.5 a 8 s por trial se sostiene. El margen real es de 1.8 a 4.9 min, no de 5, y ella ya lo dijo. Ahí no hay nada que reclamarle.

Qué NO cambió: el sistema sigue sin guardar un solo acierto, los días 22 a 57 del estudio siguen sin existir, y ahora sabemos que tampoco guarda el audio que haría falta para medir producción.

— Alma, 18-nov-2026
