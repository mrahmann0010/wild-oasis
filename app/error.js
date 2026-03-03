"use client";

import Link from "next/link";

export default function Error({ error, reset }) {
  return (
    <div
      style={{
        minHeight: "calc(100vh - 72px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "24px",
        textAlign: "center",
        padding: "0 24px",
      }}
    >
      {/* Alert icon */}
      <svg
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        stroke="var(--gold)"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>

      <h1
        style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: "42px",
          fontWeight: 400,
          fontStyle: "italic",
          color: "var(--birch)",
        }}
      >
        Something went wrong
      </h1>

      {error?.message && (
        <p
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: "12px",
            color: "var(--stone)",
            maxWidth: "480px",
            lineHeight: 1.6,
            opacity: 0.8,
          }}
        >
          {error.message}
        </p>
      )}

      <div style={{ display: "flex", gap: "16px", marginTop: "8px" }}>
        <button onClick={reset} className="btn-gold">
          Try again
        </button>
        <Link href="/" className="btn-outlined">
          Go home
        </Link>
      </div>
    </div>
  );
}
