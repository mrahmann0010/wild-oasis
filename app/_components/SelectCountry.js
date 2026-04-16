import { getCountries } from "@/app/_lib/data-service";

async function SelectCountry({ defaultCountry, name, id, className }) {
  const countries = await getCountries();
  const flag =
    countries.find((country) => country.name === defaultCountry)?.flag ?? "";

  return (
    <select
      name={name}
      id={id}
      defaultValue={`${defaultCountry}%${flag}`}
      style={{
        width: "100%",
        background: "var(--moss)",
        color: "var(--birch)",
        border: "1px solid var(--border)",
        borderRadius: "2px",
        padding: "10px 14px",
        fontFamily: "'Jost', sans-serif",
        fontSize: "14px",
        outline: "none",
        transition: "border-color 200ms ease",
        cursor: "pointer",
        appearance: "auto",
      }}
      className={className}
    >
      <option value="" style={{ background: "var(--moss)" }}>
        Select country...
      </option>
      {countries.map((c) => (
        <option
          key={c.name}
          value={`${c.name}%${c.flag}`}
          style={{ background: "var(--moss)" }}
        >
          {c.flag} {c.name}
        </option>
      ))}
    </select>
  );
}

export default SelectCountry;
