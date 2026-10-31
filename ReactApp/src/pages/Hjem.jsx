import { Link } from "react-router-dom";

export default function Hjem() {
  return (
    <>
      <h1>Velkommen til Turapp</h1>
      <p>Finn hytter og turer i Utopia.</p>
      <Link to="/hytter">Se alle hytter →</Link>
    </>
  );
}
