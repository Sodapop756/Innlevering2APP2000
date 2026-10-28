import { useState } from "react";
import { cabinData } from "../data/cabins";
import HytteKort from "../components/HytteKort";

export default function Landing() {
  const [type, setType] = useState("all");
  const [maxPrice, setMaxPrice] = useState(3);
  const [search, setSearch] = useState("");

  const filtered = cabinData.cabins.filter(
    (c) =>
      (type === "all" || c.type === type) &&
      c.pricing.priceLevel <= maxPrice &&
      c.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <main>
      <h1>Turapp</h1>
      <h2>Utvalgte hytter</h2>

      <div className="filter">
        <input
          type="search"
          placeholder="Søk etter hytte…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="all">Alle typer</option>
          <option value="staffed">Betjent</option>
          <option value="unstaffed">Ubetjent</option>
        </select>
        <select
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
        >
          <option value={1}>Prisnivå 1</option>
          <option value={2}>Opptil prisnivå 2</option>
          <option value={3}>Alle prisnivå</option>
        </select>
      </div>

      <p>{filtered.length} hytter</p>
      <div className="grid">
        {filtered.map((c) => (
          <HytteKort key={c.id} cabin={c} />
        ))}
      </div>
    </main>
  );
}
