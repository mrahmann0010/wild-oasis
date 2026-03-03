import image1 from "@/public/about-1.jpg";
import Image from "next/image";
import Link from "next/link";

export const metadata = { title: "About" };

const bodyText = {
  fontFamily: "'Jost', sans-serif",
  fontWeight: 300,
  fontSize: "16px",
  color: "var(--stone)",
  lineHeight: 1.8,
};

export default function Page() {
  return (
    <div style={{ paddingBottom: "80px" }}>
      {/* Hero */}
      <div
        style={{
          padding: "72px 0 56px",
          textAlign: "center",
          borderBottom: "1px solid var(--border)",
          marginBottom: "80px",
        }}
      >
        <p
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: "10px",
            textTransform: "uppercase",
            letterSpacing: "0.35em",
            color: "var(--gold)",
            marginBottom: "16px",
          }}
        >
          Our Story
        </p>
        <h1
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(40px, 5vw, 64px)",
            fontWeight: 300,
            fontStyle: "italic",
            color: "var(--birch)",
            lineHeight: 1.1,
          }}
        >
          The Wild Oasis
        </h1>
      </div>

      {/* Section 1 — text + image */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "64px",
          alignItems: "center",
          marginBottom: "100px",
        }}
      >
        <div>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "36px",
              fontWeight: 600,
              color: "var(--birch)",
              marginBottom: "28px",
              lineHeight: 1.15,
            }}
          >
            Where wilderness meets refined luxury
          </h2>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "18px" }}
          >
            <p style={bodyText}>
              Hidden in the heart of the Italian Dolomites, Wild Oasis is your
              paradise away from home. Not just luxury cabins &mdash; it&apos;s
              the experience of reconnecting with nature and enjoying simple
              pleasures with family.
            </p>
            <p style={bodyText}>
              Our 8 cabins each offer a cozy base, but the real freedom is found
              in the surrounding mountains. Wander through lush forests, breathe
              clear air, and watch stars from your private hot tub.
            </p>
            <p style={bodyText}>
              A place to slow down. To feel the joy of being together in a
              setting that few places on earth can match.
            </p>
          </div>
        </div>
        <div
          style={{
            position: "relative",
            aspectRatio: "4/3",
            overflow: "hidden",
            borderRadius: "4px",
          }}
        >
          <Image
            placeholder="blur"
            src={image1}
            fill
            className="object-cover"
            alt="Family around a fire pit in front of a cabin"
          />
        </div>
      </div>

      {/* Section 2 — image + text */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "64px",
          alignItems: "center",
        }}
      >
        <div
          style={{
            position: "relative",
            aspectRatio: "4/3",
            overflow: "hidden",
            borderRadius: "4px",
          }}
        >
          <Image
            fill
            className="object-cover"
            src="/about-2.jpg"
            alt="Family that manages The Wild Oasis"
          />
        </div>
        <div>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "36px",
              fontWeight: 600,
              color: "var(--birch)",
              marginBottom: "28px",
              lineHeight: 1.15,
            }}
          >
            Managed by our family since 1962
          </h2>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "18px" }}
          >
            <p style={bodyText}>
              Since 1962, Wild Oasis has been a cherished family-run retreat.
              Started by our grandparents, this haven has been nurtured with
              love through generations as a testament to warm hospitality.
            </p>
            <p style={bodyText}>
              We blend the timeless beauty of the mountains with the personal
              touch only a family business can offer. Here, you&apos;re not just
              a guest &mdash; you&apos;re part of our extended family.
            </p>
          </div>
          <div style={{ marginTop: "36px" }}>
            <Link href="/cabins" className="btn-gold">
              Explore our cabins
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
