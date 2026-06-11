import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://mindbodymedseattle.com"),
  title: {
    default: "Seattle Chiropractor, Massage & Acupuncture | MindBody Med Ravenna",
    template: "%s | MindBody Med Seattle",
  },
  description:
    "MindBody Med is Seattle's most trusted chiropractic and wellness clinic, featured in the UW Medicine Clinical Referral Directory. $149 New Patient Special. Serving Ravenna & the U District.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mindbodymedseattle.com",
    siteName: "MindBody Med Seattle",
    images: [{ url: "/logo/mbm-icon.png", width: 512, height: 512, alt: "MindBody Med Seattle" }],
  },
  twitter: { card: "summary" },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["MedicalBusiness", "LocalBusiness"],
  name: "Mind Body Medicine Seattle",
  alternateName: "MindBody Med",
  description:
    "Seattle's most trusted chiropractic and wellness clinic, featured in the UW Medicine Clinical Referral Directory.",
  url: "https://mindbodymedseattle.com",
  telephone: "+12065239000",
  address: {
    "@type": "PostalAddress",
    streetAddress: "2705 NE 65th St",
    addressLocality: "Seattle",
    addressRegion: "WA",
    postalCode: "98115",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 47.6757,
    longitude: -122.2941,
  },
  image: "https://mindbodymedseattle.com/logo/mbm-icon.png",
  priceRange: "$$",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    ratingCount: "200",
    bestRating: "5",
    worstRating: "1",
  },
  hasMap: "https://maps.google.com/?q=2705+NE+65th+St,+Seattle,+WA+98115",
  sameAs: ["https://www.yelp.com/biz/mindbody-med-seattle"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />

        {/* ZocDoc booking widget — patch our links with required attributes, then load widget */}
        <Script id="zocdoc-init" strategy="afterInteractive">{`
          document.querySelectorAll('a[href*="zocdoc.com/practice/mindbody-medicine"]').forEach(function(el) {
            el.classList.add('zd-plugin');
            el.setAttribute('data-type', 'book-button');
            el.setAttribute('data-practice-id', '150405');
          });
          (function(d){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://offsiteschedule.zocdoc.com/plugin/embed';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x)})(document);
        `}</Script>

        {/* Hide ZocDoc's injected floating UI — we have our own CTAs site-wide */}
        <style>{`.zd-sticky-button, .zd-alert-box { display: none !important; }`}</style>

        {/* Mobile sticky bottom bar */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg px-4 py-3 flex items-center gap-3">
          <a
            href="/appointments-v2"
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
