import { useMovieContext } from '../context/MovieContext';
import MovieCard from '../components/MovieCard';
import { useState } from 'react';

const Home = () => {
  const { movies } = useMovieContext();
  const [filter, setFilter] = useState('All');
  const [sort, setSort] = useState('');

  const filtered = movies
    .filter((m) => filter === 'All' || m.genre === filter)
    .sort((a, b) =>
      sort === 'title'
        ? a.title.localeCompare(b.title)
        : sort === 'rating'
        ? b.rating - a.rating
        : 0
    );

  return (
    <div className="bg-[#F8F5FF] min-h-screen p-6">
      {/* Filter & Sort Controls */}
      <div className="flex flex-col sm:flex-row sm:justify-between gap-4 mb-6">
        <select
          onChange={(e) => setFilter(e.target.value)}
          className="px-4 py-2 rounded-md border border-[#D8B4FE] bg-white text-[#6D28D9] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#C4B5FD]"
        >
          {['All', 'Action', 'Drama', 'Sci-Fi', 'Comedy'].map((g) => (
            <option key={g}>{g}</option>
          ))}
        </select>

        <select
          onChange={(e) => setSort(e.target.value)}
          className="px-4 py-2 rounded-md border border-[#D8B4FE] bg-white text-[#6D28D9] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#C4B5FD]"
        >
          <option value="">Sort</option>
          <option value="title">Title</option>
          <option value="rating">Rating</option>
        </select>
      </div>

      {/* Movie Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.length > 0 ? (
          filtered.map((movie) => <MovieCard key={movie.id} movie={movie} />)
        ) : (
          <p className="text-center col-span-full text-[#6D28D9] text-lg">
            No movies found for the selected filter.
          </p>
        )}
      </div>
    </div>
  );
};

export default Home;
