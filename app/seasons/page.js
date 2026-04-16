import Link from "next/link";

export const metadata = {
  title: "Seasonal Rates",
};

const SEASONS = [
  {
    id: "winter",
    badge: "WINTER · DEC–FEB",
    heading: "Snowbound Solitude",
    rate: "$280 – $380 / night",
    tier: "off-peak",
    image:
      "https://images.unsplash.com/photo-1483664852095-d6cc6870702d?w=800&q=80",
    cssFilter: "hue-rotate(-30deg) sepia(0.3) brightness(0.85)",
    description:
      "The forest stills under snow and the world beyond disappears. Fireside evenings, steaming hot tubs, and a quiet that reaches deep into you.",
    highlights: ["Snowfall", "Hot Tub", "Fireside"],
  },
  {
    id: "spring",
    badge: "SPRING · MAR–MAY",
    heading: "First Light, Last Frost",
    rate: "$220 – $300 / night",
    tier: "best-value",
    image:
      "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=800&q=80",
    cssFilter: "hue-rotate(30deg) saturate(0.9) brightness(0.85)",
    description:
      "Wildflowers break through. Trails open. The mountain air is cold and clean in the morning, warm by afternoon. The best-kept secret of the year.",
    highlights: ["Wildflowers", "Hiking", "Creek Views"],
  },
  {
    id: "summer",
    badge: "SUMMER · JUN–AUG",
    heading: "The Open Season",
    rate: "$380 – $520 / night",
    tier: "peak",
    image:
      "https://images.unsplash.com/photo-1463003416389-296a1ad37ca0?w=800&q=80",
    cssFilter: "saturate(1.2) contrast(1.05) brightness(0.8)",
    description:
      "Long golden evenings, cold lake swims, and starfields undimmed by city light. Every cabin comes into its fullest expression under the summer sun.",
    highlights: ["Stargazing", "Alpine Lakes", "Long Days"],
  },
  {
    id: "autumn",
    badge: "AUTUMN · SEP–NOV",
    heading: "Amber & Ember",
    rate: "$280 – $420 / night",
    tier: "best-value",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    cssFilter: "sepia(0.25) saturate(1.3) brightness(0.8)",
    description:
      "The forest turns amber, the nights cool early, and the smell of woodsmoke returns. Autumn here is a private symphony of color and stillness.",
    highlights: ["Fall Color", "Foraging", "Fog Mornings"],
  },
];

const MONTHS = [
  { name: "Jan", tier: "low" },
  { name: "Feb", tier: "low" },
  { name: "Mar", tier: "mid" },
  { name: "Apr", tier: "low" },
  { name: "May", tier: "mid" },
  { name: "Jun", tier: "peak" },
  { name: "Jul", tier: "peak" },
  { name: "Aug", tier: "peak" },
  { name: "Sep", tier: "mid" },
  { name: "Oct", tier: "mid" },
  { name: "Nov", tier: "low" },
  { name: "Dec", tier: "low" },
];

const TIER_STYLES = {
  low: { background: "rgba(45,61,40,0.6)", label: "Low" },
  mid: { background: "rgba(138,110,50,0.3)", label: "Mid" },
  peak: { background: "rgba(201,168,76,0.3)", label: "Peak" },
};

export default function SeasonsPage() {
  return (
    <div style={{ paddingBottom: "80px" }}>
      {/* Hero: 4-quadrant */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "1fr 1fr",
          height: "calc(100vh - 72px)",
          minHeight: "500px",
          marginLeft: "-32px",
          marginRight: "-32px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {SEASONS.map((s) => (
          <div
            key={s.id}
            style={{
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={s.image}
              alt={s.heading}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                filter: s.cssFilter,
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to top, rgba(13,15,11,0.8) 0%, rgba(13,15,11,0.2) 50%)",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "20px",
                left: "20px",
              }}
            >
              <p
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: "10px",
                  textTransform: "uppercase",
                  letterSpacing: "0.2em",
                  color: "var(--gold)",
                  margin: "0 0 6px",
                }}
              >
                {s.badge.split("·")[0].trim()}
              </p>
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontStyle: "italic",
                  fontSize: "20px",
                  fontWeight: 600,
                  color: "var(--birch)",
                  margin: 0,
                }}
              >
                {s.heading}
              </p>
            </div>
          </div>
        ))}

        {/* Hero overlay text */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 2,
            pointerEvents: "none",
          }}
        >
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontStyle: "italic",
              fontSize: "clamp(36px, 5vw, 64px)",
              fontWeight: 300,
              color: "var(--fog)",
              textAlign: "center",
              textShadow: "0 2px 24px rgba(13,15,11,0.9)",
              margin: 0,
              padding: "0 32px",
            }}
          >
            When Do You Want to Arrive?
          </h1>
        </div>
      </div>

      {/* Season cards */}
      <div style={{ padding: "80px 0 64px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "32px",
          }}
        >
          {SEASONS.map((s) => (
            <SeasonCard key={s.id} season={s} />
          ))}
        </div>
      </div>

      {/* Rate calendar */}
      <div style={{ padding: "0 0 80px" }}>
        <div style={{ marginBottom: "32px" }}>
          <p
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "11px",
              textTransform: "uppercase",
              letterSpacing: "0.3em",
              color: "var(--gold)",
              marginBottom: "10px",
            }}
          >
            Rate Calendar
          </p>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "36px",
              fontStyle: "italic",
              fontWeight: 600,
              color: "var(--birch)",
              margin: 0,
            }}
          >
            Rate Overview by Month
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(6, 1fr)",
            gap: "8px",
            marginBottom: "16px",
          }}
        >
          {MONTHS.map((m) => {
            const style = TIER_STYLES[m.tier];
            return (
              <div
                key={m.name}
                style={{
                  background: style.background,
                  border: "1px solid var(--border)",
                  borderRadius: "2px",
                  padding: "16px 12px",
                  textAlign: "center",
                }}
              >
                <p
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontStyle: "italic",
                    fontSize: "14px",
                    color: "var(--birch)",
                    margin: "0 0 6px",
                  }}
                >
                  {m.name}
                </p>
                <p
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: "9px",
                    textTransform: "uppercase",
                    color: "var(--stone)",
                    margin: 0,
                    letterSpacing: "0.05em",
                  }}
                >
                  {style.label}
                </p>
              </div>
            );
          })}
        </div>

        {/* Legend */}
        <div style={{ display: "flex", gap: "24px" }}>
          {Object.entries(TIER_STYLES).map(([key, val]) => (
            <div
              key={key}
              style={{ display: "flex", alignItems: "center", gap: "8px" }}
            >
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  background: val.background,
                  border: "1px solid var(--border)",
                  borderRadius: "1px",
                }}
              />
              <span
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: "10px",
                  color: "var(--stone)",
                  textTransform: "capitalize",
                }}
              >
                {val.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SeasonCard({ season }) {
  const {
    badge,
    heading,
    rate,
    tier,
    image,
    cssFilter,
    description,
    highlights,
  } = season;
  const isPeak = tier === "peak";
  const isBestValue = tier === "best-value";

  return (
    <div
      style={{
        background: "var(--deep)",
        border: "1px solid var(--border)",
        borderRadius: "4px",
        overflow: "hidden",
      }}
    >
      {/* Image */}
      <div
        style={{
          position: "relative",
          aspectRatio: "16/9",
          overflow: "hidden",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt={heading}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: cssFilter,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(13,15,11,0.8) 0%, transparent 50%)",
          }}
        />
      </div>

      {/* Content */}
      <div style={{ padding: "28px 32px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "12px",
            flexWrap: "wrap",
          }}
        >
          <span
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "10px",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: "var(--gold)",
              background: "rgba(201,168,76,0.1)",
              border: "1px solid var(--gold)",
              padding: "2px 8px",
              borderRadius: "24px",
            }}
          >
            {badge}
          </span>
          {isPeak && (
            <span
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: "9px",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "var(--void)",
                background: "var(--rust)",
                padding: "2px 8px",
                borderRadius: "24px",
              }}
            >
              Peak Season
            </span>
          )}
          {isBestValue && (
            <span
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: "9px",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "var(--void)",
                background: "var(--gold)",
                padding: "2px 8px",
                borderRadius: "24px",
              }}
            >
              Best Value
            </span>
          )}
        </div>

        <h3
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "32px",
            fontWeight: 600,
            fontStyle: "italic",
            color: "var(--birch)",
            margin: "0 0 8px",
            lineHeight: 1.1,
          }}
        >
          {heading}
        </h3>

        <p
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: "14px",
            color: "var(--gold)",
            margin: "0 0 16px",
          }}
        >
          {rate}
        </p>

        <p
          style={{
            fontFamily: "'Jost', sans-serif",
            fontWeight: 300,
            fontSize: "15px",
            color: "var(--stone)",
            lineHeight: 1.7,
            margin: "0 0 20px",
          }}
        >
          {description}
        </p>

        {/* Highlights */}
        <div
          style={{
            display: "flex",
            gap: "8px",
            flexWrap: "wrap",
            marginBottom: "24px",
          }}
        >
          {highlights.map((h) => (
            <span
              key={h}
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: "10px",
                color: "var(--stone)",
                background: "var(--moss)",
                border: "1px solid var(--border)",
                padding: "3px 10px",
                borderRadius: "2px",
              }}
            >
              {h}
            </span>
          ))}
        </div>

        <Link
          href="/cabins"
          style={{
            display: "inline-block",
            border: "1px solid var(--gold)",
            color: "var(--gold)",
            fontFamily: "'Jost', sans-serif",
            fontWeight: 500,
            fontSize: "12px",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            padding: "10px 20px",
            borderRadius: "2px",
            textDecoration: "none",
          }}
        >
          Browse {season.badge.split("·")[0].trim()} Availability &rarr;
        </Link>
      </div>
    </div>
  );
}
