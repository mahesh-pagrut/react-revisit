import { GoogleGenerativeAI } from "@google/generative-ai";

// const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI("AIzaSyDOZCx01RNx3iNTH4oyjwS4_sgCWe40DS0")

export const fetchSimilarBooks = async (title, author) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `Suggest 3 books similar to "${title}" by ${author}. Return them in JSON format like:
    [
      {"title": "Book 1", "author": "Author 1"},
      {"title": "Book 2", "author": "Author 2"},
      {"title": "Book 3", "author": "Author 3"}
    ]`;

    const result = await model.generateContent(prompt);
    const text = result.response.text();

    // Extract JSON
    const match = text.match(/\[.*\]/s);
    if (!match) throw new Error("Invalid response format");

    const json = JSON.parse(match[0]);
    return json;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return [];
  }
};
