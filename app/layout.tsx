import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Small Wonders — Your Child's Dental Home | Pediatric Dentist in Indiranagar, Bengaluru",
  description:
    "Bengaluru's most trusted paediatric dental clinic. Dr. Shivani Daga (BDS, MDS) offers gentle, child-friendly dental care. 10+ years experience. 5.0★ Google rating. Located in HAL 2nd Stage, Indiranagar.",
  keywords: [
    "pediatric dentist Bengaluru",
    "child dentist Indiranagar",
    "kids dentist HAL 2nd Stage",
    "paediatric dentistry Bangalore",
    "Dr Shivani Daga",
    "Small Wonders dental clinic",
    "children's dentist Indiranagar",
    "preventive dentistry kids",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
