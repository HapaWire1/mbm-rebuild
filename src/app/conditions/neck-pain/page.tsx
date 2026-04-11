import { CalendarCheck, Phone, CheckCircle } from "lucide-react";

const HERO = "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1600&q=80";

function BookBtn({ label = "Book My $149 Visit", className = "" }: { label?: string; className?: string }) {
  return (
    <a href="https://www.zocdoc.com" target="_blank" rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-white font-bold px-7 py-3.5 rounded-full transition-colors shadow-lg ${className}`}>
      <CalendarCheck size={18} />{label}
    </a>
  );
}

const causes = [
  "Prolonged desk work or screen time", "Poor posture (forward head posture)",
  "Auto accident / whiplash injury", "Sports injury or fall",
  "Degenerative disc disease", "Herniated cervical disc",
  "Muscle strain or spasm", "Stress and tension",
];

const treatments = [
  { title: "Cervical Chiropractic Adjustment", desc: "Restores proper motion to restricted cervical joints and reduces nerve irritation causing pain and headaches." },
  { title: "Soft Tissue Therapy", desc: "Instrument-assisted and manual release of cervical muscles, fascia, and suboccipital tissue." },
  { title: "Postural Correction", desc: "Identifies and corrects the forward head posture and thoracic kyphosis patterns driving most chronic neck pain." },
  { title: "Cervical Rehabilitation", desc: "Deep neck flexor strengthening and mobility work to create long-term stability." },
  { title: "Massage Therapy", desc: "Relieves upper trap, levator scapulae, and cervical paraspinal tension that perpetuates neck pain." },
  { title: "Acupuncture", desc: "Reduces cervical muscle spasm and referred pain patterns — particularly effective for chronic stiffness." },
];

export default function NeckPainPage() {
  return (
    <main>
      <section className="relative min-h-[440px] flex items-center text-white bg-cover bg-center"
        style={{ backgroundImage: `url('${HERO}')` }}>
        <div className="absolute inset-0 bg-[#0d3d6e]/78" />
        <div className="relative max-w-5xl mx-auto px-4 py-20">
          <p className="text-amber-400 font-semibold uppercase tracking-widest text-sm mb-3">Conditions We Treat</p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight max-w-2xl">Neck Pain Treatment in Seattle</h1>
          <p className="text-blue-100 text-lg mb-8 max-w-xl">Whether it's from a desk job, an old injury, or waking up wrong — neck pain has a cause, and we find it.</p>
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
            <p className="text-[#1A5FA8] font-semibold uppercase tracking-widest text-sm mb-2">The Problem</p>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Why Neck Pain Persists</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              The cervical spine is remarkably complex — seven vertebrae, dozens of muscles, and critical nerves all packed into a small space. When any component is restricted, inflamed, or injured, the effects ripple outward: headaches, shoulder pain, arm numbness, and jaw tension are all common byproducts of unresolved neck dysfunction.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Most neck pain responds quickly to chiropractic care. Dr. Chevigny and Dr. Ford take a thorough approach — examining the whole cervical and thoracic spine to identify what's actually driving your pain before starting treatment.
            </p>
          </div>
          <div className="bg-[#E8F4FB] rounded-2xl p-6">
            <p className="font-bold text-gray-900 mb-4">Common Causes We Treat</p>
            <ul className="space-y-2">
              {causes.map(c => (
                <li key={c} className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckCircle size={14} className="text-[#1A5FA8] shrink-0" />{c}
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
            <h2 className="text-3xl font-extrabold text-gray-900">How We Fix Neck Pain</h2>
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
          <h2 className="text-3xl font-extrabold mb-3">Your Neck Doesn't Have to Hurt</h2>
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
