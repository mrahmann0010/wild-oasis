import SideNavigation from "../_components/SideNavigation";

export default function Layout({ children }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "240px 1fr",
        minHeight: "calc(100vh - 72px)",
        gap: 0,
        borderTop: "1px solid var(--gold)",
        marginTop: "-1px",
      }}
    >
      <SideNavigation />
      <div
        style={{
          padding: "48px 56px",
          background: "var(--void)",
        }}
      >
        {children}
      </div>
    </div>
  );
}
