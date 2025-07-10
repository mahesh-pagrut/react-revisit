import { GoogleGenerativeAI } from "@google/generative-ai";


const genAI = new GoogleGenerativeAI("AIzaSyDOZCx01RNx3iNTH4oyjwS4_sgCWe40DS0");



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

    const cleaned = response.replace(/```json|```/g, "").trim();

  
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