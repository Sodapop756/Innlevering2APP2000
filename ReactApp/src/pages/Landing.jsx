import { cabinData } from "../data/cabins";
import HytteKort from "../components/HytteKort";

export default function Landing() {
  return (
    <main>
      <h1>Turapp</h1>
      <h2>Utvalgte hytter</h2>
      <div className="grid">
        {cabinData.cabins.map((c) => (
          <HytteKort key={c.id} cabin={c} />
        ))}
      </div>
    </main>
  );
}
