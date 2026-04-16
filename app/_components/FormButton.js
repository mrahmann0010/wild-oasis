"use client";

import { useFormStatus } from "react-dom";
import SpinnerMini from "./SpinnerMini";

export default function FormButton({ children }) {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        padding: "12px 32px",
        background: pending ? "var(--pine)" : "var(--gold)",
        color: pending ? "var(--stone)" : "var(--void)",
        fontFamily: "'Jost', sans-serif",
        fontWeight: 500,
        fontSize: "12px",
        textTransform: "uppercase",
        letterSpacing: "0.12em",
        borderRadius: "2px",
        border: "none",
        cursor: pending ? "not-allowed" : "pointer",
        opacity: pending ? 0.7 : 1,
        transition:
          "background 200ms ease, color 200ms ease, opacity 200ms ease",
      }}
    >
      {pending ? (
        <>
          <SpinnerMini /> Updating...
        </>
      ) : (
        children || "Update Reservation"
      )}
    </button>
  );
}
