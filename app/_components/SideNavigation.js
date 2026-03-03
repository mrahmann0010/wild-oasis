"use client";

import Link from "next/link";
import SignOutButton from "./SignOutButton";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    name: "Dashboard",
    href: "/account",
    icon: (
      <svg
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    name: "Reservations",
    href: "/account/reservations",
    icon: (
      <svg
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
  {
    name: "Guest Profile",
    href: "/account/profile",
    icon: (
      <svg
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
];

function SideNavigation() {
  const pathname = usePathname();

  return (
    <nav
      style={{
        background: "var(--moss)",
        borderRight: "1px solid var(--border)",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        minHeight: "calc(100vh - 72px)",
        padding: "32px 0 24px",
      }}
    >
      {/* Section label */}
      <p
        style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: "9px",
          textTransform: "uppercase",
          letterSpacing: "0.15em",
          color: "var(--gold-muted)",
          padding: "0 20px 16px",
        }}
      >
        Account
      </p>

      <ul style={{ listStyle: "none", margin: 0, padding: 0, flexGrow: 1 }}>
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <li key={link.name}>
              <Link
                href={link.href}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "12px 20px",
                  color: isActive ? "var(--birch)" : "var(--stone)",
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "14px",
                  fontWeight: 400,
                  background: isActive ? "var(--pine)" : "transparent",
                  borderLeft: isActive
                    ? "2px solid var(--gold)"
                    : "2px solid transparent",
                  textDecoration: "none",
                  transition:
                    "background 200ms ease, color 200ms ease, border-color 200ms ease",
                }}
              >
                <span
                  style={{
                    color: isActive ? "var(--gold)" : "var(--stone)",
                    transition: "color 200ms ease",
                  }}
                >
                  {link.icon}
                </span>
                <span>{link.name}</span>
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Sign Out at bottom */}
      <SignOutButton />
    </nav>
  );
}

export default SideNavigation;
