import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import AddBook from "../pages/AddBook";
import BookDetail from "../pages/BookDetail";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add-book" element={<AddBook />} />
      <Route path="/book/:id" element={<BookDetail />} />
    </Routes>
  );
};

export default AppRoutes;
