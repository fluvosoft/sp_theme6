import { THEME } from "../../lib/constants";

export default function Footer() {
  return (
    <footer
      className="border-t border-black/10 py-8 text-center md:py-10"
      style={{ backgroundColor: THEME.pinkDark }}
    >
      <div className="section-content">
        <p className="font-body text-sm text-white/95 md:text-base">
          Copyright © 2025 | Made by Fluvosoft
        </p>
        <p className="mt-1 text-xs text-white/70">
          বিটরুট পাউডার — ল্যাব টেস্টেড, সরকার অনুমোদিত
        </p>
      </div>
    </footer>
  );
}
