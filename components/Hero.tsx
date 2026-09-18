"use client";
import Image from "next/image";
import whatsapp from "../public/images/whatsapp.png";
import nccCadet from "../public/images/NCC Website/Group of ncc cadets.png";
import { useQuoteForm } from "./QuoteFormCOntext";
import { PackageCheck, Users, Ruler, Building2 } from "lucide-react";

const features = [
  {
    label: "Complete\nNCC Kit",
    icon: PackageCheck,
  },
  {
    label: "Bulk\nOrders",
    icon: Users,
  },
  {
    label: "Multiple\nSizes",
    icon: Ruler,
  },
  {
    label: "Institutional\nSupply",
    icon: Building2,
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
            {features.map((f) => {
              const Icon = f.icon;

              return (
                <div
                  key={f.label}
                  className="flex items-center gap-3 text-sm font-semibold"
                >
                  <span className="grid h-9 w-9 shrink-0 place-items-center text-navy-700">
                    <Icon size={24} strokeWidth={1.8} />
                  </span>

                  <span className="whitespace-pre-line leading-tight text-navy-800">
                    {f.label}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <button onClick={open} className="btn-gold">
              Get NCC Bulk Pricing →
            </button>
            <a
              href="https://api.whatsapp.com/send/?phone=918884755555&text=Hi%2C+Thank+you+for+your+interest+in+GradeUp+Uniforms.+Please+let+us+know+how+we+can+help+you%3F+Our+reponses+may+be+delayed%2C+but+we+will+respond+to+you+at+the+earliest.+Thank+you+for+your+patience&type=phone_number&app_absent=0"
              className="btn-outline text-navy-600 font-sans font-semibold flex items-center gap-2"
            >
              <Image src={whatsapp} height={24} width={24} alt="whatsapp" />
              Talk to Us on WhatsApp
            </a>
          </div>
        </div>

        <div className="hidden md:block" />
      </div>
    </section>
  );
}
