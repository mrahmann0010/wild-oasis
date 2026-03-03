import { Suspense } from "react";
import CabinList from "../_components/CabinList";
import Spinner from "../_components/Spinner";
import Filter from "../_components/Filter";
import ReservationReminder from "../_components/ReservationReminder";

export const revalidate = 0;

export const metadata = {
  title: "Our Cabins",
};

export default function Page({ searchParams }) {
  const filter = searchParams?.capacity ?? "all";

  return (
    <div style={{ paddingBottom: "80px" }}>
      {/* Page hero */}
      <div
        style={{
          padding: "72px 0 56px",
          textAlign: "center",
          borderBottom: "1px solid var(--border)",
          marginBottom: "56px",
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
          The Collection
        </p>
        <h1
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(48px, 6vw, 72px)",
            fontWeight: 700,
            fontStyle: "italic",
            color: "var(--birch)",
            lineHeight: 1.05,
            margin: "0 0 20px",
          }}
        >
          Our Cabins
        </h1>
        <p
          style={{
            fontFamily: "'Jost', sans-serif",
            fontWeight: 300,
            fontStyle: "italic",
            fontSize: "18px",
            color: "var(--stone)",
            maxWidth: "560px",
            margin: "0 auto",
            lineHeight: 1.6,
          }}
        >
          Every retreat is a world unto itself
        </p>
      </div>

      {/* Filter bar */}
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: "40px",
        }}
      >
        <Filter />
      </div>

      {/* Cabin grid */}
      <Suspense fallback={<Spinner />} key={filter}>
        <CabinList filter={filter} />
        <ReservationReminder />
      </Suspense>

      {/* Info card */}
      <div
        style={{
          marginTop: "72px",
          border: "1px solid var(--gold)",
          borderRadius: "4px",
          padding: "32px 40px",
          background: "var(--deep)",
          display: "flex",
          alignItems: "center",
          gap: "32px",
        }}
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--gold)"
          strokeWidth="1"
          style={{ flexShrink: 0 }}
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
        <div>
          <h3
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "22px",
              fontWeight: 600,
              color: "var(--birch)",
              marginBottom: "6px",
            }}
          >
            Not sure which cabin to choose?
          </h3>
          <p
            style={{
              fontFamily: "'Jost', sans-serif",
              fontWeight: 300,
              fontSize: "14px",
              color: "var(--stone)",
              lineHeight: 1.6,
            }}
          >
            Small cabins sleep 1&ndash;3 guests &bull; Medium sleep 4&ndash;8
            &bull; Large sleep 8+. All come with full privacy and mountain
            views.
          </p>
        </div>
      </div>
    </div>
  );
}
