import Link from "next/link";
import { Phone, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <img src="/logo/mbm-wordmark.png" alt="MindBody MED" className="h-20 w-auto mb-4" />
          <p className="text-sm text-gray-400 leading-relaxed">
            Seattle&apos;s most trusted chiropractic and wellness clinic, proudly serving the Ravenna and University District neighborhoods since 2018.
          </p>
        </div>

        {/* Links */}
        <div>
          <div className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Quick Links</div>
          <ul className="space-y-2 text-sm">
            {[
              ["Chiropractic Care", "/services/chiropractic"],
              ["Acupuncture", "/services/acupuncture"],
              ["Red Light Therapy", "/services/red-light-therapy"],
              ["Combo Services", "/services/chiropractic-red-light-therapy"],
              ["Massage Therapy", "/services/massage-therapy"],
              ["Auto Accident Care", "/personal-injury"],
              ["Our Team", "/team"],
              ["Insurance Accepted", "/insurance"],
              ["Patient Reviews", "/reviews"],
              ["FAQ", "/faq"],
              ["Contact", "/contact"],
              ["Ravenna Chiropractor", "/ravenna-chiropractor"],
              ["Book Appointment", "/appointments-v2"],
            ].map(([label, href]) => (
              <li key={label}>
                <Link href={href} className="hover:text-white transition-colors">{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <div className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Contact</div>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2.5">
              <MapPin size={15} className="mt-0.5 text-blue-400 shrink-0" />
              <span>2705 NE 65th Street<br />Seattle, WA 98115</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone size={15} className="text-blue-400 shrink-0" />
              <a href="tel:2065239000" className="hover:text-white transition-colors">(206) 523-9000</a>
            </li>
            <li className="flex items-start gap-2.5">
              <Clock size={15} className="mt-0.5 text-blue-400 shrink-0" />
              <span>Mon–Fri: 8:00am–6:00pm</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 text-center text-xs text-gray-600 py-5 px-4">
        © {new Date().getFullYear()} MindBody Med Seattle. All Rights Reserved.
      </div>
    </footer>
  );
}
