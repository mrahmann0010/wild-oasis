"use client";
import { useState } from "react";

function TextExpander({ children }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const words = typeof children === "string" ? children.split(" ") : [];
  const isLong = words.length > 40;
  const displayText =
    isExpanded || !isLong ? children : words.slice(0, 40).join(" ");

  return (
    <span>
      <span
        style={{
          fontFamily: "'Jost', sans-serif",
          fontWeight: 300,
          fontSize: "16px",
          lineHeight: 1.9,
          color: "var(--stone)",
          display: "block",
          overflow: "hidden",
          maskImage:
            !isExpanded && isLong
              ? "linear-gradient(to bottom, black 60%, transparent 100%)"
              : "none",
          WebkitMaskImage:
            !isExpanded && isLong
              ? "linear-gradient(to bottom, black 60%, transparent 100%)"
              : "none",
        }}
      >
        {displayText}
        {!isExpanded && isLong && "..."}
      </span>
      {isLong && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          style={{
            background: "transparent",
            border: "none",
            color: "var(--gold)",
            fontFamily: "'Jost', sans-serif",
            fontSize: "12px",
            fontWeight: 400,
            cursor: "pointer",
            padding: "4px 0",
            marginTop: "4px",
            letterSpacing: "0.04em",
            transition: "opacity 200ms ease",
          }}
        >
          {isExpanded ? "Show less ↑" : "Show more ↓"}
        </button>
      )}
    </span>
  );
}

export default TextExpander;
