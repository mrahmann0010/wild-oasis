"use client";

import { deleteReservation } from "../_lib/actions";
import { useTransition } from "react";
import SpinnerMini from "./SpinnerMini";

function DeleteReservation({ bookingId }) {
  const [isPending, startTransition] = useTransition();

  function handleDelete() {
    if (confirm("Are you sure you want to delete this reservation?")) {
      startTransition(() => deleteReservation(bookingId));
    }
  }

  return (
    <button
      onClick={handleDelete}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "5px",
        flexGrow: 1,
        color: "var(--stone)",
        fontFamily: "'IBM Plex Mono', monospace",
        fontSize: "10px",
        textTransform: "uppercase",
        letterSpacing: "0.06em",
        background: "transparent",
        border: "none",
        cursor: isPending ? "not-allowed" : "pointer",
        transition: "color 200ms ease",
        padding: "16px 8px",
      }}
      className="hover:text-rust"
    >
      {isPending ? (
        <SpinnerMini />
      ) : (
        <>
          <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="3 6 5 6 21 6" />
            <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
            <path d="M10 11v6M14 11v6" />
            <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
          </svg>
          Delete
        </>
      )}
    </button>
  );
}

export default DeleteReservation;
