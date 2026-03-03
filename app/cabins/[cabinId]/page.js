import Reservation from "@/app/_components/Reservation";
import Spinner from "@/app/_components/Spinner";
import { getCabin, getCabins } from "@/app/_lib/data-service";
import { Suspense } from "react";
import Cabin from "@/app/_components/Cabin";

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

  return (
    <div style={{ paddingBottom: "80px" }}>
      <Cabin cabin={cabin} />

      {/* Reserve section */}
      <div style={{ marginTop: "72px" }}>
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
    </div>
  );
}
