import { auth } from "../_lib/auth";
import { getBookedDatesByCabinId, getSettings } from "../_lib/data-service";
import DateSelector from "./DateSelector";
import ReservationForm from "./ReservationForm";
import LoginMessage from "./LoginMessage";

async function Reservation({ cabin }) {
  const [settings, bookedDates] = await Promise.all([
    getSettings(),
    getBookedDatesByCabinId(cabin.id),
  ]);

  const session = await auth();

  return (
    <div
      style={{
        background: "var(--deep)",
        border: "1px solid var(--border)",
        borderRadius: "4px",
        overflow: "hidden",
        marginTop: "0",
      }}
    >
      {/* Section header */}
      <div
        style={{
          padding: "28px 40px 24px",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <h2
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "30px",
            fontStyle: "italic",
            fontWeight: 600,
            color: "var(--birch)",
            margin: 0,
          }}
        >
          Reserve Your Stay
        </h2>
        <p
          style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: "13px",
            fontWeight: 300,
            color: "var(--stone)",
            marginTop: "6px",
          }}
        >
          Pay on arrival &bull; Free cancellation up to 24h before check-in
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: session?.user ? "1fr 1fr" : "1fr",
          minHeight: "400px",
        }}
      >
        <DateSelector
          settings={settings}
          bookedDates={bookedDates}
          cabin={cabin}
        />
        {session?.user ? (
          <ReservationForm cabin={cabin} user={session.user} />
        ) : (
          <LoginMessage />
        )}
      </div>
    </div>
  );
}

export default Reservation;
