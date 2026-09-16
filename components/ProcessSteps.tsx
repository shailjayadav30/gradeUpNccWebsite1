const steps = [
  {
    n: "01",
    title: "Share Your Requirement",
    desc: "Institution, cadet strength and what you need.",
    icon: (
      <>
        <rect x="7" y="4" width="10" height="16" rx="1" />
        <path d="M9 4V3h6v1M9 9h6M9 12h6M9 15h4" />
      </>
    ),
  },
  {
    n: "02",
    title: "Order a Size Sample Set",
    desc: "Check the fit with your cadets before finalising sizes.",
    icon: (
      <>
        <path d="M9 4L7 6l1.5 2H9v11h6V8h.5L17 6l-2-2-3 2-3-2z" />
        <path d="M4 15h3M4 18h4" />
      </>
    ),
  },
  {
    n: "03",
    title: "Finalise Your Size Breakup",
    desc: "Share the required sizes and quantities.",
    icon: (
      <>
        <circle cx="9" cy="8" r="2.3" />
        <circle cx="15" cy="8" r="2.3" />
        <path d="M4.5 18c0-2.8 2-4.5 4.5-4.5s4.5 1.7 4.5 4.5M10.5 18c0-2.8 2-4.5 4.5-4.5s4.5 1.7 4.5 4.5" />
      </>
    ),
  },
  {
    n: "04",
    title: "Get Your Bulk Price",
    desc: "We'll provide pricing based on your requirement.",
    icon: (
      <>
        <path d="M6 13c0-3 2-5 4-5s3 1.5 2 3-3 1-3-1" />
        <path d="M9 8l6 8M18 12l1-1a2 2 0 10-3-3l-1 1" />
      </>
    ),
  },
  {
    n: "05",
    title: "Complete Order. Sorted.",
    desc: "We prepare and deliver as agreed.",
    icon: (
      <>
        <path d="M7 3h7l3 3v15H7V3z" />
        <path d="M14 3v3h3M9 12h6M9 15h4" />
        <path d="M15.5 16.5l1 1 2-2" />
      </>
    ),
  },
];

export default function ProcessSteps() {
  return (
    <section className="bg-white py-16">
      <div className="container-x">
        <h2 className="text-3xl font-extrabold text-navy-600">
          From cadet count to complete kit.{" "}
          <span className="bg-gold-400 px-2 py-0.5 rounded">Sorted.</span>
        </h2>
        <p className="mt-2 max-w-xl text-navy-700 font-medium">
          A simple process, so you can focus on what matters — your cadets.
        </p>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_280px] items-start">
          <div className="flex items-start">
            {steps.map((s, i) => (
              <div key={s.n} className="flex items-start">
                <div className="w-[130px] sm:w-[150px]">
                  <div className="grid h-16 w-16 place-items-center rounded-full bg-navy-50 text-navy-600">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      className="h-7 w-7"
                    >
                      {s.icon}
                    </svg>
                  </div>

                  <div className="mt-4 flex items-start gap-2">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-navy-900 text-[11px] font-bold text-white">
                      {s.n}
                    </span>
                    <div>
                      <h3 className="font-bold text-navy-600 text-sm leading-snug">
                        {s.title}
                      </h3>
                      <p className="mt-1 text-xs text-navy-600 leading-snug">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                </div>

                {i < steps.length - 1 && (
                  <span className="hidden sm:block mt-7 text-red-500 text-lg shrink-0">
                    →
                  </span>
                )}
              </div>
            ))}
          </div>

          <div
            className="relative rotate-[-2deg] bg-gold-400 p-6 shadow-md h-fit"
            style={{
              clipPath:
                "polygon(2% 4%, 15% 0%, 30% 3%, 45% 0%, 60% 2%, 75% 0%, 90% 3%, 100% 0%, 98% 15%, 100% 30%, 97% 45%, 100% 60%, 98% 75%, 100% 90%, 97% 100%, 85% 97%, 70% 100%, 55% 98%, 40% 100%, 25% 97%, 10% 100%, 0% 96%, 3% 80%, 0% 65%, 3% 50%, 0% 35%, 3% 20%)",
            }}
          >
            <div className="flex items-start justify-between gap-2">
              <h3 className="text-lg font-extrabold uppercase text-navy-600 leading-tight">
                Size problem?
                <br />
                Sorted.
              </h3>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                className="h-8 w-8 text-navy-900 shrink-0"
              >
                <path d="M8 4l4 2 4-2 3 3-2 2v11H7V9L5 7l3-3z" />
              </svg>
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
