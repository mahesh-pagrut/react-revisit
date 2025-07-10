import { useParams, useNavigate } from 'react-router-dom';
import { useMovieContext } from '../context/MovieContext';
import { useEffect, useState } from 'react';
import { getRecommendations } from '../utils/gemini';
import Spinner from '../components/Spinner';
import { toast } from 'react-toastify';

const MovieDetail = () => {
  const { id } = useParams();
  const { movies, setMovies } = useMovieContext();
  const navigate = useNavigate();
  const movie = movies.find((m) => m.id === id);

  const [recs, setRecs] = useState([]);
  const [loading, setLoading] = useState(false);

  const deleteMovie = () => {
    setMovies(movies.filter((m) => m.id !== id));
    toast.success('Deleted!');
    navigate('/');
  };

  useEffect(() => {
    const fetchRecs = async () => {
      setLoading(true);
      const res = await getRecommendations(movie);
      setRecs(res);
      setLoading(false);
    };
    fetchRecs();
  }, []);

  return (
    <div className="bg-[#F8F5FF] min-h-screen p-6">
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <div className="bg-white rounded-2xl shadow-md p-6 border border-[#E0D7F9]">
          <h2 className="text-2xl font-bold text-[#6D28D9] mb-3">{movie.title}</h2>

          <div className="space-y-2 text-sm text-[#4B5563] mb-4">
            <p><span className="font-semibold text-[#6B21A8]">Director:</span> {movie.director}</p>
            <p><span className="font-semibold text-[#6B21A8]">Genre:</span> {movie.genre}</p>
            <p><span className="font-semibold text-[#6B21A8]">Year:</span> {movie.year}</p>
            <p><span className="font-semibold text-[#6B21A8]">Rating:</span> {movie.rating}/10</p>
          </div>

          <p className="italic text-xs text-[#6B7280] mb-5">{movie.synopsis}</p>

          <div className="flex gap-3">
            <button
              onClick={() => navigate('/')}
              className="px-3 py-1.5 text-sm rounded-md bg-[#E0E7FF] text-[#4C1D95] hover:bg-[#C7D2FE] transition"
            >
              ⬅ Back
            </button>
            <button
              onClick={deleteMovie}
              className="px-3 py-1.5 text-sm rounded-md bg-red-100 text-red-600 hover:bg-red-200 transition"
            >
              🗑 Delete
            </button>
          </div>
        </div>

   
        <div>
          <h3 className="text-lg font-bold text-[#6D28D9] mb-4">
            🤖 AI Movie Recommendations
          </h3>

          {loading ? (
            <Spinner />
          ) : recs.length > 0 ? (
            <div className="grid grid-cols-1 gap-4">
              {recs.map((rec, i) => (
                <div
                  key={i}
                  className="bg-[#F5F3FF] border border-[#D8B4FE] rounded-xl p-4 shadow-sm hover:shadow-md transition"
                >
                  <h4 className="text-md font-semibold text-[#6B21A8] mb-1">{rec.title}</h4>
                  <p className="text-sm text-[#4B5563]">Director: {rec.director}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-[#6B7280]">No recommendations available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
