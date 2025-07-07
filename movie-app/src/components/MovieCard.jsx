import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => (
  <div className="bg-[#F5F3FF] border border-[#E0D7F9] rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300 ease-in-out">
    <h2 className="text-2xl font-bold text-[#6D28D9] mb-2">{movie.title}</h2>
    <p className="text-[#4B5563] mb-1">
      <span className="font-medium text-[#6B21A8]">Director:</span> {movie.director}
    </p>
    <p className="text-[#4B5563] mb-1">
      <span className="font-medium text-[#6B21A8]">Genre:</span> {movie.genre}
    </p>
    <p className="text-[#4B5563] mb-1">
      <span className="font-medium text-[#6B21A8]">Year:</span> {movie.year}
    </p>
    <p className="text-[#4B5563] mb-4">
      <span className="font-medium text-[#6B21A8]">Rating:</span> {movie.rating}/10
    </p>
    <Link
      to={`/movie/${movie.id}`}
      className="inline-block bg-[#C4B5FD] text-[#4C1D95] font-semibold px-4 py-2 rounded-md hover:bg-[#A78BFA] transition"
    >
      View Details
    </Link>
  </div>
);

export default MovieCard;
