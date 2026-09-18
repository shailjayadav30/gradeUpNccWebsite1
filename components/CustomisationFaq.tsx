"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Building2,
  UserRound,
  Badge,
  BadgeCheck,
  ClipboardPen,
} from "lucide-react";

import customisationImg from "../public/images/image.png";

const customisations = [
  {
    label: "Institution\nName",
    icon: Building2,
  },
  {
    label: "Cadet\nName",
    icon: UserRound,
  },
  {
    label: "Logo\nEmbroidery",
    icon: Badge,
  },
  {
    label: "Badge\nPlacement",
    icon: BadgeCheck,
  },
  {
    label: "Custom\nRequirements",
    icon: ClipboardPen,
  },
];

const faqs = [
  {
    q: "What is your minimum order quantity?",
    a: "Our minimum order quantity is 30 pieces. For bulk orders, share your cadet strength and we'll help you with the best options.",
  },
  {
    q: "Can we order a size sample set before the bulk order?",
    a: "Yes. We recommend ordering a size sample set first so you can check the fit across your cadets before finalising the full order.",
  },
  {
    q: "Can the sample set be exchanged later?",
    a: "Yes, the sample set can be exchanged later, subject to our exchange policy.",
  },
  {
    q: "Do you provide badges and accessories?",
    a: "Yes, we supply the complete NCC kit including badges, patches and accessories alongside uniforms.",
  },
  {
    q: "Do the uniforms follow NCC specifications?",
    a: "All uniforms, tracksuits and accessories are made as per NCC specifications.",
  },
];

export default function CustomisationFaq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="customisation" className="container-x py-16">
      <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr_1.15fr] lg:items-start">

        {/* Customisation */}
        <div>
          <h2 className="text-2xl font-extrabold text-navy-600">
            Customisation & institutional support
          </h2>

          <p className="mt-2 text-navy-700">
            Have a specific requirement? We can help.
          </p>

          <div className="mt-6 grid grid-cols-3 sm:grid-cols-5 gap-3">
            {customisations.map((c) => {
              const Icon = c.icon;

              return (
                <div
                  key={c.label}
                  className="flex flex-col items-center text-center gap-2"
                >
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-lg bg-navy-50 text-navy-600">
                    <Icon size={24} strokeWidth={1.8} />
                  </span>

                  <span className="whitespace-pre-line text-xs font-semibold text-navy-600 leading-tight">
                    {c.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Image */}
        <div className="relative h-64 lg:h-80 rounded-xl overflow-hidden">
          <Image
            src={customisationImg}
            alt="NCC embroidery detail"
            fill
            className="object-cover"
          />

          <div className="absolute bottom-5 right-5 max-w-[140px] rotate-[-2deg] bg-white px-3 py-2 shadow-lg">
            <p className="font-hand text-lg leading-tight text-navy-600">
              Your Identity. Their Pride.
            </p>
          </div>
        </div>

        {/* FAQs */}
        <div>
          <h2 className="text-2xl font-extrabold text-navy-600">
            NCC Uniforms — FAQs
          </h2>

          <div className="mt-4 space-y-2">
            {faqs.map((f, i) => (
              <div
                key={f.q}
                className="rounded-lg border border-navy-100 bg-white shadow-sm"
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-4 py-3 text-left text-sm font-semibold text-navy-600"
                >
                  {f.q}

                  <span className="shrink-0 text-lg font-bold text-navy-500">
                    {open === i ? "−" : "+"}
                  </span>
                </button>

                {open === i && (
                  <p className="px-4 pb-3 text-sm text-navy-600">
                    {f.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}