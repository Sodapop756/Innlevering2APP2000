import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Bestillingsskjema from "../components/Bestillingsskjema";
import Bestillingsliste from "../components/Bestillingsliste";

export default function Bestill() {
  const { bruker } = useAuth();
  const [linjer, setLinjer] = useState([]);

  function leggTil(linje) {
    setLinjer([...linjer, linje]); // ny kopi av listen, ikke endre den gamle
  }

  function fjern(id) {
    setLinjer(linjer.filter((l) => l.id !== id));
  }

  if (!bruker) {
    return (
      <>
        <h1>Bestilling</h1>
        <p>Du må logge inn for å bestille.</p>
        <Link to="/logg-inn">Gå til innlogging</Link>
      </>
    );
  }

  return (
    <>
      <h1>Bestilling</h1>
      <Bestillingsskjema onBestill={leggTil} />
      <Bestillingsliste bruker={bruker} linjer={linjer} onFjern={fjern} />
    </>
  );
}
