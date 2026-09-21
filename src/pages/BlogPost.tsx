import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { articles, images, interiors, studio } from "../data/content";
import { ImageLightbox } from "../components/ImageLightbox";
import { ImageReel } from "../components/ImageReel";
import { InteriorGallery } from "../components/InteriorGallery";
import { NotFound } from "./NotFound";

export function BlogPost() {
  const { slug } = useParams();
  const article = articles.find((item) => item.slug === slug);
  const [viewIndex, setViewIndex] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);

  const photos = useMemo(
    () => (article ? [article.image, ...(article.photos ?? [])].map((src) => ({ src, alt: article.title })) : []),
    [article],
  );

  useEffect(() => {
    if (viewIndex == null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setViewIndex(null);
      if (event.key === "ArrowRight") setViewIndex((index) => (index == null ? index : (index + 1) % photos.length));
      if (event.key === "ArrowLeft")
        setViewIndex((index) => (index == null ? index : (index - 1 + photos.length) % photos.length));
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [viewIndex, photos.length]);

  if (!article) return <NotFound />;
  const index = articles.findIndex((item) => item.slug === slug);
  const prev = articles[index - 1];
  const next = articles[index + 1];

  const copyLink = async () => {
    await navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <main id="main">
      <article className="container page-hero blog-post">
        <Link to="/blog" className="page-crumb">
          ← Blog
        </Link>
        <h1 className="serif blog-post-title">{article.title}</h1>
        <p className="lead blog-post-lead">{article.excerpt}</p>
        <div className="blog-meta">
          <img src={images.kirill} alt="" />
          <div>
            <strong>{article.author}</strong>
            <span>
              {article.date} · {article.read}
            </span>
          </div>
        </div>
        <div className="blog-share">
          <a href={studio.socials.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
            Ig
          </a>
          <a href={studio.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            In
          </a>
          <a href={studio.socials.behance} target="_blank" rel="noreferrer" aria-label="Behance">
            Be
          </a>
          <button onClick={copyLink} aria-label="Copy link">
            {copied ? "Copied" : "Link"}
          </button>
        </div>
        <ImageReel shots={photos} />
        <button className="blog-shot blog-shot-open" onClick={() => setViewIndex(0)}>
          <img src={photos[0].src} alt={photos[0].alt} />
          <span className="blog-view">View</span>
        </button>
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
        {photos.slice(1).map((photo, photoIndex) => (
          <button
            key={photo.src}
            className="blog-shot blog-shot-open"
            onClick={() => setViewIndex(photoIndex + 1)}
          >
            <img src={photo.src} alt={photo.alt} />
            <span className="blog-view">View</span>
          </button>
        ))}
        <InteriorGallery shots={interiors.blog} title="From the rooms" />
        <div className="two-col" style={{ marginTop: 48, paddingBottom: 40 }}>
          {prev ? <Link to={`/blog/${prev.slug}`}>← Previous article</Link> : <span />}
          {next ? (
            <Link to={`/blog/${next.slug}`} style={{ textAlign: "right" }}>
              Next article →
            </Link>
          ) : (
            <span />
          )}
        </div>
      </article>
      {viewIndex != null ? (
        <ImageLightbox
          images={photos}
          index={viewIndex}
          onClose={() => setViewIndex(null)}
          onPrev={() => setViewIndex((viewIndex - 1 + photos.length) % photos.length)}
          onNext={() => setViewIndex((viewIndex + 1) % photos.length)}
        />
      ) : null}
    </main>
  );
}
