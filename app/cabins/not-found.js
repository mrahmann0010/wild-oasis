import Link from "next/link";

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "calc(100vh - 72px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center",
        padding: "0 24px",
        position: "relative",
      }}
    >
      {/* Decorative 404 */}
      <p
        style={{
          position: "absolute",
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: "clamp(120px, 20vw, 200px)",
          fontWeight: 200,
          color: "var(--pine)",
          opacity: 0.4,
          lineHeight: 1,
          userSelect: "none",
          pointerEvents: "none",
          letterSpacing: "-0.05em",
        }}
      >
        404
      </p>

      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <p
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: "10px",
            textTransform: "uppercase",
            letterSpacing: "0.3em",
            color: "var(--gold)",
          }}
        >
          Cabin Not Found
        </p>
        <h1
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(28px, 4vw, 44px)",
            fontWeight: 400,
            fontStyle: "italic",
            color: "var(--birch)",
          }}
        >
          This cabin could not be found
        </h1>
        <p
          style={{
            fontFamily: "'Jost', sans-serif",
            fontWeight: 300,
            fontSize: "14px",
            color: "var(--stone)",
            maxWidth: "360px",
            lineHeight: 1.6,
          }}
        >
          It may have been removed or the link might be incorrect.
        </p>
        <div style={{ display: "flex", gap: "16px", marginTop: "8px" }}>
          <Link href="/cabins" className="btn-gold">
            View all cabins
          </Link>
          <Link href="/" className="btn-outlined">
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}
