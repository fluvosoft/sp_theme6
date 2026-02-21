import { THEME, CONTACT_PHONE } from "../../lib/constants";
import { PhoneIcon } from "../ui/Icons";

export default function Contact() {
  return (
    <section className="bg-[var(--section-alt)] py-10 md:py-12">
      <div className="section-content">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 rounded-2xl border-2 bg-white p-6 shadow-[var(--shadow-card)] sm:flex-row sm:justify-between sm:gap-6 md:p-8"
          style={{ borderColor: THEME.pink }}
        >
          <div className="flex items-center gap-4 text-center sm:text-left">
            <span
              className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-white"
              style={{ backgroundColor: THEME.pink }}
              aria-hidden
            >
              <PhoneIcon className="h-7 w-7" />
            </span>
            <div>
              <h2 className="font-heading text-lg font-bold text-gray-900 md:text-xl">
                যে কোন প্রয়োজনে যোগাযোগ করুন
              </h2>
              <p className="mt-0.5 text-sm text-gray-500">২৪/৭ কল করুন</p>
            </div>
          </div>
          <a
            href={`tel:${CONTACT_PHONE}`}
            className="font-heading shrink-0 rounded-xl px-6 py-3.5 text-base font-semibold text-white shadow-[var(--shadow-button)] transition-all hover:opacity-95 hover:shadow-[var(--shadow-button-hover)]"
            style={{ backgroundColor: THEME.pink }}
          >
            {CONTACT_PHONE}
          </a>
        </div>
      </div>
    </section>
  );
}
