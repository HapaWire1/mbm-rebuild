import Link from "next/link";
import Image from "next/image";
import { CalendarCheck, Phone, CheckCircle, Zap, Clock, Activity, ShieldCheck, Cpu, Leaf } from "lucide-react";

function BookBtn({ label = "Book a Session", className = "" }: { label?: string; className?: string }) {
  return (
    <a href="https://ca.clinicdr.com/website-forms/?uid=c3eefb8461dc258b225ab3a2339c0a172fcceeafae4458c06f292c829b7cf202&tg=m07" target="_blank" rel="noopener noreferrer"
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

const benefits = [
  { title: "Accelerated Recovery", desc: "Stimulates cellular energy production (ATP), enabling faster muscle and tissue repair after injury or training." },
  { title: "Reduced Inflammation", desc: "Clinically shown to reduce systemic and local inflammation — without drugs or side effects." },
  { title: "Pain Relief", desc: "Modulates pain signals at the cellular level. Effective for chronic and acute musculoskeletal pain." },
  { title: "Improved Circulation", desc: "Promotes nitric oxide release, expanding blood vessels and increasing oxygen delivery to tissues." },
  { title: "Skin & Collagen Support", desc: "Stimulates collagen production and skin cell renewal — benefits that extend beyond musculoskeletal health." },
  { title: "Performance Enhancement", desc: "Used by elite athletes for pre- and post-training sessions to prime muscles and reduce soreness." },
];

const conditions = [
  "Post-Surgical Recovery", "Sports & Training Recovery", "Chronic Back & Neck Pain",
  "Arthritis & Joint Pain", "Muscle Soreness & Fatigue", "Soft Tissue Injuries",
  "Wound Healing", "Neuropathy", "Fibromyalgia",
];

const podStats = [
  { icon: <Zap size={28} className="text-amber-400" />, stat: "17,000", label: "Individual LEDs" },
  { icon: <Clock size={28} className="text-amber-400" />, stat: "15 min", label: "Per session" },
  { icon: <Activity size={28} className="text-amber-400" />, stat: "360°", label: "Full body coverage" },
];

const programs = [
  { name: "Sleep & Rejuvenation", desc: "Promotes deeper relaxation, improved sleep, and full-body restoration." },
  { name: "Skin Health & Anti-Aging", desc: "Supports collagen production and enhances skin tone and radiance." },
  { name: "Weight Management", desc: "Improves metabolic activity and the natural processing of stored fat." },
  { name: "Sports Recovery", desc: "Accelerates muscle recovery and reduces inflammation." },
  { name: "Chronic Pain Management", desc: "Helps reduce inflammation and support long-term pain relief." },
  { name: "Arthritis & Joint Support", desc: "Enhances joint mobility, flexibility, and reduces stiffness." },
];

const sessionFeatures = [
  { icon: <ShieldCheck size={22} className="text-amber-400 shrink-0" />, text: "Non-invasive, non-EMF and UV-free" },
  { icon: <Cpu size={22} className="text-amber-400 shrink-0" />, text: "Fully automated and user-operated" },
  { icon: <Leaf size={22} className="text-amber-400 shrink-0" />, text: "Sustainable and environmentally friendly" },
];

const MID_PHOTO = "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1600&q=80";

export default function RedLightTherapyV2Page() {
  return (
    <main>

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative min-h-[440px] flex items-center text-white bg-[#0d3d6e]"
        style={{ backgroundImage: "url('/pod/pod-closed.png')", backgroundSize: "cover", backgroundPosition: "center 30%" }}>
        <div className="absolute inset-0 bg-[#0d3d6e]/75" />
        <img src="/logo/mbm-icon.png" alt="" className="absolute top-6 right-6 z-10 w-[300px] h-[300px] opacity-90" />
        <div className="relative max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-amber-400 font-semibold uppercase tracking-widest text-sm mb-3">Red Light Therapy</p>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
              The Prism Light Pod — Seattle's Premier Red Light Therapy
            </h1>
            <p className="text-blue-100 text-lg mb-8">
              FDA-registered. 17,000 LEDs. Full-body coverage in 15 minutes. Used by elite athletes and now available in Seattle's Ravenna neighborhood.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <BookBtn />
              <CallBtn />
            </div>
          </div>
          <div className="hidden md:block bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <p className="font-bold text-lg mb-5">The Prism Light Pod</p>
            <div className="grid grid-cols-3 gap-4 mb-5">
              {podStats.map(s => (
                <div key={s.label} className="text-center">
                  <div className="flex justify-center mb-1">{s.icon}</div>
                  <p className="text-2xl font-extrabold">{s.stat}</p>
                  <p className="text-blue-200 text-xs">{s.label}</p>
                </div>
              ))}
            </div>
            <div className="border-t border-white/20 pt-4 space-y-2 text-sm">
              {["FDA-registered device", "Red (660nm) + Near-infrared (850nm)", "Non-invasive, no UV, no heat damage", "No downtime required"].map(f => (
                <div key={f} className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-amber-400 shrink-0" />
                  {f}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── What is RLT ──────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#1A5FA8] font-semibold uppercase tracking-widest text-sm mb-2">What Is It</p>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Photobiomodulation — Your Cells on Overdrive</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Red light therapy (photobiomodulation) uses specific wavelengths of red (660nm) and near-infrared (850nm) light to penetrate skin and stimulate mitochondria — the energy powerhouses of your cells. This triggers a cascade of healing processes: more ATP production, less oxidative stress, reduced inflammation, and accelerated tissue repair.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The Prism Light Pod at MindBody Med delivers this therapy at a scale most clinics can't match — 17,000 LEDs covering your entire body simultaneously in a single 15-minute session.
            </p>
          </div>
          <div className="bg-[#E8F4FB] rounded-2xl p-8 space-y-4">
            <p className="font-bold text-gray-900 text-lg">How It Works</p>
            {[
              { n: "1", t: "Step In", d: "Lie down inside the Prism Light Pod — a full-body light enclosure." },
              { n: "2", t: "15-Minute Session", d: "17,000 LEDs emit targeted red and near-infrared wavelengths across your entire body." },
              { n: "3", t: "Cellular Activation", d: "Light energy is absorbed by mitochondria, boosting ATP and triggering repair processes." },
              { n: "4", t: "Walk Out", d: "No downtime. Most patients feel immediate improvements in pain, energy, or mobility." },
            ].map(s => (
              <div key={s.n} className="flex gap-3">
                <div className="w-7 h-7 rounded-full bg-[#1A5FA8] text-white text-sm font-bold flex items-center justify-center shrink-0">{s.n}</div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{s.t}</p>
                  <p className="text-gray-500 text-sm">{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Each Session Is ──────────────────────────────────── */}
      <section className="py-12 bg-[#0d3d6e] text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-amber-400 font-semibold uppercase tracking-widest text-sm mb-3">Every Visit</p>
          <h2 className="text-2xl font-extrabold mb-8">Each Session Is</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-8">
            {sessionFeatures.map(f => (
              <div key={f.text} className="flex flex-col items-center gap-2 text-sm text-blue-100">
                {f.icon}
                <span>{f.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Advanced Cellular Wellness ───────────────────────── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/pod/pod-beauty.png"
              alt="Prism Light Pod — full-body red light therapy bed"
              width={1024}
              height={686}
              className="w-full h-auto object-cover"
            />
          </div>
          <div>
            <p className="text-[#1A5FA8] font-semibold uppercase tracking-widest text-sm mb-2">The Device</p>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Advanced Cellular Wellness, Powered by Light</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              The Prism Light Pod is a full-body red light therapy bed designed to support recovery, circulation, and cellular repair. More than 17,000 630nm, 660nm red and 850nm near-infrared LEDs deliver 360° coverage at 100 mW/cm² — providing consistent, high-output performance in a single 15-minute session.
            </p>
            <ul className="space-y-3">
              {[
                "Reduced inflammation and faster recovery",
                "Improved circulation and oxygen delivery",
                "Skin rejuvenation and collagen production",
                "Increased energy and metabolic activity",
              ].map(item => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle size={16} className="text-[#1A5FA8] shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Programs ─────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-[#1A5FA8] font-semibold uppercase tracking-widest text-sm mb-2">Programs</p>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Intelligent, Effortless Treatments</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Six automated, optimized programs — one-touch selection, no expertise required. Each 15-minute session pairs precision light output with custom soundscapes for consistent, targeted results.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div className="rounded-2xl overflow-hidden shadow-md">
              <Image
                src="/pod/pod-programs-screen.jpg"
                alt="Prism Light Pod program selection screen"
                width={800}
                height={480}
                className="w-full h-auto"
              />
            </div>
            <ul className="space-y-4">
              {programs.map(p => (
                <li key={p.name} className="flex gap-3 items-start">
                  <div className="w-2 h-2 rounded-full bg-amber-400 shrink-0 mt-2" />
                  <div>
                    <p className="font-semibold text-gray-900">{p.name}</p>
                    <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Conditions ───────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-[#1A5FA8] font-semibold uppercase tracking-widest text-sm mb-2">Conditions</p>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-10">Who Benefits Most</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {conditions.map(c => (
              <span key={c} className="bg-[#E8F4FB] text-[#1A5FA8] font-medium px-4 py-2 rounded-full text-sm">{c}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Benefits ─────────────────────────────────────────── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#1A5FA8] font-semibold uppercase tracking-widest text-sm mb-2">Benefits</p>
            <h2 className="text-3xl font-extrabold text-gray-900">What Red Light Therapy Does for You</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map(b => (
              <div key={b.title} className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-2">{b.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Integrated Sound ─────────────────────────────────── */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/pod/pod-interior.png"
              alt="Inside the Prism Light Pod — immersive red light therapy experience"
              width={1024}
              height={384}
              className="w-full h-auto object-cover"
            />
          </div>
          <div>
            <p className="text-amber-400 font-semibold uppercase tracking-widest text-sm mb-2">Sound Therapy</p>
            <h2 className="text-3xl font-extrabold mb-4">Integrated Sound. Enhanced Results.</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Functional Sound Therapy is seamlessly woven into every Prism Light Pod session. Twelve ambient soundscapes — two per program — are pre-programmed to calm the nervous system, reduce stress, and support deeper recovery.
            </p>
            <blockquote className="border-l-2 border-amber-400 pl-5 mb-4">
              <p className="text-gray-300 text-sm leading-relaxed italic mb-3">
                "Myndstream music is informed by science and expressed through art. Every piece is purpose-engineered — controlling tempo, pitch, timbre, and harmony — to guide the nervous system into recovery and relaxation. In partnership with Prism, this creates an immersive wellness experience with lasting benefits."
              </p>
              <div className="flex items-center gap-3">
                <Image
                  src="/pod/myndstream-icon.png"
                  alt="Myndstream"
                  width={28}
                  height={28}
                  className="rounded-full"
                />
                <p className="text-gray-400 text-xs font-semibold">Freddie Moross — Founder, Myndstream</p>
              </div>
            </blockquote>
          </div>
        </div>
      </section>

      {/* ── Mid CTA ──────────────────────────────────────────── */}
      <section className="relative py-20 text-white text-center bg-cover bg-center"
        style={{ backgroundImage: `url('${MID_PHOTO}')` }}>
        <div className="absolute inset-0 bg-[#0d3d6e]/80" />
        <div className="relative max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold mb-4">Pair It With Chiropractic or Acupuncture</h2>
          <p className="text-blue-100 mb-8 text-lg">Red light therapy works best as part of a comprehensive care plan. Ask about combining your session with a chiropractic adjustment or acupuncture for maximum results.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <BookBtn />
            <CallBtn />
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-extrabold text-gray-900 text-center mb-10">Common Questions</h2>
          <div className="space-y-6">
            {[
              { q: "Is it safe?", a: "Yes. Red and near-infrared light therapy is non-invasive, has no UV radiation, and produces no thermal damage to tissue. It is FDA-registered and has been studied in hundreds of peer-reviewed clinical trials." },
              { q: "How many sessions do I need?", a: "Many patients notice benefits after a single session. For chronic conditions, a series of 6–12 sessions over 2–4 weeks is typically recommended. Your provider will help you build a plan." },
              { q: "Does it hurt?", a: "Not at all. The Prism Light Pod feels like lying in warmth. Most patients find sessions deeply relaxing." },
              { q: "Can I combine it with other treatments?", a: "Absolutely — and it's often more effective that way. Red light therapy pairs particularly well with chiropractic adjustments and massage. Talk to your provider about same-day stacking." },
              { q: "Is it covered by insurance?", a: "Most insurance plans do not cover red light therapy yet. We offer competitive session pricing. Ask the front desk about session packages." },
            ].map(f => (
              <div key={f.q} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-2">{f.q}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────── */}
      <section className="py-16 bg-[#0d3d6e] text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold mb-3">Try the Prism Light Pod Today</h2>
          <p className="text-blue-100 mb-8">Seattle's only full-body red light therapy experience. Book a session or call to ask us anything.</p>
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
