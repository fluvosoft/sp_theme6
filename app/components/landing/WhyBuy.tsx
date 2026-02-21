import { THEME } from "../../lib/constants";

const REASONS = [
  "অগ্রিম পেমেন্ট লাগে না — এক টাকাও অগ্রিম দিতে হবে না",
  "সারা দেশে ক্যাশ অন ডেলিভারি",
  "ডেলিভারির সময় প্রোডাক্ট দেখে নিয়ে রিসিভ করতে পারবেন",
  "বিবরণের সাথে মিল না থাকলে রিটার্ন সুবিধা",
];

export default function WhyBuy() {
  return (
    <section className="bg-[var(--section-alt)]">
      <div className="section-banner text-center text-white" style={{ backgroundColor: THEME.pink }}>
        <p className="text-xs font-medium uppercase tracking-wider text-white/90 md:text-sm">
          কেন আমরা
        </p>
        <h2 className="font-heading mt-0.5 text-base font-bold leading-snug md:text-lg">
          আমাদের কাছে কেনো কিনবেন?
        </h2>
      </div>

      <div className="section-content py-10 md:py-14">
        <div className="mx-auto grid max-w-2xl gap-4 sm:grid-cols-2">
          {REASONS.map((text, i) => (
            <div
              key={i}
              className="flex items-start gap-4 rounded-2xl border border-gray-200/80 bg-white px-5 py-4 shadow-[var(--shadow-card)] transition-shadow hover:shadow-[var(--shadow-card-hover)]"
            >
              <span
                className="mt-1.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
                style={{ backgroundColor: THEME.pink }}
                aria-hidden
              >
                {i + 1}
              </span>
              <span className="text-gray-800 leading-relaxed">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
