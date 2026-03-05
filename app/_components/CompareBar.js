"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

function CompareBar() {
  const [comparing, setComparing] = useState([]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const load = () => {
      try {
        const list = JSON.parse(localStorage.getItem("wc_compare") || "[]");
        setComparing(list);
        setVisible(list.length > 0);
      } catch {
        // ignore
      }
    };
    load();
    window.addEventListener("wc_compare_change", load);
    return () => window.removeEventListener("wc_compare_change", load);
  }, []);

  const remove = (id) => {
    try {
      const next = comparing.filter((c) => c.id !== id);
      localStorage.setItem("wc_compare", JSON.stringify(next));
      window.dispatchEvent(new Event("wc_compare_change"));
    } catch {
      // ignore
    }
  };

  const ids = comparing.map((c) => c.id).join(",");

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        height: "60px",
        background: "var(--deep)",
        borderTop: "1px solid var(--gold)",
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        padding: "0 32px",
        gap: "24px",
        animation: "slideUp 300ms ease-out both",
      }}
    >
      <p
        style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: "11px",
          color: "var(--gold)",
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          whiteSpace: "nowrap",
        }}
      >
        Comparing {comparing.length}/3 Cabins
      </p>

      <div style={{ display: "flex", gap: "8px", flex: 1 }}>
        {[0, 1, 2].map((i) => {
          const cabin = comparing[i];
          return (
            <div
              key={i}
              style={{
                width: "120px",
                height: "40px",
                background: cabin ? "var(--pine)" : "var(--moss)",
                border: "1px dashed var(--border)",
                borderRadius: "2px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                overflow: "hidden",
                flexShrink: 0,
              }}
            >
              {cabin ? (
                <>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={cabin.image}
                    alt={cabin.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      opacity: 0.6,
                    }}
                  />
                  <span
                    style={{
                      position: "absolute",
                      bottom: "2px",
                      left: "4px",
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: "9px",
                      color: "var(--birch)",
                    }}
                  >
                    {cabin.name}
                  </span>
                  <button
                    onClick={() => remove(cabin.id)}
                    style={{
                      position: "absolute",
                      top: "2px",
                      right: "4px",
                      background: "none",
                      border: "none",
                      color: "var(--stone)",
                      cursor: "pointer",
                      fontSize: "12px",
                      lineHeight: 1,
                      padding: 0,
                      transition: "color 150ms",
                    }}
                    onMouseEnter={(e) => (e.target.style.color = "var(--rust)")}
                    onMouseLeave={(e) =>
                      (e.target.style.color = "var(--stone)")
                    }
                    aria-label={`Remove ${cabin.name} from comparison`}
                  >
                    &times;
                  </button>
                </>
              ) : (
                <span
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: "9px",
                    color: "var(--stone)",
                    opacity: 0.5,
                  }}
                >
                  + Add cabin
                </span>
              )}
            </div>
          );
        })}
      </div>

      <Link
        href={comparing.length >= 2 ? `/cabins/compare?ids=${ids}` : "#"}
        style={{
          background: "var(--gold)",
          color: "var(--void)",
          fontFamily: "'Jost', sans-serif",
          fontWeight: 500,
          fontSize: "12px",
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          padding: "10px 24px",
          borderRadius: "2px",
          textDecoration: "none",
          opacity: comparing.length >= 2 ? 1 : 0.3,
          pointerEvents: comparing.length >= 2 ? "auto" : "none",
          whiteSpace: "nowrap",
          flexShrink: 0,
          transition: "opacity 200ms ease",
        }}
      >
        Compare Now &rarr;
      </Link>
    </div>
  );
}

export default CompareBar;
