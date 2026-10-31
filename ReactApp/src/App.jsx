import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FavoritesProvider } from "./context/FavoritesContext";
import Layout from "./Layout";
import Hjem from "./pages/Hjem";
import Hytter from "./pages/Hytter";
import HytteDetalj from "./pages/HytteDetalj";
import Favoritter from "./pages/Favoritter";
import Om from "./pages/Om";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <FavoritesProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Hjem />} />
            <Route path="/hytter" element={<Hytter />} />
            <Route path="/hytte/:id" element={<HytteDetalj />} />
            <Route path="/favoritter" element={<Favoritter />} />
            <Route path="/om" element={<Om />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </FavoritesProvider>
  );
}
