import { Link } from "react-router-dom";
import { trips } from "../data/trips";

export default function Turer() {
  return (
    <>
      <h1>Turer</h1>
      <p>{trips.length} turer</p>
      <div className="grid">
        {trips.map((t) => (
          <Link key={t.id} to={`/tur/${t.id}`} className="kort">
            <h3>{t.name}</h3>
            <p>
              {t.activity} · {t.difficulty} · {t.durationDays}{" "}
              {t.durationDays === 1 ? "dag" : "dager"}
            </p>
            <p>{t.guided ? "Fellestur med turleder" : "Egen tur"}</p>
          </Link>
        ))}
      </div>
    </>
  );
}
