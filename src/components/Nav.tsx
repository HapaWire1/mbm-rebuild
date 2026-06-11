"use client";
import { useState } from "react";
import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-[#1A5FA8] text-white text-sm py-2 px-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <span className="hidden sm:block">2705 NE 65th Street, Seattle, WA 98115 &nbsp;·&nbsp; Mon–Fri: 8:00am–6:00pm</span>
          <a href="tel:2065239000" className="flex items-center gap-1.5 font-semibold hover:text-blue-200 transition-colors ml-auto sm:ml-0">
            <Phone size={14} />
            (206) 523-9000
          </a>
        </div>
      </div>

      {/* Main nav */}
      <nav className="bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img src="/logo/mbm-wordmark.png" alt="MindBody MED" className="h-14 w-auto" />
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
            <Link href="/#services" className="hover:text-[#1A5FA8] transition-colors">Services</Link>
            <Link href="/personal-injury" className="hover:text-[#1A5FA8] transition-colors">Auto Accident</Link>
            <Link href="/team" className="hover:text-[#1A5FA8] transition-colors">Our Team</Link>
            <Link href="/insurance" className="hover:text-[#1A5FA8] transition-colors">Insurance</Link>
            <Link href="/reviews" className="hover:text-[#1A5FA8] transition-colors">Reviews</Link>
            <Link href="/faq" className="hover:text-[#1A5FA8] transition-colors">FAQ</Link>
            <Link href="/contact" className="hover:text-[#1A5FA8] transition-colors">Contact</Link>
            <Link href="/appointments" className="hover:text-[#1A5FA8] transition-colors">Appointments</Link>
            <a
              href="/appointments"
              className="ml-2 bg-[#D97706] hover:bg-[#B45309] text-white px-4 py-2 rounded-full text-sm font-semibold transition-colors"
            >
              Book Your First Visit
            </a>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden p-2 text-gray-600" onClick={() => setOpen(!open)}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden border-t border-gray-100 bg-white px-4 pb-4 flex flex-col gap-3 text-sm font-medium text-gray-700">
            <Link href="/#services" onClick={() => setOpen(false)} className="pt-3 hover:text-[#1A5FA8]">Services</Link>
            <Link href="/personal-injury" onClick={() => setOpen(false)} className="hover:text-[#1A5FA8]">Auto Accident</Link>
            <Link href="/team" onClick={() => setOpen(false)} className="hover:text-[#1A5FA8]">Our Team</Link>
            <Link href="/insurance" onClick={() => setOpen(false)} className="hover:text-[#1A5FA8]">Insurance</Link>
            <Link href="/reviews" onClick={() => setOpen(false)} className="hover:text-[#1A5FA8]">Reviews</Link>
            <Link href="/faq" onClick={() => setOpen(false)} className="hover:text-[#1A5FA8]">FAQ</Link>
            <Link href="/contact" onClick={() => setOpen(false)} className="hover:text-[#1A5FA8]">Contact</Link>
            <Link href="/appointments" onClick={() => setOpen(false)} className="hover:text-[#1A5FA8]">Appointments</Link>
            <a
              href="/appointments"
              className="mt-1 bg-[#D97706] text-white px-4 py-2.5 rounded-full font-semibold text-center"
            >
              Book Your First Visit
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
