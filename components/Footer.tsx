import Image from "next/image";
import location from "../public/images/location.png";
import logo from "../public/images/logo.png";

export default function Footer() {
  return (
    <footer id="footer" className="border-t border-navy-100 bg-[#fffdfb] py-8">
      <div className="container-x flex flex-col md:flex-row items-center justify-between">
        {/* logo */}
        <div className="shrink-0">
          <Image src={logo} alt="GradeUp.Shop" height={30} width={150} className="w-auto" />
        </div>

        {/* address */}
        <div className="flex items-center gap-2 max-w-[220px]">
          <Image src={location} alt="location" height={20} width={20} className="mt-0.5 shrink-0" />
          <p className="text-sm text-navy-600 font-semibold leading-snug">
            25/4, Jyothi Plaza, 5th Cross, Malleswaram Circle, Below KSIC
            Mysore Silks Showroom, Bangalore 03
          </p>
        </div>

        {/* phone */}
        <a href="tel:+918847555555" className="flex items-center gap-2 text-sm font-semibold text-navy-600 hover:underline shrink-0">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5 shrink-0">
            <path d="M4 5c0-.6.4-1 1-1h3.2c.5 0 .9.3 1 .8l1 3.6c.1.4 0 .8-.3 1.1L7.8 10.6a13 13 0 006.6 6.6l1.1-2.1c.3-.3.7-.4 1.1-.3l3.6 1c.5.1.8.5.8 1V20c0 .6-.4 1-1 1h-1C10.5 21 3 13.5 3 4V3" />
          </svg>
          888-47-55555
        </a>

        <a href="" className="flex items-center gap-2 text-sm font-semibold text-navy-600 hover:underline shrink-0">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5 shrink-0">
            <circle cx="12" cy="12" r="9" />
            <path d="M3 12h18M12 3c2.5 2.5 4 5.8 4 9s-1.5 6.5-4 9c-2.5-2.5-4-5.8-4-9s1.5-6.5 4-9z" />
          </svg>
          www.gradeup.shop
        </a>


        <p className="font-hand text-2xl leading-tight text-navy-800 max-w-[180px] text-right shrink-0">
          Uniforms shouldn&apos;t be boring. Let&apos;s upgrade.
        </p>
      </div>
    </footer>
  );
}