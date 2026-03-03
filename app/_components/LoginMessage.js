import Link from "next/link";
import SignInButton from "./SignInButton";

function LoginMessage() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "48px 40px",
        background: "var(--deep)",
        gap: "24px",
        textAlign: "center",
        borderLeft: "1px solid var(--border)",
      }}
    >
      {/* Lock icon */}
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="var(--gold)"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>

      <div>
        <h3
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "24px",
            fontStyle: "italic",
            fontWeight: 600,
            color: "var(--birch)",
            margin: "0 0 8px",
          }}
        >
          Sign in to continue
        </h3>
        <p
          style={{
            fontFamily: "'Jost', sans-serif",
            fontWeight: 300,
            fontSize: "14px",
            color: "var(--stone)",
            maxWidth: "260px",
            lineHeight: 1.6,
          }}
        >
          Create a free account or sign in with Google to reserve this cabin.
        </p>
      </div>

      <SignInButton />

      <p
        style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: "10px",
          color: "var(--stone)",
          letterSpacing: "0.05em",
          opacity: 0.7,
          marginTop: "-8px",
        }}
      >
        No account needed &mdash; just Google.
      </p>
    </div>
  );
}

export default LoginMessage;
