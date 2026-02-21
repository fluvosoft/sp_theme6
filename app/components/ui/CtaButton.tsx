import type { ReactNode } from "react";
import { THEME } from "../../lib/constants";
import { CartIcon } from "./Icons";

type CtaButtonProps = {
  children: ReactNode;
  href?: string;
  className?: string;
};

export default function CtaButton({ children, href = "#order", className = "" }: CtaButtonProps) {
  return (
    <a
      href={href}
      className={`font-heading inline-flex items-center justify-center gap-2.5 rounded-xl px-8 py-4 text-base font-semibold text-white shadow-[var(--shadow-button)] transition-all duration-200 hover:scale-[1.02] hover:shadow-[var(--shadow-button-hover)] active:scale-[0.98] ${className}`}
      style={{ backgroundColor: THEME.pink }}
    >
      <CartIcon className="h-5 w-5" />
      {children}
    </a>
  );
}
