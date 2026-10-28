import { BrowserRouter, Routes, Route } from "react-router-dom";
import Banner from "./components/Banner";
import Landing from "./pages/Landing";
import HytteDetalj from "./pages/HytteDetalj";

export default function App() {
  return (
    <BrowserRouter>
      <Banner />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/hytte/:id" element={<HytteDetalj />} />
      </Routes>
    </BrowserRouter>
  );
}
