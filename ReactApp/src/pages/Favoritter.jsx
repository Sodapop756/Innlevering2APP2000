import { cabinData } from "../data/cabins";
import { getFavorites } from "../utils/favorites";
import HytteKort from "../components/HytteKort";

export default function Favoritter() {
  const ids = getFavorites();
  const cabins = cabinData.cabins.filter((c) => ids.includes(c.id));

  return (
    <main>
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
    </main>
  );
}
