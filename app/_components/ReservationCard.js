import { format, formatDistance, isPast, isToday, parseISO } from "date-fns";
import DeleteReservation from "./DeleteReservation";
import Image from "next/image";
import Link from "next/link";

export const formatDistanceFromNow = (dateStr) =>
  formatDistance(parseISO(dateStr), new Date(), {
    addSuffix: true,
  }).replace("about ", "");

function ReservationCard({ booking }) {
  const {
    id,
    guestId,
    startDate,
    endDate,
    numNights,
    totalPrice,
    numGuests,
    status,
    created_at,
    cabins: { name, image },
  } = booking;

  const isUpcoming = !isPast(new Date(startDate));
  const isCheckinToday = isToday(new Date(startDate));

  const statusLabel = isCheckinToday
    ? "Tonight"
    : isUpcoming
      ? "Upcoming"
      : "Past";
  const statusColor = isCheckinToday
    ? "var(--rust)"
    : isUpcoming
      ? "var(--gold)"
      : "var(--stone)";

  return (
    <div
      style={{
        display: "flex",
        borderBottom: "1px solid var(--border)",
        background: "var(--deep)",
        transition: "background 200ms ease",
      }}
    >
      {/* Cabin image */}
      <div
        style={{
          position: "relative",
          width: "140px",
          flexShrink: 0,
          overflow: "hidden",
        }}
      >
        <Image
          src={image}
          fill
          alt={`Cabin ${name}`}
          className="object-cover"
          style={{ transition: "transform 400ms ease" }}
        />
      </div>

      {/* Details */}
      <div
        style={{
          flexGrow: 1,
          padding: "20px 24px",
          display: "flex",
          flexDirection: "column",
          gap: "6px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
          }}
        >
          <h3
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "22px",
              fontWeight: 600,
              color: "var(--birch)",
              margin: 0,
              lineHeight: 1.2,
            }}
          >
            {numNights} nights in Cabin {name}
          </h3>
          <span
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "9px",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: statusColor,
              border: `1px solid ${statusColor}`,
              padding: "3px 10px",
              borderRadius: "2px",
              whiteSpace: "nowrap",
              flexShrink: 0,
              marginLeft: "16px",
            }}
          >
            {statusLabel}
          </span>
        </div>

        {/* Dates */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--stone)"
            strokeWidth="1.5"
          >
            <rect x="3" y="4" width="18" height="18" rx="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          <span
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "12px",
              color: "var(--stone)",
            }}
          >
            {format(new Date(startDate), "MMM dd, yyyy")} &mdash;{" "}
            {format(new Date(endDate), "MMM dd, yyyy")}
          </span>
          <span
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "11px",
              color: "var(--bark)",
              opacity: 0.7,
            }}
          >
            (
            {isToday(new Date(startDate))
              ? "Today"
              : formatDistanceFromNow(startDate)}
            )
          </span>
        </div>

        {/* Guest count + price */}
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: "16px",
            marginTop: "4px",
          }}
        >
          <span
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "18px",
              color: "var(--gold)",
              fontWeight: 500,
            }}
          >
            ${totalPrice}
          </span>
          <span
            style={{
              fontFamily: "'Jost', sans-serif",
              fontWeight: 300,
              fontSize: "13px",
              color: "var(--stone)",
            }}
          >
            {numGuests} guest{numGuests > 1 && "s"}
          </span>
          <span
            style={{
              marginLeft: "auto",
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "10px",
              color: "var(--stone)",
              opacity: 0.6,
            }}
          >
            Booked {format(new Date(created_at), "MMM dd, yyyy")}
          </span>
        </div>

        {/* Status timeline */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            marginTop: "6px",
          }}
        >
          {["Booked", "Check-in", "Check-out"].map((step, i) => {
            const isActive =
              i === 0 ||
              (i === 1 && isCheckinToday) ||
              (i === 2 && isPast(new Date(endDate)));
            return (
              <>
                <div
                  key={step}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  <div
                    style={{
                      width: "7px",
                      height: "7px",
                      borderRadius: "50%",
                      border: `1px solid ${isActive ? "var(--gold)" : "var(--border)"}`,
                      background: isActive ? "var(--gold)" : "transparent",
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: "9px",
                      color: isActive ? "var(--gold)" : "var(--stone)",
                      letterSpacing: "0.04em",
                      opacity: isActive ? 1 : 0.5,
                    }}
                  >
                    {step}
                  </span>
                </div>
                {i < 2 && (
                  <div
                    key={`line-${i}`}
                    style={{
                      flexGrow: 1,
                      height: "1px",
                      background: "var(--border)",
                      maxWidth: "32px",
                    }}
                  />
                )}
              </>
            );
          })}
        </div>
      </div>

      {/* Actions */}
      {!isPast(startDate) && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            borderLeft: "1px solid var(--border)",
            width: "90px",
            flexShrink: 0,
          }}
        >
          <Link
            href={`/account/reservations/edit/${id}`}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "6px",
              flexGrow: 1,
              color: "var(--stone)",
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "10px",
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              borderBottom: "1px solid var(--border)",
              textDecoration: "none",
              transition: "background 200ms ease, color 200ms ease",
              padding: "16px 8px",
            }}
          >
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
            </svg>
            Edit
          </Link>
          <DeleteReservation bookingId={id} />
        </div>
      )}
    </div>
  );
}

export default ReservationCard;
