import ReservationCard from "@/app/_components/ReservationCard";
import { auth } from "@/app/_lib/auth";
import { getBookings } from "@/app/_lib/data-service";
import Link from "next/link";

export const metadata = {
  title: "Your Reservations",
};

export default async function Page() {
  const session = await auth();
  const bookings = await getBookings(session.user.guestId);

  return (
    <div style={{ padding: "8px 0 40px" }}>
      <div style={{ marginBottom: "40px" }}>
        <h2
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "40px",
            fontWeight: 600,
            fontStyle: "italic",
            color: "var(--birch)",
            marginBottom: "6px",
          }}
        >
          Your Reservations
        </h2>
        {bookings.length > 0 && (
          <p
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "11px",
              color: "var(--stone)",
              letterSpacing: "0.05em",
            }}
          >
            {bookings.length} upcoming{" "}
            {bookings.length === 1 ? "stay" : "stays"}
          </p>
        )}
      </div>

      {bookings.length === 0 ? (
        <div
          style={{
            padding: "48px",
            textAlign: "center",
            border: "1px dashed var(--border)",
            borderRadius: "4px",
          }}
        >
          <p
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "24px",
              fontStyle: "italic",
              color: "var(--stone)",
              marginBottom: "24px",
            }}
          >
            No reservations yet
          </p>
          <Link href="/cabins" className="btn-gold">
            Explore cabins &rarr;
          </Link>
        </div>
      ) : (
        <ul
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            listStyle: "none",
            padding: 0,
            margin: 0,
          }}
        >
          {bookings.map((booking) => (
            <ReservationCard booking={booking} key={booking.id} />
          ))}
        </ul>
      )}
    </div>
  );
}
