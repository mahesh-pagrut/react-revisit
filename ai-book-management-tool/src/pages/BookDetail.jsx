import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getBooksFromStorage } from "../utils/localStorage";
import Recommendation from "../components/Recommendation";
import toast from "react-hot-toast";

const BookDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const books = getBooksFromStorage();
    const found = books.find((b) => b.id === parseInt(id));
    if (!found) return navigate("/"); // fallback
    setBook(found);
  }, [id, navigate]);

  const handleDelete = () => {
    const books = getBooksFromStorage();
    const updated = books.filter((b) => b.id !== parseInt(id));
    localStorage.setItem("books", JSON.stringify(updated));
    navigate("/");
    toast.success("Book deleted!");
  };

  if (!book) return <p className="text-gray-500">Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-md text-gray-800">
      <h1 className="text-3xl font-bold text-indigoPrimary mb-2">{book.title}</h1>
      <p className="text-lg mb-1">by <span className="font-medium">{book.author}</span></p>
      <p className="text-sm text-gray-500 italic mb-3">{book.genre}</p>
      <p className="text-amberAccent font-bold text-xl mb-4">₹{book.price}</p>

      {book.description && (
        <div className="mb-4">
          <h2 className="text-lg font-semibold">Description</h2>
          <p className="text-gray-700 mt-1">{book.description}</p>
        </div>
      )}

      {/* Actions */}
      <div className="flex gap-4 mt-6">
        <button
          onClick={() => navigate("/")}
          className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition"
        >
          ← Back to Home
        </button>
        <button
          onClick={handleDelete}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
        >
          🗑️ Delete Book
        </button>
      </div>

      {/* AI Suggestions */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold text-indigoPrimary mb-3">
          🤖 AI Recommendations
        </h2>
        <Recommendation title={book.title} author={book.author}/>
      </div>
    </div>
  );
};

export default BookDetail;
