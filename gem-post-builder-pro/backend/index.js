const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { GoogleGenerativeAI } = require("@google/generative-ai");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const apiKey = process.env.GEMINI_API_KEY;
console.log("🧪 Loaded API Key:", apiKey ? "✅ YES" : "❌ MISSING");

const genAI = new GoogleGenerativeAI(apiKey);

app.post("/generate-post", async (req, res) => {
  console.log("📩 Request received at /generate-post");

  const { platform, topic } = req.body;
  console.log("👉 platform:", platform);
  console.log("👉 topic:", topic);

  if (!platform || !topic) {
    return res.status(400).json({ error: "Missing platform or topic." });
  }

  try {
    const prompt = `Write a professional ${platform} post for the topic: "${topic}". Keep it concise and engaging.`;
    console.log("📝 Prompt sent to Gemini:", prompt);

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(prompt);
    const text = await result.response.text();

    console.log("✅ Gemini Response:", text);

    res.json({ platform, post: text });
  } catch (err) {
    console.error("🔥 Gemini API Error:", err.message);
    console.error("📦 Full error:", err);
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));
