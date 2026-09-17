

"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import whatsapp from "../public/images/whatsapp.png";
import arrow from "../public/images/arrow.png";
import logo from "../public/images/NCC Website/logo.png";
import { useQuoteForm } from "./QuoteFormCOntext";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Uniforms", href: "#range" },
  { label: "Institutions", href: "#customisation" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#footer" },
];

const WHATSAPP_HREF =
  "https://api.whatsapp.com/send/?phone=918884755555&text=Hi%2C+Thank+you+for+your+interest+in+GradeUp+Uniforms.+Please+let+us+know+how+we+can+help+you%3F+Our+reponses+may+be+delayed%2C+but+we+will+respond+to+you+at+the+earliest.+Thank+you+for+your+patience&type=phone_number&app_absent=0";

export default function Header() {
  const { open } = useQuoteForm();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-navy-100 bg-white/95 backdrop-blur">
        <div className="container-x flex h-16 items-center justify-between gap-6">
          <div className="flex items-center gap-3 md:gap-10">
            {/* Hamburger button - mobile only, on the left */}
            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setMenuOpen(true)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md text-navy-900 md:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>

            <Image src={logo} alt="logo" height={150} width={150} />

            <nav className="hidden items-center gap-8 text-sm font-semibold text-navy-700 font-sans md:flex">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:text-navy-900"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={open}
              type="button"
              className="hidden items-center gap-2 rounded-md bg-gold-500 px-4 py-2 text-lg text-navy-900 hover:bg-gold-400 font-heading sm:inline-flex"
            >
              Get NCC Bulk Pricing
              <Image src={arrow} height={20} width={20} alt="arrow" />
            </button>

            <a
              href={WHATSAPP_HREF}
              type="button"
              className="hidden items-center gap-2 px-4 py-2 text-base font-bold text-navy-900 sm:inline-flex"
            >
              <Image src={whatsapp} height={24} width={24} alt="whatsapp" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </header>

      {/* Backdrop overlay */}
      <div
        onClick={closeMenu}
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 md:hidden ${
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Slide-in mobile menu (from left) */}
      <div
        className={`fixed left-0 top-0 z-50 flex h-full w-80 max-w-[85%] transform flex-col bg-white shadow-xl transition-transform duration-300 ease-in-out md:hidden ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end px-4 py-4">
          <button
            type="button"
            aria-label="Close menu"
            onClick={closeMenu}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md text-navy-500 hover:text-navy-900"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <nav className="flex flex-col text-lg font-sans">
          {navLinks.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              onClick={closeMenu}
              className={`border-b border-navy-100 px-6 py-4 ${
                i === 0
                  ? "font-bold text-navy-900"
                  : "font-medium text-navy-500 hover:text-navy-900"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex-1" />

        <div className="flex flex-col gap-3 p-4">
          <button
            onClick={() => {
              closeMenu();
              open();
            }}
            type="button"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-gold-500 px-4 py-3 text-base text-navy-900 hover:bg-gold-400 font-heading"
          >
            Get NCC Bulk Pricing
            <Image src={arrow} height={18} width={18} alt="arrow" />
          </button>

          <a
            href={WHATSAPP_HREF}
            onClick={closeMenu}
            type="button"
            className="inline-flex items-center justify-center gap-2 px-4 py-3 text-base font-bold text-navy-900"
          >
            <Image src={whatsapp} height={22} width={22} alt="whatsapp" />
            WhatsApp Us
          </a>
        </div>
      </div>

      {/* Floating WhatsApp button - persistent, all screen sizes */}
      <a
        href={WHATSAPP_HREF}
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-transform hover:scale-105"
      >
        <Image src={whatsapp} alt="whatsapp" height={28} width={28} />
        <span className="absolute -right-0.5 -top-0.5 h-3.5 w-3.5 rounded-full border-2 border-white bg-red-500" />
      </a>
    </>
  );
}


// "use client";
// import Image from "next/image";
// import whatsapp from "../public/images/whatsapp.png";
// import arrow from "../public/images/arrow.png";
// import logo from "../public/images/logo.png";
// import { useQuoteForm } from "./QuoteFormCOntext";
// const navLinks = [
//   { label: "Uniforms", href: "#range" },
//   { label: "Institutions", href: "#customisation" },
//   { label: "About Us", href: "#about" },
//   { label: "Contact", href: "#footer" },
// ];

// export default function Header() {
//   const { open } = useQuoteForm();

//   return (
//     <header className="sticky top-0 z-40 border-b border-navy-100 bg-white/95 backdrop-blur">
//       <div className="container-x flex h-16 items-center justify-between gap-6">
//         <div className="flex items-center justify-center gap-10">
//           <Image src={logo} alt="logo" height={150} width={150} />

//           <nav className="hidden items-center gap-8 text-sm font-semibold text-navy-700 font-sans md:flex">
//             {navLinks.map((link) => (
//               <a
//                 key={link.label}
//                 href={link.href}
//                 className="hover:text-navy-900"
//               >
//                 {link.label}
//               </a>
//             ))}
//           </nav>
//         </div>

//         <div className="flex items-center gap-3">
//           <button
//             onClick={open}
//             type="button"
//             className="hidden items-center gap-2 rounded-md bg-gold-500 px-4 py-2 text-lg text-navy-900 hover:bg-gold-400 font-heading sm:inline-flex"
//           >
//             Get NCC Bulk Pricing
//             <Image src={arrow} height={20} width={20} alt="arrow" />
//           </button>

//           <a
//             href="https://api.whatsapp.com/send/?phone=918884755555&text=Hi%2C+Thank+you+for+your+interest+in+GradeUp+Uniforms.+Please+let+us+know+how+we+can+help+you%3F+Our+reponses+may+be+delayed%2C+but+we+will+respond+to+you+at+the+earliest.+Thank+you+for+your+patience&type=phone_number&app_absent=0"
//             type="button"
//             className="hidden items-center gap-2 px-4 py-2 text-base font-bold text-navy-900 sm:inline-flex"
//           >
//             <Image src={whatsapp} height={24} width={24} alt="whatsapp" />
//             WhatsApp Us
//           </a>
//         </div>
//       </div>
//     </header>
//   );
// }
