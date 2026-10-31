import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <h1>404 – siden finnes ikke</h1>
      <Link to="/">Tilbake til forsiden</Link>
    </>
  );
}
