"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import CabinCard from "@/app/_components/CabinCard";

export default function WishlistPage() {
  const [savedIds, setSavedIds] = useState([]);
  const [cabins, setCabins] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const ids = JSON.parse(localStorage.getItem("wc_wishlist") || "[]");
      setSavedIds(ids);
    } catch {
      setSavedIds([]);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    if (savedIds.length === 0) {
      setCabins([]);
      return;
    }
    // Fetch cabin data for saved IDs
    const fetchCabins = async () => {
      try {
        const res = await fetch("/api/cabins?ids=" + savedIds.join(","));
        if (res.ok) {
          const data = await res.json();
          setCabins(data);
        }
      } catch {
        // fallback: we'll show empty
        setCabins([]);
      }
    };
    fetchCabins();
  }, [savedIds]);

  return (
    <div style={{ paddingBottom: "80px" }}>
      <div style={{ padding: "72px 0 48px" }}>
        <p
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: "10px",
            textTransform: "uppercase",
            letterSpacing: "0.35em",
            color: "var(--gold)",
            marginBottom: "12px",
          }}
        >
          Saved Cabins{" "}
          {savedIds.length > 0 && (
            <span
              style={{
                background: "var(--gold)",
                color: "var(--void)",
                borderRadius: "24px",
                padding: "1px 7px",
                fontSize: "9px",
                marginLeft: "6px",
              }}
            >
              {savedIds.length}
            </span>
          )}
        </p>
        <h1
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(40px, 5vw, 60px)",
            fontStyle: "italic",
            fontWeight: 600,
            color: "var(--birch)",
            margin: 0,
          }}
        >
          Your Wishlist
        </h1>
      </div>

      {loading ? null : savedIds.length === 0 ? (
        <EmptyState />
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
          }}
        >
          {savedIds.map((id) => {
            const cabin = cabins.find((c) => c.id === id);
            return cabin ? (
              <CabinCard key={id} cabin={cabin} />
            ) : (
              <div
                key={id}
                style={{
                  background: "var(--deep)",
                  border: "1px solid var(--border)",
                  borderRadius: "4px",
                  height: "320px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  opacity: 0.5,
                }}
              >
                <span
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: "11px",
                    color: "var(--stone)",
                  }}
                >
                  Cabin unavailable
                </span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

function EmptyState() {
  return (
    <div
      style={{ textAlign: "center", paddingTop: "80px", paddingBottom: "80px" }}
    >
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="var(--gold-muted)"
        strokeWidth="1"
        style={{
          marginBottom: "20px",
          display: "block",
          margin: "0 auto 20px",
        }}
      >
        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
      </svg>
      <h2
        style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontStyle: "italic",
          fontSize: "28px",
          fontWeight: 600,
          color: "var(--birch)",
          margin: "0 0 12px",
        }}
      >
        Nothing saved yet
      </h2>
      <p
        style={{
          fontFamily: "'Jost', sans-serif",
          fontWeight: 300,
          fontSize: "15px",
          color: "var(--stone)",
          margin: "0 0 28px",
        }}
      >
        Tap the heart on any cabin to save it here.
      </p>
      <Link href="/cabins" className="btn-outlined">
        Browse Cabins &rarr;
      </Link>
    </div>
  );
}
