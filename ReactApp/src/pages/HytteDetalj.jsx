import { useParams, Link } from "react-router-dom";
import { cabinData } from "../data/cabins";

const FALLBACK = "https://placehold.co/600x400?text=Ingen+bilde";

export default function HytteDetalj() {
  const { id } = useParams();
  const cabin = cabinData.cabins.find((c) => c.id === id);

  if (!cabin) {
    return (
      <>
        <p>Fant ikke hytta.</p>
        <Link to="/hytter">Tilbake</Link>
      </>
    );
  }

  let bildeUrl = FALLBACK;
  if (cabin.images.length > 0) {
    bildeUrl = cabin.images[0].url;
  }

  const { member, nonMember } = cabin.pricing.perNight;

  return (
    <>
      <Link to="/hytter">← Tilbake</Link>
      <h1>{cabin.name}</h1>
      <img src={bildeUrl} alt={cabin.name} style={{ maxWidth: "100%" }} />
      <p>{cabin.description.nb}</p>

      <ul>
        <li>Type: {cabin.type === "staffed" ? "Betjent" : "Ubetjent"}</li>
        <li>
          Sted: {cabin.location.municipality}, {cabin.location.region}
        </li>
        <li>Høyde: {cabin.location.elevationMeters} moh.</li>
        <li>
          Pris: {member} kr (medlem) / {nonMember} kr (ikke-medlem) per natt
        </li>
        <li>Sengeplasser: {cabin.capacity.totalBeds}</li>
        <li>
          Fasiliteter:{" "}
          {cabin.facilities.length > 0
            ? cabin.facilities.join(", ")
            : "Ingen oppgitt"}
        </li>
        <li>
          Eier: {cabin.owner.name}
          {cabin.owner.contact.email && ` (${cabin.owner.contact.email})`}
        </li>
      </ul>

      <h2>Åpningstider</h2>
      {cabin.openSeasons.length === 0 ? (
        <p>Ikke oppgitt.</p>
      ) : (
        <ul>
          {cabin.openSeasons.map((s) => (
            <li key={s.name}>
              {s.name}: {s.start} – {s.end}
            </li>
          ))}
        </ul>
      )}

      <h2>Anmeldelser</h2>
      {cabin.reviews.length === 0 ? (
        <p>Ingen anmeldelser ennå.</p>
      ) : (
        cabin.reviews.map((r) => (
          <p key={r.id}>
            <strong>{r.author}</strong> – {"★".repeat(r.stars)} ({r.date})
            <br />
            {r.text}
          </p>
        ))
      )}
    </>
  );
}
