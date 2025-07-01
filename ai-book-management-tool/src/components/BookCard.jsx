import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  return (
    <Link to={`/book/${book.id}`}>
      <div className="bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition">
        <h2 className="text-xl font-semibold text-indigoPrimary mb-1">
          {book.title}
        </h2>
        <p className="text-gray-600 mb-1">by {book.author}</p>
        <p className="text-sm text-gray-500 italic mb-2">{book.genre}</p>
        <p className="text-amberAccent font-bold text-lg">₹{book.price}</p>
      </div>
    </Link>
  );
};

export default BookCard;
