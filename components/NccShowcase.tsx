"use client";

import { useQuoteForm } from "./QuoteFormCOntext";
import ProductRange from "./ProductRange";
import DetailsMatter from "./DetailsMatter";
import ComfortPerformance from "./ComfortPerformance";
import QuoteForm from "./QuoteForm";

export default function NccShowcase() {
  const { isOpen } = useQuoteForm();

  return (
    <div id="range" className="bg-white">
      <div
        className={`container-x grid gap-8 py-14 ${
          isOpen ? "lg:grid-cols-[1fr_320px]" : "lg:grid-cols-1"
        }`}
      >

        <div className="space-y-16 min-w-0">
          <ProductRange />
          <DetailsMatter />
          <ComfortPerformance />
        </div>

        {isOpen && (
          <div className="lg:sticky lg:top-24 h-fit">
            <QuoteForm />
          </div>
        )}
      </div>
    </div>
  );
}