"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

const CABIN_ATTRIBUTES = [
  { key: "maxCapacity", label: "CAPACITY" },
  { key: "regularPrice", label: "PRICE / NIGHT", format: (v) => `$${v}` },
  { key: "bestFor", label: "BEST FOR", fallback: "All groups" },
  { key: "cancellation", label: "CANCELLATION", fallback: "Free (7-day)" },
  { key: "petFriendly", label: "PET FRIENDLY", fallback: "Yes" },
  { key: "fireplace", label: "FIREPLACE", fallback: "Yes" },
  { key: "mountainView", label: "MOUNTAIN VIEW", fallback: "Yes" },
  { key: "minNights", label: "MIN NIGHTS", fallback: "2" },
];

function CompareContent() {
  const searchParams = useSearchParams();
  const ids = (searchParams.get("ids") || "")
    .split(",")
    .filter(Boolean)
    .map(Number);

  const [cabins, setCabins] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (ids.length === 0) {
      setLoading(false);
      return;
    }
    const stored = JSON.parse(localStorage.getItem("wc_compare") || "[]");
    const matches = stored.filter((c) => ids.includes(c.id));
    setCabins(matches);
    setLoading(false);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (loading) {
    return (
      <div style={{ textAlign: "center", padding: "80px" }}>
        <div className="spinner" style={{ margin: "0 auto" }} />
      </div>
    );
  }

  if (cabins.length < 2) {
    return (
      <div style={{ textAlign: "center", padding: "80px 0" }}>
        <h2
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: "italic",
            fontSize: "32px",
            color: "var(--birch)",
            marginBottom: "16px",
          }}
        >
          Nothing to compare yet
        </h2>
        <p
          style={{
            fontFamily: "'Jost', sans-serif",
            fontWeight: 300,
            color: "var(--stone)",
            marginBottom: "24px",
          }}
        >
          Select at least 2 cabins from the cabin listing to compare.
        </p>
        <Link href="/cabins" className="btn-outlined">
          Browse Cabins &rarr;
        </Link>
      </div>
    );
  }

  return (
    <div style={{ paddingBottom: "80px" }}>
      <div
        style={{
          padding: "56px 0 48px",
          display: "flex",
          alignItems: "center",
          gap: "24px",
        }}
      >
        <h1
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "48px",
            fontStyle: "italic",
            fontWeight: 600,
            color: "var(--birch)",
            margin: 0,
          }}
        >
          Compare Cabins
        </h1>
        <Link
          href="/cabins"
          style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: "13px",
            color: "var(--stone)",
            marginLeft: "auto",
            textDecoration: "none",
            border: "1px solid var(--border)",
            padding: "8px 16px",
            borderRadius: "2px",
          }}
        >
          &larr; Back to Cabins
        </Link>
      </div>

      {/* Comparison table */}
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
            gridTemplateColumns: `200px repeat(${cabins.length}, 1fr)`,
            background: "var(--deep)",
            borderBottom: "1px solid var(--border)",
          }}
        >
          <div style={{ padding: "24px 20px" }} />
          {cabins.map((cabin, i) => (
            <div
              key={cabin.id}
              style={{
                padding: "20px 24px",
                borderLeft: "1px solid var(--border)",
                position: "relative",
              }}
            >
              {i === 0 && (
                <div
                  style={{
                    position: "absolute",
                    top: "-1px",
                    left: "-1px",
                    right: "-1px",
                    height: "2px",
                    background: "var(--gold)",
                  }}
                />
              )}
              {cabin.image && (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src={cabin.image}
                  alt={cabin.name}
                  style={{
                    width: "100%",
                    height: "100px",
                    objectFit: "cover",
                    borderRadius: "2px",
                    marginBottom: "12px",
                    display: "block",
                  }}
                />
              )}
              {i === 0 && (
                <span
                  style={{
                    display: "inline-block",
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: "9px",
                    color: "var(--void)",
                    background: "var(--gold)",
                    padding: "2px 8px",
                    borderRadius: "24px",
                    marginBottom: "6px",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                  }}
                >
                  Best Value
                </span>
              )}
              <h3
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontStyle: "italic",
                  fontSize: "20px",
                  fontWeight: 600,
                  color: "var(--birch)",
                  margin: "0 0 12px",
                }}
              >
                Cabin {cabin.name}
              </h3>
              <Link
                href={`/cabins/${cabin.id}`}
                style={{
                  display: "block",
                  textAlign: "center",
                  padding: "8px",
                  background: "var(--gold)",
                  color: "var(--void)",
                  fontFamily: "'Jost', sans-serif",
                  fontWeight: 500,
                  fontSize: "11px",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  textDecoration: "none",
                  borderRadius: "2px",
                }}
              >
                Book This Cabin
              </Link>
            </div>
          ))}
        </div>

        {/* Attribute rows */}
        {CABIN_ATTRIBUTES.map(({ key, label, format, fallback }, i) => (
          <div
            key={label}
            style={{
              display: "grid",
              gridTemplateColumns: `200px repeat(${cabins.length}, 1fr)`,
              background: i % 2 === 0 ? "var(--deep)" : "var(--void)",
              borderBottom:
                i < CABIN_ATTRIBUTES.length - 1
                  ? "1px solid var(--border)"
                  : "none",
            }}
          >
            <div
              style={{
                padding: "14px 20px",
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: "11px",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "var(--stone)",
                display: "flex",
                alignItems: "center",
              }}
            >
              {label}
            </div>
            {cabins.map((cabin) => {
              const raw = cabin[key];
              const val =
                raw !== undefined
                  ? format
                    ? format(raw)
                    : String(raw)
                  : fallback || "—";
              return (
                <div
                  key={cabin.id}
                  style={{
                    padding: "14px 24px",
                    borderLeft: "1px solid var(--border)",
                    fontFamily: "'Jost', sans-serif",
                    fontSize: "14px",
                    color: "var(--birch)",
                    fontWeight: 400,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {val}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ComparePage() {
  return (
    <Suspense
      fallback={
        <div style={{ padding: "80px", textAlign: "center" }}>
          <div className="spinner" style={{ margin: "0 auto" }} />
        </div>
      }
    >
      <CompareContent />
    </Suspense>
  );
}
