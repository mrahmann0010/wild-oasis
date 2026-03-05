import Link from "next/link";
import { auth } from "../_lib/auth";

export default async function Navigation() {
  const session = await auth();

  return (
    <nav>
      <ul
        style={{
          display: "flex",
          gap: "36px",
          alignItems: "center",
          listStyle: "none",
          margin: 0,
          padding: 0,
        }}
      >
        <li>
          <Link href="/cabins" className="nav-link">
            Cabins
          </Link>
        </li>
        <li>
          <Link href="/about" className="nav-link">
            About
          </Link>
        </li>
        <li>
          <Link href="/seasons" className="nav-link">
            Seasons
          </Link>
        </li>
        <li>
          <Link href="/faq" className="nav-link">
            FAQ
          </Link>
        </li>
        <li>
          {session?.user?.image ? (
            <Link
              href="/account"
              className="nav-link"
              style={{ display: "flex", alignItems: "center", gap: "10px" }}
            >
              <img
                src={session.user.image}
                alt="user-image"
                style={{
                  width: "28px",
                  height: "28px",
                  borderRadius: "50%",
                  border: "1px solid var(--gold)",
                  objectFit: "cover",
                }}
                referrerPolicy="no-referrer"
              />
              <span>Account</span>
            </Link>
          ) : (
            <Link href="/login" className="nav-link">
              Account
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}
