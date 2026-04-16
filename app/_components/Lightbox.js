"use client";

import { useState, useEffect, useCallback } from "react";

function Lightbox({ images, initialIndex = 0, onClose }) {
  const [current, setCurrent] = useState(initialIndex);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + images.length) % images.length);
  }, [images.length]);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, prev, next]);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "rgba(13,15,11,0.95)",
        backdropFilter: "blur(4px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        animation: "fadeUp 300ms ease-out both",
      }}
      onClick={onClose}
    >
      {/* Previous */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          prev();
        }}
        style={{
          position: "absolute",
          left: "24px",
          top: "50%",
          transform: "translateY(-50%)",
          background: "none",
          border: "none",
          color: "var(--gold)",
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "48px",
          cursor: "pointer",
          lineHeight: 1,
          padding: "8px 16px",
          zIndex: 10001,
        }}
        aria-label="Previous photo"
      >
        ‹
      </button>

      {/* Image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={images[current]}
        alt={`Photo ${current + 1} of ${images.length}`}
        style={{
          maxHeight: "90vh",
          maxWidth: "90vw",
          objectFit: "contain",
          border: "1px solid var(--border)",
          animation: "fadeUp 300ms ease-out both",
        }}
        onClick={(e) => e.stopPropagation()}
      />

      {/* Next */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          next();
        }}
        style={{
          position: "absolute",
          right: "24px",
          top: "50%",
          transform: "translateY(-50%)",
          background: "none",
          border: "none",
          color: "var(--gold)",
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "48px",
          cursor: "pointer",
          lineHeight: 1,
          padding: "8px 16px",
          zIndex: 10001,
        }}
        aria-label="Next photo"
      >
        ›
      </button>

      {/* Counter */}
      <div
        style={{
          position: "absolute",
          bottom: "24px",
          left: "50%",
          transform: "translateX(-50%)",
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: "12px",
          color: "var(--stone)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        Photo {current + 1} of {images.length}
      </div>

      {/* Close */}
      <button
        onClick={onClose}
        style={{
          position: "absolute",
          top: "20px",
          right: "24px",
          background: "none",
          border: "none",
          color: "var(--stone)",
          fontFamily: "'Jost', sans-serif",
          fontWeight: 300,
          fontSize: "28px",
          cursor: "pointer",
          lineHeight: 1,
          transition: "color 200ms ease",
          zIndex: 10001,
        }}
        onMouseEnter={(e) => (e.target.style.color = "var(--rust)")}
        onMouseLeave={(e) => (e.target.style.color = "var(--stone)")}
        aria-label="Close lightbox"
      >
        &times;
      </button>
    </div>
  );
}

export default Lightbox;
