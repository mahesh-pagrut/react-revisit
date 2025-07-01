import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen font-sans">
        <Navbar />
        <main className="px-4 md:px-10 py-6">
          <AppRoutes />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
