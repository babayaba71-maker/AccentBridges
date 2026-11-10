# TESIS ABVC — Día 17
**Ada Love — 9-nov-2026** — V verificado, R reportado, I inferido. *Archivado por Alma como `agents/tesis-abvc/dia-17.md`.*

## 1. Análisis científico del día

**1.1 La pieza declarada es la más grande y la menos instrumentada (R).** 42 lecciones por 40 minutos son 1,680 minutos: 28 horas de contenido en seis fases. Su única memoria es `morfofono-html-v1` en localStorage, que guarda el tema y nada más. No hay veredicto de entrada, no hay veredicto de salida, no hay día. El activo más costoso del ecosistema es el único sin expediente.

**1.2 El morfofónico repite, de origen, la falla de Accent Bridge Pro (R/I).** Aquel marcaba `completed:true` con `score NULL` y la barra subía igual: premiaba completar. Este guarda el número de lección alcanzado, que también es completar. Diferencia de grado, no de clase. Sin veredicto no hay certificación; sin certificación el reporte no puede citar (regla del Día 9).

**1.3 Contradicción de dosis que hay que nombrar (V/I).** Cuarenta minutos con 65% de práctica son 26 minutos de práctica por sesión. La práctica más larga jamás observada en el piloto fueron 17 palabras en un turno. Dos lecturas compatibles y ninguna demostrada: la pieza está diseñada para el segmento comercial (B1-bajo a B2-bajo, gente que ya habla) y no para el caso A2 medido; o la dosis es una aspiración sin evidencia de sostén. Queda como pregunta abierta.

**1.4 Lo que los datos NO permiten concluir.** Nada sobre aprendizaje del morfofónico: cero registros. Nada sobre el orden de sus seis fases por carga cognitiva: es el mismo error que la escalera del Pegamento, ordenada por rasgo y subiendo en vez de bajando. Nada sobre la alumna: cinco días sin aparecer.

**1.5 Señal convergente del A/U (R).** Con los dos prospectos de hoy son seis hispanohablantes que fallan A/U y ninguno que lo pase. Sigue sin resolverse si es categoría ausente en L1 o ítem roto: la prueba que lo decide (oyente criterio con 2/2) no se ha corrido.

## 2. Insight nuevo y falsable — EL VEREDICTO DE ENTRADA ES EL ACTIVO

Un acierto de salida sin línea de entrada no mide aprendizaje: mide conocimiento previo más la lección.

- **P1:** en el primer bloque instrumentado, ≥30% de los ítems aprobados a la salida ya estaban aprobados a la entrada; la ganancia será ≤50% del acierto bruto aparente.
- **P2:** la ganancia variará ≤10 pp entre administraciones del mismo bloque, mientras el acierto bruto variará ≥20 pp: la ganancia es la métrica estable.
- **P3:** lecciones con 65% de práctica rendirán ≥1.5× la ganancia de la misma lección comprimida a 20% de práctica en el mismo bloque de 40 minutos.
- **Refuta:** si ≥70% de los aciertos de salida fueron fallos de entrada, el contenido es genuinamente nuevo y el veredicto de entrada es prescindible. Si 65/35 no supera a 20/80 por ≥10 pp, la proporción es decorativa y se elige por costo.
- **Consecuencia de producto:** ninguna lección se marca completada sin veredicto de entrada; la barra del tablero muestra ganancia, no lecciones vistas.

## 3. Conexión con pedagogía viva (V / R / I)

**V:** mis bancos guardan contenido con IPA y anclas, y tampoco certifican consumo ni ganancia: el mismo hueco en otra capa.
**R:** 42 lecciones, seis fases, 40 minutos, 35/65, `morfofono-html-v1`; Josephine con streakDays 0 y cero práctica desde el 4-nov; Estudio v3 con ojo 100/96 contra oído 45; prueba de oído con 18/20 y 19/20 fallando ambos A/U; siete estaciones geocercadas; tablero del maestro operando.
**I:** P1-P3 y que la dosis de 40 minutos pertenece al segmento comercial, no al caso medido.
**Pregunta abierta que toca:** la imagen formada y la dosis de sobrecarga solo se miden con ganancia entrada-salida, y hoy el morfofónico no la registra.

## 4. Propuesta Día 18 — VEREDICTO DOBLE EN UNA LECCIÓN

**Decisión de fila, con argumento:** la auditoría de validación del Día 16 deja de ser la primera. No se descarta: se degrada a especificación, porque su producto real no eran los números viejos sino las reglas de validación (`idioma_detectado`, `audio_fondo`, `validado_transcripcion`), que ahora se diseñan dentro del esquema del morfofónico desde el primer día. La razón es simple: no se puede validar un registro que no existe. Primero captura, después validación, al final leyes.

**Instrumento:** una lección completa con veredicto doble. Cinco ítems de entrada y los mismos cinco de salida, azar declarado, sin letras cuando el ítem sea de oído. Registro en servidor: `leccion_id, fase, sujeto, hora_entrada, veredicto_entrada (n/5), hora_salida, veredicto_salida (n/5), ganancia, dispositivo, condiciones`.
**Variable:** ganancia = salida − entrada.
**Criterio:** ≥30% de aciertos de salida ya aprobados a la entrada → el contenido efectivo es menor de lo que aparenta y las lecciones se reordenan por conocimiento previo. Ganancia ≤0 en ≥40% de los ítems → la lección no enseña lo que mide y vuelve a diseño. Ganancia ≥2 ítems en ≥60% → el formato se sostiene y se replica en las 41 restantes.
**Sujeto:** JJ en la lección 1 de la fase de oído, 15 minutos. Si Josephine aparece, misma prueba, sin forzarla.
**Costo:** dos horas de desarrollo del registro; 15 minutos de sesión.
**Plan B sin desarrollo:** hoja de papel con cinco ítems antes y cinco después, transcrita el mismo día. Mide lo mismo y no depende de la alumna.

## 5. Estado de las pruebas colgadas

| Prueba | Estado | Cierre (regla 13-nov) |
|---|---|---|
| Veredicto doble en morfofónico (D17) | Nueva, primera de la fila | Ejecutar el 10-11 nov |
| Auditoría de validación (D16) | Degradada a especificación | Entregar reglas al esquema |
| Escalera de Dosis (D13) | Pospuesta | Corre solo con contador validado |
| Prueba de la Corrección (D15) | No ejecutada | Ejecutar o archivar el 13-nov |
| Par Mudo / magic E (D14) | No ejecutada | Ejecutar o archivar el 13-nov |
| Primera Palabra (D12) | Bloqueada | Falta audio de producción |
| Banco de Divergencia (D10) | Bloqueada | Requiere captura por ítem |
| Acento Invisible (D7), Bisagra (D8), Generalización (D4), GPC (D3) | No ejecutadas | Archivar por escrito el 13-nov |

**Higiene:** quedan cuatro días para la regla. Lo que no tenga sujeto ni instrumento mínimo se archiva con razón escrita, sin excepción. Una tesis con once pendientes no es rigurosa: es un archivo de buenas intenciones.

— Ada Love, 9-nov-2026