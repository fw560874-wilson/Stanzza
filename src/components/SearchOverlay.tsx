import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { searchSite } from "../data/search";
import { useUi } from "../context/UiContext";

export function SearchOverlay() {
  const { searchOpen, setSearchOpen } = useUi();
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const hits = useMemo(() => searchSite(query), [query]);

  useEffect(() => {
    if (searchOpen) {
      setQuery("");
      requestAnimationFrame(() => inputRef.current?.focus());
    }
  }, [searchOpen]);

  if (!searchOpen) return null;

  return (
    <div className="search-back" onClick={() => setSearchOpen(false)}>
      <div className="search-panel" onClick={(event) => event.stopPropagation()}>
        <div className="search-field">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
            <circle cx="8" cy="8" r="5.4" stroke="currentColor" strokeWidth="1.6" />
            <path d="M12.2 12.2 16 16" stroke="currentColor" strokeWidth="1.6" />
          </svg>
          <input
            ref={inputRef}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search pages, projects, articles"
          />
          <button onClick={() => setSearchOpen(false)} aria-label="Close search">
            Esc
          </button>
        </div>
        <div className="search-hits">
          {query && hits.length === 0 ? <p>No matches across the site.</p> : null}
          {hits.map((hit) => (
            <button
              key={`${hit.type}-${hit.to}`}
              onClick={() => {
                setSearchOpen(false);
                navigate(hit.to);
              }}
            >
              <small>{hit.type}</small>
              <span>{hit.title}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
