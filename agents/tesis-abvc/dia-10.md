# TESIS ABVC — Día 10
**Ada Love — 1-nov-2026, 22:30** — Nada medido por mí; evidencia reportada por el equipo (n=1, instrumentos propios). La victoria frágil queda fuera: está calendarizada al jueves. *(Guardado en `tesis-abvc/dia-10.md`, enviado a JJ.)*

## 1. Análisis científico del día

**1.1 El examen mudo vale como prueba de existencia.** 28 de 28 lecciones sin audio y la pregunta "Listen and identify: /æ/ o /ɛ/?" mostrando la palabra ESCRITA: no es un bug, es la tesis invertida — se pide un rasgo de OÍDO por el canal que no puede cargarlo. Cuatro fallas con nombre:
- **Constructo:** dice medir escucha y mide lectura; el acierto certifica el fósil, no el oído.
- **Métrica:** `completed:true` con `score NULL` y la barra sube igual: premia completar, no aprender.
- **Cobertura:** A2 vacío, cero dígrafos, trígrafos o clusters — justo el nivel del mercado y justo lo que cuesta.
- **Bucle:** sin segundo intento, sin explicación del error, sin puerta condicionada.

Nuestra ventaja no es el contenido (ellos también tienen bancos): es la CERTIFICACIÓN POR CANAL. Hoy quedó demostrada contra un competidor real.

**1.2 Continuidad: el cuello es cadencia, no competencia.** Cuatro actividades el viernes 30 (84%, 96%, 100%, 89%) y sábado-domingo en cero. Un día con cuatro actividades produce fluidez INTRADÍA; la prueba de aprendizaje es la CAÍDA DE REENCUENTRO (último score vs primer intento de la siguiente sesión), y hoy no se mide porque la telemetría guarda sesión y no ítem. Sin ese dato, la cadencia es hipótesis plausible, no probada.

**1.3 El contraste JJ–Josefina: decisión correcta, lectura cuidadosa.** Dos casos que difieren en casi todo no infieren causa; ganan sensibilidad de instrumento y aíslan el ÍTEM como unidad. La pregunta no es "¿quién es mejor?" sino "¿qué ítems discriminan?": el que ambos aciertan mide techo, el que ambos fallan mide piso, el que separa enseña qué enseñar.

## 2. Insight nuevo y falsable — LA ESPECIFICIDAD DE LA BISAGRA

Con el mismo instrumento y la misma lista (12 bisagra: to, of, and, for, with, will, have, it, could, that, there, would; 12 contenido ya medido):

- **P1:** divergencia media (|JJ − Josefina|) **≥40 pp** en bisagra y **≤10 pp** en contenido.
- **P2:** **≥70%** de los ítems con divergencia ≥30 pp serán de bisagra.
- **P3 (canal):** en Josefina la bisagra rendirá **≥15 pp** más por oído-en-chunk que por escrito; en JJ, al revés o empate.

**Refuta:** contenido con divergencia ≥30 pp → no hay especificidad y el patrón es ruido de sujeto. **Refuta P3:** si el oído no mejora la bisagra en Josefina, se revisa la ley del canal, no a la alumna.

## 3. Conexión con pedagogía viva (verificado / reportado / inferido)

**Verificado por mí** (artefactos de esta conversación): los bancos guardan palabra, IPA, split, audio_texto e imagen; NINGUNO guarda banda, primer intento ni fecha de certificación. El problema B es comprobable en mi propio material.
**Reportado por el equipo** (n=1): calendario del jueves; telemetría a nivel sesión; actividad del 30-oct y dos días en cero; inspección de la app; JJ fallando a propósito y su monitor de 10.3 s.
**Inferido:** la especificidad de la bisagra (P1-P3) y que la cadencia domina en el piloto.
**Doctrinas confirmadas por fuera:** "el primer intento no se reprueba, se mide" — la app hace lo contrario (aprueba sin medir); "el reporte debe citar, no adivinar" — con telemetría de sesión hoy adivinaríamos.

## 4. Propuesta para mañana (2-nov) — EL BANCO DE DIVERGENCIA, con captura por ítem

No sustituye la prueba del jueves: la alimenta. Sin captura por ítem, las bandas del jueves se adivinan.

**Instrumento (mínimo, mañana mismo):** un registro por presentación — `sujeto, item_id, canal, rasgo, intento_n, resultado, banda (falla|frágil|sólido), fecha_hora, dias_desde_ultima_sesion, proximo_repaso`. Diez campos, cero desarrollo de contenido; si el sistema solo guarda sesión, este registro corre en paralelo y luego se concilia.

**Protocolo:** 24 ítems (12 bisagra + 12 contenido), dos pasadas de 12 min: escrita sola y oída en chunk sin letras. JJ en su ventana del martes; Josefina cuando aparezca, sin forzar sesión extra. Cero repetición intra-sesión (lección de Reflejos).

**Métricas:** score por ítem/canal/sujeto; índice de divergencia; % de divergentes que son bisagra; caída de reencuentro como semilla de la variable cadencia.

**Criterios:** P1 y P2 se cumplen → el banco de bisagra queda como núcleo curricular y la app del mercado queda descrita con nuestro vocabulario. Divergencia repartida → el hueso no es la bisagra y se busca ítem por ítem. P3 falla en Josefina → se revisa la ley del canal antes de seguir cobrándole a ella.

**Cierre:** hoy el ecosistema encontró un competidor que mide lectura y premia completar; tenemos tres días para no hacer lo mismo con el jueves. El banco de divergencia no busca un ganador entre dos alumnos: busca los doce ítems que separan a un B2 con monitor alto de un A2 con oído 45. Esos doce son el producto.

— Ada Love, 1-nov-2026