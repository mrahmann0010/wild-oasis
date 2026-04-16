import Reservation from "@/app/_components/Reservation";
import Spinner from "@/app/_components/Spinner";
import { getCabin, getCabins } from "@/app/_lib/data-service";
import { Suspense } from "react";
import Cabin from "@/app/_components/Cabin";
import GalleryGrid from "@/app/_components/GalleryGrid";
import LocalArea from "@/app/_components/LocalArea";
import PolicyStrip from "@/app/_components/PolicyStrip";
import ReviewCard, { STATIC_REVIEWS } from "@/app/_components/ReviewCard";
import Link from "next/link";

export const revalidate = 5;

export async function generateStaticParams() {
  const cabins = await getCabins();
  return cabins.map((cabin) => ({ cabinId: String(cabin.id) }));
}

export async function generateMetadata({ params }) {
  const { name } = await getCabin(params.cabinId);
  return { title: `Cabin ${name}` };
}

export default async function Page({ params }) {
  const cabin = await getCabin(params.cabinId);

  // Build a gallery from the cabin's primary image (repeated with crop variants for demo)
  const galleryImages = [
    cabin.image,
    cabin.image + "?q=80&crop=top",
    cabin.image + "?q=80&crop=center",
    cabin.image + "?q=80&crop=bottom",
    cabin.image + "?q=80&w=800",
  ];

  return (
    <div style={{ paddingBottom: "0" }}>
      <Cabin cabin={cabin} />

      {/* ─── PHOTO GALLERY ──────────────────────── */}
      <GalleryGrid images={galleryImages} />

      {/* ─── RESERVE ────────────────────────────── */}
      <div style={{ marginTop: "24px", marginBottom: "72px" }}>
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <p
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "10px",
              textTransform: "uppercase",
              letterSpacing: "0.35em",
              color: "var(--gold)",
              marginBottom: "12px",
            }}
          >
            Availability &amp; Pricing
          </p>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 600,
              fontStyle: "italic",
              color: "var(--birch)",
              marginBottom: "8px",
            }}
          >
            Reserve {cabin.name} today
          </h2>
          <p
            style={{
              fontFamily: "'Jost', sans-serif",
              fontWeight: 300,
              fontSize: "14px",
              color: "var(--stone)",
              letterSpacing: "0.03em",
            }}
          >
            No payment required &mdash; pay on arrival
          </p>
        </div>

        <Suspense fallback={<Spinner />}>
          <Reservation cabin={cabin} />
        </Suspense>
      </div>

      {/* ─── CABIN REVIEWS ──────────────────────── */}
      <section style={{ padding: "56px 0" }}>
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
            marginBottom: "28px",
          }}
        >
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontStyle: "italic",
              fontSize: "28px",
              fontWeight: 600,
              color: "var(--birch)",
              margin: 0,
            }}
          >
            What Guests Say About This Cabin
          </h2>
          <Link
            href="/faq"
            style={{
              fontFamily: "'Jost', sans-serif",
              fontWeight: 400,
              fontSize: "13px",
              color: "var(--gold)",
              textDecoration: "none",
            }}
          >
            See all {STATIC_REVIEWS.length} reviews &rarr;
          </Link>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
          }}
        >
          {STATIC_REVIEWS.map((r) => (
            <ReviewCard key={r.id} review={r} />
          ))}
        </div>
      </section>

      {/* ─── LOCAL AREA ─────────────────────────── */}
      <LocalArea cabinName={cabin.name} />

      {/* ─── TRUST & POLICIES ───────────────────── */}
      <PolicyStrip />
    </div>
  );
}
