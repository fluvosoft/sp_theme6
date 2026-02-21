import { THEME, CONTACT_PHONE } from "../../lib/constants";
import { PhoneIcon } from "../ui/Icons";

export default function Contact() {
  return (
    <section className="bg-white">
      <div
        className="section-banner flex flex-wrap items-center justify-center gap-3 text-center text-white"
        style={{ backgroundColor: THEME.pink }}
      >
        <PhoneIcon className="h-6 w-6 shrink-0" />
        <div>
          <h2 className="font-heading text-base font-bold leading-snug md:text-lg">
            যে কোন প্রয়োজনে যোগাযোগ করুন
          </h2>
          <a
            href={`tel:${CONTACT_PHONE}`}
            className="mt-1 inline-block rounded-lg bg-white/20 px-4 py-2 font-semibold transition-colors hover:bg-white/30"
          >
            {CONTACT_PHONE}
          </a>
        </div>
      </div>
    </section>
  );
}
