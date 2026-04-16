const STATIC_REVIEWS = [
  {
    id: 1,
    quote:
      "The silence here is the kind you forget exists until you're inside it. No phone service, no neighbor lights, just the forest breathing around you. We arrived strangers and left changed. This cabin didn't just host us — it held us.",
    name: "Eleanor V.",
    location: "Portland, OR",
    cabin: "007",
    nights: 5,
    rating: 5,
    date: "Oct 2024",
    initials: "EV",
  },
  {
    id: 2,
    quote:
      "Every detail was considered. The fireplace was lit when we arrived, there were fresh wildflowers on the table. This is what hospitality looks like when it's practiced as an art.",
    name: "James & Nora K.",
    location: "Seattle, WA",
    cabin: "011",
    nights: 3,
    rating: 5,
    date: "Sep 2024",
    initials: "JK",
  },
  {
    id: 3,
    quote:
      "I've stayed at luxury hotels that cost four times as much and felt half as special. Wild Oasis understands that true luxury is space, quiet, and beauty — not concierge desks.",
    name: "Marcus T.",
    location: "San Francisco, CA",
    cabin: "004",
    nights: 7,
    rating: 5,
    date: "Aug 2024",
    initials: "MT",
  },
];

function StarRating({ rating }) {
  return (
    <div style={{ display: "flex", gap: "2px" }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill={i < rating ? "var(--gold)" : "none"}
          stroke="var(--gold)"
          strokeWidth="1.5"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({ review, featured = false }) {
  const { quote, name, location, cabin, nights, rating, date, initials } =
    review;

  return (
    <div
      style={{
        background: "var(--deep)",
        borderLeft: "3px solid var(--gold)",
        padding: featured ? "40px" : "24px",
        position: "relative",
        overflow: "hidden",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        animation: "fadeInLeft 500ms ease-out both",
      }}
    >
      {featured && (
        <span
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "-30px",
            left: "16px",
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "200px",
            color: "var(--gold)",
            opacity: 0.08,
            lineHeight: 1,
            userSelect: "none",
            pointerEvents: "none",
            zIndex: 0,
          }}
        >
          &ldquo;
        </span>
      )}

      <p
        style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontWeight: 300,
          fontStyle: "italic",
          fontSize: featured ? "28px" : "16px",
          lineHeight: 1.7,
          color: "var(--birch)",
          marginBottom: "24px",
          position: "relative",
          zIndex: 1,
          flexGrow: 1,
        }}
      >
        {quote}
      </p>

      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: "12px",
          flexWrap: "wrap",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            border: "1.5px solid var(--gold)",
            background: "var(--pine)",
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "16px",
            fontStyle: "italic",
            color: "var(--gold)",
          }}
        >
          {initials}
        </div>

        <div style={{ flex: 1, minWidth: 0 }}>
          <p
            style={{
              fontFamily: "'Jost', sans-serif",
              fontWeight: 500,
              color: "var(--birch)",
              fontSize: "14px",
              margin: 0,
            }}
          >
            {name}
          </p>
          <p
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              color: "var(--stone)",
              fontSize: "11px",
              margin: "2px 0 0",
            }}
          >
            {location}
          </p>
          <p
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              color: "var(--gold-muted)",
              fontSize: "10px",
              margin: "2px 0 0",
            }}
          >
            Stayed in Cabin N&ordm; {cabin} &bull; {nights} nights
          </p>
        </div>

        <div style={{ textAlign: "right", flexShrink: 0 }}>
          <StarRating rating={rating} />
          <p
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              color: "var(--stone)",
              fontSize: "10px",
              marginTop: "4px",
            }}
          >
            {date}
          </p>
        </div>
      </div>
    </div>
  );
}

export { STATIC_REVIEWS };
export default ReviewCard;
