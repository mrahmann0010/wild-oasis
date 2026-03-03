import "@/app/_styles/globals.css";
import Header from "@/app/_components/Header";
import { ReservationProvider } from "./_components/ReservationContext";
import Logo from "@/app/_components/logo";
import Link from "next/link";

export const metadata = {
  title: {
    template: "%s • Wild Oasis",
    default: "Wild Oasis — Luxury Cabin Retreats",
  },
  description:
    "Hand-picked luxury cabins in the most breathtaking corners of nature.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{
          background: "var(--void)",
          color: "var(--birch)",
          fontFamily: "'Jost', system-ui, sans-serif",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
        }}
      >
        <Header />

        {/* Offset for sticky header */}
        <div style={{ flex: 1, paddingTop: "72px" }}>
          <main
            style={{
              maxWidth: "1280px",
              margin: "0 auto",
              padding: "0 32px",
            }}
          >
            <ReservationProvider>{children}</ReservationProvider>
          </main>
        </div>

        {/* Footer */}
        <footer
          style={{
            background: "var(--deep)",
            borderTop: "1px solid var(--border)",
            padding: "40px 32px",
            marginTop: "80px",
          }}
        >
          <div
            style={{
              maxWidth: "1280px",
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "1fr auto 1fr",
              alignItems: "center",
              gap: "32px",
            }}
          >
            <Logo />

            <nav>
              <ul
                style={{
                  display: "flex",
                  gap: "28px",
                  listStyle: "none",
                  margin: 0,
                  padding: 0,
                }}
              >
                {["Cabins", "About", "Account"].map((label) => (
                  <li key={label}>
                    <Link
                      href={`/${label.toLowerCase()}`}
                      style={{
                        fontFamily: "'Jost', sans-serif",
                        fontWeight: 300,
                        fontSize: "13px",
                        color: "var(--stone)",
                        textDecoration: "none",
                        transition: "color 200ms ease",
                      }}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div style={{ textAlign: "right" }}>
              <p
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: "11px",
                  color: "var(--stone)",
                  marginBottom: "6px",
                }}
              >
                &copy; {new Date().getFullYear()} Wild Oasis. All rights
                reserved.
              </p>
              <p
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: "10px",
                  color: "var(--gold-muted)",
                  letterSpacing: "0.04em",
                }}
              >
                Powered by Supabase &bull; Next.js
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
