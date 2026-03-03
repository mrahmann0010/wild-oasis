function Spinner() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "16px",
        padding: "48px",
      }}
    >
      <div className="spinner" />
      <p
        style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: "11px",
          color: "var(--stone)",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          animation: "fadeUp 500ms 200ms ease-out both",
        }}
      >
        Loading...
      </p>
    </div>
  );
}

export default Spinner;
