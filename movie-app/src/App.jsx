
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AddMovie from './pages/AddMovie';
import MovieDetail from './pages/MovieDetail';

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add-movie" element={<AddMovie />} />
      <Route path="/movie/:id" element={<MovieDetail />} />
    </Routes>
  </>
);

export default App;
