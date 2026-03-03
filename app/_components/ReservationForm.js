"use client";

import { differenceInCalendarDays } from "date-fns";
import { useReservation } from "./ReservationContext";
import SpinnerMini from "./SpinnerMini";
import { createBooking } from "../_lib/actions";

function ReservationForm({ cabin, user }) {
  const { maxCapacity, regularPrice, discount, id: cabinId } = cabin;
  const { range, resetRange } = useReservation();

  const numNights =
    range.from && range.to ? differenceInCalendarDays(range.to, range.from) : 0;
  const totalPrice = numNights * (regularPrice - discount);

  const createBookingWithData = createBooking
    ? createBooking.bind(null, {
        startDate: range.from,
        endDate: range.to,
        numNights,
        cabinPrice: regularPrice - discount,
        cabinId,
      })
    : null;

  return (
    <div
      style={{
        background: "var(--moss)",
        border: "1px solid var(--border)",
        borderRadius: "4px",
        overflow: "hidden",
      }}
    >
      {/* Logged-in user strip */}
      <div
        style={{
          background: "var(--deep)",
          borderBottom: "1px solid var(--border)",
          padding: "10px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: "10px",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: "var(--stone)",
          }}
        >
          Logged in as
        </span>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img
            referrerPolicy="no-referrer"
            style={{
              width: "28px",
              height: "28px",
              borderRadius: "50%",
              border: "1px solid var(--gold)",
              objectFit: "cover",
            }}
            src={user.image}
            alt={user.name}
          />
          <span
            style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "13px",
              color: "var(--birch)",
            }}
          >
            {user.name}
          </span>
        </div>
      </div>

      <form
        action={createBookingWithData}
        style={{
          padding: "28px 24px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        {/* Guest count */}
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <label
            htmlFor="numGuests"
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "10px",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "var(--stone)",
            }}
          >
            Number of guests
          </label>
          <select
            name="numGuests"
            id="numGuests"
            className="input-dark"
            required
            style={{
              background: "var(--deep)",
              color: "var(--birch)",
              border: "1px solid var(--border)",
              borderRadius: "2px",
              padding: "10px 14px",
              fontFamily: "'Jost', sans-serif",
              fontSize: "14px",
              width: "100%",
              outline: "none",
            }}
          >
            <option value="" style={{ background: "var(--deep)" }}>
              Select number of guests...
            </option>
            {Array.from({ length: maxCapacity }, (_, i) => i + 1).map((x) => (
              <option value={x} key={x} style={{ background: "var(--deep)" }}>
                {x} {x === 1 ? "guest" : "guests"}
              </option>
            ))}
          </select>
        </div>

        {/* Observations */}
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <label
            htmlFor="observations"
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "10px",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "var(--stone)",
            }}
          >
            Special requests
          </label>
          <textarea
            name="observations"
            id="observations"
            rows={3}
            placeholder="Pets, allergies, special requirements..."
            style={{
              background: "var(--deep)",
              color: "var(--birch)",
              border: "1px solid var(--border)",
              borderRadius: "2px",
              padding: "10px 14px",
              fontFamily: "'Jost', sans-serif",
              fontSize: "14px",
              width: "100%",
              outline: "none",
              resize: "vertical",
            }}
          />
        </div>

        {/* Price summary */}
        {numNights > 0 && (
          <div
            style={{
              background: "var(--deep)",
              border: "1px solid var(--border)",
              borderRadius: "2px",
              padding: "16px 18px",
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "12px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                color: "var(--stone)",
                marginBottom: "6px",
              }}
            >
              <span>
                ${regularPrice - discount} &times; {numNights} nights
              </span>
              <span>${totalPrice}</span>
            </div>
            {discount > 0 && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  color: "var(--stone)",
                  marginBottom: "6px",
                }}
              >
                <span>Discount applied</span>
                <span style={{ color: "var(--gold)" }}>
                  -${discount * numNights}
                </span>
              </div>
            )}
            <div
              style={{
                height: "1px",
                background: "var(--border)",
                margin: "10px 0",
              }}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                color: "var(--gold)",
                fontWeight: 500,
                fontSize: "15px",
              }}
            >
              <span>Total</span>
              <span>${totalPrice}</span>
            </div>
          </div>
        )}

        {/* Submit */}
        <SubmitButton numNights={numNights} />
      </form>
    </div>
  );
}

function SubmitButton({ numNights }) {
  // We import useFormStatus dynamically here to keep this file a client component
  const { useFormStatus } = require("react-dom");
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending || numNights === 0}
      style={{
        width: "100%",
        padding: "14px",
        background: pending || numNights === 0 ? "var(--pine)" : "var(--gold)",
        color: pending || numNights === 0 ? "var(--stone)" : "var(--void)",
        fontFamily: "'Jost', sans-serif",
        fontWeight: 500,
        fontSize: "12px",
        textTransform: "uppercase",
        letterSpacing: "0.15em",
        borderRadius: "2px",
        border: "none",
        cursor: pending || numNights === 0 ? "not-allowed" : "pointer",
        transition: "background 200ms ease, color 200ms ease",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "8px",
      }}
    >
      {pending ? (
        <>
          <SpinnerMini /> Reserving...
        </>
      ) : numNights === 0 ? (
        "Select dates to reserve"
      ) : (
        "Reserve now"
      )}
    </button>
  );
}

export default ReservationForm;
