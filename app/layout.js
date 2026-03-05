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
            padding: "64px 32px 32px",
            marginTop: "80px",
          }}
        >
          <div
            style={{
              maxWidth: "1280px",
              margin: "0 auto",
            }}
          >
            {/* Top row: logo + link columns */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1.5fr 1fr 1fr 1fr",
                gap: "48px",
                marginBottom: "56px",
              }}
            >
              {/* Brand */}
              <div>
                <Logo />
                <p
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    fontWeight: 300,
                    fontSize: "13px",
                    color: "var(--stone)",
                    lineHeight: 1.7,
                    marginTop: "20px",
                    maxWidth: "260px",
                  }}
                >
                  Hand-picked luxury cabins in the most breathtaking corners of
                  nature.
                </p>
              </div>

              {/* Explore */}
              <div>
                <p
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: "9px",
                    textTransform: "uppercase",
                    letterSpacing: "0.15em",
                    color: "var(--gold-muted)",
                    marginBottom: "16px",
                  }}
                >
                  Explore
                </p>
                <ul
                  style={{
                    listStyle: "none",
                    margin: 0,
                    padding: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  {[
                    { label: "Cabins", href: "/cabins" },
                    { label: "About", href: "/about" },
                    { label: "Seasonal Rates", href: "/seasons" },
                  ].map(({ label, href }) => (
                    <li key={label}>
                      <Link
                        href={href}
                        style={{
                          fontFamily: "'Jost', sans-serif",
                          fontWeight: 300,
                          fontSize: "13px",
                          color: "var(--stone)",
                          textDecoration: "none",
                        }}
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Support */}
              <div>
                <p
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: "9px",
                    textTransform: "uppercase",
                    letterSpacing: "0.15em",
                    color: "var(--gold-muted)",
                    marginBottom: "16px",
                  }}
                >
                  Support
                </p>
                <ul
                  style={{
                    listStyle: "none",
                    margin: 0,
                    padding: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  {[
                    { label: "FAQ", href: "/faq" },
                    { label: "Contact Us", href: "/contact" },
                  ].map(({ label, href }) => (
                    <li key={label}>
                      <Link
                        href={href}
                        style={{
                          fontFamily: "'Jost', sans-serif",
                          fontWeight: 300,
                          fontSize: "13px",
                          color: "var(--stone)",
                          textDecoration: "none",
                        }}
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Account */}
              <div>
                <p
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: "9px",
                    textTransform: "uppercase",
                    letterSpacing: "0.15em",
                    color: "var(--gold-muted)",
                    marginBottom: "16px",
                  }}
                >
                  Account
                </p>
                <ul
                  style={{
                    listStyle: "none",
                    margin: 0,
                    padding: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  {[
                    { label: "My Reservations", href: "/account/reservations" },
                    { label: "Wishlist", href: "/account/wishlist" },
                    { label: "Guest Profile", href: "/account/profile" },
                  ].map(({ label, href }) => (
                    <li key={label}>
                      <Link
                        href={href}
                        style={{
                          fontFamily: "'Jost', sans-serif",
                          fontWeight: 300,
                          fontSize: "13px",
                          color: "var(--stone)",
                          textDecoration: "none",
                        }}
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Divider */}
            <div
              style={{
                height: "1px",
                background: "var(--border)",
                marginBottom: "24px",
              }}
            />

            {/* Legal row */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <p
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: "11px",
                  color: "var(--stone)",
                  margin: 0,
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
                  margin: 0,
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
