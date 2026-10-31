import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="nav">
      <Link to="/">Hjem</Link>
      <Link to="/hytter">Hytter</Link>
      <Link to="/favoritter">Favoritter</Link>
      <Link to="/om">Om</Link>
    </nav>
  );
}
