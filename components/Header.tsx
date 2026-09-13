import Link from "next/link";
import Image from "next/image";
import whatsapp from "../public/images/whatsapp.png";
import arrow from "../public/images/arrow.png";
import logo from "../public/images/logo.png"
const navLinks = [
  { label: "Uniforms", href: "#range" },
  { label: "Institutions", href: "#customisation" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#footer" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-navy-100 bg-white/95 backdrop-blur">
      <div className="container-x flex h-16 items-center justify-between gap-6">
        <div className="flex items-center justify-center gap-10">
        <Image src={logo} alt="logo" height={150} width={150}/>

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
            type="button"
            className="hidden items-center gap-2 rounded-md bg-gold-500 px-4 py-2 text-lg text-navy-900 hover:bg-gold-400 font-heading sm:inline-flex"
          >
            Get NCC Bulk Pricing
            <Image src={arrow} height={20} width={20} alt="arrow" />
          </button>

          <button
            type="button"
            className="hidden items-center gap-2 px-4 py-2 text-base font-bold text-navy-900 sm:inline-flex"
          >
            <Image src={whatsapp} height={24} width={24} alt="whatsapp" />
            WhatsApp Us
          </button>
        </div>
      </div>
    </header>
  );
}
