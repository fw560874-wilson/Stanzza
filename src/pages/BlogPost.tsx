import { Link, useParams } from "react-router-dom";
import { articles } from "../data/content";
import { NotFound } from "./NotFound";

export function BlogPost() {
  const { slug } = useParams();
  const article = articles.find((item) => item.slug === slug);
  if (!article) return <NotFound />;
  const index = articles.findIndex((item) => item.slug === slug);
  const prev = articles[index - 1];
  const next = articles[index + 1];

  return (
    <main>
      <article className="container page-hero">
        <Link to="/blog" className="kicker">
          ← Blog
        </Link>
        <h1 className="serif" style={{ fontSize: "clamp(40px, 6vw, 72px)", marginTop: 16 }}>
          {article.title}
        </h1>
        <p className="lead" style={{ margin: "16px 0 24px", maxWidth: 680 }}>
          {article.excerpt}
        </p>
        <p style={{ color: "var(--muted)" }}>
          {article.author} · {article.date} · {article.read}
        </p>
        <img
          src={article.image}
          alt={article.title}
          style={{ width: "100%", borderRadius: 32, margin: "32px 0", maxHeight: 620, objectFit: "cover" }}
        />
        <div className="prose">
          {article.body.map((block, i) => (
            <section key={i}>
              {block.heading ? <h3 className="serif">{block.heading}</h3> : null}
              {block.paragraphs?.map((p) => (
                <p key={p}>{p}</p>
              ))}
              {block.list ? (
                <ul>
                  {block.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </div>
        <div className="two-col" style={{ marginTop: 48, paddingBottom: 40 }}>
          {prev ? <Link to={`/blog/${prev.slug}`}>← Previous article</Link> : <span />}
          {next ? <Link to={`/blog/${next.slug}`} style={{ textAlign: "right" }}>Next article →</Link> : <span />}
        </div>
      </article>
    </main>
  );
}
