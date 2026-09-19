import { Link } from "react-router-dom";
import { articles } from "../data/content";

export function Blog() {
  return (
    <main>
      <section className="container page-hero">
        <p className="kicker">From the studio</p>
        <h1 className="serif">Blog.</h1>
        <p className="lead" style={{ marginTop: 16, maxWidth: 560 }}>
          Notes on rooms, cities and the interiors we keep returning to.
        </p>
        <div className="blog-grid" style={{ marginTop: 48 }}>
          {articles.map((article) => (
            <Link className="blog-card" to={`/blog/${article.slug}`} key={article.slug}>
              <img src={article.image} alt={article.title} />
              <div>
                <p className="kicker">
                  {article.date} · {article.read}
                </p>
                <h3 className="serif">{article.title}</h3>
                <p style={{ color: "var(--muted)" }}>{article.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
