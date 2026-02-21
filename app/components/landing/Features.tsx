import { THEME, CTA_LABEL, ORDER_UNIT_PRICE_BDT } from "../../lib/constants";
import CtaButton from "../ui/CtaButton";

const BENEFITS = [
  "উচ্চ রক্তচাপ নিয়ন্ত্রণ ও হৃদযন্ত্র সুস্থ রাখা",
  "ফ্যাটি লিভার সম্পূর্ণভাবে সেরে যাওয়া",
  "টেস্টোস্টেরন হরমোন বাড়ানো ও যৌবন ধরে রাখা",
  "রক্ত থেকে ক্ষতিকর কোলেস্টেরল দূর করা",
  "কোষ্ঠকাঠিন্য ও গ্যাস্ট্রিক সমস্যা আজীবন উপশম",
  "দেহ থেকে টক্সিন দূর করা ও ত্বক উজ্জ্বল করা",
  "২০০ গ্রাম ল্যাব টেস্ট, সরকার অনুমোদিত, স্প্রে ড্রাইড বিটরুট পাউডার, সুন্দর একটি চামচ গিফট পাচ্ছেন।",
];

export default function Features() {
  return (
    <section className="bg-white">
      <div className="section-banner text-center text-white" style={{ backgroundColor: THEME.pink }}>
        <p className="text-xs font-medium uppercase tracking-wider text-white/90 md:text-sm">
          স্বাস্থ্য উপকারিতা
        </p>
        <h2 className="font-heading mt-0.5 text-base font-bold leading-snug md:text-lg">
          বিটরুট জুস নিয়মিত খেলে আমরা যে সব রোগ থেকে মুক্তি পাবো:
        </h2>
      </div>

      <div className="section-content py-10 md:py-14">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-gray-600 leading-relaxed md:text-lg">
            বিটরুটে ফাইবার, আয়রন, ভিটামিন, ম্যাগনেসিয়াম ও নানা পুষ্টি থাকে। বয়স ৩০ পার হলে এই পুষ্টিগুলো নিয়মিত নেওয়া জরুরি।
          </p>
        </div>

        <ul className="mx-auto mt-8 max-w-2xl space-y-4">
          {BENEFITS.map((text, i) => (
            <li
              key={i}
              className="flex items-start gap-4 rounded-2xl border border-gray-100 bg-white px-5 py-4 shadow-[var(--shadow-card)] transition-shadow hover:shadow-[var(--shadow-card-hover)]"
            >
              <span
                className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
                style={{ backgroundColor: THEME.pink }}
                aria-hidden
              >
                ✓
              </span>
              <span className="text-gray-800 leading-relaxed">{text}</span>
            </li>
          ))}
        </ul>

        <div
          className="mx-auto mt-8 max-w-md rounded-2xl px-5 py-4 text-center ring-2 ring-gray-100"
          style={{ backgroundColor: THEME.pinkLight }}
        >
          <p className="font-heading text-gray-800">
            ১ কেজি{" "}
            <span className="text-xl font-bold md:text-2xl" style={{ color: THEME.pink }}>
              {ORDER_UNIT_PRICE_BDT} টাকা
            </span>{" "}
            মাত্র
          </p>
          <div className="mt-4">
            <CtaButton href="#order">{CTA_LABEL}</CtaButton>
          </div>
        </div>
      </div>
    </section>
  );
}
