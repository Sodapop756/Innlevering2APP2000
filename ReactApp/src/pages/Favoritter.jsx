import { cabinData } from "../data/cabins";
import { useFavorites } from "../context/FavoritesContext";
import HytteKort from "../components/HytteKort";

export default function Favoritter() {
  const { ids } = useFavorites();
  const cabins = cabinData.cabins.filter((c) => ids.includes(c.id));

  return (
    <>
      <h1>Mine favoritter</h1>
      {cabins.length === 0 ? (
        <p>Du har ingen favoritter ennå.</p>
      ) : (
        <div className="grid">
          {cabins.map((c) => (
            <HytteKort key={c.id} cabin={c} />
          ))}
        </div>
      )}
    </>
  );
}
