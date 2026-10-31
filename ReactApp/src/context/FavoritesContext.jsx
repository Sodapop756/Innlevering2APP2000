import { createContext, useContext, useEffect, useState } from "react";

const FavoritesContext = createContext(null);
const NOKKEL = "favoritter";

// Henter lagrede favoritter fra nettleseren (eller en tom liste)
function hentLagret() {
  try {
    const lagret = localStorage.getItem(NOKKEL);
    if (lagret) {
      return JSON.parse(lagret);
    }
  } catch {
    // ugyldig data eller ingen tilgang til localStorage
  }
  return [];
}

export function FavoritesProvider({ children }) {
  const [ids, setIds] = useState(hentLagret);

  // Lagrer listen hver gang den endrer seg
  useEffect(() => {
    localStorage.setItem(NOKKEL, JSON.stringify(ids));
  }, [ids]);

  function toggle(id) {
    if (ids.includes(id)) {
      setIds(ids.filter((f) => f !== id));
    } else {
      setIds([...ids, id]);
    }
  }

  const isFavorite = (id) => ids.includes(id);

  return (
    <FavoritesContext.Provider value={{ ids, isFavorite, toggle }}>
      {children}
    </FavoritesContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useFavorites() {
  return useContext(FavoritesContext);
}
