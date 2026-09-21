import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import type { Shot } from "../data/content";

type ImageReelProps = {
  shots: Shot[];
  variant?: "page" | "hero" | "inline";
  interval?: number;
};

export function ImageReel({ shots, variant = "page", interval = 5200 }: ImageReelProps) {
  const { pathname, hash } = useLocation();
  const [index, setIndex] = useState(0);
  const frames = shots.filter((shot) => shot.src);

  useEffect(() => {
    setIndex(0);
    if (frames.length < 2) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % frames.length);
    }, interval);
    return () => window.clearInterval(timer);
  }, [pathname, hash, frames.length, interval]);

  if (!frames.length) return null;

  return (
    <figure className={`image-reel ${variant}`} key={`${pathname}${hash}`}>
      {frames.map((shot, shotIndex) => (
        <img
          key={`${shot.src}-${shotIndex}`}
          src={shot.src}
          alt={shotIndex === index ? shot.alt : ""}
          className={shotIndex === index ? "is-on" : ""}
          loading={shotIndex < 2 ? "eager" : "lazy"}
        />
      ))}
    </figure>
  );
}
