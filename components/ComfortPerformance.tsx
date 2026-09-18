import Image from "next/image";
import trackSuit from "../public/images/NCC Website/Track Suit Closeup.png";
import {
  Wind,
  ShieldCheck,
  PersonStanding,
  Shirt,
  Ruler,
  Mountain,
} from "lucide-react";

const features = [
  {
    label: "Breathable\nFabrics",
    icon: Wind,
  },
  {
    label: "Durable\nfor Daily Use",
    icon: ShieldCheck,
  },
  {
    label: "Freedom\nof Movement",
    icon: PersonStanding,
  },
  {
    label: "Easy\nCare",
    icon: Shirt,
  },
  {
    label: "Wide\nSize Range",
    icon: Ruler,
  },
  {
    label: "Built for\nTraining & Camps",
    icon: Mountain,
  },
];

export default function ComfortPerformance() {
  return (
    <section className="relative min-w-0 min-h-[280px] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={trackSuit}
          alt="NCC uniform fabric detail"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-white/10" />
      </div>

      <div className="absolute z-10 bottom-6 right-10 md:right-16 rotate-[-6deg] rounded-sm bg-gold-400 px-4 py-3 text-left font-hand text-lg leading-tight text-navy-900 shadow-lg max-w-[130px]">
        Built Tough for Brighter Tomorrows.
      </div>

      <div className="relative z-10 w-full px-6 py-8 md:px-10">
        <h2 className="text-2xl md:text-3xl font-extrabold text-navy-900">
          Comfort meets performance.
        </h2>

        <p className="mt-1 text-navy-600">
          Designed to keep up with every drill, camp and parade.
        </p>

        <div className="mt-6 grid grid-cols-3 sm:grid-cols-6 gap-3 max-w-3xl">
          {features.map((f) => {
            const Icon = f.icon;

            return (
              <div
                key={f.label}
                className="flex flex-col items-center justify-center text-center gap-2 rounded-lg bg-white/70 backdrop-blur-sm px-2 py-4"
              >
                <Icon
                  size={28}
                  strokeWidth={1.8}
                  className="text-navy-700 shrink-0"
                />

                <p className="whitespace-pre-line text-xs font-semibold text-navy-800 leading-tight">
                  {f.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
