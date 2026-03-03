import Image from "next/image";
import Link from "next/link";
import bg from "@/public/bg.png";

export default function Page() {
  return (
    <>
      {/* ─── HERO ───────────────────────────────────── */}
      <section
        style={{
          position: "relative",
          height: "calc(100vh - 72px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          marginLeft: "-32px",
          marginRight: "-32px",
        }}
      >
        {/* Background image */}
        <Image
          src={bg}
          fill
          placeholder="blur"
          quality={85}
          alt="Dramatic lake surrounded by wilderness"
          className="object-cover object-top slow-zoom"
          priority
        />

        {/* Gradient overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, rgba(13,15,11,0.75) 40%, rgba(13,15,11,0.35) 100%)",
            zIndex: 1,
          }}
        />

        {/* Noise grain */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 2,
            opacity: 0.04,
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            pointerEvents: "none",
          }}
        />

        {/* Hero content */}
        <div
          style={{
            position: "relative",
            zIndex: 3,
            textAlign: "center",
            maxWidth: "760px",
            padding: "0 24px",
          }}
        >
          <p
            className="fade-up-1"
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "11px",
              textTransform: "uppercase",
              letterSpacing: "0.4em",
              color: "var(--gold)",
              marginBottom: "24px",
            }}
          >
            Luxury Cabin Retreats
          </p>

          <h1
            className="fade-up-2"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "clamp(52px, 8vw, 88px)",
              fontWeight: 300,
              fontStyle: "italic",
              color: "var(--fog)",
              lineHeight: 1.05,
              margin: "0 0 28px",
              letterSpacing: "-0.01em",
            }}
          >
            Escape to
            <br />
            the Wild
          </h1>

          <p
            className="fade-up-3"
            style={{
              fontFamily: "'Jost', sans-serif",
              fontWeight: 300,
              fontSize: "18px",
              color: "var(--fog)",
              opacity: 0.85,
              maxWidth: "520px",
              margin: "0 auto 40px",
              lineHeight: 1.65,
            }}
          >
            Hand-picked luxury cabins in the most breathtaking corners of
            nature.
          </p>

          <div className="fade-up-4">
            <Link href="/cabins" className="btn-outlined">
              Explore Cabins &rarr;
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            position: "absolute",
            bottom: "32px",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "6px",
          }}
          className="fade-up-5"
        >
          <div
            style={{
              width: "1px",
              height: "40px",
              background: "var(--gold)",
              opacity: 0.5,
              animation: "pulseDown 2s ease-in-out infinite",
            }}
          />
        </div>
      </section>

      {/* ─── STATS BAR ─────────────────────────────── */}
      <section
        style={{
          background: "var(--deep)",
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
          padding: "32px 0",
          marginLeft: "-32px",
          marginRight: "-32px",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 32px",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 0,
          }}
        >
          {[
            { stat: "8", label: "Luxury Cabins" },
            { stat: "100%", label: "Exclusive Access" },
            { stat: "4", label: "Seasons Open" },
            { stat: "1962", label: "Family Since" },
          ].map(({ stat, label }, i) => (
            <div
              key={label}
              style={{
                textAlign: "center",
                padding: "12px 24px",
                borderRight: i < 3 ? "1px solid var(--border)" : "none",
              }}
            >
              <p
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: "28px",
                  color: "var(--gold)",
                  fontWeight: 500,
                  lineHeight: 1,
                  marginBottom: "6px",
                }}
              >
                {stat}
              </p>
              <p
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontWeight: 300,
                  fontSize: "12px",
                  color: "var(--stone)",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                }}
              >
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── HOW IT WORKS ─────────────────────────── */}
      <section style={{ padding: "100px 0 80px" }}>
        <p
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: "10px",
            textTransform: "uppercase",
            letterSpacing: "0.3em",
            color: "var(--gold)",
            textAlign: "center",
            marginBottom: "16px",
          }}
        >
          The Process
        </p>
        <h2
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(32px, 4vw, 48px)",
            fontWeight: 600,
            fontStyle: "italic",
            color: "var(--birch)",
            textAlign: "center",
            marginBottom: "60px",
          }}
        >
          Your journey in three steps
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "0",
            maxWidth: "900px",
            margin: "0 auto",
            position: "relative",
          }}
        >
          {[
            {
              num: "01",
              title: "Browse Cabins",
              desc: "Explore our curated collection of 8 luxury retreats and find the perfect wilderness setting.",
            },
            {
              num: "02",
              title: "Pick Your Dates",
              desc: "Select your arrival and departure using our live availability calendar.",
            },
            {
              num: "03",
              title: "Confirm & Relax",
              desc: "Reserve with a single click. Pay on arrival. No hidden fees, ever.",
            },
          ].map(({ num, title, desc }, i) => (
            <div
              key={num}
              style={{
                padding: "0 40px",
                borderLeft: i > 0 ? "1px dashed var(--border)" : "none",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: "28px",
                  color: "var(--gold)",
                  opacity: 0.6,
                  lineHeight: 1,
                  marginBottom: "12px",
                }}
              >
                {num}
              </p>
              <h3
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: "24px",
                  fontWeight: 600,
                  color: "var(--birch)",
                  marginBottom: "12px",
                }}
              >
                {title}
              </h3>
              <p
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontWeight: 300,
                  fontSize: "14px",
                  color: "var(--stone)",
                  lineHeight: 1.7,
                }}
              >
                {desc}
              </p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "56px" }}>
          <Link href="/cabins" className="btn-gold">
            Explore all cabins
          </Link>
        </div>
      </section>
    </>
  );
}
