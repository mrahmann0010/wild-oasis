import FormButton from "@/app/_components/FormButton";
import { updateReservation } from "@/app/_lib/actions";
import { getBooking, getCabin } from "@/app/_lib/data-service";
import Link from "next/link";

const label = {
  fontFamily: "'IBM Plex Mono', monospace",
  fontSize: "11px",
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  color: "var(--stone)",
  marginBottom: "8px",
  display: "block",
};

export default async function Page({ params }) {
  const reservationId = params.reservationId;
  const { numGuests, cabinId, observations } = await getBooking(reservationId);
  const { maxCapacity } = await getCabin(cabinId);

  return (
    <div style={{ padding: "8px 0 40px" }}>
      {/* Back link */}
      <Link
        href="/account/reservations"
        style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: "11px",
          color: "var(--stone)",
          textDecoration: "none",
          letterSpacing: "0.05em",
          display: "inline-flex",
          alignItems: "center",
          gap: "6px",
          marginBottom: "32px",
          opacity: 0.7,
        }}
      >
        &larr; Back to reservations
      </Link>

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
        Edit Reservation
      </h2>
      <p
        style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: "11px",
          color: "var(--stone)",
          marginBottom: "36px",
          letterSpacing: "0.05em",
        }}
      >
        #{reservationId}
      </p>

      <form
        action={updateReservation}
        style={{
          background: "var(--deep)",
          border: "1px solid var(--border)",
          borderRadius: "6px",
          padding: "40px 48px",
          display: "flex",
          flexDirection: "column",
          gap: "28px",
        }}
      >
        <div>
          <label htmlFor="numGuests" style={label}>
            Number of guests
          </label>
          <select
            name="numGuests"
            id="numGuests"
            defaultValue={numGuests}
            className="input-dark"
            required
          >
            <option value="">Select number of guests…</option>
            {Array.from({ length: maxCapacity }, (_, i) => i + 1).map((x) => (
              <option value={x} key={x}>
                {x} {x === 1 ? "guest" : "guests"}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="observations" style={label}>
            Special requests / notes
          </label>
          <textarea
            name="observations"
            id="observations"
            defaultValue={observations}
            rows={5}
            placeholder="Dietary requirements, accessibility needs, late arrival…"
            className="input-dark"
            style={{ resize: "vertical" }}
          />
        </div>

        <input type="hidden" name="reservationId" value={reservationId} />

        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <FormButton>Update reservation</FormButton>
        </div>
      </form>
    </div>
  );
}
