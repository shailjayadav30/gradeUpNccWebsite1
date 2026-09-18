import {
  ClipboardList,
  Shirt,
  Users,
  BadgeIndianRupee,
  PackageCheck,
} from "lucide-react";

const steps = [
  {
    n: "01",
    title: "Share Your Requirement",
    desc: "Institution, cadet strength and what you need.",
    icon: ClipboardList,
  },
  {
    n: "02",
    title: "Order a Size Sample Set",
    desc: "Check the fit with your cadets before finalising sizes.",
    icon: Shirt,
  },
  {
    n: "03",
    title: "Finalise Your Size Breakup",
    desc: "Share the required sizes and quantities.",
    icon: Users,
  },
  {
    n: "04",
    title: "Get Your Bulk Price",
    desc: "We'll provide pricing based on your requirement.",
    icon: BadgeIndianRupee,
  },
  {
    n: "05",
    title: "Complete Order. Sorted.",
    desc: "We prepare and deliver as agreed.",
    icon: PackageCheck,
  },
];

export default function ProcessSteps() {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="container-x">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-600">
          From cadet count to complete kit.{" "}
          <span className="bg-gold-400 px-2 py-0.5 rounded">Sorted.</span>
        </h2>
        <p className="mt-2 max-w-xl text-sm sm:text-base text-navy-700 font-medium">
          A simple process, so you can focus on what matters — your cadets.
        </p>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_280px] items-start">
          {/* Steps */}
          <div
            className="
              grid grid-cols-1 gap-8
              sm:grid-cols-2
              md:grid-cols-3
              lg:flex lg:gap-0 lg:items-start
            "
          >
            {steps.map((s, i) => {
              const Icon = s.icon;

              return (
                <div
                  key={s.n}
                  className="
                    relative flex items-start gap-3
                    sm:flex-col sm:items-center sm:text-center sm:gap-0
                    lg:flex-1 lg:min-w-0
                  "
                >
                  {/* Icon */}
                  <div className="flex shrink-0 justify-center">
                    <div className="grid h-14 w-14 sm:h-16 sm:w-16 place-items-center rounded-full bg-navy-50 text-navy-600">
                      <Icon size={24} strokeWidth={1.8} className="sm:hidden" />
                      <Icon size={28} strokeWidth={1.8} className="hidden sm:block" />
                    </div>
                  </div>

                  {/* Arrow between icons — only shown in the lg single-row layout */}
                  {i < steps.length - 1 && (
                    <span className="absolute left-full top-8 hidden -translate-x-1/2 -translate-y-1/2 lg:block text-red-500 text-lg">
                      →
                    </span>
                  )}

                  {/* Number + content */}
                  <div
                    className="
                      flex items-start gap-2 min-w-0
                      sm:mx-auto sm:mt-4 sm:max-w-[150px]
                      lg:max-w-[150px]
                    "
                  >
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-navy-900 text-[11px] font-bold text-white">
                      {s.n}
                    </span>

                    <div className="min-w-0">
                      <h3 className="font-bold text-navy-600 text-sm leading-snug">
                        {s.title}
                      </h3>

                      <p className="mt-1 text-xs text-navy-600 leading-snug">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Gold sticky-note card */}
          <div
            className="relative mx-auto w-full max-w-sm rotate-0 sm:rotate-[-2deg] bg-gold-400 p-5 sm:p-6 shadow-md h-fit lg:mx-0"
            style={{
              clipPath:
                "polygon(2% 4%, 15% 0%, 30% 3%, 45% 0%, 60% 2%, 75% 0%, 90% 3%, 100% 0%, 98% 15%, 100% 30%, 97% 45%, 100% 60%, 98% 75%, 100% 90%, 97% 100%, 85% 97%, 70% 100%, 55% 98%, 40% 100%, 25% 97%, 10% 100%, 0% 96%, 3% 80%, 0% 65%, 3% 50%, 0% 35%, 3% 20%)",
            }}
          >
            <div className="flex items-start justify-between gap-2">
              <h3 className="text-base sm:text-lg font-extrabold uppercase text-navy-600 leading-tight">
                Size problem?
                <br />
                Sorted.
              </h3>
              <Shirt
                size={28}
                strokeWidth={1.8}
                className="text-navy-900 shrink-0 sm:hidden"
              />
              <Shirt
                size={32}
                strokeWidth={1.8}
                className="text-navy-900 shrink-0 hidden sm:block"
              />
            </div>

            <ul className="mt-4 space-y-2 text-sm font-semibold text-navy-600">
              {[
                "Order a sample set.",
                "Check the fit.",
                "Then place your bulk order.",
                "The sample set can be exchanged later!*",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2">
                  <span className="mt-0.5 text-green-600 shrink-0">✓</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>

            <p className="mt-3 text-xs text-navy-800/70">
              *Subject to our exchange policy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}