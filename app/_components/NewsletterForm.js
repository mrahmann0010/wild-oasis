"use client";

import { useState } from "react";
import SpinnerMini from "./SpinnerMini";

function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    setLoading(true);
    // Simulate async submission
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSuccess(true);
    setEmail("");
  };

  return (
    <section
      style={{
        background: "var(--moss)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        padding: "100px 32px",
        marginLeft: "-32px",
        marginRight: "-32px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative pine branch SVG */}
      <svg
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-20px",
          left: "-10px",
          width: "260px",
          opacity: 0.3,
          pointerEvents: "none",
        }}
        viewBox="0 0 200 300"
        fill="none"
        stroke="var(--gold-muted)"
        strokeWidth="1"
      >
        <path d="M100 280 Q95 200 90 120 Q85 60 100 10" />
        <path d="M90 120 Q60 100 40 80" />
        <path d="M88 140 Q55 125 30 110" />
        <path d="M92 160 Q65 148 45 138" />
        <path d="M94 100 Q120 80 140 65" />
        <path d="M92 80 Q115 62 130 50" />
        <path d="M96 60 Q112 45 125 35" />
      </svg>

      <div
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <p
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: "11px",
            textTransform: "uppercase",
            letterSpacing: "0.4em",
            color: "var(--gold)",
            marginBottom: "20px",
          }}
        >
          Seasonal Dispatches
        </p>

        <h2
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(36px, 5vw, 52px)",
            fontWeight: 300,
            fontStyle: "italic",
            color: "var(--birch)",
            lineHeight: 1.15,
            margin: "0 0 20px",
          }}
        >
          The wilderness changes.
          <br />
          Be the first to know.
        </h2>

        <p
          style={{
            fontFamily: "'Jost', sans-serif",
            fontWeight: 300,
            fontSize: "16px",
            color: "var(--stone)",
            maxWidth: "420px",
            margin: "0 auto 40px",
            lineHeight: 1.7,
          }}
        >
          Early access to new cabins, seasonal rate windows, and curated
          itineraries — delivered quietly to your inbox.
        </p>

        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            gap: "0",
            maxWidth: "480px",
            margin: "0 auto",
          }}
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            disabled={loading || success}
            required
            style={{
              flex: 1,
              background: "var(--deep)",
              border: "1px solid var(--border)",
              borderRight: "none",
              color: "var(--birch)",
              fontFamily: "'Jost', sans-serif",
              fontWeight: 400,
              fontSize: "15px",
              padding: "14px 20px",
              outline: "none",
              transition: "border-color 200ms ease",
            }}
            onFocus={(e) => (e.target.style.borderColor = "var(--gold)")}
            onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
          />
          <button
            type="submit"
            disabled={loading || success}
            style={{
              background: success ? "var(--pine)" : "var(--gold)",
              color: "var(--void)",
              border: "1px solid var(--gold)",
              fontFamily: "'Jost', sans-serif",
              fontWeight: 500,
              fontSize: "12px",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              padding: "14px 28px",
              cursor: loading || success ? "default" : "pointer",
              whiteSpace: "nowrap",
              transition: "background 200ms ease",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            {loading ? (
              <>
                <SpinnerMini /> Sending...
              </>
            ) : success ? (
              <span
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: "12px",
                }}
              >
                {`You're in. ✦`}
              </span>
            ) : (
              "Join the List"
            )}
          </button>
        </form>

        <p
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: "10px",
            color: "var(--stone)",
            marginTop: "16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "6px",
          }}
        >
          <svg
            width="10"
            height="10"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
          No spam. Unsubscribe at any time. We write infrequently and only with
          intent.
        </p>
      </div>
    </section>
  );
}

export default NewsletterForm;
