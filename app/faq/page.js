import { FAQAccordion } from "@/app/_components/FAQItem";
import Link from "next/link";

export const metadata = {
  title: "FAQ — Frequently Asked Questions",
};

const FAQ_SECTIONS = [
  {
    heading: "Booking & Payments",
    items: [
      {
        q: "How does the booking process work?",
        a: "Browse our collection of cabins, select your desired dates using our live availability calendar, and reserve with a single click. No payment is required upfront — you pay on arrival. You'll receive a confirmation email immediately with all details.",
      },
      {
        q: "Is there a minimum stay requirement?",
        a: "Most cabins have a 2-night minimum stay. During peak season (summer and major holidays), some properties require 3–5 nights minimum. The exact requirement is shown on each cabin's availability calendar.",
      },
      {
        q: "What's the cancellation and refund policy?",
        a: "Cancel up to 7 days before your check-in date for a full refund. Cancellations within 7 days will receive a 50% refund. No-shows are non-refundable. All cancellations must be submitted through your account dashboard.",
      },
    ],
  },
  {
    heading: "At the Cabin",
    items: [
      {
        q: "What's included with each cabin stay?",
        a: "Every cabin includes full private access to the property, all bedding and towels, a fully equipped kitchen, firewood (where applicable), and Wi-Fi. Premium cabins may include hot tubs, saunas, or dedicated outdoor spaces.",
      },
      {
        q: "Can I bring my pet?",
        a: "Pets are welcome at Wild Oasis! We ask that you inform us in advance and observe our house rules — no pets on furniture, and all pets must be supervised outdoors. A small pet cleaning fee may apply.",
      },
      {
        q: "Are the cabins suitable year-round?",
        a: "Yes — all Wild Oasis cabins are fully insulated and equipped for year-round comfort. In winter months, we recommend 4WD for some properties. Road and weather conditions are noted on the individual cabin pages.",
      },
    ],
  },
  {
    heading: "Policies",
    items: [
      {
        q: "What are the house rules?",
        a: "No smoking anywhere on the property. Pets are welcome with prior notice. Maximum occupancy must be strictly observed. Quiet hours are 10PM–8AM. Any damage to the property may result in additional charges.",
      },
    ],
  },
  {
    heading: "Your Account",
    items: [
      {
        q: "How do I get cabin access instructions?",
        a: "Your keypad code and detailed access instructions are sent to your registered email 24 hours before your scheduled check-in. The cabin uses a secure keypad entry system — no physical key pickup required.",
      },
      {
        q: "What if I need to reach someone during my stay?",
        a: "Our team is available 7 days a week, 8AM–10PM PT. You can reach us via the contact form, by email at stays@wildoasis.com, or through your account. We typically respond within the hour.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <div style={{ paddingBottom: "80px" }}>
      {/* Hero */}
      <div
        style={{
          height: "50vh",
          minHeight: "320px",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginLeft: "-32px",
          marginRight: "-32px",
          marginBottom: "72px",
          overflow: "hidden",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1448375240586-882707db888b?w=1400&q=80"
          alt="Forest background"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "brightness(0.4)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(13,15,11,0.3) 0%, rgba(13,15,11,0.7) 100%)",
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 1,
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "clamp(48px, 7vw, 72px)",
              fontWeight: 300,
              fontStyle: "italic",
              color: "var(--fog)",
              margin: 0,
              lineHeight: 1.1,
            }}
          >
            Frequently Asked Questions
          </h1>
        </div>
      </div>

      <div style={{ maxWidth: "760px", margin: "0 auto" }}>
        {FAQ_SECTIONS.map((section) => (
          <div key={section.heading} style={{ marginBottom: "56px" }}>
            <p
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: "11px",
                textTransform: "uppercase",
                letterSpacing: "0.3em",
                color: "var(--gold-muted)",
                marginBottom: "16px",
              }}
            >
              {section.heading}
            </p>
            <div
              style={{
                height: "1px",
                background: "var(--border)",
                marginBottom: "4px",
              }}
            />
            <FAQAccordion items={section.items} />
          </div>
        ))}

        <div
          style={{
            textAlign: "center",
            paddingTop: "40px",
            borderTop: "1px solid var(--border)",
          }}
        >
          <p
            style={{
              fontFamily: "'Jost', sans-serif",
              fontWeight: 300,
              fontSize: "15px",
              color: "var(--stone)",
              marginBottom: "20px",
            }}
          >
            Didn&apos;t find your answer?
          </p>
          <Link href="/contact" className="btn-outlined">
            Contact Us &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
