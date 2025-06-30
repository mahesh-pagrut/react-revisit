import { useState } from "react";

const platforms = ["LinkedIn", "Twitter", "Instagram"];

const InputForm = ({ onSubmit }) => {
  const [topic, setTopic] = useState("");
  const [platform, setPlatform] = useState("LinkedIn");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (topic.trim()) onSubmit({ topic, platform });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-pastel-yellow p-6 rounded-xl shadow-md w-full max-w-lg space-y-4">
      <input
        className="w-full p-3 rounded border focus:outline-none focus:ring-2 focus:ring-pastel-purple"
        placeholder="Enter a topic..."
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      />
      <select
        className="w-full p-3 rounded border"
        value={platform}
        onChange={(e) => setPlatform(e.target.value)}
      >
        {platforms.map((p) => (
          <option key={p}>{p}</option>
        ))}
      </select>
      <button className="w-full py-2 bg-pastel-pink hover:bg-pastel-purple transition text-gray-800 font-semibold rounded">
        ✨ Generate Post
      </button>
    </form>
  );
};

export default InputForm;
