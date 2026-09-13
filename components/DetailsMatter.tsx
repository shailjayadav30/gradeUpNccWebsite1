import Image from "next/image";
import shirtDetailImg from "../public/images/dress.png";

export default function DetailsMatter() {
  return (
    <section className="container-x py-14">
      <div className="grid gap-8 lg:grid-cols-[240px_1fr] items-center">
        <div>
          <h2 className="text-3xl font-extrabold leading-tight text-navy-600">
            Details matter. Especially in NCC.
          </h2>
          <p className="mt-3 text-navy-700 max-w-sm">
            Built with precision. Worn with pride.
          </p>
          <a
            href="#range"
            className="mt-4 inline-flex items-center gap-1 font-semibold text-navy-600 hover:underline"
          >
            See detailed view →
          </a>
        </div>

        <div className="relative w-full aspect-[16/6]">
          <Image
            src={shirtDetailImg}
            alt="NCC uniform shirt detail with labelled parts"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}