// ============================================================
// VALERIE TUNNEL — Respaldo independiente del cerebro AR
// Vive en Deno Deploy (gratis, sin tarjeta) — NO depende de Base44.
// Si Base44 se queda sin créditos, el cerebro del labeler SIGUE VIVO.
//
// Endpoints:
//   POST /arLesson  { className: "refrigerator" } → clase Bilingual Bridge + TPR
//   GET  /health    → ping de vida
//
// La OPENAI_API_KEY se pega en el dashboard de Deno Deploy
// (Settings → Environment Variables) — NUNCA en este archivo.
// ============================================================
const OPENAI_KEY = Deno.env.get("OPENAI_API_KEY") || "";
const GEMINI_KEY = Deno.env.get("GEMINI_API_KEY") || Deno.env.get("GOOGLE_API_KEY") || "";

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS, GET",
  "Access-Control-Allow-Headers": "Content-Type",
  "Content-Type": "application/json"
};

const LESSON_PROMPT = `You are Valerie, an American English accent coach for Spanish speakers in Culiacán, Mexico.
The student's phone camera just detected: "{CLASS}".
Generate a BILINGUAL BRIDGE lesson using TPR (Total Physical Response — the student TOUCHES the real object while learning).
Instructions in Spanish (A0-A1 level, warm, Culiacán-friendly). English only for target vocabulary.
Return ONLY valid JSON (no markdown, no text outside JSON) with these exact fields:
{
  "object": "{CLASS}",
  "word_en": "English word for this object (or a simpler related word if the name is too advanced for A1)",
  "word_es": "Spanish translation of word_en",
  "ipa": "American IPA pronunciation of word_en",
  "pron_es": "Spanish phonetic anchor using ONLY sounds that exist in Spanish (ai, iu, ji, chi, ui, dey, em, ol, ir...). Function words reduce (am→em). Write what the EAR hears, not what the eye reads.",
  "syllables": <number of syllables in word_en>,
  "touch_prompt": "Spanish TPR instruction: tell the student to touch or interact with the object",
  "sensory_question": "Spanish question asking how the object feels, sounds, or smells",
  "sensory_es": "the most likely sensory quality in Spanish (e.g. 'fría', 'dura', 'suave', 'pesado')",
  "sensory_en": "English word for that sensory quality",
  "sensory_ipa": "American IPA for the sensory word",
  "sensory_pron_es": "Spanish phonetic anchor for the sensory word",
  "sensory_syllables": <number of syllables in sensory_en>,
  "bonus_en": "a bonus related English word (e.g. for fridge: 'cold'; for chair: 'sit'; for cup: 'water')",
  "bonus_es": "Spanish translation of the bonus word",
  "bonus_ipa": "American IPA for the bonus word",
  "bonus_pron_es": "Spanish phonetic anchor for the bonus word",
  "example_sentence": "simple A1-level English sentence using word_en (max 8 words)",
  "quiz_question": "Spanish quiz question about the sensory word (e.g. '¿Cómo se dice FRÍA en inglés?')",
  "quiz_options": ["option1", "option2", "option3"],
  "quiz_correct": <0-based index of the correct answer in quiz_options>,
  "difficulty": <1=easy, 2=medium, 3=hard>
}
RULES:
- All Spanish must be A0-A1 level: simple, warm, practical.
- pron_es uses ONLY sounds that exist in Spanish (regla del Alfabeto Americano: I=ai, You=iu, He=ji, She=chi, We=ui, They=dey, Them=dem, am→em).
- If the object name is too complex for A1 (e.g. 'refrigerator'), teach a simpler related word (e.g. 'fridge').
- Keep it physical: touch, feel, open, listen — the body learns faster than the eye.
- quiz_options must have exactly 3 options. quiz_correct is the index of the correct one.`;

function extractJson(text: string): any {
  const cleaned = text.replace(/```json|```/g, "").trim();
  const start = cleaned.indexOf("{");
  const end = cleaned.lastIndexOf("}");
  if (start >= 0 && end > start) return JSON.parse(cleaned.slice(start, end + 1));
  throw new Error("No JSON found in model response");
}

async function callOpenAI(className: string): Promise<any> {
  const prompt = LESSON_PROMPT.replace(/\{CLASS\}/g, className);
  const resp = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: { "Authorization": `Bearer ${OPENAI_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: prompt },
        { role: "user", content: `Generate the lesson for: ${className}` }
      ],
      max_tokens: 800,
      temperature: 0.5,
      response_format: { type: "json_object" }
    })
  });
  if (!resp.ok) throw new Error(`OpenAI: ${(await resp.text()).slice(0, 150)}`);
  const data = await resp.json();
  const text = data?.choices?.[0]?.message?.content;
  if (!text) throw new Error("OpenAI: empty response");
  return extractJson(text);
}

async function callGemini(className: string): Promise<any> {
  const models = ["gemini-2.0-flash", "gemini-1.5-flash"];
  let lastErr: string | null = null;
  for (const model of models) {
    const prompt = LESSON_PROMPT.replace(/\{CLASS\}/g, className);
    const resp = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${GEMINI_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: { responseMimeType: "application/json", temperature: 0.5, maxOutputTokens: 800 }
        })
      }
    );
    if (resp.ok) {
      const data = await resp.json();
      const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
      if (text) return extractJson(text);
    } else {
      lastErr = `Gemini ${model}: ${(await resp.text()).slice(0, 100)}`;
    }
  }
  throw new Error(lastErr || "Gemini: all models failed");
}

Deno.serve(async (req: Request) => {
  const url = new URL(req.url);

  if (req.method === "OPTIONS") return new Response(null, { status: 204, headers: CORS });

  if (req.method === "GET" && (url.pathname === "/health" || url.pathname === "/")) {
    return new Response(JSON.stringify({
      alive: true,
      tunnel: "valerie-tunnel",
      openai: OPENAI_KEY.length > 40,
      gemini: GEMINI_KEY.length > 30
    }), { headers: CORS });
  }

  if (req.method === "POST" && (url.pathname === "/arLesson" || url.pathname === "/")) {
    try {
      const body = await req.json();
      const className = (body?.className || body?.class || body?.object || "").trim();
      if (!className) return new Response(JSON.stringify({ error: "className required" }), { status: 400, headers: CORS });

      const openaiUsable = OPENAI_KEY.startsWith("sk-") && OPENAI_KEY.length > 40;
      const geminiUsable = (GEMINI_KEY.startsWith("AQ.") || GEMINI_KEY.startsWith("AIza")) && GEMINI_KEY.length > 30;
      if (!openaiUsable && !geminiUsable) {
        return new Response(JSON.stringify({ configured: false, message: "Pega la OPENAI_API_KEY en Settings → Environment Variables del dashboard." }), { headers: CORS });
      }

      let lesson: any = null, engine = "", lastError: any = null;
      if (openaiUsable) { try { lesson = await callOpenAI(className); engine = "openai"; } catch (e) { lastError = e; } }
      if (!lesson && geminiUsable) { try { lesson = await callGemini(className); engine = "gemini"; } catch (e) { lastError = e; } }
      if (!lesson) return new Response(JSON.stringify({ configured: true, error: "Ningún proveedor respondió", detail: String(lastError?.message || lastError).slice(0, 200) }), { status: 502, headers: CORS });

      return new Response(JSON.stringify({ configured: true, engine, tunnel: "deno-deploy", ...lesson }), { headers: CORS });
    } catch (e) {
      return new Response(JSON.stringify({ configured: true, error: (e as Error).message }), { status: 500, headers: CORS });
    }
  }

  return new Response(JSON.stringify({ error: "Not found", use: "POST /arLesson {className}" }), { status: 404, headers: CORS });
});
