"use client";

import { useState, useEffect } from "react";

function WishlistButton({ cabinId, cabinName }) {
  const [saved, setSaved] = useState(false);
  const [bouncing, setBouncing] = useState(false);

  useEffect(() => {
    try {
      const wishlist = JSON.parse(localStorage.getItem("wc_wishlist") || "[]");
      setSaved(wishlist.includes(cabinId));
    } catch {
      // ignore
    }
  }, [cabinId]);

  const toggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      const wishlist = JSON.parse(localStorage.getItem("wc_wishlist") || "[]");
      let next;
      if (wishlist.includes(cabinId)) {
        next = wishlist.filter((id) => id !== cabinId);
      } else {
        next = [...wishlist, cabinId];
        setBouncing(true);
        setTimeout(() => setBouncing(false), 600);
      }
      localStorage.setItem("wc_wishlist", JSON.stringify(next));
      setSaved(!saved);
    } catch {
      // ignore
    }
  };

  return (
    <button
      onClick={toggle}
      title={saved ? "Saved" : "Save cabin"}
      aria-label={
        saved
          ? `Remove ${cabinName} from wishlist`
          : `Save ${cabinName} to wishlist`
      }
      style={{
        position: "absolute",
        top: "12px",
        right: "12px",
        width: "36px",
        height: "36px",
        borderRadius: "50%",
        background: "rgba(13,15,11,0.8)",
        border: "1px solid var(--border)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        zIndex: 2,
        animation: bouncing ? "heartBounce 600ms ease" : "none",
        transition: "border-color 200ms ease",
      }}
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill={saved ? "var(--gold)" : "none"}
        stroke="var(--gold)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    </button>
  );
}

export default WishlistButton;
