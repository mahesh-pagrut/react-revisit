import { useEffect, useState } from "react";
import { fetchSimilarBooks } from "../utils/gemini";

const Recommendation = ({ title, author }) => {
  const [loading, setLoading] = useState(true);
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const recs = await fetchSimilarBooks(title, author);
      setRecommendations(recs);
      setLoading(false);
    };
    fetchData();
  }, [title, author]);

  if (loading) return <p className="text-gray-500">Generating recommendations...</p>;

  if (recommendations.length === 0) return <p className="text-red-500">No suggestions found.</p>;

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
      {recommendations.map((book, index) => (
        <div key={index} className="p-4 bg-gray-50 border rounded shadow-sm">
          <h3 className="font-semibold text-indigoPrimary">{book.title}</h3>
          <p className="text-sm text-gray-700">by {book.author}</p>
        </div>
      ))}
    </div>
  );
};

export default Recommendation;
