"use client";

import { useEffect, useMemo, useState } from "react";
import { THEME, CTA_LABEL, ORDER_PRODUCT_NAME, ORDER_UNIT_PRICE_BDT, REGULAR_PRICE_BDT } from "../../lib/constants";
import { CartIcon } from "../ui/Icons";

function useCountdown(targetDate: Date) {
  const [diff, setDiff] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const total = Math.max(0, Math.floor((targetDate.getTime() - now.getTime()) / 1000));
      setDiff({
        days: Math.floor(total / 86400),
        hours: Math.floor((total % 86400) / 3600),
        minutes: Math.floor((total % 3600) / 60),
        seconds: total % 60,
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [targetDate.getTime()]);

  return diff;
}

const COUNTDOWN_LABELS = [
  { key: "days", en: "Days", bn: "দিন" },
  { key: "hours", en: "Hours", bn: "ঘণ্টা" },
  { key: "minutes", en: "Minutes", bn: "মিনিট" },
  { key: "seconds", en: "Seconds", bn: "সেকেন্ড" },
] as const;

export default function Hero() {
  const [imgError, setImgError] = useState(false);
  const end = useMemo(() => {
    const d = new Date();
    d.setDate(d.getDate() + 2);
    d.setHours(23, 59, 59, 0);
    return d;
  }, []);
  const countdown = useCountdown(end);
  const values = [countdown.days, countdown.hours, countdown.minutes, countdown.seconds];
  const discountPercent = Math.round(((REGULAR_PRICE_BDT - ORDER_UNIT_PRICE_BDT) / REGULAR_PRICE_BDT) * 100);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[var(--section-alt)] via-white to-white px-4 py-14 md:px-8 md:py-20">
      {/* Subtle background accent */}
      <div
        className="absolute left-1/2 top-0 h-64 w-[120%] -translate-x-1/2 rounded-b-[60%] opacity-[0.04]"
        style={{ backgroundColor: THEME.pink }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-3xl">
        {/* Badge */}
        <p
          className="font-heading text-center text-xs font-semibold uppercase tracking-widest md:text-sm"
          style={{ color: THEME.pink }}
        >
          ল্যাব টেস্টেড • সরকার অনুমোদিত
        </p>

        <h1
          className="font-heading mt-2 text-center text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl"
          style={{ color: THEME.pink }}
        >
          {ORDER_PRODUCT_NAME}
        </h1>

        <p className="mt-2 text-center text-sm text-gray-500 md:text-base">
          স্প্রে ড্রাইড বিটরুট পাউডার — ২০০ গ্রাম
        </p>

        {/* Product image – premium frame */}
        <div className="mt-8">
          <div className="relative mx-auto max-w-2xl">
            <div
              className="absolute -inset-1 rounded-3xl opacity-20 blur-sm"
              style={{ backgroundColor: THEME.pink }}
              aria-hidden
            />
            <div
              className="relative overflow-hidden rounded-2xl border-2 bg-white p-2 shadow-[0_8px_30px_rgba(184,0,77,0.12)]"
              style={{ borderColor: THEME.pink }}
            >
              <div className="relative aspect-[2/1] w-full overflow-hidden rounded-xl bg-gray-100">
                {!imgError ? (
                  <img
                    src="/beetroot-powder.png"
                    alt={ORDER_PRODUCT_NAME}
                    className="h-full w-full object-cover"
                    onError={() => setImgError(true)}
                  />
                ) : null}
                {imgError && (
                  <div className="flex h-full w-full items-center justify-center text-sm text-gray-400">
                    প্রোডাক্ট ইমেজ
                  </div>
                )}
              </div>
              {/* Discount ribbon (optional) */}
              <div
                className="absolute right-0 top-4 rounded-l-lg px-3 py-1 text-xs font-bold text-white shadow"
                style={{ backgroundColor: THEME.pinkDark }}
              >
                {discountPercent}% ছাড়
              </div>
            </div>
          </div>
        </div>

        {/* Countdown */}
        <p className="mt-6 text-center text-sm font-medium text-gray-600">
          অফার শেষ হতে বাকি
        </p>
        <div className="mt-3 grid grid-cols-4 gap-2 sm:gap-3">
          {COUNTDOWN_LABELS.map((item, i) => (
            <div
              key={item.key}
              className="rounded-xl bg-white py-3 text-center shadow-[var(--shadow-card)] ring-1 ring-gray-100"
            >
              <span
                className="block text-2xl font-bold tabular-nums md:text-3xl"
                style={{ color: THEME.pink }}
              >
                {values[i]}
              </span>
              <span className="mt-0.5 block text-xs font-medium text-gray-500">
                {item.bn}
              </span>
            </div>
          ))}
        </div>

        {/* Pricing */}
        <div className="mt-6 rounded-2xl bg-white px-5 py-4 text-center shadow-[var(--shadow-card)] ring-1 ring-gray-100">
          <p className="text-sm text-gray-500">
            রেগুলার মূল্য{" "}
            <span className="font-medium text-gray-400 line-through">{REGULAR_PRICE_BDT} টাকা</span>
          </p>
          <p className="mt-1.5 text-2xl font-bold md:text-3xl" style={{ color: THEME.pink }}>
            {ORDER_UNIT_PRICE_BDT} টাকা
          </p>
          <p className="mt-0.5 text-xs text-gray-500">
            বর্তমান ডিসকাউন্ট মূল্য
          </p>
        </div>

        {/* CTA */}
        <div className="mt-8 flex flex-col items-center gap-3">
          <a
            href="#order"
            className="font-heading inline-flex items-center justify-center gap-2.5 rounded-xl px-10 py-4 text-base font-semibold text-white shadow-[var(--shadow-button)] transition-all duration-200 hover:scale-[1.03] hover:shadow-[var(--shadow-button-hover)] active:scale-[0.98]"
            style={{ backgroundColor: THEME.pink }}
          >
            <CartIcon className="h-5 w-5" />
            {CTA_LABEL}
          </a>
          <p className="text-xs text-gray-400">
            ক্যাশ অন ডেলিভারি • দেশজুড়ে ডেলিভারি
          </p>
        </div>
      </div>
    </section>
  );
}
