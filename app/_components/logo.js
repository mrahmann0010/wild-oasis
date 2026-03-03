import Link from "next/link";

function Logo() {
  return (
    <Link
      href="/"
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        textDecoration: "none",
      }}
    >
      {/* Pine / tree glyph */}
      <svg
        width="18"
        height="22"
        viewBox="0 0 18 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M9 1L2 9H5L3 13H7L5 17H13L11 13H15L13 9H16L9 1Z"
          stroke="#C9A84C"
          strokeWidth="1"
          strokeLinejoin="round"
          fill="none"
        />
        <line x1="9" y1="17" x2="9" y2="21" stroke="#C9A84C" strokeWidth="1" />
      </svg>

      <span
        style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: "20px",
          fontWeight: 600,
          color: "#E8E0D0",
          lineHeight: 1,
          letterSpacing: "0.01em",
        }}
      >
        <span
          style={{
            fontVariant: "small-caps",
            letterSpacing: "0.28em",
            fontSize: "13px",
            display: "inline-block",
          }}
        >
          WILD
        </span>{" "}
        <span style={{ fontStyle: "italic" }}>Oasis</span>
      </span>
    </Link>
  );
}

export default Logo;
