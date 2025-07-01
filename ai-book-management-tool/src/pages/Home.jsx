import { useEffect, useState } from "react";
import BookCard from "../components/BookCard";
import { getBooksFromStorage } from "../utils/localStorage";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [sortOption, setSortOption] = useState("title");
  const [category, setCategory] = useState("All");

  // Load books initially
  useEffect(() => {
    const storedBooks = getBooksFromStorage();
    setBooks(storedBooks);
  }, []);

  // Apply filter + sort
  useEffect(() => {
    let temp = [...books];

    // Filter
    if (category !== "All") {
      temp = temp.filter((book) => book.genre.toLowerCase() === category.toLowerCase());
    }

    // Sort
    if (sortOption === "title") {
      temp.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortOption === "price") {
      temp.sort((a, b) => a.price - b.price);
    }

    setFilteredBooks(temp);
  }, [books, sortOption, category]);

  return (
    <div className="text-gray-800">
      <h1 className="text-3xl font-semibold mb-6">📚 All Books</h1>

      {/* Filter & Sort Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        {/* Category Filter */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border px-3 py-2 rounded focus:ring-2 focus:ring-indigoPrimary"
        >
          <option value="All">All Genres</option>
          <option value="Fiction">Fiction</option>
          <option value="Tech">Tech</option>
          <option value="Non-fiction">Non-fiction</option>
          <option value="Self-help">Self-help</option>
        </select>

        {/* Sort */}
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="border px-3 py-2 rounded focus:ring-2 focus:ring-indigoPrimary"
        >
          <option value="title">Sort by Title</option>
          <option value="price">Sort by Price</option>
        </select>
      </div>

      {/* Book Cards Grid */}
      {filteredBooks.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No books found.</p>
      )}
    </div>
  );
};

export default Home;
