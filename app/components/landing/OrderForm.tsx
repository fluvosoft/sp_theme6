"use client";

import { useState, type FormEvent, type MouseEvent } from "react";
import { LockIcon } from "../ui/Icons";
import {
  THEME,
  ORDER_FORM_ID,
  CONTACT_PHONE,
  ORDER_PRODUCT_NAME,
  ORDER_UNIT_PRICE_BDT,
  SHIPPING_INSIDE_DHAKA_BDT,
  SHIPPING_OUTSIDE_DHAKA_BDT,
} from "../../lib/constants";

/* Use website theme (pink) for form accents */

export default function OrderForm() {
  const [quantity, setQuantity] = useState(0);
  const [shipping, setShipping] = useState<"inside" | "outside">("outside");

  const subtotal = quantity * ORDER_UNIT_PRICE_BDT;
  const deliveryCharge = shipping === "inside" ? SHIPPING_INSIDE_DHAKA_BDT : SHIPPING_OUTSIDE_DHAKA_BDT;
  const total = subtotal + deliveryCharge;

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: wire to backend or order service
  }

  function handleDecrement(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    e.stopPropagation();
    setQuantity((q) => Math.max(0, q - 1));
  }

  function handleIncrement(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    e.stopPropagation();
    setQuantity((q) => Math.min(10, q + 1));
  }

  return (
    <section id={ORDER_FORM_ID} className="bg-[var(--section-alt)]">
      <div className="section-content flex flex-col items-center justify-center gap-3 py-8 md:flex-row md:gap-6 md:py-10">
        <div
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-white"
          style={{ backgroundColor: THEME.pink }}
          aria-hidden
        >
          <LockIcon className="h-6 w-6" />
        </div>
        <div className="text-center md:text-left">
          <p className="text-xs font-semibold uppercase tracking-wider md:text-sm" style={{ color: THEME.pink }}>
            সুরক্ষিত অর্ডার
          </p>
          <h2 className="font-heading mt-0.5 text-lg font-bold text-gray-900 md:text-xl">
            অর্ডার করতে নিচের ফর্মটি পূরন করুন
          </h2>
        </div>
      </div>
      <div className="section-content bg-[var(--section-alt)] py-10 md:py-14">
        <div className="mx-auto max-w-5xl">
          <form
            onSubmit={handleSubmit}
            className="overflow-hidden rounded-2xl border-2 bg-white shadow-[var(--shadow-card)]"
            style={{ borderColor: THEME.pink }}
          >
            {/* Top accent bar */}
            <div
              className="h-2 w-full"
              style={{ backgroundColor: THEME.pinkBright }}
              aria-hidden
            />

          <div className="space-y-0">
            {/* Row 1: Your Products | Your order — side by side */}
            <div className="grid grid-cols-1 gap-6 border-b border-gray-200 p-5 md:grid-cols-2 lg:p-6">
              {/* Your Products */}
              <div>
                <h3 className="font-heading text-sm font-bold text-gray-800">Your Products</h3>
                <div className="mt-2 flex items-center gap-3 rounded-xl border border-gray-200 bg-gray-50/50 p-3 shadow-sm">
                  <input
                    type="checkbox"
                    defaultChecked
                    readOnly
                    className="h-4 w-4 shrink-0 rounded border-gray-300"
                    style={{ accentColor: THEME.pink }}
                  />
                  <div className="h-12 w-12 shrink-0 overflow-hidden rounded-md bg-gray-300">
                    <div className="flex h-full w-full items-center justify-center text-xs text-gray-500">
                      ইমেজ
                    </div>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-gray-900">{ORDER_PRODUCT_NAME}</p>
                    <div className="mt-1.5 flex items-center gap-2">
                      <div className="inline-flex items-center rounded-md border border-gray-300 bg-white">
                        <button
                          type="button"
                          onClick={handleDecrement}
                          className="flex h-8 w-8 shrink-0 cursor-pointer select-none items-center justify-center rounded-l border-0 bg-transparent text-base font-medium text-gray-600 transition-colors hover:bg-gray-100 active:bg-gray-200"
                          aria-label="কম করুন"
                        >
                          −
                        </button>
                        <span className="flex h-8 min-w-[2rem] items-center justify-center border-x border-gray-200 bg-white text-sm font-medium tabular-nums text-gray-900">
                          {quantity}
                        </span>
                        <button
                          type="button"
                          onClick={handleIncrement}
                          className="flex h-8 w-8 shrink-0 cursor-pointer select-none items-center justify-center rounded-r border-0 bg-transparent text-base font-medium text-gray-600 transition-colors hover:bg-gray-100 active:bg-gray-200"
                          aria-label="বাড়ান"
                        >
                          +
                        </button>
                      </div>
                      <span className="font-semibold text-gray-800">
                        {ORDER_UNIT_PRICE_BDT}.00৳
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Your order — side by side with Your Products */}
              <div className="flex flex-col">
                <h3 className="font-heading text-sm font-bold text-gray-800">Your order</h3>
                <div className="mt-2 flex-1 overflow-hidden rounded-lg border border-gray-200 bg-white">
                  <table className="w-full text-xs sm:text-sm">
                    <thead>
                      <tr className="border-b border-gray-200 bg-gray-50">
                        <th className="px-3 py-2 text-left font-semibold text-gray-800">Product</th>
                        <th className="px-3 py-2 text-right font-semibold text-gray-800">Subtotal</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-100">
                        <td className="px-3 py-2">
                          <div className="flex items-center gap-2">
                            <div className="h-8 w-8 shrink-0 overflow-hidden rounded bg-gray-200">
                              <div className="flex h-full w-full items-center justify-center text-[10px] text-gray-500">
                                img
                              </div>
                            </div>
                            <span className="font-medium text-gray-900">
                              {ORDER_PRODUCT_NAME} × {quantity}
                            </span>
                          </div>
                        </td>
                        <td className="px-3 py-2 text-right font-medium text-gray-900">
                          {subtotal}.00৳
                        </td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="px-3 py-1.5 font-medium text-gray-700">Subtotal</td>
                        <td className="px-3 py-1.5 text-right font-medium text-gray-900">
                          {subtotal}.00৳
                        </td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="px-3 py-1.5 font-medium text-gray-700">Delivery charge</td>
                        <td className="px-3 py-1.5 text-right font-medium text-gray-900">
                          {deliveryCharge}.00৳
                        </td>
                      </tr>
                      <tr>
                        <td className="px-3 py-1.5 font-semibold text-gray-800">Total</td>
                        <td className="px-3 py-1.5 text-right font-bold text-gray-900">
                          {total}.00৳
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Row 2: Form + Shipping | Cash on delivery + Privacy + Button */}
            <div className="grid grid-cols-1 gap-0 lg:grid-cols-[1fr,340px]">
              <div className="border-b border-gray-200 p-4 lg:border-b-0 lg:border-r lg:p-5">
                <h3 className="font-heading mb-3 text-sm font-bold text-gray-800">
                  অর্ডার করার জন্য নিচের ফর্মটি পূরণ করুন।
                </h3>

                <div className="space-y-3">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-gray-800">
                    আপনার নাম *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--pink-deep)]/20 focus:border-[var(--pink-deep)]"
                    placeholder="এখানে আপনার নাম লিখুন"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-xs font-semibold text-gray-800">
                    আপনার ফোন নাম্বার *
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--pink-deep)]/20 focus:border-[var(--pink-deep)]"
                    placeholder="এখানে আপনার মোবাইল নাম্বার লিখুন"
                  />
                </div>
                <div>
                  <label htmlFor="address" className="block text-xs font-semibold text-gray-800">
                    আপনার সম্পূর্ণ ঠিকানা *
                  </label>
                  <textarea
                    id="address"
                    required
                    rows={2}
                    className="mt-1 w-full resize-none rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--pink-deep)]/20 focus:border-[var(--pink-deep)]"
                    placeholder="এলাকার নাম, থানা/উপজেলার নাম, জেলার নাম লিখুন.."
                  />
                </div>
                </div>

              {/* Shipping */}
              <div className="mt-5">
                <h3 className="font-heading text-sm font-bold text-gray-800">Shipping</h3>
                <div className="mt-2 flex flex-wrap gap-2 sm:flex-nowrap">
                  <label className="flex min-w-0 cursor-pointer flex-1 items-center gap-3 rounded-xl border border-gray-200 p-3 text-sm transition-colors hover:bg-gray-50 has-[:checked]:border-[var(--pink-deep)] has-[:checked]:bg-[var(--pink-light)]">
                    <input
                      type="radio"
                      name="shipping"
                      checked={shipping === "outside"}
                      onChange={() => setShipping("outside")}
                      className="h-4 w-4 shrink-0"
                      style={{ accentColor: THEME.pink }}
                    />
                    <span className="min-w-0 text-gray-800">ঢাকার বাহিরে:</span>
                    <span className="shrink-0 font-semibold text-gray-900">
                      {SHIPPING_OUTSIDE_DHAKA_BDT}.00৳
                    </span>
                  </label>
                  <label className="flex min-w-0 cursor-pointer flex-1 items-center gap-3 rounded-xl border border-gray-200 p-3 text-sm transition-colors hover:bg-gray-50 has-[:checked]:border-[var(--pink-deep)] has-[:checked]:bg-[var(--pink-light)]">
                    <input
                      type="radio"
                      name="shipping"
                      checked={shipping === "inside"}
                      onChange={() => setShipping("inside")}
                      className="h-4 w-4 shrink-0"
                      style={{ accentColor: THEME.pink }}
                    />
                    <span className="min-w-0 text-gray-800">ঢাকার ভিতরে:</span>
                    <span className="shrink-0 font-semibold text-gray-900">
                      {SHIPPING_INSIDE_DHAKA_BDT}.00৳
                    </span>
                  </label>
                </div>
              </div>
            </div>

            {/* Right column: Payment + Button */}
            <div className="flex flex-col bg-gray-50/60 p-5 lg:p-6">
              {/* Cash on delivery */}
              <div className="mt-2">
                <h3 className="font-heading text-sm font-bold text-gray-800">
                  Cash on delivery
                </h3>
                <div className="mt-1.5 rounded-lg border border-gray-200 bg-gray-100/80 px-3 py-2 text-xs text-gray-600">
                  Pay with cash upon delivery.
                </div>
              </div>

              {/* Privacy */}
              <p className="mt-4 text-[11px] leading-relaxed text-gray-500">
                Your personal data will be used to process your order, support your experience
                throughout this website, and for other purposes described in our{" "}
                <a
                  href="#"
                  className="font-medium underline focus:outline-none focus:ring-2 focus:ring-pink-500"
                  style={{ color: "#b45309" }}
                >
                  privacy policy
                </a>
                .
              </p>

              {/* Confirm button */}
              <button
                type="submit"
                className="font-heading mt-4 flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-semibold text-white shadow-[var(--shadow-button)] transition-all hover:opacity-95 hover:shadow-[var(--shadow-button-hover)] focus-visible:ring-2 focus-visible:ring-offset-2"
                style={{ backgroundColor: THEME.pink }}
              >
                <LockIcon className="h-4 w-4" />
                এখানে ক্লিক দিয়ে অর্ডার কনফার্ম করুন {total}.00৳
              </button>
            </div>
            </div>
          </div>
        </form>
        </div>
      </div>
    </section>
  );
}
