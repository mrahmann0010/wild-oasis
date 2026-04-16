"use client";

import { useState } from "react";
import SpinnerMini from "@/app/_components/SpinnerMini";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    regarding: "",
    message: "",
    responseBy: "email",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  const update = (field) => (e) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSuccess(true);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("stays@wildoasis.com").then(() => {
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    });
  };

  const inputStyle = {
    width: "100%",
    background: "var(--moss)",
    border: "1px solid var(--border)",
    color: "var(--birch)",
    fontFamily: "'Jost', sans-serif",
    fontWeight: 400,
    fontSize: "15px",
    padding: "14px 16px",
    outline: "none",
    transition: "border-color 200ms ease",
    borderRadius: 0,
    appearance: "none",
  };

  const labelStyle = {
    display: "block",
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: "10px",
    textTransform: "uppercase",
    letterSpacing: "0.1em",
    color: "var(--stone)",
    marginBottom: "6px",
  };

  return (
    <div style={{ paddingBottom: "80px" }}>
      {/* Hero */}
      <div
        style={{
          height: "40vh",
          minHeight: "280px",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginLeft: "-32px",
          marginRight: "-32px",
          marginBottom: "72px",
          overflow: "hidden",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1448375240586-882707db888b?w=1400&q=80"
          alt="Forest"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "brightness(0.4)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(13,15,11,0.2), rgba(13,15,11,0.65))",
          }}
        />
        <div
          style={{ position: "relative", zIndex: 1, textAlign: "center" }}
        >
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "clamp(40px, 6vw, 64px)",
              fontStyle: "italic",
              fontWeight: 300,
              color: "var(--fog)",
              margin: "0 0 12px",
              lineHeight: 1.1,
            }}
          >
            Speak With Us
          </h1>
          <p
            style={{
              fontFamily: "'Jost', sans-serif",
              fontWeight: 300,
              fontSize: "18px",
              color: "rgba(245,242,236,0.8)",
              margin: 0,
            }}
          >
            We respond personally, within a few hours.
          </p>
        </div>
      </div>

      {/* Two-panel layout */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "45% 55%",
          gap: "32px",
          alignItems: "start",
        }}
      >
        {/* LEFT: Contact form */}
        <div
          style={{
            background: "var(--deep)",
            border: "1px solid var(--border)",
            padding: "48px",
          }}
        >
          {success ? (
            <div
              style={{
                textAlign: "center",
                padding: "40px 0",
                animation: "fadeUp 300ms ease-out both",
              }}
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--gold)"
                strokeWidth="1.5"
                style={{ marginBottom: "16px" }}
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontStyle: "italic",
                  fontSize: "22px",
                  color: "var(--birch)",
                  margin: 0,
                }}
              >
                Message received. We&apos;ll be in touch.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div>
                <label style={labelStyle}>Full Name</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={update("name")}
                  required
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = "var(--gold)")}
                  onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                />
              </div>
              <div>
                <label style={labelStyle}>Email Address</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={update("email")}
                  required
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = "var(--gold)")}
                  onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                />
              </div>
              <div>
                <label style={labelStyle}>Regarding</label>
                <select
                  value={form.regarding}
                  onChange={update("regarding")}
                  required
                  style={{ ...inputStyle, cursor: "pointer" }}
                  onFocus={(e) => (e.target.style.borderColor = "var(--gold)")}
                  onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                >
                  <option value="" disabled>
                    Select a topic...
                  </option>
                  <option value="booking">A Booking Question</option>
                  <option value="planning">Trip Planning Help</option>
                  <option value="complaint">A Complaint or Issue</option>
                  <option value="partnership">Partnership Inquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label style={labelStyle}>Your Message</label>
                <textarea
                  value={form.message}
                  onChange={update("message")}
                  required
                  rows={6}
                  style={{ ...inputStyle, resize: "vertical", minHeight: "120px" }}
                  onFocus={(e) => (e.target.style.borderColor = "var(--gold)")}
                  onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                />
              </div>
              <div>
                <label style={labelStyle}>Preferred Response</label>
                <div style={{ display: "flex", gap: "8px" }}>
                  {["Email", "Either"].map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setForm((f) => ({ ...f, responseBy: opt.toLowerCase() }))}
                      style={{
                        padding: "8px 20px",
                        border: `1px solid ${form.responseBy === opt.toLowerCase() ? "var(--gold)" : "var(--border)"}`,
                        background:
                          form.responseBy === opt.toLowerCase()
                            ? "rgba(201,168,76,0.1)"
                            : "var(--moss)",
                        color:
                          form.responseBy === opt.toLowerCase()
                            ? "var(--gold)"
                            : "var(--stone)",
                        fontFamily: "'Jost', sans-serif",
                        fontSize: "12px",
                        cursor: "pointer",
                        borderRadius: "2px",
                        transition: "all 200ms ease",
                      }}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
              <button
                type="submit"
                disabled={loading}
                style={{
                  width: "100%",
                  background: "var(--gold)",
                  color: "var(--void)",
                  border: "none",
                  fontFamily: "'Jost', sans-serif",
                  fontWeight: 500,
                  fontSize: "13px",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  padding: "16px",
                  cursor: loading ? "default" : "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  opacity: loading ? 0.7 : 1,
                  transition: "opacity 200ms",
                }}
              >
                {loading ? (
                  <>
                    <SpinnerMini /> Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          )}
        </div>

        {/* RIGHT: Concierge info */}
        <div
          style={{
            background: "var(--moss)",
            padding: "48px",
            position: "relative",
          }}
        >
          {/* Top gold accent */}
          <div
            style={{
              width: "100%",
              height: "2px",
              background: "var(--gold)",
              opacity: 0.5,
              position: "absolute",
              top: 0,
              left: 0,
            }}
          />

          <h2
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontStyle: "italic",
              fontSize: "32px",
              fontWeight: 600,
              color: "var(--birch)",
              margin: "0 0 20px",
              lineHeight: 1.2,
            }}
          >
            Your Personal Concierge
          </h2>
          <p
            style={{
              fontFamily: "'Jost', sans-serif",
              fontWeight: 300,
              fontSize: "17px",
              color: "var(--stone)",
              lineHeight: 1.9,
              margin: "0 0 28px",
            }}
          >
            We&apos;re a small team who cares deeply about every stay. Whether
            you need trip advice, have a special request, or need anything at
            all — reach us directly.
          </p>

          <p
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "12px",
              color: "var(--gold)",
              marginBottom: "12px",
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <span style={{ opacity: 0.6 }}>&#8857;</span>
            Typically responds in &lt; 4 hours
          </p>

          {/* Email with copy */}
          <div
            style={{ position: "relative", display: "inline-block", marginBottom: "12px" }}
          >
            <button
              onClick={copyEmail}
              style={{
                background: "none",
                border: "none",
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: "13px",
                color: "var(--gold)",
                cursor: "pointer",
                padding: 0,
                letterSpacing: "0.04em",
              }}
            >
              stays@wildoasis.com
            </button>
            {emailCopied && (
              <span
                style={{
                  position: "absolute",
                  top: "-24px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  background: "var(--pine)",
                  border: "1px solid var(--gold)",
                  color: "var(--gold)",
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: "9px",
                  padding: "2px 8px",
                  borderRadius: "2px",
                  whiteSpace: "nowrap",
                  animation: "fadeUp 200ms ease-out both",
                }}
              >
                Copied!
              </span>
            )}
          </div>

          <p
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "12px",
              color: "var(--stone)",
              marginBottom: "24px",
            }}
          >
            Mon–Sun &bull; 8AM to 10PM PT
          </p>

          <div
            style={{
              height: "1px",
              background: "var(--border)",
              margin: "28px 0",
            }}
          />

          <p
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "10px",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "var(--stone)",
              marginBottom: "12px",
            }}
          >
            Frequently Asked
          </p>
          {[
            "How does the booking process work?",
            "What's included with each cabin stay?",
            "What's the cancellation policy?",
          ].map((q) => (
            <a
              key={q}
              href="/faq"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontFamily: "'Jost', sans-serif",
                fontWeight: 300,
                fontSize: "14px",
                color: "var(--stone)",
                textDecoration: "none",
                marginBottom: "10px",
                transition: "color 150ms ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--stone)")}
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
              {q}
            </a>
          ))}
        </div>
      </div>

      {/* Footer note */}
      <p
        style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: "11px",
          color: "var(--stone)",
          textAlign: "center",
          marginTop: "56px",
          lineHeight: 1.7,
        }}
      >
        Wild Oasis is managed directly by our founding team.
        <br />
        No bots. No outsourced support.
      </p>
    </div>
  );
}
