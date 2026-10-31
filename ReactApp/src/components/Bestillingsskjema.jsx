import { useState } from "react";
import { cabinData } from "../data/cabins";

export default function Bestillingsskjema({ onBestill }) {
  const [hytteId, setHytteId] = useState("");
  const [netter, setNetter] = useState("1");
  const [personer, setPersoner] = useState("1");
  const [medlem, setMedlem] = useState(false);
  const [feil, setFeil] = useState("");

  function handleSubmit(e) {
    e.preventDefault(); // hindrer at siden lastes på nytt

    const hytte = cabinData.cabins.find((c) => c.id === hytteId);
    const n = Number(netter);
    const p = Number(personer);

    if (!hytte) {
      setFeil("Velg en hytte.");
      return;
    }
    if (!Number.isInteger(n) || n < 1 || n > 30) {
      setFeil("Antall netter må være et helt tall fra 1 til 30.");
      return;
    }
    if (!Number.isInteger(p) || p < 1 || p > hytte.capacity.totalBeds) {
      setFeil(
        `Antall personer må være et helt tall fra 1 til ${hytte.capacity.totalBeds}.`,
      );
      return;
    }

    const pris = medlem
      ? hytte.pricing.perNight.member
      : hytte.pricing.perNight.nonMember;

    setFeil("");
    onBestill({
      id: Date.now(),
      hytteNavn: hytte.name,
      netter: n,
      personer: p,
      pris: pris,
      medlem: medlem,
    });
  }

  return (
    <form className="skjema" onSubmit={handleSubmit}>
      <h2>Bestill opphold</h2>

      <label>
        Hytte
        <select value={hytteId} onChange={(e) => setHytteId(e.target.value)}>
          <option value="">Velg hytte…</option>
          {cabinData.cabins.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </select>
      </label>

      <label>
        Antall netter
        <input
          type="number"
          value={netter}
          onChange={(e) => setNetter(e.target.value)}
        />
      </label>

      <label>
        Antall personer
        <input
          type="number"
          value={personer}
          onChange={(e) => setPersoner(e.target.value)}
        />
      </label>

      <label>
        <input
          type="checkbox"
          checked={medlem}
          onChange={(e) => setMedlem(e.target.checked)}
        />{" "}
        Medlem av TiU (medlemspris)
      </label>

      <button type="submit">Legg til bestilling</button>
      {feil && <p className="feil">{feil}</p>}
    </form>
  );
}
