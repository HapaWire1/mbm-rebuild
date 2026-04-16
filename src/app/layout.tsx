import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Seattle Chiropractor, Massage & Acupuncture | MindBody Med Ravenna",
  description: "MindBody Med is Seattle's most trusted chiropractic and wellness clinic, featured in the UW Medicine Clinical Referral Directory. $149 New Patient Special. Serving Ravenna & the U District.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />

        {/* Mobile sticky bottom bar */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg px-4 py-3 flex items-center gap-3">
          <a
            href="https://www.zocdoc.com/practice/mindbody-medicine-150405?isNewPatient=true"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-[#D97706] hover:bg-[#B45309] text-white text-sm font-bold py-3 rounded-full text-center transition-colors"
          >
            Book Your First Visit
          </a>
          <a
            href="tel:2065239000"
            className="flex-1 border-2 border-[#1A5FA8] text-[#1A5FA8] text-sm font-bold py-3 rounded-full text-center transition-colors hover:bg-[#1A5FA8] hover:text-white"
          >
            (206) 523-9000
          </a>
        </div>
      </body>
    </html>
  );
}
