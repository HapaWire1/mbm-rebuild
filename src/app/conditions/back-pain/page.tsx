import Link from "next/link";
import { CalendarCheck, Phone, CheckCircle } from "lucide-react";

const HERO = "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1600&q=80";

function BookBtn({ label = "Book My $149 Visit", className = "" }: { label?: string; className?: string }) {
  return (
    <a href="https://www.zocdoc.com" target="_blank" rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-white font-bold px-7 py-3.5 rounded-full transition-colors shadow-lg ${className}`}>
      <CalendarCheck size={18} />{label}
    </a>
  );
}

const types = [
  { title: "Acute Lower Back Pain", desc: "Sudden onset from injury, lifting, or movement. Often very painful but typically responds quickly to treatment." },
  { title: "Chronic Low Back Pain", desc: "Pain lasting more than 3 months, often from untreated injury, degenerative changes, or postural dysfunction." },
  { title: "Disc-Related Back Pain", desc: "Herniated or bulging discs creating local pain and possible radiculopathy (nerve symptoms into the legs)." },
  { title: "Muscle Strain & Spasm", desc: "Overstretched or torn muscle fibers causing acute pain, stiffness, and protective spasm." },
  { title: "Sacroiliac Joint Pain", desc: "Dysfunction at the junction of the spine and pelvis — commonly misdiagnosed and undertreated." },
  { title: "Scoliosis-Related Pain", desc: "Spinal curvature creating uneven loading, chronic muscle fatigue, and progressive pain patterns." },
];

const treatments = [
  { title: "Spinal Adjustment", desc: "Restores joint mobility, reduces nerve irritation, and breaks the pain-spasm cycle rapidly." },
  { title: "Massage Therapy", desc: "Releases muscle tension and spasm, improves blood flow to injured tissue, and reduces inflammation." },
  { title: "Functional Rehabilitation", desc: "Core strengthening and movement retraining to address the underlying cause and prevent recurrence." },
  { title: "Soft Tissue Therapy", desc: "Myofascial release and trigger point work to resolve chronic muscle tension driving the pain." },
  { title: "Acupuncture", desc: "Reduces pain signaling and promotes healing — particularly effective for chronic back pain." },
  { title: "Red Light Therapy", desc: "Accelerates tissue repair and reduces inflammation at the cellular level — pairs well with chiropractic." },
];

export default function BackPainPage() {
  return (
    <main>
      <section className="relative min-h-[440px] flex items-center text-white bg-cover bg-center"
        style={{ backgroundImage: `url('${HERO}')` }}>
        <div className="absolute inset-0 bg-[#0d3d6e]/78" />
        <div className="relative max-w-5xl mx-auto px-4 py-20">
          <p className="text-amber-400 font-semibold uppercase tracking-widest text-sm mb-3">Conditions We Treat</p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight max-w-2xl">Back Pain Treatment in Seattle</h1>
          <p className="text-blue-100 text-lg mb-8 max-w-xl">Back pain is the #1 cause of disability worldwide. It's also one of the most treatable conditions we see — when addressed properly.</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <BookBtn />
            <a href="tel:+12065239000"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-7 py-3.5 rounded-full border border-white/30 transition-colors">
              <Phone size={18} />(206) 523-9000
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-[#1A5FA8] font-semibold uppercase tracking-widest text-sm mb-2">Types of Back Pain</p>
            <h2 className="text-3xl font-extrabold text-gray-900">We Treat All of Them</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {types.map(t => (
              <div key={t.title} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-2">{t.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-[#1A5FA8] font-semibold uppercase tracking-widest text-sm mb-2">Treatment</p>
            <h2 className="text-3xl font-extrabold text-gray-900">A Team Approach to Back Pain</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">Our chiropractors, massage therapists, and acupuncturist work together — no referrals needed, all under one roof.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {treatments.map(t => (
              <div key={t.title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-2">{t.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0d3d6e] text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold mb-3">Back Pain Is Treatable. Start Today.</h2>
          <p className="text-blue-100 mb-8">New patient evaluation + first treatment — $149. Most insurance accepted.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <BookBtn />
            <a href="tel:+12065239000"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-7 py-3.5 rounded-full border border-white/30 transition-colors">
              <Phone size={18} />(206) 523-9000
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
