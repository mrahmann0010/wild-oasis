"use client";

import { format } from "date-fns";
import { useReservation } from "./ReservationContext";

function ReservationReminder() {
  const { range, resetRange } = useReservation();

  if (!range.from || !range.to) return null;

  return (
    <div
      className="slide-in-right"
      style={{
        position: "fixed",
        bottom: "28px",
        right: "28px",
        zIndex: 100,
        background: "var(--deep)",
        borderLeft: "3px solid var(--gold)",
        border: "1px solid var(--border)",
        borderLeftWidth: "3px",
        borderLeftColor: "var(--gold)",
        borderRadius: "4px",
        padding: "16px 20px",
        boxShadow: "0 16px 48px rgba(0,0,0,0.5)",
        maxWidth: "320px",
        width: "100%",
      }}
    >
      <button
        onClick={resetRange}
        style={{
          position: "absolute",
          top: "10px",
          right: "12px",
          background: "transparent",
          border: "none",
          color: "var(--stone)",
          cursor: "pointer",
          padding: "2px",
          lineHeight: 1,
          fontSize: "16px",
        }}
        aria-label="Dismiss"
      >
        &times;
      </button>

      <p
        style={{
          fontFamily: "'Jost', sans-serif",
          fontSize: "13px",
          fontWeight: 400,
          color: "var(--birch)",
          marginBottom: "6px",
          paddingRight: "16px",
        }}
      >
        Don&apos;t forget to complete your reservation!
      </p>
      <p
        style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: "11px",
          color: "var(--stone)",
          letterSpacing: "0.04em",
        }}
      >
        {format(new Date(range.from), "MMM dd")} &rarr;{" "}
        {format(new Date(range.to), "MMM dd, yyyy")}
      </p>
    </div>
  );
}

export default ReservationReminder;
