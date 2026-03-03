import SignInButton from "../_components/SignInButton";
import Logo from "../_components/logo";

export const metadata = { title: "Sign In" };

export default function Page() {
  return (
    <div
      style={{
        minHeight: "calc(100vh - 72px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "420px",
          background: "var(--deep)",
          border: "1px solid var(--border)",
          borderRadius: "6px",
          padding: "48px 40px",
          textAlign: "center",
        }}
      >
        {/* Logo */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "32px",
          }}
        >
          <Logo />
        </div>

        <div
          style={{
            width: "32px",
            height: "1px",
            background: "var(--gold)",
            margin: "0 auto 28px",
            opacity: 0.6,
          }}
        />

        <h2
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "32px",
            fontWeight: 400,
            fontStyle: "italic",
            color: "var(--birch)",
            marginBottom: "8px",
          }}
        >
          Welcome back
        </h2>
        <p
          style={{
            fontFamily: "'Jost', sans-serif",
            fontWeight: 300,
            fontSize: "14px",
            color: "var(--stone)",
            marginBottom: "36px",
            lineHeight: 1.6,
          }}
        >
          Sign in to manage your reservations and guest profile.
        </p>

        <SignInButton />

        <p
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: "10px",
            color: "var(--stone)",
            opacity: 0.6,
            marginTop: "24px",
            lineHeight: 1.5,
          }}
        >
          Secured via Google OAuth &bull; No password stored
        </p>
      </div>
    </div>
  );
}
