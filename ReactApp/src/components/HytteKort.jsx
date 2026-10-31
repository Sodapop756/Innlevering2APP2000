import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";

const FALLBACK = "https://placehold.co/600x400?text=Ingen+bilde";

export default function HytteKort({ cabin }) {
  const { isFavorite, toggle } = useFavorites();

  let bildeUrl = FALLBACK;
  if (cabin.images.length > 0) {
    bildeUrl = cabin.images[0].url;
  }

  function handleFav(e) {
    e.preventDefault(); // kortet er en lenke, så vi stopper navigeringen
    toggle(cabin.id);
  }

  return (
    <Link to={`/hytte/${cabin.id}`} className="kort">
      <img src={bildeUrl} alt={cabin.name} />
      <h3>{cabin.name}</h3>
      <p>
        {cabin.location.municipality} ·{" "}
        {cabin.type === "staffed" ? "Betjent" : "Ubetjent"}
      </p>
      <p>
        Fra {cabin.pricing.perNight.member} {cabin.pricing.currency}/natt
        {cabin.rating.average !== null && ` · ★ ${cabin.rating.average}`}
      </p>
      <button onClick={handleFav}>
        {isFavorite(cabin.id) ? "♥ Favoritt" : "♡ Legg til favoritt"}
      </button>
    </Link>
  );
}
