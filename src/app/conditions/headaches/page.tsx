import { CalendarCheck, Phone, CheckCircle } from "lucide-react";

const HERO = "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1600&q=80";

function BookBtn({ label = "Book My $149 Visit", className = "" }: { label?: string; className?: string }) {
  return (
    <a href="https://www.zocdoc.com" target="_blank" rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-white font-bold px-7 py-3.5 rounded-full transition-colors shadow-lg ${className}`}>
      <CalendarCheck size={18} />{label}
    </a>
  );
}

const types = [
  { title: "Cervicogenic Headaches", desc: "Originate from cervical spine dysfunction — joints, muscles, and nerves in the neck refer pain into the head. Respond exceptionally well to chiropractic." },
  { title: "Tension Headaches", desc: "Muscle tension in the neck, shoulders, and scalp creates a characteristic band-like pressure. The most common headache type." },
  { title: "Migraines", desc: "Neurological events often triggered by cervical dysfunction, hormones, stress, or dietary factors. Can be reduced in frequency and severity with consistent care." },
  { title: "Post-Whiplash Headaches", desc: "Headaches following auto accidents are frequently cervicogenic — arising from damaged cervical joints and muscles." },
];

const treatments = [
  { title: "Cervical Chiropractic Adjustment", desc: "Directly addresses the joint restriction and nerve irritation driving most headaches originating in the neck." },
  { title: "Suboccipital Release", desc: "Manual and instrument-assisted release of the muscles at the base of the skull — a primary headache driver." },
  { title: "Upper Thoracic Adjustment", desc: "The upper back contributes significantly to cervicogenic headaches. We treat the whole chain." },
  { title: "Acupuncture", desc: "Strong clinical evidence for headache and migraine reduction. Wan Nguyen specializes in headache management with acupuncture." },
  { title: "Massage Therapy", desc: "Deep work on the cervical paraspinals, upper traps, and scalenes reduces the muscular contribution to headaches." },
  { title: "Postural Correction", desc: "Forward head posture is a major headache driver. Correcting it produces long-term reduction in headache frequency." },
];

export default function HeadachesPage() {
  return (
    <main>
      <section className="relative min-h-[440px] flex items-center text-white bg-cover bg-center"
        style={{ backgroundImage: `url('${HERO}')` }}>
        <div className="absolute inset-0 bg-[#0d3d6e]/78" />
        <div className="relative max-w-5xl mx-auto px-4 py-20">
          <p className="text-amber-400 font-semibold uppercase tracking-widest text-sm mb-3">Conditions We Treat</p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight max-w-2xl">Headache & Migraine Treatment in Seattle</h1>
          <p className="text-blue-100 text-lg mb-8 max-w-xl">Most chronic headaches have a structural cause that medication doesn't fix. We find it — and treat it.</p>
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
            <p className="text-[#1A5FA8] font-semibold uppercase tracking-widest text-sm mb-2">Types of Headaches</p>
            <h2 className="text-3xl font-extrabold text-gray-900">Which Type Do You Have?</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">The type determines the treatment. Our exam identifies the source so we can target the right approach.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {types.map(t => (
              <div key={t.title} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-2">{t.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-[#E8F4FB]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-3">The Cervical Connection</h3>
          <p className="text-gray-600 leading-relaxed">
            Research shows the majority of chronic headache sufferers have significant cervical spine dysfunction contributing to their symptoms — yet most are only offered medication. Chiropractic adjustments and soft tissue therapy addressing the neck produce measurable, lasting headache reduction without drugs or side effects.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-[#1A5FA8] font-semibold uppercase tracking-widest text-sm mb-2">Treatment</p>
            <h2 className="text-3xl font-extrabold text-gray-900">A Drug-Free Path Out of Headaches</h2>
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
          <h2 className="text-3xl font-extrabold mb-3">Stop Medicating. Start Treating.</h2>
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
