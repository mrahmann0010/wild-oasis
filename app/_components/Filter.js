"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const FILTERS = [
  { key: "all", label: "All" },
  { key: "small", label: "Small" },
  { key: "medium", label: "Medium" },
  { key: "large", label: "Large" },
];

function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const active = searchParams.get("capacity") ?? "all";

  const filterHandler = (filter) => {
    const params = new URLSearchParams(searchParams);
    params.set("capacity", filter);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div>
      <p
        style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: "10px",
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          color: "var(--stone)",
          marginBottom: "8px",
          textAlign: "right",
        }}
      >
        Filter by capacity
      </p>
      <div style={{ display: "flex", gap: "6px" }}>
        {FILTERS.map(({ key, label }) => {
          const isActive = active === key;
          return (
            <button
              key={key}
              onClick={() => filterHandler(key)}
              style={{
                padding: "7px 18px",
                borderRadius: "2px",
                border: "1px solid var(--gold)",
                background: isActive ? "var(--gold)" : "var(--deep)",
                color: isActive ? "var(--void)" : "var(--stone)",
                fontFamily: "'Jost', sans-serif",
                fontSize: "12px",
                fontWeight: isActive ? 500 : 400,
                letterSpacing: "0.05em",
                cursor: "pointer",
                transition: "background 200ms ease, color 200ms ease",
              }}
            >
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Filter;
