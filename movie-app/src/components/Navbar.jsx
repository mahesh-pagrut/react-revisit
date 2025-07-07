import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-[#EDE9FE] shadow-md px-8 py-5 flex justify-between items-center rounded-b-xl border-b border-[#D8B4FE]">
     <Link
        to="/"
        className="text-3xl font-bold text-[#6D28D9] tracking-tight"
      >
        🎬 Movie Tracker
      </Link>
    
    <div className="space-x-6 text-lg">
      <Link
        to="/"
        className="text-[#4B5563] hover:text-[#6D28D9] font-medium transition duration-200"
      >
        Home
      </Link>
      <Link
        to="/add-movie"
        className="text-[#4B5563] hover:text-[#6D28D9] font-medium transition duration-200"
      >
        Add Movie
      </Link>
    </div>
  </nav>
);

export default Navbar;
