"use client";

import { differenceInCalendarDays, isWithinInterval } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { useReservation } from "./ReservationContext";

function isAlreadyBooked(range, datesArr) {
  return (
    range.from &&
    range.to &&
    datesArr.some((date) =>
      isWithinInterval(date, { start: range.from, end: range.to }),
    )
  );
}

function DateSelector({ settings, bookedDates, cabin }) {
  const { range, setRange, resetRange } = useReservation();
  const { regularPrice, discount } = cabin;
  const numNights =
    range.from && range.to ? differenceInCalendarDays(range.to, range.from) : 0;
  const cabinPrice = numNights * (regularPrice - discount);

  const { minBookingLength, maxBookingLength } = settings;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        background: "var(--moss)",
        border: "1px solid var(--border)",
        borderRadius: "4px",
        overflow: "hidden",
      }}
    >
      {/* Labels */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          padding: "16px 24px 0",
          gap: "8px",
        }}
      >
        <div>
          <p
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "9px",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: "var(--stone)",
              marginBottom: "4px",
            }}
          >
            Check-in
          </p>
          <p
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "13px",
              color: range.from ? "var(--gold)" : "var(--stone)",
            }}
          >
            {range.from
              ? range.from.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })
              : "Select date"}
          </p>
        </div>
        <div>
          <p
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "9px",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: "var(--stone)",
              marginBottom: "4px",
            }}
          >
            Check-out
          </p>
          <p
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "13px",
              color: range.to ? "var(--gold)" : "var(--stone)",
            }}
          >
            {range.to
              ? range.to.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })
              : "Select date"}
          </p>
        </div>
      </div>

      {/* Calendar */}
      <DayPicker
        onSelect={setRange}
        selected={range}
        className="pt-4 place-self-center"
        mode="range"
        min={minBookingLength + 1}
        max={maxBookingLength}
        startMonth={new Date()}
        hidden={{ before: new Date() }}
        endMonth={new Date(new Date().getFullYear() + 2, 11)}
        captionLayout="dropdown"
        numberOfMonths={2}
      />

      {/* Price summary bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "16px 24px",
          background: "var(--deep)",
          borderTop: "1px solid var(--border)",
        }}
      >
        <div style={{ display: "flex", alignItems: "baseline", gap: "12px" }}>
          <span
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "18px",
              color: "var(--gold)",
            }}
          >
            ${discount > 0 ? regularPrice - discount : regularPrice}
          </span>
          {discount > 0 && (
            <span
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: "12px",
                color: "var(--stone)",
                textDecoration: "line-through",
              }}
            >
              ${regularPrice}
            </span>
          )}
          <span
            style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "12px",
              color: "var(--stone)",
            }}
          >
            / night
          </span>
          {numNights > 0 && (
            <>
              <span style={{ color: "var(--border)", fontSize: "14px" }}>
                &times;
              </span>
              <span
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: "16px",
                  color: "var(--birch)",
                  background: "var(--pine)",
                  padding: "4px 10px",
                  borderRadius: "2px",
                }}
              >
                {numNights} nights
              </span>
              <span
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: "16px",
                  color: "var(--gold)",
                  fontWeight: 500,
                }}
              >
                = ${cabinPrice}
              </span>
            </>
          )}
        </div>

        {(range.from || range.to) && (
          <button
            onClick={resetRange}
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "10px",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: "var(--stone)",
              background: "transparent",
              border: "1px solid var(--border)",
              borderRadius: "2px",
              padding: "5px 12px",
              cursor: "pointer",
              transition: "border-color 200ms ease, color 200ms ease",
            }}
          >
            Clear
          </button>
        )}
      </div>
    </div>
  );
}

export default DateSelector;
