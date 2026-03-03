import CabinCard from "./CabinCard";
import { getCabins } from "../_lib/data-service";

async function CabinList({ filter }) {
  const cabins = await getCabins();
  if (!cabins.length) return null;

  let displayedCabins;
  if (filter === "all") displayedCabins = cabins;
  if (filter === "small")
    displayedCabins = cabins.filter((c) => c.maxCapacity <= 3);
  if (filter === "medium")
    displayedCabins = cabins.filter(
      (c) => c.maxCapacity >= 4 && c.maxCapacity <= 8,
    );
  if (filter === "large")
    displayedCabins = cabins.filter((c) => c.maxCapacity > 8);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        gap: "32px",
      }}
    >
      {displayedCabins.map((cabin) => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
}

export default CabinList;
