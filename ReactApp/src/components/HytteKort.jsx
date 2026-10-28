import { useState } from "react";
import { Link } from "react-router-dom";
import { getFavorites, toggleFavorite } from "../utils/favorites";

const FALLBACK = "https://placehold.co/600x400?text=Ingen+bilde";

export default function HytteKort({ cabin }) {
  const [fav, setFav] = useState(() => getFavorites().includes(cabin.id));
  const img = cabin.images[0];

  function handleFav(e) {
    e.preventDefault(); // the card is a link, so don't navigate
    setFav(toggleFavorite(cabin.id).includes(cabin.id));
  }

  return (
    <Link to={`/hytte/${cabin.id}`} className="kort">
      <img
        src={img?.url ?? FALLBACK}
        alt={img?.alt ?? cabin.name}
        onError={(e) => {
          e.currentTarget.src = FALLBACK;
        }}
      />
      <h3>{cabin.name}</h3>
      <p>
        {cabin.location.municipality} ·{" "}
        {cabin.type === "staffed" ? "Betjent" : "Ubetjent"}
      </p>
      <p>
        Fra {cabin.pricing.perNight.member} {cabin.pricing.currency}/natt
        {cabin.rating.average !== null && ` · ★ ${cabin.rating.average}`}
      </p>
      <button onClick={handleFav} aria-pressed={fav}>
        {fav ? "♥ Favoritt" : "♡ Legg til favoritt"}
      </button>
    </Link>
  );
}
