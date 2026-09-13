import type { Metadata } from "next";
import { Anton, Montserrat, Caveat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});
export const metadata: Metadata = {
  title: "GradeUp.Shop | NCC Uniforms — Cadets Ready. Missions Ahead.",
  description:
    "Complete NCC uniforms, badges and accessories for schools, colleges and institutions — from one supplier. Get bulk pricing for uniforms, tracksuits, t-shirts and shoes.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${montserrat.variable} ${caveat.variable}  h-full antialiased`}
    >
      <body className="font-sans bg-white">
        {/* <Header /> */}
        {children}
      </body>
    </html>
  );
}
