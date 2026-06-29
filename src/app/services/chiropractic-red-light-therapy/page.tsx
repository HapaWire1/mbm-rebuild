import Link from "next/link";
import { CalendarCheck, Phone, CheckCircle, Zap, ArrowRight } from "lucide-react";

export const metadata = {
  title: { absolute: "Chiropractic + Red Light Therapy Seattle | MindBody Med" },
  description: "Combine chiropractic adjustments with Prism Light Pod red light therapy at MindBody Med Seattle. Faster recovery, less inflammation, better outcomes — in one visit.",
};

function BookBtn({ label = "Book a Combined Visit", className = "" }: { label?: string; className?: string }) {
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

const synergies = [
  {
    title: "Adjustment primes the joint — RLT accelerates the heal",
    desc: "A chiropractic adjustment restores proper joint motion and reduces nerve interference. Red light therapy then floods the surrounding tissue with photonic energy, speeding up the cellular repair that the adjustment initiated.",
  },
  {
    title: "RLT reduces inflammation before the adjustment",
    desc: "Using the Prism Light Pod before your adjustment can reduce soft-tissue inflammation, making the adjustment gentler, more effective, and longer-lasting — particularly for acute injuries or chronic pain cases.",
  },
  {
    title: "Together, they address root cause and recovery simultaneously",
    desc: "Most pain has two components: structural misalignment and cellular inflammation. Chiropractic fixes the structural issue. RLT resolves the inflammation. Treating both in a single visit is more efficient and produces better outcomes.",
  },
];

const whoFor = [
  "Post-surgical or post-injury recovery",
  "Chronic back, neck, or joint pain",
  "Athletes returning from soft tissue injuries",
  "Disc herniation or nerve compression",
  "Auto accident or whiplash recovery",
  "Patients who plateau on chiropractic alone",
];

const howItWorks = [
  { step: "1", title: "Book a combined visit", desc: "Let us know at booking or when you arrive that you'd like to add a Prism Light Pod session." },
  { step: "2", title: "Red light therapy first (optional)", desc: "15 minutes in the Prism Light Pod to reduce inflammation and prep the tissue before your adjustment." },
  { step: "3", title: "Chiropractic adjustment", desc: "Your standard chiropractic evaluation and treatment with Dr. Chevigny or Dr. Ford." },
  { step: "4", title: "Red light therapy after (optional)", desc: "A second RLT session post-adjustment accelerates tissue repair and extends the anti-inflammatory window." },
];

export default function ChiropracticRLTPage() {
  return (
    <main>

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="bg-[#0d3d6e] text-white py-20 px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-amber-400 font-semibold uppercase tracking-widest text-sm mb-3">Combined Treatment</p>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
              Chiropractic + Red Light Therapy: Seattle's Most Effective Recovery Stack
            </h1>
            <p className="text-blue-100 text-lg mb-8">
              Two of the most evidence-backed treatments in musculoskeletal medicine — in one visit. MindBody Med is the only clinic in Seattle's Ravenna neighborhood offering both under one roof.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <BookBtn />
              <CallBtn />
            </div>
          </div>
          <div className="hidden md:flex flex-col gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-full bg-amber-400 flex items-center justify-center shrink-0">
                  <span className="font-black text-white text-sm">1</span>
                </div>
                <p className="font-bold">Chiropractic Adjustment</p>
              </div>
              <p className="text-blue-100 text-sm">Restores joint motion, reduces nerve interference, addresses structural root cause.</p>
            </div>
            <div className="flex items-center justify-center text-amber-400">
              <Zap size={22} />
              <span className="text-sm font-bold ml-1">Stacked in a single visit</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-full bg-amber-400 flex items-center justify-center shrink-0">
                  <span className="font-black text-white text-sm">2</span>
                </div>
                <p className="font-bold">Prism Light Pod (RLT)</p>
              </div>
              <p className="text-blue-100 text-sm">17,000 LEDs reduce inflammation and accelerate cellular repair in 15 minutes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Combine ──────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#1A5FA8] font-semibold uppercase tracking-widest text-sm mb-2">The Science</p>
            <h2 className="text-3xl font-extrabold text-gray-900">Why These Two Treatments Work Better Together</h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
              Chiropractic and red light therapy target different — and complementary — mechanisms of pain and dysfunction.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {synergies.map(s => (
              <div key={s.title} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-3 text-sm leading-snug">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How a Combined Visit Works ───────────────────────── */}
      <section className="py-16 bg-[#0d3d6e] text-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-amber-400 font-semibold uppercase tracking-widest text-sm mb-2">Your Visit</p>
            <h2 className="text-3xl font-extrabold">How a Combined Session Works</h2>
          </div>
          <div className="space-y-5">
            {howItWorks.map(h => (
              <div key={h.step} className="flex gap-4 items-start bg-white/10 rounded-xl p-5 border border-white/10">
                <div className="w-9 h-9 rounded-full bg-amber-400 flex items-center justify-center shrink-0 font-black text-white">
                  {h.step}
                </div>
                <div>
                  <p className="font-bold text-white mb-1">{h.title}</p>
                  <p className="text-blue-100 text-sm">{h.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who Benefits ─────────────────────────────────────── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#1A5FA8] font-semibold uppercase tracking-widest text-sm mb-2">Who It's For</p>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Best Candidates for Combined Care</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              The combined approach is particularly effective for patients dealing with inflammation-driven pain, slow recovery, or chronic conditions where chiropractic alone hasn't achieved the desired results.
            </p>
            <ul className="space-y-3">
              {whoFor.map(w => (
                <li key={w} className="flex items-start gap-3">
                  <CheckCircle size={16} className="text-[#1A5FA8] shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">{w}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#E8F4FB] rounded-2xl p-8">
            <p className="font-bold text-gray-900 text-lg mb-4">What the Research Says</p>
            <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
              <p>
                A 2014 systematic review in <em>Photomedicine and Laser Surgery</em> found photobiomodulation (red/near-infrared light) significantly reduces pain and inflammation in musculoskeletal conditions — the same conditions chiropractic treats most commonly.
              </p>
              <p>
                A 2016 study in the <em>Journal of Athletic Training</em> showed that combining manual therapy with photobiomodulation produced faster and more durable outcomes than manual therapy alone for acute musculoskeletal pain.
              </p>
              <p>
                Red light therapy's mechanism — ATP upregulation, nitric oxide release, and reduction of pro-inflammatory cytokines — directly extends the therapeutic window opened by a chiropractic adjustment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Learn More Links ─────────────────────────────────── */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-[#1A5FA8] font-semibold uppercase tracking-widest text-sm mb-6 text-center">Learn More</p>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/services/chiropractic"
              className="flex items-center justify-between bg-gray-50 hover:bg-[#E8F4FB] rounded-xl px-6 py-4 border border-gray-100 transition-colors group">
              <div>
                <p className="font-bold text-gray-900 text-sm">Chiropractic Care at MindBody Med</p>
                <p className="text-gray-500 text-xs mt-0.5">UW-referred, board-certified sports chiropractors</p>
              </div>
              <ArrowRight size={16} className="text-[#1A5FA8] shrink-0 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link href="/services/red-light-therapy"
              className="flex items-center justify-between bg-gray-50 hover:bg-[#E8F4FB] rounded-xl px-6 py-4 border border-gray-100 transition-colors group">
              <div>
                <p className="font-bold text-gray-900 text-sm">Red Light Therapy — The Prism Light Pod</p>
                <p className="text-gray-500 text-xs mt-0.5">17,000 LEDs, FDA-registered, 15-minute sessions</p>
              </div>
              <ArrowRight size={16} className="text-[#1A5FA8] shrink-0 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────── */}
      <section className="py-16 bg-[#0d3d6e] text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold mb-3">Book Your Combined Visit</h2>
          <p className="text-blue-100 mb-8">
            Available in Seattle's Ravenna neighborhood. Ask about adding the Prism Light Pod to your next chiropractic appointment.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <BookBtn />
            <a href="tel:+12065239000"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-7 py-3.5 rounded-full border border-white/30 transition-colors">
              <Phone size={18} />
              (206) 523-9000
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
