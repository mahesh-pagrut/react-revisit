import { GoogleGenerativeAI } from "@google/generative-ai";

// Use your actual API key or use: import.meta.env.VITE_GEMINI_API_KEY
const genAI = new GoogleGenerativeAI("AIzaSyDOZCx01RNx3iNTH4oyjwS4_sgCWe40DS0");

// Update your `getRecommendations()` function to strip Markdown-like backticks before parsing:

export const getRecommendations = async ({ title, director, genre }) => {
  const prompt = `Suggest 3 movies similar to "${title}" by ${director} in the ${genre} genre.
Return ONLY a JSON object with this format (no explanation, no markdown, no backticks):

{
  "movies": [
    { "title": "Movie Title", "director": "Director Name" }
  ]
}`;

  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const result = await model.generateContent(prompt);
  const response = await result.response.text();

  try {
    // ✅ Clean response: remove ```json ... ```
    const cleaned = response.replace(/```json|```/g, "").trim();

    // ✅ Extract and parse JSON
    const match = cleaned.match(/\{[\s\S]*\}/);
    if (match) {
      const json = JSON.parse(match[0]);
      return json.movies || [];
    } else {
      console.error("No valid JSON found in Gemini response:", cleaned);
    }
  } catch (e) {
    console.error("Error parsing Gemini response:", e, "\nFull response:", response);
  }

  return [];
};