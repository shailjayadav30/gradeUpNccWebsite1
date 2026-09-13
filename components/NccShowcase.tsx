"use client";

import { useQuoteForm } from "./QuoteFormCOntext";
import ProductRange from "./ProductRange";
import DetailsMatter from "./DetailsMatter";
import ComfortPerformance from "./ComfortPerformance";
import QuoteForm from "./QuoteForm";
import { useEffect, useRef } from "react";

export default function NccShowcase() {
  const { isOpen, openSignal } = useQuoteForm();
  const formRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isOpen && formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [openSignal]);
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
          <div ref={formRef} className="lg:sticky lg:top-24 h-fit">
            <QuoteForm />
          </div>
        )}
      </div>
    </div>
  );
}