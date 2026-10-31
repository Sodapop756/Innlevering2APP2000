import { useEffect, useRef, useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function Innlogging() {
  const { bruker, loggInn, loggUt } = useAuth();
  const [brukernavn, setBrukernavn] = useState("");
  const [passord, setPassord] = useState("");
  const [feil, setFeil] = useState("");
  const brukernavnRef = useRef(null);

  // Legger markøren i brukernavn-feltet når siden vises
  useEffect(() => {
    if (brukernavnRef.current) {
      brukernavnRef.current.focus();
    }
  }, []);

  function handleSubmit(e) {
    e.preventDefault(); // hindrer at siden lastes på nytt
    if (brukernavn.trim() === "" || passord === "") {
      setFeil("Fyll inn både brukernavn og passord.");
      return;
    }
    // TODO: sjekk mot databasen når backend er på plass
    setFeil("");
    loggInn(brukernavn.trim());
    setPassord("");
  }

  if (bruker) {
    return (
      <>
        <h1>Innlogget</h1>
        <p>Du er logget inn som {bruker}.</p>
        <button onClick={loggUt}>Logg ut</button>
      </>
    );
  }

  return (
    <>
      <h1>Logg inn</h1>
      <form className="skjema" onSubmit={handleSubmit}>
        <input
          ref={brukernavnRef}
          type="text"
          placeholder="Brukernavn"
          value={brukernavn}
          onChange={(e) => setBrukernavn(e.target.value)}
        />
        <input
          type="password"
          placeholder="Passord"
          value={passord}
          onChange={(e) => setPassord(e.target.value)}
        />
        <button type="submit">Logg inn</button>
        {feil && <p className="feil">{feil}</p>}
      </form>
    </>
  );
}
