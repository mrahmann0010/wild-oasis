function PolicyStrip() {
  const policies = [
    {
      icon: (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--gold)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="4" width="18" height="18" rx="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
          <line x1="9" y1="15" x2="9.01" y2="15" />
          <line x1="12" y1="15" x2="12.01" y2="15" />
          <line x1="15" y1="15" x2="15.01" y2="15" />
        </svg>
      ),
      title: "Free Cancellation",
      body: "Cancel up to 7 days before check-in for a full refund.",
      fine: "After 7 days: 50% refund",
    },
    {
      icon: (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--gold)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
        </svg>
      ),
      title: "Self Check-In",
      body: "Keypad entry — your code arrives 24 hrs before arrival.",
      fine: "Check-in: 3PM · Check-out: 11AM",
    },
    {
      icon: (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--gold)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      ),
      title: "House Rules",
      body: "No smoking. Pets welcome. Max capacity strictly enforced.",
      fine: "Quiet hours 10PM–8AM",
    },
    {
      icon: (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--gold)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <polyline points="9 12 11 14 15 10" />
        </svg>
      ),
      title: "Verified & Secure",
      body: "Payments secured. ID verified. 24/7 support available.",
      fine: "Powered by Supabase Auth",
    },
  ];

  return (
    <section
      style={{
        background: "var(--deep)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        padding: "64px 0",
        marginLeft: "-32px",
        marginRight: "-32px",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 32px",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
        }}
      >
        {policies.map(({ icon, title, body, fine }, i) => (
          <PolicyColumn
            key={title}
            icon={icon}
            title={title}
            body={body}
            fine={fine}
            hasBorder={i < 3}
          />
        ))}
      </div>
    </section>
  );
}

function PolicyColumn({ icon, title, body, fine, hasBorder }) {
  return (
    <div
      style={{
        padding: "0 32px",
        borderRight: hasBorder ? "1px solid var(--border)" : "none",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
      }}
    >
      {/* Icon tile */}
      <div
        style={{
          width: "40px",
          height: "40px",
          background: "var(--pine)",
          border: "1px solid var(--border)",
          borderRadius: "2px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        {icon}
      </div>

      <h3
        style={{
          fontFamily: "'Jost', sans-serif",
          fontWeight: 500,
          fontSize: "14px",
          color: "var(--birch)",
          margin: 0,
        }}
      >
        {title}
      </h3>

      <p
        style={{
          fontFamily: "'Jost', sans-serif",
          fontWeight: 300,
          fontSize: "13px",
          color: "var(--stone)",
          margin: 0,
          lineHeight: 1.7,
        }}
      >
        {body}
      </p>

      <p
        style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: "10px",
          color: "var(--stone)",
          margin: 0,
        }}
      >
        {fine}
      </p>
    </div>
  );
}

export default PolicyStrip;
