"use client";

import { useState } from "react";
import Image from "next/image";
import uniformImg from "../public/images/NCC Website/Khaki Uniform.png";
import tracksuitImg from "../public/images/NCC Website/Track suit.png";
import tshirtImg from "../public/images/NCC Website/Tshirts.png";
import shoesImg from "../public/images/NCC Website/Shoes.png";

const products = [
  {
    name: "NCC Uniform (Khaki)",
    image: uniformImg,
    points: [
      "As per NCC specifications",
      "Durable & comfortable fabric",
      "Multiple sizes available",
    ],
  },
  {
    name: "NCC Tracksuits",
    image: tracksuitImg,
    points: [
      "Breathable fabric",
      "Comfortable fit",
      "Ideal for training & camps",
    ],
  },
  {
    name: "NCC T-Shirts",
    image: tshirtImg,
    points: [
      "Moisture-wicking fabric",
      "Comfortable for drills & activities",
      "Multiple colours & sizes",
    ],
  },
  {
    name: "NCC Shoes (DMS)",
    image: shoesImg,
    points: [
      "As per NCC standards",
      "Sturdy & long-lasting",
      "Comfortable for daily wear",
    ],
  },
];

export default function ProductRange() {
  const [page, setPage] = useState(0);
  const totalPages = 2;

  return (
    <div className="relative">
      <div className="flex items-end justify-between gap-4 flex-wrap">
        <div>
          <h2 className="text-3xl font-extrabold text-navy-600 uppercase">
            The complete <span className="text-blue-600">NCC</span> range
          </h2>
          <p className="mt-2 max-w-xl text-navy-600">
            From uniforms to badges, get everything your NCC unit needs — all
            from one place.
          </p>
        </div>

        {/* top pagination */}
        <div className="flex items-center gap-3 text-sm font-medium text-navy-700">
          <button
            aria-label="Previous"
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            className="grid h-9 w-9 place-items-center rounded-full bg-navy-900 text-white"
          >
            ‹
          </button>
          <span>
            {page + 1} / {totalPages}
          </span>
          <button
            aria-label="Next"
            onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
            className="grid h-9 w-9 place-items-center rounded-full border border-navy-200 text-navy-700 hover:bg-white"
          >
            ›
          </button>
        </div>
      </div>


      <button
        aria-label="Previous"
        onClick={() => setPage((p) => Math.max(0, p - 1))}
        className="hidden md:grid absolute left-[-18px] top-1/2 -translate-y-1/2 h-9 w-9 place-items-center rounded-full border border-navy-200 bg-white text-navy-600 shadow-sm hover:bg-navy-50 z-10"
      >
        ‹
      </button>
      <button
        aria-label="Next"
        onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
        className="hidden md:grid absolute right-[-18px] top-1/2 -translate-y-1/2 h-9 w-9 place-items-center rounded-full border border-navy-200 bg-white text-navy-600 shadow-sm hover:bg-navy-50 z-10"
      >
        ›
      </button>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {products.map((p) => (
          <div key={p.name} className="rounded-xl bg-white/60 overflow-hidden">
            <div className="relative aspect-[4/3]">
              <Image
                src={p.image}
                alt={p.name}
                fill
                className="object-contain p-4"
              />
            </div>
            <div className="px-2 pb-2">
              <h3 className="font-bold text-navy-600 uppercase tracking-wide">
                {p.name}
              </h3>
              <ul className="mt-2 space-y-1.5 text-sm text-navy-700">
                {p.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2">
                    <span className="mt-0.5 text-blue-600">✓</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
