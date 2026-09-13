"use client"
import Image from "next/image";
import whatsapp from "../public/images/whatsapp.png";
import nccCadet from "../public/images/NCC Website/Group of ncc cadets.png";
import { useQuoteForm } from "./QuoteFormCOntext";

const features = [
  {
    label: "Complete\nNCC Kit",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z" />
        <path d="M4 7.5L12 12l8-4.5M12 12v9" />
      </svg>
    ),
  },
  {
    label: "Bulk\nOrders",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <circle cx="8" cy="8" r="3" />
        <circle cx="16" cy="8" r="3" />
        <path d="M2 20c0-3 2.5-5 6-5s6 2 6 5M10 20c0-3 2.5-5 6-5s6 2 6 5" />
      </svg>
    ),
  },
  {
    label: "Multiple\nSizes",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <rect x="3" y="9" width="18" height="6" rx="1" />
        <path d="M6 9v6M9 9v3M12 9v6M15 9v3M18 9v6" />
      </svg>
    ),
  },
  {
    label: "Institutional\nSupply",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M4 21h16M5 21V9l7-5 7 5v12M9 21v-6h6v6" />
      </svg>
    ),
  },
];



export default function Hero() {
    const { open } = useQuoteForm();
  return (
    <section className="relative overflow-hidden bg-white min-h-[calc(100vh-4rem)] flex items-center">
     
      <div className="absolute inset-0 z-0">
        <Image
          src={nccCadet}
          alt="NCC cadets in uniform"
          fill
          priority
          className="object-cover object-[75%_top] md:object-[65%_top]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent md:w-3/5" />
      </div>

   
      <p className="absolute top-6 right-4 md:right-10 hidden md:block max-w-[170px] text-right font-hand text-2xl leading-tight text-navy-800 z-20">
        Discipline
        <br />
        Skills
        <br />
        Leadership
        <br />A Brighter
        <br />
        Tomorrow.
      </p>
      <div className="absolute bottom-8 right-4 md:right-10 hidden md:block rounded-md px-4 py-2 text-right text-white z-20">
        <p className="text-lg font-bold leading-tight uppercase">
          More than a uniform.
          <br />A mindset.
        </p>
      </div>

      <div className="container-x relative z-10 grid gap-10 py-12 md:grid-cols-2 md:py-16 items-start w-full">
        <div className="relative">
          <p className="text-lg font-bold tracking-widest text-navy-700">
            NATIONAL CADET CORPS
          </p>
          <h1 className="mt-3 text-5xl md:text-7xl font-extrabold leading-[1.02] text-navy-900 font-heading">
            <span className="text-navy-600">NCC</span> UNIFORMS
          </h1>
          <p className="mt-2 text-xl md:text-2xl font-bold text-gray-500 uppercase">
            Cadets ready. Missions ahead.
          </p>
          <p className="mt-4 max-w-md text-navy-700 text-base font-medium">
            Complete NCC uniforms, badges and accessories for schools, colleges
            and institutions — from one supplier.
          </p>

          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-4 max-w-md">
            {features.map((f) => (
              <div
                key={f.label}
                className="flex items-center gap-3 text-sm font-semibold"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center text-navy-700">
                  <span className="h-6 w-6">{f.icon}</span>
                </span>
                <span className="whitespace-pre-line leading-tight text-navy-800">
                  {f.label}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <button onClick={open} className="btn-gold">
              Get NCC Bulk Pricing →
            </button>
            <button
              rel="noopener noreferrer"
              className="btn-outline text-navy-600 font-sans font-semibold flex items-center gap-2"
            >
              <Image src={whatsapp} height={24} width={24} alt="whatsapp" />
              Talk to Us on WhatsApp
            </button>
          </div>
        </div>

        
        <div className="hidden md:block" />
      </div>
    </section>
  );
}
