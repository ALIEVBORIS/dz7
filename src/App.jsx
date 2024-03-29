import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import PokemonPage from "./pages/PokemonPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:name" element={<PokemonPage />} />
      </Routes>
    </div>
  );
}

export default App;
