import Link from "next/link";
import { CalendarCheck, Phone, CheckCircle, MapPin, Star, ChevronRight } from "lucide-react";

export const metadata = {
  title: { absolute: "Chiropractor in Ravenna Seattle | MindBody Med | 98115" },
  description: "Top-rated chiropractor serving Seattle's Ravenna neighborhood and 98115 zip code. Chiropractic, acupuncture, massage & red light therapy. Near University District & Wedgwood.",
};

function BookBtn({ label = "Book an Appointment", className = "" }: { label?: string; className?: string }) {
  return (
    <a href="/appointments-v2"
      className={`inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-white font-bold px-7 py-3.5 rounded-full transition-colors shadow-lg ${className}`}>
      <CalendarCheck size={18} />
      {label}
    </a>
  );
}

function CallBtn({ className = "" }: { className?: string }) {
  return (
    <a href="tel:+12065239000"
      className={`inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-7 py-3.5 rounded-full border border-white/30 transition-colors ${className}`}>
      <Phone size={18} />
      (206) 523-9000
    </a>
  );
}

const services = [
  {
    name: "Chiropractic Care",
    desc: "Board-certified, UW Medicine-referred chiropractic from Dr. Chevigny (DC, CCSP, CSCS) and Dr. Ford. Spinal adjustments, sports rehab, corrective care.",
    href: "/services/chiropractic",
    tag: "New patient special: $149",
  },
  {
    name: "Acupuncture",
    desc: "Licensed acupuncturists treating pain, stress, migraines, digestive issues, and more. Accepted by most major insurance plans.",
    href: "/services/acupuncture",
    tag: "Insurance accepted",
  },
  {
    name: "Massage Therapy",
    desc: "Deep tissue, therapeutic, and sports massage. High demand — currently booking 2–3 months out. Join the waitlist or cancellation list.",
    href: "/services/massage-therapy",
    tag: "Waitlist available",
  },
  {
    name: "Red Light Therapy",
    desc: "Seattle's only Prism Light Pod — FDA-registered full-body red light therapy with 17,000 LEDs. 15-minute sessions. No prescription needed.",
    href: "/services/red-light-therapy",
    tag: "Only clinic in Seattle",
  },
  {
    name: "Sports Rehabilitation",
    desc: "Functional rehab for athletes at every level. Injury assessment, corrective exercise, and return-to-sport programming.",
    href: "/services/sports-rehab",
    tag: "CCSP certified",
  },
  {
    name: "Personal Injury / Auto Accidents",
    desc: "Treatment and documentation for car accident injuries including whiplash, back pain, and soft tissue trauma. Lien-based billing available.",
    href: "/personal-injury",
    tag: "Lien billing available",
  },
];

const neighborhoods = [
  "Ravenna", "University District (U District)", "Wedgwood",
  "Bryant", "View Ridge", "Maple Leaf",
  "Roosevelt", "Hawthorne Hills", "Sand Point",
];

const reviews = [
  {
    text: "I've been going to MindBody Med for two years. Dr. Chevigny is the best chiropractor I've seen in Seattle — he actually listens and builds a real treatment plan.",
    author: "Verified Patient",
    area: "Ravenna",
  },
  {
    text: "The combination of chiropractic and red light therapy completely changed my recovery after my car accident. I was back to running within 6 weeks.",
    author: "Verified Patient",
    area: "University District",
  },
  {
    text: "Convenient location right on NE 65th, easy parking, and the staff actually remembers your name. Feels like a neighborhood clinic should.",
    author: "Verified Patient",
    area: "Wedgwood",
  },
];

export default function RavennaChiropractorPage() {
  return (
    <main>

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="bg-[#0d3d6e] text-white py-20 px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-amber-400 font-semibold uppercase tracking-widest text-sm mb-3">Ravenna · Seattle · 98115</p>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
              Ravenna's Neighborhood Chiropractic & Wellness Clinic
            </h1>
            <p className="text-blue-100 text-lg mb-8">
              MindBody Med has served Seattle's Ravenna neighborhood since 2018. Chiropractic, acupuncture, massage, sports rehab, and the only full-body red light therapy pod in the area — all under one roof on NE 65th Street.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <BookBtn />
              <CallBtn />
            </div>
          </div>
          <div className="hidden md:block bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 space-y-4">
            <div className="flex items-start gap-3">
              <MapPin size={18} className="text-amber-400 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-sm">2705 NE 65th Street</p>
                <p className="text-blue-200 text-sm">Seattle, WA 98115</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone size={18} className="text-amber-400 shrink-0 mt-0.5" />
              <a href="tel:2065239000" className="text-sm hover:text-amber-400 transition-colors">(206) 523-9000</a>
            </div>
            <div className="border-t border-white/20 pt-4">
              <p className="text-sm font-semibold mb-2">Hours</p>
              <p className="text-blue-200 text-sm">Monday – Friday: 8:00am – 6:00pm</p>
            </div>
            <div className="border-t border-white/20 pt-4 flex items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="text-amber-400 fill-amber-400" />
              ))}
              <span className="text-sm font-bold">4.9</span>
              <span className="text-blue-200 text-sm">· 200+ reviews</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ─────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-[#1A5FA8] font-semibold uppercase tracking-widest text-sm mb-2">Services</p>
            <h2 className="text-3xl font-extrabold text-gray-900">Everything Under One Roof</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">
              Ravenna's most comprehensive wellness clinic — six specialties, one coordinated care team.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map(s => (
              <Link key={s.name} href={s.href}
                className="group flex flex-col bg-gray-50 hover:bg-[#E8F4FB] rounded-xl p-6 border border-gray-100 hover:border-[#1A5FA8]/20 transition-all">
                <div className="flex items-start justify-between gap-2 mb-3">
                  <h3 className="font-bold text-gray-900 text-sm leading-snug">{s.name}</h3>
                  <span className="text-xs text-[#1A5FA8] bg-[#E8F4FB] group-hover:bg-white px-2 py-0.5 rounded-full font-medium shrink-0 transition-colors">{s.tag}</span>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed flex-1">{s.desc}</p>
                <div className="mt-4 flex items-center gap-1 text-[#1A5FA8] text-xs font-semibold">
                  Learn more <ChevronRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Location ─────────────────────────────────────────── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-[#1A5FA8] font-semibold uppercase tracking-widest text-sm mb-2">Location</p>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">On NE 65th in the Heart of Ravenna</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              We're located at 2705 NE 65th Street in Seattle's Ravenna neighborhood — easy to reach from the University District, Wedgwood, Bryant, Roosevelt, and Sand Point. Street parking is available on NE 65th and surrounding blocks.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-[#1A5FA8] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 text-sm">2705 NE 65th Street, Seattle, WA 98115</p>
                  <p className="text-gray-500 text-sm">Street parking on NE 65th and side streets</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={16} className="text-[#1A5FA8] shrink-0 mt-0.5" />
                <a href="tel:2065239000" className="text-sm text-gray-700 hover:text-[#1A5FA8] transition-colors">(206) 523-9000</a>
              </div>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-100">
              <p className="font-semibold text-gray-900 text-sm mb-2">Neighborhoods We Serve</p>
              <div className="flex flex-wrap gap-2">
                {neighborhoods.map(n => (
                  <span key={n} className="bg-[#E8F4FB] text-[#1A5FA8] text-xs font-medium px-3 py-1 rounded-full">{n}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-md border border-gray-200 aspect-video">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2686.9!2d-122.3097!3d47.6737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s2705+NE+65th+St%2C+Seattle%2C+WA+98115!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="MindBody Med Seattle location map"
            />
          </div>
        </div>
      </section>

      {/* ── Reviews ──────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-[#1A5FA8] font-semibold uppercase tracking-widest text-sm mb-2">Reviews</p>
            <h2 className="text-3xl font-extrabold text-gray-900">What Ravenna Patients Say</h2>
            <div className="flex items-center justify-center gap-2 mt-3">
              {[...Array(5)].map((_, i) => <Star key={i} size={18} className="text-amber-400 fill-amber-400" />)}
              <span className="font-bold text-gray-900">4.9</span>
              <span className="text-gray-400 text-sm">· 200+ verified reviews</span>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {reviews.map((r, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, j) => <Star key={j} size={13} className="text-amber-400 fill-amber-400" />)}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4 italic">"{r.text}"</p>
                <p className="text-gray-400 text-xs font-semibold">{r.author} · {r.area}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/reviews" className="inline-flex items-center gap-1 text-[#1A5FA8] font-semibold text-sm hover:gap-2 transition-all">
              Read all reviews <ChevronRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why Neighbors Choose Us ───────────────────────────── */}
      <section className="py-16 bg-[#0d3d6e] text-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-amber-400 font-semibold uppercase tracking-widest text-sm mb-2">Why MindBody Med</p>
            <h2 className="text-3xl font-extrabold">Why Ravenna Chooses Us</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "UW Medicine Clinical Referral Partner — listed in the UW referral directory",
              "Board-certified sports chiropractor on staff (CCSP, CSCS)",
              "Seattle's only Prism Light Pod — full-body red light therapy in Ravenna",
              "Multidisciplinary team: see chiro, massage, and acupuncture in one visit",
              "Most major insurance plans accepted, including Premera, Regence, and Aetna",
              "Same-day and next-day appointments often available for chiropractic",
            ].map(w => (
              <div key={w} className="flex items-start gap-3 bg-white/10 rounded-xl p-4">
                <CheckCircle size={16} className="text-amber-400 shrink-0 mt-0.5" />
                <span className="text-blue-100 text-sm">{w}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────── */}
      <section className="py-16 bg-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-3">Your Ravenna Neighborhood Clinic</h2>
          <p className="text-gray-500 mb-8">
            2705 NE 65th Street · Seattle, WA 98115 · (206) 523-9000<br />
            Monday – Friday, 8:00am – 6:00pm
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <BookBtn />
            <a href="tel:+12065239000"
              className="inline-flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-700 text-white font-semibold px-7 py-3.5 rounded-full transition-colors">
              <Phone size={18} />
              (206) 523-9000
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
