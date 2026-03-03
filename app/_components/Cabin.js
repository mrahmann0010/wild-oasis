import TextExpander from "./TextExpander";
import Image from "next/image";

function Cabin({ cabin }) {
  const { id, name, maxCapacity, regularPrice, discount, image, description } =
    cabin;

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "55% 45%",
        minHeight: "520px",
        border: "1px solid var(--border)",
        borderRadius: "4px",
        overflow: "hidden",
        marginBottom: "48px",
      }}
    >
      {/* ── LEFT PANEL: image ─── */}
      <div style={{ position: "relative", overflow: "hidden" }}>
        <Image
          className="object-cover slow-zoom"
          fill
          src={image}
          alt={`Cabin ${name}`}
          sizes="55vw"
          priority
        />
        {/* Bottom gradient overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(13,15,11,0.75) 0%, transparent 60%)",
            pointerEvents: "none",
          }}
        />
        {/* Cabin name overlay bottom-left */}
        <div
          style={{
            position: "absolute",
            bottom: "32px",
            left: "36px",
            right: "36px",
          }}
        >
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "64px",
              fontWeight: 700,
              fontStyle: "italic",
              color: "#fff",
              lineHeight: 1,
              margin: 0,
              textShadow: "0 4px 20px rgba(0,0,0,0.6)",
            }}
          >
            Cabin {name}
          </h1>
        </div>
        {/* Capacity badge top-right */}
        <div
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            background: "rgba(13,15,11,0.8)",
            border: "1px solid var(--gold)",
            borderRadius: "2px",
            padding: "4px 14px",
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: "11px",
            color: "var(--gold)",
            letterSpacing: "0.1em",
            backdropFilter: "blur(6px)",
          }}
        >
          UP TO {maxCapacity} GUESTS
        </div>
      </div>

      {/* ── RIGHT PANEL: details ─── */}
      <div
        style={{
          background: "var(--deep)",
          borderLeft: "1px solid var(--border)",
          padding: "56px 48px",
          display: "flex",
          flexDirection: "column",
          gap: "0",
        }}
      >
        {/* Breadcrumb */}
        <p
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: "10px",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: "var(--stone)",
            marginBottom: "24px",
          }}
        >
          Cabins &rsaquo; {name}
        </p>

        {/* Social proof micro-stat */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            marginBottom: "20px",
          }}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="var(--gold)"
            stroke="var(--gold)"
            strokeWidth="1"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
          <span
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "10px",
              color: "var(--stone)",
              letterSpacing: "0.06em",
            }}
          >
            EXCLUSIVE RETREAT &bull; PRIVATE LOCATION
          </span>
        </div>

        {/* Price */}
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: "8px",
            marginBottom: "28px",
          }}
        >
          {discount > 0 ? (
            <>
              <span
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: "32px",
                  color: "var(--gold)",
                  fontWeight: 500,
                }}
              >
                ${regularPrice - discount}
              </span>
              <span
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: "16px",
                  color: "var(--stone)",
                  textDecoration: "line-through",
                }}
              >
                ${regularPrice}
              </span>
            </>
          ) : (
            <span
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: "32px",
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
              fontSize: "14px",
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
            marginBottom: "28px",
          }}
        />

        {/* Description */}
        <div
          style={{
            fontFamily: "'Jost', sans-serif",
            fontWeight: 300,
            fontSize: "16px",
            lineHeight: 1.9,
            color: "var(--stone)",
            marginBottom: "28px",
            flexGrow: 1,
          }}
        >
          <TextExpander>{description}</TextExpander>
        </div>

        {/* Amenity icons strip */}
        <div style={{ marginBottom: "28px" }}>
          <div
            style={{
              display: "flex",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            {[
              { label: "Dolomites", icon: "M3 18 L9 6 L15 12 L19 6 L21 18" },
              {
                label: "Privacy 100%",
                icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M23 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75",
              },
            ].map(({ label }) => (
              <span
                key={label}
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: "10px",
                  color: "var(--stone)",
                  letterSpacing: "0.06em",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                }}
              >
                <span style={{ color: "var(--gold)" }}>&#10003;</span> {label}
              </span>
            ))}
            <span
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: "10px",
                color: "var(--stone)",
                letterSpacing: "0.06em",
                display: "flex",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <span style={{ color: "var(--gold)" }}>&#10003;</span> Up to{" "}
              {maxCapacity} guests
            </span>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: "1px", background: "var(--border)" }} />
      </div>
    </div>
  );
}

export default Cabin;
