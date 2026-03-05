"use client";

import { useState } from "react";
import Lightbox from "./Lightbox";

function GalleryGrid({ images }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (idx) => {
    setLightboxIndex(idx);
    setLightboxOpen(true);
  };

  if (!images || images.length === 0) return null;

  return (
    <section style={{ padding: "72px 0 48px" }}>
      {/* Section header */}
      <div style={{ marginBottom: "32px" }}>
        <p
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: "11px",
            textTransform: "uppercase",
            letterSpacing: "0.4em",
            color: "var(--gold)",
            marginBottom: "10px",
          }}
        >
          The Space
        </p>
        <h2
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "40px",
            fontWeight: 600,
            fontStyle: "italic",
            color: "var(--birch)",
            margin: 0,
          }}
        >
          Inside &amp; Out
        </h2>
      </div>

      {/* Gallery grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "16px",
          position: "relative",
        }}
      >
        {/* Photo count badge on first image */}
        {images.map((src, idx) => (
          <GalleryCell
            key={idx}
            src={src}
            idx={idx}
            isHero={idx === 0}
            onOpen={openLightbox}
            totalCount={images.length}
          />
        ))}
      </div>

      {lightboxOpen && (
        <Lightbox
          images={images}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </section>
  );
}

function GalleryCell({ src, idx, isHero, onOpen, totalCount }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        position: "relative",
        aspectRatio: isHero ? "16/9" : "4/3",
        borderRadius: "2px",
        overflow: "hidden",
        cursor: "pointer",
        gridColumn: isHero ? "1 / -1" : "auto",
      }}
      onClick={() => onOpen(idx)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={`Gallery photo ${idx + 1}`}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transition: "transform 400ms ease",
          transform: hovered ? "scale(1.04)" : "scale(1)",
        }}
      />

      {/* Hover overlay */}
      {hovered && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(13,15,11,0.7) 0%, transparent 60%)",
            pointerEvents: "none",
          }}
        />
      )}

      {/* Gold hairline on hover */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "2px",
          background: "var(--gold)",
          transform: hovered ? "scaleX(1)" : "scaleX(0)",
          transformOrigin: "left",
          transition: "transform 300ms ease-out",
        }}
      />

      {/* Expand icon */}
      <div
        style={{
          position: "absolute",
          top: "12px",
          right: "12px",
          width: "36px",
          height: "36px",
          borderRadius: "50%",
          background: "rgba(13,15,11,0.8)",
          border: "1px solid var(--border)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          opacity: hovered ? 1 : 0,
          transition: "opacity 200ms ease",
        }}
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--gold)"
          strokeWidth="1.5"
        >
          <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
        </svg>
      </div>

      {/* Photo count badge on first image */}
      {idx === 0 && (
        <div
          style={{
            position: "absolute",
            top: "12px",
            left: "12px",
            background: "rgba(13,15,11,0.8)",
            padding: "4px 10px",
            borderRadius: "24px",
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: "11px",
            color: "var(--stone)",
            cursor: "pointer",
          }}
          onClick={(e) => {
            e.stopPropagation();
            onOpen(0);
          }}
        >
          &#x229E; {totalCount} Photos
        </div>
      )}
    </div>
  );
}

export default GalleryGrid;
