"use client";

import { useState } from "react";

function LocalArea({ cabinName }) {
  const activities = [
    {
      category: "Hiking",
      name: "Cascade Ridge Trail",
      distance: "1.2 mi from cabin",
      image:
        "https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&q=80",
      bg: "rgba(45,61,40,0.5)",
    },
    {
      category: "Dining",
      name: "The Larder at Leavenworth",
      distance: "8.5 mi from cabin",
      image:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80",
      bg: "rgba(45,30,15,0.5)",
    },
    {
      category: "Adventure",
      name: "Alpine Lake Kayaking",
      distance: "4.2 mi from cabin",
      image:
        "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=600&q=80",
      bg: "rgba(15,30,50,0.5)",
    },
    {
      category: "Culture",
      name: "Icicle Creek Music Center",
      distance: "11 mi from cabin",
      image:
        "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=600&q=80",
      bg: "rgba(30,20,40,0.5)",
    },
  ];

  return (
    <section style={{ padding: "80px 0" }}>
      {/* Header */}
      <div style={{ marginBottom: "40px" }}>
        <p
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: "11px",
            textTransform: "uppercase",
            letterSpacing: "0.4em",
            color: "var(--gold)",
            marginBottom: "12px",
          }}
        >
          Explore Nearby
        </p>
        <h2
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "48px",
            fontWeight: 600,
            fontStyle: "italic",
            color: "var(--birch)",
            margin: "0 0 16px",
            lineHeight: 1.1,
          }}
        >
          The World Outside Your Door
        </h2>
        <p
          style={{
            fontFamily: "'Jost', sans-serif",
            fontWeight: 300,
            fontSize: "18px",
            color: "var(--stone)",
            maxWidth: "600px",
            lineHeight: 1.65,
            margin: 0,
          }}
        >
          Nestled at the edge of the Cascade foothills — hiking trails, alpine
          lakes, and ancient forest, minutes away.
        </p>
      </div>

      {/* Activity cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "16px",
          marginBottom: "48px",
        }}
      >
        {activities.map((act) => (
          <ActivityCard key={act.name} activity={act} />
        ))}
      </div>

      {/* Map teaser panel */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "60% 40%",
          border: "1px solid var(--border)",
          borderRadius: "4px",
          overflow: "hidden",
        }}
      >
        {/* Map image */}
        <div
          style={{
            position: "relative",
            minHeight: "280px",
            background: "var(--pine)",
            overflow: "hidden",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1548586196-aa5803b77379?w=900&q=70"
            alt="Terrain map"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "sepia(0.4) brightness(0.6) contrast(1.1)",
              position: "absolute",
              inset: 0,
            }}
          />
          {/* Map pins */}
          {[
            { top: "30%", left: "25%", label: "Cabin" },
            { top: "50%", left: "55%", label: "Lake" },
            { top: "70%", left: "40%", label: "Town" },
          ].map(({ top, left, label }) => (
            <div
              key={label}
              style={{
                position: "absolute",
                top,
                left,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                zIndex: 1,
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="var(--gold)"
                stroke="var(--void)"
                strokeWidth="1"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" fill="var(--void)" />
              </svg>
              <span
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: "8px",
                  color: "var(--birch)",
                  background: "rgba(13,15,11,0.75)",
                  padding: "1px 4px",
                  marginTop: "2px",
                  borderRadius: "1px",
                }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* Text panel */}
        <div
          style={{
            background: "var(--deep)",
            borderLeft: "1px solid var(--border)",
            padding: "40px 36px",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "2px",
              background: "var(--gold)",
              marginBottom: "28px",
              opacity: 0.6,
            }}
          />
          <h3
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontStyle: "italic",
              fontSize: "24px",
              fontWeight: 600,
              color: "var(--birch)",
              margin: "0 0 20px",
            }}
          >
            Location &amp; Access
          </h3>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              marginBottom: "20px",
            }}
          >
            {[
              "Nearest town: Leavenworth, WA · 12 mi",
              "Seattle-Tacoma Airport · 2.5 hrs",
              "Elevation: 3,400 ft",
            ].map((d) => (
              <p
                key={d}
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: "12px",
                  color: "var(--stone)",
                  margin: 0,
                }}
              >
                {d}
              </p>
            ))}
          </div>
          <p
            style={{
              fontFamily: "'Jost', sans-serif",
              fontWeight: 300,
              fontSize: "13px",
              color: "var(--stone)",
              lineHeight: 1.65,
              marginBottom: "24px",
            }}
          >
            Year-round access via paved road. 4WD recommended Nov–Mar.
          </p>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=Leavenworth+WA`}
            target="_blank"
            rel="noopener noreferrer"
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
              transition: "background 200ms ease, color 200ms ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--gold)";
              e.currentTarget.style.color = "var(--void)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "var(--gold)";
            }}
          >
            Get Directions &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}

function ActivityCard({ activity }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      style={{
        position: "relative",
        aspectRatio: "3/2",
        borderRadius: "2px",
        overflow: "hidden",
        cursor: "pointer",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        transition: "transform 300ms ease-out",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={activity.image}
        alt={activity.name}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
      {/* Base gradient */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `linear-gradient(to top, rgba(13,15,11,0.85) 0%, rgba(13,15,11,0.2) 60%)`,
        }}
      />
      {/* Hover extra overlay */}
      {hovered && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(13,15,11,0.5)",
          }}
        />
      )}

      {/* Bottom content */}
      <div
        style={{
          position: "absolute",
          bottom: "14px",
          left: "14px",
          right: "14px",
        }}
      >
        <span
          style={{
            display: "inline-block",
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: "9px",
            textTransform: "uppercase",
            color: "var(--gold)",
            border: "1px solid var(--gold)",
            padding: "2px 6px",
            borderRadius: "24px",
            letterSpacing: "0.08em",
            marginBottom: "6px",
          }}
        >
          {activity.category}
        </span>
        <p
          style={{
            fontFamily: "'Jost', sans-serif",
            fontWeight: 500,
            fontSize: "14px",
            color: "var(--birch)",
            margin: "0 0 4px",
            lineHeight: 1.3,
          }}
        >
          {activity.name}
        </p>
        <p
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: "10px",
            color: "var(--stone)",
            margin: 0,
          }}
        >
          {activity.distance}
        </p>
      </div>

      {/* Arrow on hover */}
      {hovered && (
        <div
          style={{
            position: "absolute",
            bottom: "14px",
            right: "14px",
          }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--gold)"
            strokeWidth="1.5"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </div>
      )}
    </div>
  );
}

export { ActivityCard };
export default LocalArea;
