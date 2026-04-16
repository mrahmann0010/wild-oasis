import SelectCountry from "@/app/_components/SelectCountry";
import UpdateProfileForm from "@/app/_components/UpdateProfileForm";
import { auth } from "@/app/_lib/auth";
import { getGuest } from "@/app/_lib/data-service";

export const metadata = {
  title: "Your Profile",
};

export default async function Page() {
  const session = await auth();
  const guest = await getGuest(session.user.email);

  return (
    <div style={{ padding: "8px 0 40px" }}>
      <div style={{ marginBottom: "40px" }}>
        <h2
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "40px",
            fontWeight: 600,
            fontStyle: "italic",
            color: "var(--birch)",
            marginBottom: "8px",
          }}
        >
          Guest Profile
        </h2>
        <p
          style={{
            fontFamily: "'Jost', sans-serif",
            fontWeight: 300,
            fontSize: "14px",
            color: "var(--stone)",
            lineHeight: 1.6,
          }}
        >
          Completing your profile speeds up check-in. See you soon!
        </p>
      </div>

      <UpdateProfileForm guest={guest}>
        <SelectCountry
          name="nationality"
          id="nationality"
          className="input-dark"
          defaultCountry={guest.nationality}
        />
      </UpdateProfileForm>
    </div>
  );
}
