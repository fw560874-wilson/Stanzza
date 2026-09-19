import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <main>
      <section className="container page-hero" style={{ paddingBottom: 120 }}>
        <p className="kicker">404</p>
        <h1 className="serif">This page is not in the composition.</h1>
        <Link className="pill" to="/" style={{ marginTop: 28 }}>
          Back to home
        </Link>
      </section>
    </main>
  );
}
