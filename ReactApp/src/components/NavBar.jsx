import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function NavBar() {
  const { bruker, loggUt } = useAuth();

  return (
    <nav className="nav">
      <Link to="/">Hjem</Link>
      <Link to="/hytter">Hytter</Link>
      <Link to="/favoritter">Favoritter</Link>
      <Link to="/om">Om</Link>
      <span className="nav-hoyre">
        {bruker ? (
          <>
            Hei, {bruker} <button onClick={loggUt}>Logg ut</button>
          </>
        ) : (
          <Link to="/logg-inn">Logg inn</Link>
        )}
      </span>
    </nav>
  );
}
