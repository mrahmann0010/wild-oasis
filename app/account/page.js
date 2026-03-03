import { auth } from "../_lib/auth";

export const metadata = {
  title: "Your Account",
};

export default async function Page() {
  const session = await auth();
  const firstName = session.user.name.split(" ")[0];

  return (
    <div style={{ padding: "8px 0 40px" }}>
      <h2
        style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: "48px",
          fontWeight: 400,
          fontStyle: "italic",
          color: "var(--birch)",
          marginBottom: "12px",
          lineHeight: 1.1,
        }}
      >
        Welcome back, <span style={{ color: "var(--gold)" }}>{firstName}</span>
      </h2>

      <p
        style={{
          fontFamily: "'Jost', sans-serif",
          fontWeight: 300,
          fontSize: "15px",
          color: "var(--stone)",
          lineHeight: 1.6,
          maxWidth: "520px",
        }}
      >
        Manage your reservations, edit your guest profile, and review your
        upcoming stays &mdash; all in one place.
      </p>

      <div
        style={{
          marginTop: "40px",
          padding: "24px 28px",
          background: "var(--deep)",
          border: "1px solid var(--border)",
          borderRadius: "4px",
          display: "inline-flex",
          gap: "12px",
          alignItems: "center",
        }}
      >
        {session.user.image && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={session.user.image}
            referrerPolicy="no-referrer"
            alt={session.user.name}
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              border: "2px solid var(--gold)",
            }}
          />
        )}
        <div>
          <p
            style={{
              fontFamily: "'Jost', sans-serif",
              fontWeight: 500,
              fontSize: "15px",
              color: "var(--birch)",
            }}
          >
            {session.user.name}
          </p>
          <p
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "11px",
              color: "var(--stone)",
            }}
          >
            {session.user.email}
          </p>
        </div>
      </div>
    </div>
  );
}
