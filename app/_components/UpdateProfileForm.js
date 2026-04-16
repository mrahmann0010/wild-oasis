"use client";

import { useFormStatus } from "react-dom";
import { updateGuestProfile } from "../_lib/actions";
import SpinnerMini from "./SpinnerMini";

const fieldLabel = {
  fontFamily: "'IBM Plex Mono', monospace",
  fontSize: "10px",
  textTransform: "uppercase",
  letterSpacing: "0.1em",
  color: "var(--stone)",
  display: "block",
  marginBottom: "8px",
};

const fieldInput = {
  width: "100%",
  background: "var(--moss)",
  color: "var(--birch)",
  border: "1px solid var(--border)",
  borderRadius: "2px",
  padding: "10px 14px",
  fontFamily: "'Jost', sans-serif",
  fontSize: "15px",
  outline: "none",
  transition: "border-color 200ms ease",
};

const fieldInputDisabled = {
  ...fieldInput,
  opacity: 0.38,
  cursor: "not-allowed",
};

function UpdateProfileForm({ guest, children }) {
  const { fullName, email, nationality, nationalID, countryFlag } = guest;

  return (
    <form
      action={updateGuestProfile}
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "24px 32px",
        background: "var(--deep)",
        border: "1px solid var(--border)",
        borderRadius: "4px",
        padding: "36px",
      }}
    >
      {/* Full Name */}
      <div>
        <label style={fieldLabel}>Full name</label>
        <input
          defaultValue={fullName}
          name="fullName"
          disabled
          style={fieldInputDisabled}
        />
      </div>

      {/* Email */}
      <div>
        <label style={fieldLabel}>Email address</label>
        <input
          defaultValue={email}
          name="email"
          disabled
          style={fieldInputDisabled}
        />
      </div>

      {/* Nationality */}
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "8px",
          }}
        >
          <label htmlFor="nationality" style={{ ...fieldLabel, margin: 0 }}>
            Nationality
          </label>
          {countryFlag && (
            <img
              src={countryFlag}
              alt="Country flag"
              style={{ height: "18px", borderRadius: "2px" }}
            />
          )}
        </div>
        {children}
      </div>

      {/* National ID */}
      <div>
        <label htmlFor="nationalID" style={fieldLabel}>
          National ID number
        </label>
        <input
          defaultValue={nationalID}
          name="nationalID"
          id="nationalID"
          style={fieldInput}
        />
      </div>

      {/* Save button — spans full width, right-aligned */}
      <div
        style={{
          gridColumn: "1 / -1",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <SaveButton />
      </div>
    </form>
  );
}

function SaveButton() {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        padding: "12px 32px",
        background: pending ? "var(--pine)" : "var(--gold)",
        color: pending ? "var(--stone)" : "var(--void)",
        fontFamily: "'Jost', sans-serif",
        fontWeight: 500,
        fontSize: "12px",
        textTransform: "uppercase",
        letterSpacing: "0.12em",
        borderRadius: "2px",
        border: "none",
        cursor: pending ? "not-allowed" : "pointer",
        opacity: pending ? 0.7 : 1,
        transition: "background 200ms ease",
      }}
    >
      {pending ? (
        <>
          <SpinnerMini /> Updating profile...
        </>
      ) : (
        "Update profile"
      )}
    </button>
  );
}

export default UpdateProfileForm;
