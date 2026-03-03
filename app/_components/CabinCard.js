"use client";

import Image from "next/image";
import Link from "next/link";

function CabinCard({ cabin }) {
  const { id, name, maxCapacity, regularPrice, discount, image } = cabin;
  const discountedPrice = discount > 0 ? regularPrice - discount : null;
  const discountPct =
    discount > 0 ? Math.round((discount / regularPrice) * 100) : 0;

  return (
    <div
      className="cabin-card"
      style={{
        background: "var(--deep)",
        border: "1px solid var(--border)",
        borderRadius: "4px",
        overflow: "hidden",
        transition: "transform 400ms ease, box-shadow 400ms ease",
        display: "flex",
        flexDirection: "column",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-6px)";
        e.currentTarget.style.boxShadow = "0 20px 60px rgba(0,0,0,0.5)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {/* Image with gradient overlay */}
      <div
        style={{
          position: "relative",
          height: "220px",
          overflow: "hidden",
          flexShrink: 0,
        }}
      >
        <Image
          src={image}
          fill
          alt={`Cabin ${name}`}
          className="object-cover"
          style={{ transition: "transform 400ms ease" }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.04)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        />
        {/* Dark gradient bottom overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, var(--void) 0%, transparent 55%)",
            pointerEvents: "none",
          }}
        />
        {/* Cabin name over image */}
        <div
          style={{
            position: "absolute",
            bottom: "14px",
            left: "20px",
            right: "20px",
          }}
        >
          <h3
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "26px",
              fontWeight: 700,
              fontStyle: "italic",
              color: "#fff",
              lineHeight: 1.1,
              margin: 0,
              textShadow: "0 2px 12px rgba(0,0,0,0.6)",
            }}
          >
            Cabin {name}
          </h3>
        </div>
        {/* Capacity badge — top right */}
        <div
          style={{
            position: "absolute",
            top: "12px",
            right: "12px",
            background: "rgba(13,15,11,0.75)",
            border: "1px solid var(--gold)",
            borderRadius: "2px",
            padding: "3px 10px",
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: "10px",
            color: "var(--gold)",
            letterSpacing: "0.08em",
            backdropFilter: "blur(4px)",
          }}
        >
          UP TO {maxCapacity} GUESTS
        </div>
      </div>

      {/* Card body */}
      <div
        style={{
          padding: "20px 24px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          flexGrow: 1,
        }}
      >
        {/* Capacity row */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          {/* Person icons */}
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--stone)"
            strokeWidth="1.5"
          >
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
          <span
            style={{
              fontFamily: "'Jost', sans-serif",
              fontWeight: 300,
              fontSize: "13px",
              color: "var(--stone)",
            }}
          >
            Up to {maxCapacity} guests
          </span>
        </div>

        {/* Price row */}
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: "8px",
            flexWrap: "wrap",
          }}
        >
          {discountedPrice ? (
            <>
              <span
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: "22px",
                  color: "var(--gold)",
                  fontWeight: 500,
                }}
              >
                ${discountedPrice}
              </span>
              <span
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: "13px",
                  color: "var(--stone)",
                  textDecoration: "line-through",
                }}
              >
                ${regularPrice}
              </span>
              <span
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: "10px",
                  color: "var(--void)",
                  background: "var(--gold)",
                  padding: "2px 6px",
                  borderRadius: "2px",
                  letterSpacing: "0.05em",
                }}
              >
                {discountPct}% OFF
              </span>
            </>
          ) : (
            <span
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: "22px",
                color: "var(--gold)",
                fontWeight: 500,
              }}
            >
              ${regularPrice}
            </span>
          )}
          <span
            style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "12px",
              color: "var(--stone)",
            }}
          >
            / night
          </span>
        </div>

        {/* Divider */}
        <div
          style={{
            height: "1px",
            background: "var(--border)",
            margin: "4px 0",
          }}
        />

        {/* CTA */}
        <Link
          href={`/cabins/${id}`}
          style={{
            display: "block",
            textAlign: "center",
            padding: "10px 0",
            border: "1px solid var(--gold)",
            borderRadius: "2px",
            color: "var(--gold)",
            fontFamily: "'Jost', sans-serif",
            fontSize: "12px",
            fontWeight: 500,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            textDecoration: "none",
            transition: "background 200ms ease, color 200ms ease",
            marginTop: "auto",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "var(--gold)";
            e.currentTarget.style.color = "var(--void)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = "var(--gold)";
          }}
        >
          View Cabin &rarr;
        </Link>
      </div>
    </div>
  );
}

export default CabinCard;
