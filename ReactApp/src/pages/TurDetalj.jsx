import { useParams, Link } from "react-router-dom";
import { trips } from "../data/trips";
import { cabinData } from "../data/cabins";

export default function TurDetalj() {
  const { id } = useParams();
  const trip = trips.find((t) => t.id === id);

  if (!trip) {
    return (
      <>
        <p>Fant ikke turen.</p>
        <Link to="/turer">Tilbake</Link>
      </>
    );
  }

  // Hyttene som er knyttet til denne turen
  const cabins = cabinData.cabins.filter((c) =>
    c.connectedTripIds.includes(trip.id),
  );

  return (
    <>
      <Link to="/turer">← Tilbake</Link>
      <h1>{trip.name}</h1>
      <p>{trip.description}</p>

      <ul>
        <li>Type: {trip.activity}</li>
        <li>Vanskelighetsgrad: {trip.difficulty}</li>
        <li>
          Varighet: {trip.durationDays}{" "}
          {trip.durationDays === 1 ? "dag" : "dager"}
        </li>
        <li>{trip.guided ? "Fellestur med turleder" : "Egen tur"}</li>
      </ul>

      <h2>Startdatoer</h2>
      {trip.startDates.length === 0 ? (
        <p>Ingen fast startdato.</p>
      ) : (
        <ul>
          {trip.startDates.map((d) => (
            <li key={d}>{d}</li>
          ))}
        </ul>
      )}

      <h2>Hytter på turen</h2>
      {cabins.length === 0 ? (
        <p>Ingen hytter er knyttet til denne turen.</p>
      ) : (
        <ul>
          {cabins.map((c) => (
            <li key={c.id}>
              <Link to={`/hytte/${c.id}`}>{c.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
