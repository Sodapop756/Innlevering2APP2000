// Viser bestillingene med beregnet totalsum. Merk bruk av reduce og map.

export default function Bestillingsliste({ bruker, linjer, onFjern }) {
  const total = linjer.reduce(
    (sum, l) => sum + l.netter * l.personer * l.pris,
    0,
  );

  function sendBestilling() {
    alert("Lagring av bestilling i databasen er ikke implementert ennå!");
  }

  return (
    <div className="boks">
      <h2>Bestillinger for {bruker}</h2>

      {linjer.length === 0 ? (
        <p>Ingen bestillinger ennå.</p>
      ) : (
        linjer.map((l) => (
          <p key={l.id} className="linje">
            {l.hytteNavn}: {l.netter} netter × {l.personer} personer × {l.pris}{" "}
            kr = <strong>{l.netter * l.personer * l.pris} kr</strong>{" "}
            <button onClick={() => onFjern(l.id)}>Fjern</button>
          </p>
        ))
      )}

      <p>
        <strong>Sum: {total} kr</strong>
      </p>
      <button onClick={sendBestilling} disabled={linjer.length === 0}>
        Send bestilling
      </button>
    </div>
  );
}
