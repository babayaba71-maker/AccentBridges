# TESIS ABVC — Día 16
**Ada Love — 8-nov-2026** — V verificado, R reportado, I inferido.

## 1. Análisis científico del día

**1.1 El dato del día es una proporción, no una lección (V).** Ocho piezas entregadas entre el 4 y el 8-nov contra una práctica real de 17 palabras. Cuatro de cuatro días con consumo cero. La proporción 8:1 no dice nada de pedagogía: dice que la entrada se produce a un ritmo que la salida no toca.

**1.2 Hay que corregir un dato propio antes de usarlo (V).** La sesión del 4-nov en valerie-ai (1.4 min, 12 turnos) está contaminada: la transcripción es francés con audio de fondo. Práctica real = una sesión de telegram-audio con 17 palabras. Tercera aparición de la misma familia de error: el estado declarado diverge del medido — el GPS que declaraba ±100 m y erraba 7.8, la sesión que declaraba práctica y era francés, el cron que declara lunes a viernes y disparó sábado y domingo. Tres instancias ya no son incidentes: son un patrón de instrumentación.

**1.3 Qué le hace esto a la Escalera de Dosis: la reordena, no la invalida.** La escalera mide capacidad de comprensión según la dosis administrada; hoy sabemos que no hay administración. Un techo que nadie alcanza no se puede medir. Cambio de unidad: la dosis deja de contarse en palabras entregadas y pasa a palabras consumidas. Criterio explícito: no corre hasta que exista un contador de consumo validado; si al 13-nov no existe, se archiva por escrito y el chunking baja de prioridad. La pregunta sigue siendo buena; su lugar en la fila cambia.

**1.4 Lo que esta evidencia NO permite concluir.** No sé la proporción en palabras consumidas (ignoro el volumen de las ocho piezas). No puedo afirmar que la sobreoferta cause la no-práctica: no hay variación de la oferta que lo pruebe. No puedo decir que la alumna no pueda: el 4-nov hizo 17 palabras de una pasada. Las tres respuestas correctas son "no medible con esta evidencia".

**1.5 El dato de oferta (V).** La pregunta de JJ sobre seguir invirtiendo tiempo se registra como señal de demanda del lado de la oferta, medible en el tiempo (sigue o no sigue), no como evidencia lingüística.

## 2. Insight nuevo y falsable — EL CONTADOR SOBRECUENTA

Si una sesión declarada resultó ser francés, la métrica de práctica no mide práctica: mide eventos de canal.

- **P1:** al validar las transcripciones archivadas de SesionVoz, ≥40% fallará el criterio de práctica en inglés (≥50% de turnos reconocibles).
- **P2:** los minutos validados del 4 al 8-nov serán ≤50% de los declarados.
- **P3:** al aplicar la validación, ≥30% de los ítems marcados como practicados perderán ese estado.
- **Refuta:** si falla <15% de las entradas, el contador es confiable, la proporción 8:1 se sostiene y el problema es solo de activación.
- **Consecuencia de producto:** ningún reporte cita práctica sin `validado_transcripcion` e `idioma_detectado`. Rachas y streak se recalculan; mientras no exista el campo, las cifras de consumo no entran a ninguna ley.

## 3. Conexión con pedagogía viva (V / R / I)

**V:** mis bancos guardan contenido, no consumo: un ítem puede estar en cien tarjetas y el expediente no sabe si alguien lo abrió. El campo que falta allá es el que falta aquí.
**R:** 8 piezas contra 1 práctica de 17 palabras; el 4-nov con dos entradas, una en francés; cero el 5, 6, 7 y 8; streakDays 0; las dos automatizaciones disparando fuera de su ventana; la pregunta de JJ; la sala de sparring respondiendo en 1.4 s sin corregir de frente.
**I:** que la sobreoferta compite con la práctica en vez de alimentarla. No probado.
**Pregunta abierta que toca:** la dosis de sobrecarga solo es medible sobre consumo real. Sin contador validado, el chunking queda en el aire por instrumentación, no por teoría.

## 4. Propuesta Día 17 — AUDITORÍA DE VALIDACIÓN (no requiere a la alumna)

**Instrumento:** revisar todas las entradas archivadas de SesionVoz (mínimo las dos del 4-nov; ideal 12-20). Regla: cuenta como práctica si ≥50% de turnos son palabras inglesas reconocibles; se marca `idioma_detectado` y `audio_fondo`.
**Variable:** porcentaje de entradas inválidas; minutos validados contra declarados.
**Criterio:** ≥40% inválidas → congelar métricas de práctica, agregar el campo de validación y recalcular el expediente antes de cualquier ley nueva. <15% → el contador queda y el tema siguiente es activación.
**Sujeto:** el archivo, no la persona. **Costo:** 45 minutos de revisión, cero desarrollo.
**Plan B:** si no hay transcripciones accesibles, quedan dos entradas del 4-nov como muestra anecdótica (una inválida de dos): no se concluye, se registra el tamaño de muestra y se pide al maestro exportar los últimos diez registros.

## 5. Estado de las pruebas colgadas

| Prueba | Estado | Cierre (regla 13-nov) |
|---|---|---|
| Escalera de Dosis (D13) | Pospuesta, reordenada hoy | Corre solo con contador validado; si no, archivar por escrito |
| Prueba de la Corrección (D15) | No ejecutada | Ejecutar o archivar el 13-nov |
| Par Mudo / magic E (D14) | No ejecutada | Ejecutar o archivar el 13-nov |
| Primera Palabra (D12) | No ejecutada | Bloqueada por falta de audio de producción |
| Banco de Divergencia (D10) | Bloqueada | Requiere captura por ítem, inexistente |
| Acento Invisible (D7), Bisagra (D8), Generalización (D4), GPC (D3) | No ejecutadas | Archivar por escrito el 13-nov |

**Higiene:** con hoy son diez pendientes y una ejecutada. El tope de dos pruebas activas no se cumplió porque no había quién ejecutara. La auditoría de validación es la primera de la lista que no depende de que la alumna aparezca: por eso va primero.

— Ada Love, 8-nov-2026