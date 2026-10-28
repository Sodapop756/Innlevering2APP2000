import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Banner from "./components/Banner";
import Landing from "./pages/Landing";
import HytteDetalj from "./pages/HytteDetalj";
import Favoritter from "./pages/Favoritter";

export default function App() {
  return (
    <BrowserRouter>
      <Banner />
      <nav style={{ padding: "0.5rem 1rem", display: "flex", gap: "1rem" }}>
        <Link to="/">Hytter</Link>
        <Link to="/favoritter">Favoritter</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/hytte/:id" element={<HytteDetalj />} />
        <Route path="/favoritter" element={<Favoritter />} />
      </Routes>
    </BrowserRouter>
  );
}
