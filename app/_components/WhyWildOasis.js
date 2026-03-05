function WhyWildOasis() {
  const features = [
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--gold)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="3 17 9.5 5 16 17 3 17" />
          <polygon points="10 17 14.5 9 19 17 10 17" style={{ opacity: 0.6 }} />
        </svg>
      ),
      title: "Remote, Private Locations",
      body: "No neighbors. No noise. Just the sound of the forest.",
    },
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--gold)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9" />
          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
        </svg>
      ),
      title: "Fully Curated Interiors",
      body: "Every piece chosen. Nothing generic, nothing careless.",
    },
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--gold)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <polyline points="9 12 11 14 15 10" />
        </svg>
      ),
      title: "Secure, Instant Booking",
      body: "No back-and-forth. Book in minutes, access sent automatically.",
    },
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--gold)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
          <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
        </svg>
      ),
      title: "Low-Impact Stays",
      body: "Sustainable builds, local materials, minimal footprint.",
    },
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--gold)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
      title: "Flexible Arrival",
      body: "Self check-in anytime after 3PM. The cabin is yours on arrival.",
    },
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--gold)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      ),
      title: "Dedicated Remote Support",
      body: "Something feels off? We respond within the hour, always.",
    },
  ];

  const comparisons = [
    ["Verified private cabins", true, "Mixed, unverified listings", false],
    ["Direct booking, zero fees", true, "Service fees up to 18%", false],
    ["Instant keypad access", true, "Key pickup required", false],
    ["24/7 remote support", true, "Automated helpdesk", false],
  ];

  return (
    <section
      style={{
        padding: "120px 0",
        background: "var(--void)",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: "72px" }}>
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
            The Difference
          </p>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "clamp(36px, 4vw, 56px)",
              fontWeight: 300,
              fontStyle: "italic",
              color: "var(--birch)",
              margin: 0,
              lineHeight: 1.1,
            }}
          >
            Not just a cabin.
            <br />A considered escape.
          </h2>
        </div>

        {/* 3×2 feature grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "56px 48px",
            marginBottom: "72px",
          }}
        >
          {features.map(({ icon, title, body }) => (
            <div key={title}>
              {/* Icon container */}
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  background: "var(--pine)",
                  border: "1px solid var(--border)",
                  borderRadius: "2px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "16px",
                }}
              >
                {icon}
              </div>
              {/* Gold hairline */}
              <div
                style={{
                  width: "24px",
                  height: "1px",
                  background: "var(--gold)",
                  marginBottom: "12px",
                }}
              />
              <h3
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: "24px",
                  fontWeight: 600,
                  color: "var(--birch)",
                  marginBottom: "10px",
                  lineHeight: 1.2,
                }}
              >
                {title}
              </h3>
              <p
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontWeight: 300,
                  fontSize: "15px",
                  color: "var(--stone)",
                  lineHeight: 1.8,
                  margin: 0,
                }}
              >
                {body}
              </p>
            </div>
          ))}
        </div>

        {/* VS strip */}
        <div
          style={{
            border: "1px solid var(--border)",
            borderRadius: "4px",
            overflow: "hidden",
          }}
        >
          {/* Header row */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              background: "var(--deep)",
              borderBottom: "1px solid var(--border)",
            }}
          >
            <div
              style={{
                padding: "16px 24px",
                borderRight: "1px solid var(--border)",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <span
                style={{
                  color: "var(--gold)",
                  fontFamily: "'Cormorant Garamond', serif",
                  fontStyle: "italic",
                  fontSize: "18px",
                  fontWeight: 600,
                }}
              >
                Wild Oasis
              </span>
            </div>
            <div style={{ padding: "16px 24px" }}>
              <span
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontWeight: 300,
                  fontSize: "13px",
                  color: "var(--stone)",
                }}
              >
                Other Platforms
              </span>
            </div>
          </div>

          {comparisons.map(
            ([leftLabel, leftGood, rightLabel, rightGood], i) => (
              <div
                key={i}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  background: i % 2 === 0 ? "var(--deep)" : "var(--void)",
                  borderBottom:
                    i < comparisons.length - 1
                      ? "1px solid var(--border)"
                      : "none",
                }}
              >
                <div
                  style={{
                    padding: "14px 24px",
                    borderRight: "1px solid var(--border)",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: "12px",
                    color: "var(--stone)",
                  }}
                >
                  <span
                    style={{
                      color: leftGood ? "var(--gold)" : "var(--rust)",
                      fontSize: "14px",
                    }}
                  >
                    {leftGood ? "✦" : "✗"}
                  </span>
                  {leftLabel}
                </div>
                <div
                  style={{
                    padding: "14px 24px",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: "12px",
                    color: "var(--stone)",
                  }}
                >
                  <span
                    style={{
                      color: rightGood ? "var(--gold)" : "var(--rust)",
                      fontSize: "14px",
                    }}
                  >
                    {rightGood ? "✦" : "✗"}
                  </span>
                  {rightLabel}
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}

export default WhyWildOasis;
