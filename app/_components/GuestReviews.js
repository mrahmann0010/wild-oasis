"use client";

import ReviewCard, { STATIC_REVIEWS } from "./ReviewCard";

function GuestReviews() {
  const [featured, ...smaller] = STATIC_REVIEWS;

  return (
    <section
      style={{
        padding: "100px 0 80px",
        marginLeft: "-32px",
        marginRight: "-32px",
        paddingLeft: "32px",
        paddingRight: "32px",
      }}
    >
      {/* Section header */}
      <div style={{ textAlign: "center", marginBottom: "56px" }}>
        <p
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: "11px",
            textTransform: "uppercase",
            letterSpacing: "0.4em",
            color: "var(--gold)",
            marginBottom: "16px",
          }}
        >
          Guest Experiences
        </p>
        <h2
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(36px, 5vw, 52px)",
            fontWeight: 600,
            fontStyle: "italic",
            color: "var(--birch)",
            margin: "0 0 16px",
            lineHeight: 1.1,
          }}
        >
          Wilderness, remembered.
        </h2>
        <p
          style={{
            fontFamily: "'Jost', sans-serif",
            fontWeight: 300,
            fontSize: "16px",
            color: "var(--stone)",
            maxWidth: "480px",
            margin: "0 auto 24px",
            lineHeight: 1.7,
          }}
        >
          Every stay is private. Every memory, yours alone.
        </p>
        <div
          style={{
            width: "60px",
            height: "1px",
            background: "var(--gold)",
            margin: "0 auto",
          }}
        />
      </div>

      {/* Asymmetric review grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "60% 40%",
          gap: "24px",
          maxWidth: "1280px",
          margin: "0 auto 48px",
        }}
      >
        {/* Featured large review */}
        <ReviewCard review={featured} featured={true} />

        {/* Stacked smaller reviews */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {smaller.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>

      {/* Review count bar */}
      <div
        style={{
          background: "var(--deep)",
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
          marginLeft: "-32px",
          marginRight: "-32px",
          padding: "40px 32px",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
          }}
        >
          {[
            { value: "4.97 / 5", label: "Average Rating" },
            { value: "100%", label: "Guests Who'd Return" },
            { value: "48 hrs", label: "Average Response Time" },
          ].map(({ value, label }, i) => (
            <div
              key={label}
              style={{
                textAlign: "center",
                padding: "12px 24px",
                borderRight: i < 2 ? "1px solid var(--border)" : "none",
              }}
            >
              <p
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: "36px",
                  color: "var(--gold)",
                  fontWeight: 500,
                  lineHeight: 1,
                  marginBottom: "8px",
                }}
              >
                {value}
              </p>
              <p
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontWeight: 300,
                  fontSize: "13px",
                  color: "var(--stone)",
                  letterSpacing: "0.04em",
                }}
              >
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GuestReviews;
