import Spinner from "./_components/Spinner";

export default function Loading() {
  return (
    <div
      style={{
        minHeight: "calc(100vh - 72px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      <Spinner />
    </div>
  );
}
