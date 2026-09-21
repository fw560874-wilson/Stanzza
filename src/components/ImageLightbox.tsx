type ImageLightboxProps = {
  images: { src: string; alt: string }[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
};

export function ImageLightbox({ images, index, onClose, onPrev, onNext }: ImageLightboxProps) {
  const current = images[index];
  if (!current) return null;

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label="Image view" onClick={onClose}>
      <button className="lightbox-close" onClick={onClose} aria-label="Close image view">
        Close
      </button>
      {images.length > 1 ? (
        <button
          className="lightbox-nav prev"
          onClick={(event) => {
            event.stopPropagation();
            onPrev();
          }}
          aria-label="Previous image"
        >
          ←
        </button>
      ) : null}
      <img src={current.src} alt={current.alt} onClick={(event) => event.stopPropagation()} />
      {images.length > 1 ? (
        <button
          className="lightbox-nav next"
          onClick={(event) => {
            event.stopPropagation();
            onNext();
          }}
          aria-label="Next image"
        >
          →
        </button>
      ) : null}
      <p>
        {index + 1} / {images.length}
      </p>
    </div>
  );
}
