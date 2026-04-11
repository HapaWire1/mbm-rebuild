import Link from "next/link";
import { CalendarCheck, Phone, CheckCircle, AlertTriangle } from "lucide-react";

const HERO = "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1600&q=80";

function BookBtn({ label = "Book My $149 Visit", className = "" }: { label?: string; className?: string }) {
  return (
    <a href="https://www.zocdoc.com" target="_blank" rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-white font-bold px-7 py-3.5 rounded-full transition-colors shadow-lg ${className}`}>
      <CalendarCheck size={18} />{label}
    </a>
  );
}

const symptoms = [
  "Sharp, shooting pain from low back into the buttock, leg, or foot",
  "Burning or electric sensation down one leg",
  "Numbness or tingling in the leg, calf, or foot",
  "Weakness in the affected leg or foot",
  "Pain that worsens with sitting, standing too long, or sneezing",
  "Difficulty walking or standing upright",
];

const causes = [
  { title: "Herniated Disc", desc: "The most common cause — disc material pressing on the sciatic nerve root in the lumbar spine." },
  { title: "Piriformis Syndrome", desc: "The piriformis muscle in the buttock compresses the sciatic nerve as it passes through or beneath it." },
  { title: "Spinal Stenosis", desc: "Narrowing of the spinal canal that compresses nerve roots in older patients." },
  { title: "Sacroiliac Joint Dysfunction", desc: "Dysfunction at the SI joint can mimic or cause true sciatic irritation." },
];

const treatments = [
  { title: "Chiropractic Adjustment", desc: "Reduces lumbar joint restriction and disc pressure that compresses the sciatic nerve." },
  { title: "Flexion-Distraction Technique", desc: "Gentle, low-force spinal decompression to relieve disc herniation and nerve root pressure." },
  { title: "Soft Tissue / Piriformis Release", desc: "Direct treatment of the piriformis and surrounding musculature when the nerve is compressed peripherally." },
  { title: "Rehabilitation", desc: "Core stabilization and nerve mobility exercises to address the underlying cause and prevent recurrence." },
  { title: "Acupuncture", desc: "Reduces nerve inflammation and sciatic pain — particularly effective for burning, electric, or radiating symptoms." },
  { title: "Massage Therapy", desc: "Relieves the muscle spasm that worsens sciatic compression and improves circulation to irritated tissue." },
];

export default function SciaticaPage() {
  return (
    <main>
      <section className="relative min-h-[440px] flex items-center text-white bg-cover bg-center"
        style={{ backgroundImage: `url('${HERO}')` }}>
        <div className="absolute inset-0 bg-[#0d3d6e]/78" />
        <div className="relative max-w-5xl mx-auto px-4 py-20">
          <p className="text-amber-400 font-semibold uppercase tracking-widest text-sm mb-3">Conditions We Treat</p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight max-w-2xl">Sciatica Treatment in Seattle</h1>
          <p className="text-blue-100 text-lg mb-8 max-w-xl">That shooting pain down your leg isn't something you just live with. We find the cause and fix it — without surgery or dependency on pain meds.</p>
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
            <p className="text-[#1A5FA8] font-semibold uppercase tracking-widest text-sm mb-2">What Is Sciatica</p>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">The Sciatic Nerve — and What Irritates It</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              The sciatic nerve is the longest nerve in the body, running from the lower back through the buttock and down each leg. When it's compressed or irritated — by a disc herniation, muscle tightness, or joint dysfunction — it produces the characteristic radiating pain known as sciatica.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Identifying the exact cause is critical to effective treatment. Sciatica from a herniated disc requires a different approach than sciatica from piriformis syndrome. Our exam pinpoints the source before treatment begins.
            </p>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle size={18} className="text-amber-600" />
              <p className="font-bold text-amber-800">Symptoms</p>
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

      <section className="py-14 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-extrabold text-gray-900 text-center mb-8">Common Causes</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {causes.map(c => (
              <div key={c.title} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-1">{c.title}</h3>
                <p className="text-gray-500 text-sm">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-[#1A5FA8] font-semibold uppercase tracking-widest text-sm mb-2">Treatment</p>
            <h2 className="text-3xl font-extrabold text-gray-900">How We Treat Sciatica</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {treatments.map(t => (
              <div key={t.title} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-2">{t.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0d3d6e] text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold mb-3">Stop Living With Sciatic Pain</h2>
          <p className="text-blue-100 mb-8">New patient evaluation + first treatment — $149. Same-day appointments available.</p>
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
