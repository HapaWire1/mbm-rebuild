import Link from "next/link";
import { CalendarCheck, Phone, CheckCircle, AlertTriangle } from "lucide-react";

const HERO = "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1600&q=80";

function BookBtn({ label = "Book My $149 Visit", className = "" }: { label?: string; className?: string }) {
  return (
    <a href="https://www.zocdoc.com" target="_blank" rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-white font-bold px-7 py-3.5 rounded-full transition-colors shadow-lg ${className}`}>
      <CalendarCheck size={18} />{label}
    </a>
  );
}

const symptoms = [
  "Sharp or burning pain in the neck or lower back", "Pain radiating into the arm or leg (radiculopathy)",
  "Numbness or tingling in extremities", "Muscle weakness in arm, hand, or leg",
  "Pain that worsens with sitting, bending, or coughing", "Pain that improves with movement or lying down",
];

const treatments = [
  { title: "Chiropractic Flexion-Distraction", desc: "A specialized low-force technique that gently decompresses spinal discs — widely used for herniated disc management without surgery." },
  { title: "Spinal Decompression", desc: "Controlled traction to reduce intradiscal pressure, allow retraction of herniated material, and restore nutrient flow to the disc." },
  { title: "Soft Tissue Therapy", desc: "Addresses the muscle spasm and guarding that develops around a herniated disc and compounds the pain." },
  { title: "Corrective Rehabilitation", desc: "Targeted core and stabilization exercises to take pressure off the affected disc and prevent recurrence." },
  { title: "Acupuncture", desc: "Reduces nerve inflammation and radicular pain. Can be particularly effective when combined with chiropractic care." },
  { title: "Activity Modification", desc: "Education on positions, movements, and ergonomics to protect the disc and accelerate healing." },
];

export default function HerniatedDiscPage() {
  return (
    <main>
      <section className="relative min-h-[440px] flex items-center text-white bg-cover bg-center"
        style={{ backgroundImage: `url('${HERO}')` }}>
        <div className="absolute inset-0 bg-[#0d3d6e]/78" />
        <div className="relative max-w-5xl mx-auto px-4 py-20">
          <p className="text-amber-400 font-semibold uppercase tracking-widest text-sm mb-3">Conditions We Treat</p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight max-w-2xl">Herniated Disc Treatment in Seattle</h1>
          <p className="text-blue-100 text-lg mb-8 max-w-xl">Conservative chiropractic care resolves most herniated discs without surgery. We've helped hundreds of Seattle patients avoid the OR.</p>
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
        <div className="max-w-4xl mx-auto px-4 grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-[#1A5FA8] font-semibold uppercase tracking-widest text-sm mb-2">What Is a Herniated Disc</p>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">When the Disc Pushes on a Nerve</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Spinal discs act as shock absorbers between vertebrae. When the outer layer (annulus fibrosus) tears or weakens, the inner gel-like material (nucleus pulposus) can bulge or herniate outward — compressing nearby nerves and causing pain that may radiate far from the spine.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Most herniated discs respond well to conservative care. Research consistently shows that chiropractic treatment — including flexion-distraction and spinal rehabilitation — produces outcomes comparable to surgery for most patients, with far less risk and recovery time.
            </p>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle size={18} className="text-amber-600" />
              <p className="font-bold text-amber-800">Common Symptoms</p>
            </div>
            <ul className="space-y-2">
              {symptoms.map(s => (
                <li key={s} className="flex items-start gap-2 text-sm text-amber-900">
                  <CheckCircle size={14} className="text-amber-600 mt-0.5 shrink-0" />{s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-[#1A5FA8] font-semibold uppercase tracking-widest text-sm mb-2">Treatment</p>
            <h2 className="text-3xl font-extrabold text-gray-900">Avoid Surgery — Start Conservative</h2>
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
          <h2 className="text-3xl font-extrabold mb-3">Get a Real Assessment First</h2>
          <p className="text-blue-100 mb-8">Before considering surgery, find out if conservative care can resolve your disc issue. New patient evaluation + first treatment — $149.</p>
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
