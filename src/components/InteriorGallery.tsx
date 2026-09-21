import { useEffect, useState, type CSSProperties } from "react";
import { useLocation } from "react-router-dom";
import { ImageLightbox } from "./ImageLightbox";
import type { Shot } from "../data/content";

export function InteriorGallery({ shots, title }: { shots: Shot[]; title?: string }) {
  const { pathname, hash } = useLocation();
  const [index, setIndex] = useState<number | null>(null);

  useEffect(() => {
    if (index == null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIndex(null);
      if (event.key === "ArrowRight") setIndex((current) => (current == null ? current : (current + 1) % shots.length));
      if (event.key === "ArrowLeft")
        setIndex((current) => (current == null ? current : (current - 1 + shots.length) % shots.length));
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [index, shots.length]);

  return (
    <section className="interior-block">
      {title ? <p className="kicker">{title}</p> : null}
      <div className="interior-grid" key={`${pathname}${hash}`}>
        {shots.map((shot, shotIndex) => (
          <button
            type="button"
            key={`${shot.src}-${shotIndex}`}
            className="anim-shot"
            style={{ "--shot-delay": `${(shotIndex % 8) * 0.08}s` } as CSSProperties}
            onClick={() => setIndex(shotIndex)}
          >
            <img src={shot.src} alt={shot.alt} loading={shotIndex < 6 ? "eager" : "lazy"} />
            <span className="blog-view">View</span>
          </button>
        ))}
      </div>
      {index != null ? (
        <ImageLightbox
          images={shots}
          index={index}
          onClose={() => setIndex(null)}
          onPrev={() => setIndex((index - 1 + shots.length) % shots.length)}
          onNext={() => setIndex((index + 1) % shots.length)}
        />
      ) : null}
    </section>
  );
}
