import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FavoritesProvider } from "./context/FavoritesContext";
import { AuthProvider } from "./context/AuthContext";
import Layout from "./Layout";
import Hjem from "./pages/Hjem";
import Hytter from "./pages/Hytter";
import HytteDetalj from "./pages/HytteDetalj";
import Favoritter from "./pages/Favoritter";
import Innlogging from "./pages/Innlogging";
import Bestill from "./pages/Bestill";
import Om from "./pages/Om";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <AuthProvider>
      <FavoritesProvider>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Hjem />} />
              <Route path="/hytter" element={<Hytter />} />
              <Route path="/hytte/:id" element={<HytteDetalj />} />
              <Route path="/favoritter" element={<Favoritter />} />
              <Route path="/logg-inn" element={<Innlogging />} />
              <Route path="/bestill" element={<Bestill />} />
              <Route path="/om" element={<Om />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </FavoritesProvider>
    </AuthProvider>
  );
}
