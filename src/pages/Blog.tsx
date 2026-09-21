import { Link } from "react-router-dom";
import { articles, interiors } from "../data/content";
import { ImageReel } from "../components/ImageReel";
import { InteriorGallery } from "../components/InteriorGallery";

export function Blog() {
  return (
    <main id="main">
      <section className="container page-hero blog-index">
        <Link to="/" className="page-crumb">
          ← Home
        </Link>
        <div className="blog-head">
          <h1 className="serif">Blog.</h1>
          <p className="blog-count">+{String(articles.length).padStart(2, "0")}</p>
        </div>
        <ImageReel shots={interiors.blog.slice(0, 8)} />
        <div className="blog-list">
          {articles.map((article) => (
            <Link className="blog-row" to={`/blog/${article.slug}`} key={article.slug}>
              <figure className="blog-shot">
                <img src={article.image} alt={article.title} />
                <span className="blog-view">View</span>
              </figure>
              <h2 className="serif">{article.title}</h2>
              <span className="blog-row-link">View article</span>
            </Link>
          ))}
        </div>
        <InteriorGallery shots={interiors.blog} title="From the rooms" />
      </section>
    </main>
  );
}
