import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function markVisible(node: HTMLElement) {
  const rect = node.getBoundingClientRect();
  if (rect.bottom > 24 && rect.top < (window.innerHeight || 0) + 80) {
    node.classList.add("is-in");
  }
}

export function useScrollMotion() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>(
        "[data-reveal], .anim-shot, .page-still, .image-reel, .blog-shot, .hero-media, .featured-card, .stat",
      ),
    );

    nodes.forEach(markVisible);

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-in");
        });
      },
      { threshold: 0.01, rootMargin: "120px 0px 120px 0px" },
    );
    nodes.forEach((node) => io.observe(node));

    const bar = document.querySelector<HTMLElement>(".scroll-line");
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const value = max > 0 ? window.scrollY / max : 0;
      if (bar) bar.style.transform = `scaleX(${value})`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [pathname, hash]);
}
