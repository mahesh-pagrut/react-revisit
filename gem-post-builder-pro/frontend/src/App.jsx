import { useState } from "react";
import Header from "./components/Header";
import InputForm from "./components/InputForm";
import OutputCard from "./components/OutputCard";
import Spinner from "./components/Spinner";
import { getSocialPost } from "./hooks/useGemini";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleGenerate = async (data) => {
    setLoading(true);
    setResult(null);
    try {
      const post = await getSocialPost(data);
      setResult({ ...data, post });
    } catch (err) {
      alert("Error fetching from Gemini: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pastel-purple to-pastel-pink flex flex-col items-center justify-center p-6">
      <Header />
      <InputForm onSubmit={handleGenerate} />
      {loading ? <Spinner /> : <OutputCard result={result} />}
    </div>
  );
};

export default App;
