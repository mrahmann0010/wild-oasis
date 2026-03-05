"use client";

import { useState } from "react";

const FAQ_DATA = [
  {
    q: "How does the booking process work?",
    a: "Browse our collection of cabins, select your desired dates using our live availability calendar, and reserve with a single click. No payment is required upfront — you pay on arrival. You'll receive a confirmation email immediately with all details.",
  },
  {
    q: "What's included with each cabin stay?",
    a: "Every cabin includes full private access to the property, all bedding and towels, a fully equipped kitchen, firewood (where applicable), and Wi-Fi. Premium cabins may include hot tubs, saunas, or dedicated outdoor spaces. Check individual cabin listings for full amenity details.",
  },
  {
    q: "Can I bring my pet?",
    a: "Pets are welcome at Wild Oasis! We ask that you inform us in advance and observe our house rules — no pets on furniture, and all pets must be supervised outdoors. A small pet cleaning fee may apply.",
  },
  {
    q: "What's the cancellation and refund policy?",
    a: "Cancel up to 7 days before your check-in date for a full refund. Cancellations within 7 days will receive a 50% refund. No-shows are non-refundable. All cancellations must be submitted through your account dashboard.",
  },
  {
    q: "Is there a minimum stay requirement?",
    a: "Most cabins have a 2-night minimum stay. During peak season (summer and major holidays), some properties require 3–5 nights minimum. The exact requirement is shown on each cabin's availability calendar.",
  },
  {
    q: "How do I get cabin access instructions?",
    a: "Your keypad code and detailed access instructions are sent to your registered email 24 hours before your scheduled check-in. The cabin uses a secure keypad entry system — no physical key pickup required.",
  },
  {
    q: "Are the cabins suitable year-round?",
    a: "Yes — all Wild Oasis cabins are fully insulated and equipped for year-round comfort. In winter months, we recommend 4WD for some properties. Road and weather conditions are noted on the individual cabin pages.",
  },
  {
    q: "What if I need to reach someone during my stay?",
    a: "Our team is available 7 days a week, 8AM–10PM PT. You can reach us via the contact form, by email at stays@wildoasis.com, or through your account. We typically respond within the hour.",
  },
];

function FAQItem({ question, answer, isOpen, onToggle }) {
  return (
    <div
      style={{
        borderBottom: "1px solid var(--border)",
      }}
    >
      <button
        onClick={onToggle}
        style={{
          width: "100%",
          background: "none",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "24px 0",
          textAlign: "left",
          gap: "24px",
        }}
      >
        <span
          style={{
            fontFamily: "'Jost', sans-serif",
            fontWeight: 400,
            fontSize: "16px",
            color: isOpen ? "var(--birch)" : "var(--stone)",
            transition: "color 200ms ease",
            lineHeight: 1.5,
          }}
        >
          {question}
        </span>
        <span
          style={{
            color: "var(--gold)",
            fontSize: "20px",
            lineHeight: 1,
            flexShrink: 0,
            display: "inline-block",
            transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
            transition: "transform 300ms ease",
          }}
        >
          +
        </span>
      </button>

      <div
        style={{
          maxHeight: isOpen ? "400px" : "0",
          overflow: "hidden",
          transition: "max-height 400ms ease-out",
        }}
      >
        <p
          style={{
            fontFamily: "'Jost', sans-serif",
            fontWeight: 300,
            fontSize: "15px",
            color: "var(--stone)",
            lineHeight: 1.8,
            paddingBottom: "24px",
            margin: 0,
          }}
        >
          {answer}
        </p>
      </div>
    </div>
  );
}

function FAQAccordion({ items = FAQ_DATA, limit }) {
  const [openIndex, setOpenIndex] = useState(null);
  const displayItems = limit ? items.slice(0, limit) : items;

  return (
    <div>
      {displayItems.map((item, i) => (
        <FAQItem
          key={i}
          question={item.q}
          answer={item.a}
          isOpen={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? null : i)}
        />
      ))}
    </div>
  );
}

export { FAQ_DATA, FAQAccordion };
export default FAQItem;
