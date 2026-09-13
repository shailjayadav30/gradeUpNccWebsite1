"use client";

import { useState } from "react";
import Image from "next/image";
import customisationImg from "../public/images/NCC Website/KHaki CLoseup.png";

const customisations = [
  {
    label: "Institution\nName",
    icon: (
      <path d="M6 3h9v18H6V3zM9 7h3M9 10h3M9 13h3M9 16h3M4 21h13" />
    ),
  },
  {
    label: "Cadet\nName",
    icon: <path d="M12 12a4 4 0 100-8 4 4 0 000 8zM4 21c0-4.4 3.6-7 8-7s8 2.6 8 7" />,
  },
  {
    label: "Logo\nEmbroidery",
    icon: <path d="M12 3l2 5 5 .7-3.6 3.5.8 5-4.2-2.4-4.2 2.4.8-5L5 8.7 10 8l2-5z" />,
  },
  {
    label: "Badge\nPlacement",
    icon: <path d="M12 2l2.6 1.5L18 3l.5 3.4L21 9l-1.5 2.6L21 15l-3 .5L18 19l-3.4.5L12 22l-2.6-2.5L6 19l-.5-3.5L2 15l1.5-2.4L2 9l3.5-.6L6 3l3.4.5L12 2z" />,
  },
  {
    label: "Custom\nRequirements",
    icon: <path d="M6 3h9l3 3v15H6V3zM15 3v3h3M9 12h6M9 15h6M9 9h3" />,
  },
];

const faqs = [
  {
    q: "What is your minimum order quantity?",
    a: "We work with schools, colleges and institutions of all sizes — share your cadet strength and we'll confirm what works best for a bulk order.",
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
        
        <div>
          <h2 className="text-2xl font-extrabold text-navy-600">
            Customisation & institutional support
          </h2>
          <p className="mt-2 text-navy-700">Have a specific requirement? We can help.</p>

          <div className="mt-6 grid grid-cols-3 sm:grid-cols-5 gap-3">
            {customisations.map((c) => (
              <div key={c.label} className="flex flex-col items-center text-center gap-2">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-lg bg-navy-50 text-navy-600">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-6 w-6">
                    {c.icon}
                  </svg>
                </span>
                <span className="whitespace-pre-line text-xs font-semibold text-navy-600 leading-tight">
                  {c.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        
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

        
        <div>
          <h2 className="text-2xl font-extrabold text-navy-600">NCC Uniforms — FAQs</h2>
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
                  <p className="px-4 pb-3 text-sm text-navy-600">{f.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}