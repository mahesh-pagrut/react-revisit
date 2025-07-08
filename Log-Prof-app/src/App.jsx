import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Profile from './pages/Profile';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default App;
