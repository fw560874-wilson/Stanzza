import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function useScrollMotion() {
  const { pathname } = useLocation();

  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-in");
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" },
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
  }, [pathname]);
}
