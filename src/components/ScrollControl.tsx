import { useEffect, useState } from "react";

function nextSection() {
  const marker = document.getElementById("composition") || document.querySelector<HTMLElement>("main section:nth-of-type(2)");
  marker?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function ScrollControl() {
  const [progress, setProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [desktop, setDesktop] = useState(() => window.matchMedia("(min-width: 901px)").matches);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 901px)");
    const sync = () => setDesktop(media.matches);
    sync();
    media.addEventListener("change", sync);

    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? window.scrollY / max : 0);
      setScrolled(window.scrollY > 120);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      media.removeEventListener("change", sync);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  if (!desktop) return null;

  return (
    <>
      <div className="scroll-rail" aria-hidden="true">
        <span style={{ transform: `scaleY(${progress})` }} />
      </div>
      {scrolled ? (
        <button className="scroll-btn top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Back to top">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M8 13V3M3.5 7.5 8 3l4.5 4.5" stroke="currentColor" strokeWidth="1.6" />
          </svg>
          <span>Top</span>
        </button>
      ) : (
        <button className="scroll-btn down" onClick={nextSection} aria-label="Scroll to next section">
          <span>Scroll</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M8 3v10M3.5 8.5 8 13l4.5-4.5" stroke="currentColor" strokeWidth="1.6" />
          </svg>
        </button>
      )}
    </>
  );
}
