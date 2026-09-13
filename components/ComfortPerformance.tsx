

import Image from "next/image";
import trackSuit from "../public/images/NCC Website/Track Suit Closeup.png";

const features = [
  { label: "Breathable\nFabrics", icon: <path d="M4 8c2-2 4-2 6 0s4 2 6 0 4-2 6 0M4 14c2-2 4-2 6 0s4 2 6 0 4-2 6 0" /> },
  { label: "Durable\nfor Daily Use", icon: <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" /> },
  { label: "Freedom\nof Movement", icon: <path d="M13 4a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM9 8l3 2 3-2M9 8l-2 6 3 1M15 8l2 6-3 1M10 15l-1 5M14 15l1 5" /> },
  { label: "Easy\nCare", icon: <path d="M6 4h12v16H6zM8 8h8M12 12a3 3 0 100 6 3 3 0 000-6z" /> },
  { label: "Wide\nSize Range", icon: <path d="M4 12h16M4 12V9M8 12V9M12 12V7M16 12V9M20 12V9" /> },
  { label: "Built for\nTraining & Camps", icon: <path d="M4 20l6-12 3 6 2-3 5 9H4z" /> },
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
          {features.map((f) => (
            <div
              key={f.label}
              className="flex flex-col items-center justify-center text-center gap-2 rounded-lg bg-white/70 backdrop-blur-sm px-2 py-4"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-7 w-7 text-navy-700 shrink-0">
                {f.icon}
              </svg>
              <p className="whitespace-pre-line text-xs font-semibold text-navy-800 leading-tight">
                {f.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}