import { THEME } from "../../lib/constants";
import { HeartIcon } from "../ui/Icons";

export default function Footer() {
  return (
    <footer
      className="border-t border-black/10 py-8 text-center md:py-10"
      style={{ backgroundColor: THEME.pinkDark }}
    >
      <div className="section-content">
        <p className="font-body text-sm text-white/95 md:text-base">
          Copyright © 2025 | Made with <HeartIcon className="inline h-4 w-4 text-red-200" /> by HIMEL
        </p>
        <p className="mt-1 text-xs text-white/70">
          বিটরুট পাউডার — ল্যাব টেস্টেড, সরকার অনুমোদিত
        </p>
      </div>
    </footer>
  );
}
