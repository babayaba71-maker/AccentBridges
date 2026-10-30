# 🔑 El mapa de las llaves de ElevenLabs (y la regla para que no vuelva a pasar)

**Última verificación:** 29 de octubre de 2026, 19:05 (Hermosillo)
**Verificado por:** Alma, probando cada llave contra la API (no de memoria)

## Qué hay realmente

Una sola cuenta de ElevenLabs, plan **Creator**, con **~88% del tanque libre**
(14,422 de 121,006 caracteres usados al momento de la auditoría).

| Variable | Pista | Estado | Para qué sirve |
|---|---|---|---|
| `ELEVENLABS_API_KEY_3` | …8bc4 | ✅ **VIVA** | **La oficial.** Habla y además administra la cuenta (plan, saldo) |
| `ELEVENLABS_API_KEY_2` | …2d06 | ✅ viva (limitada) | Habla bien, pero no puede leer el saldo ni la cuenta |
| `ELEVENLABS_API_KEY` | …04e2 | ❌ **MUERTA (401)** | Era la primera. Revocada. Es la que provocaba los 401 falsos |
| `ELEVENLABS_API_KEY_4` | …537Z | ❌ no es de ElevenLabs | Es un identificador de otra cosa |

## La regla sellada (29-oct, orden de JJ)

1. **La voz de pago vive SOLO en la Doctora** (donde habla Josefina). Ahí sí se gasta, y solo cuando ella conversa.
2. **Todo lo demás va con voz de Google o nada**: holograma, wallpaper, casa, bici.
3. Las funciones de voz leen las llaves **en cascada**: `_3` → `_2` → `_1`. Nunca una sola.
4. **Ninguna llave se da por buena sin probar audio.** Probar que la función responda no es probar que sirva.

## Los dos agentes vivos (misma cuenta)

- **Doctora Valerie** — `agent_2401m5311s2vfdbv70bkk2pvar1h` — el de `consulta-doctora.html`. Se queda.
- **Valerie** — `agent_7401kqvpkpmhep5rqcf95j5kz41b` — el del holograma. Apagado el 29-oct por orden de JJ.

## El guardián

`functions/elVozSalud.ts` prueba todas las llaves y responde:

- `ok`: si hay al menos una que pueda hablar
- `oficial_recomendada`: cuál usar
- `llaves_muertas`: cuáles borrar
- `hay_problema`: el semáforo

Llamada: `GET/POST {BASE}/functions/elVozSalud?api_key=ABVC-PILOTO-2026`

## Pendiente del dueño (dos toques)

Borrar `ELEVENLABS_API_KEY` del editor de secretos. El código ya no la necesita:
si existe y está muerta, el guardián la reporta; si la borras, deja de existir el problema.
