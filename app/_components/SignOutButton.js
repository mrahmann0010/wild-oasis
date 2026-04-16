import { signOutAction } from "../_lib/actions";

function SignOutButton() {
  return (
    <form action={signOutAction} style={{ width: "100%" }}>
      <button
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          width: "100%",
          padding: "12px 20px",
          background: "transparent",
          border: "none",
          color: "var(--stone)",
          fontFamily: "'Jost', sans-serif",
          fontSize: "14px",
          fontWeight: 400,
          cursor: "pointer",
          transition: "color 200ms ease",
          borderTop: "1px solid var(--border)",
          marginTop: "8px",
        }}
        className="hover:text-rust"
      >
        {/* Arrow-right-on-rectangle */}
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
          <polyline points="16 17 21 12 16 7" />
          <line x1="21" y1="12" x2="9" y2="12" />
        </svg>
        <span>Sign out</span>
      </button>
    </form>
  );
}

export default SignOutButton;
