import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-indigoPrimary text-2xl font-bold">
        📚 BookManager
      </Link>
      <div className="space-x-4">
        <Link to="/" className="text-gray-700 hover:text-indigoPrimary">
          Home
        </Link>
        <Link
          to="/add-book"
          className="bg-indigoPrimary text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
        >
          + Add Book
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
