import Link from "next/link";
import { CalendarCheck, Phone, CheckCircle, AlertTriangle } from "lucide-react";

const HERO = "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1600&q=80";

function BookBtn({ label = "Book My $149 Visit", className = "" }: { label?: string; className?: string }) {
  return (
    <a href="https://www.zocdoc.com" target="_blank" rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-white font-bold px-7 py-3.5 rounded-full transition-colors shadow-lg ${className}`}>
      <CalendarCheck size={18} />
      {label}
    </a>
  );
}

const symptoms = [
  "Neck pain and stiffness", "Headaches at the base of the skull", "Shoulder and upper back pain",
  "Dizziness or blurred vision", "Fatigue", "Difficulty concentrating or memory issues",
  "Jaw pain (TMJ)", "Tingling or numbness in the arms", "Irritability and sleep disturbances",
];

const treatments = [
  { title: "Chiropractic Adjustment", desc: "Restores proper cervical joint movement and reduces nerve irritation that drives pain and headaches." },
  { title: "Soft Tissue Therapy", desc: "Myofascial release and instrument-assisted techniques to address muscle guarding and scar tissue formation." },
  { title: "Functional Rehabilitation", desc: "Progressive exercises to rebuild deep cervical strength and stabilize the injured segments long-term." },
  { title: "Acupuncture", desc: "Reduces pain, muscle spasm, and neurological symptoms. Particularly effective for whiplash-associated headaches." },
  { title: "Massage Therapy", desc: "Releases cervical and upper trap tension, improves circulation, and reduces inflammation in injured tissue." },
  { title: "Functional Taping", desc: "Supports injured structures between visits and reduces muscle guarding during the acute phase." },
];

export default function WhiplashPage() {
  return (
    <main>
      <section className="relative min-h-[440px] flex items-center text-white bg-cover bg-center"
        style={{ backgroundImage: `url('${HERO}')` }}>
        <div className="absolute inset-0 bg-[#0d3d6e]/78" />
        <div className="relative max-w-5xl mx-auto px-4 py-20">
          <p className="text-amber-400 font-semibold uppercase tracking-widest text-sm mb-3">Conditions We Treat</p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight max-w-2xl">Whiplash Treatment in Seattle</h1>
          <p className="text-blue-100 text-lg mb-8 max-w-xl">
            Whiplash is one of the most undertreated injuries in the country. Without proper care, symptoms can become chronic. We see results where other approaches fail.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <BookBtn />
            <a href="tel:+12065239000"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-7 py-3.5 rounded-full border border-white/30 transition-colors">
              <Phone size={18} />
              (206) 523-9000
            </a>
          </div>
        </div>
      </section>

      {/* What is it */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-[#1A5FA8] font-semibold uppercase tracking-widest text-sm mb-2">What Is Whiplash</p>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">More Than a Sore Neck</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Whiplash occurs when the head is suddenly jerked forward and backward — most commonly in rear-end auto accidents, but also from sports collisions, falls, or physical trauma. The rapid motion strains and tears muscles, ligaments, and joint capsules in the cervical spine.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Untreated whiplash frequently becomes chronic. Studies show that up to 50% of whiplash patients who don't receive proper early treatment continue to have symptoms years later. Early intervention dramatically improves outcomes.
            </p>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle size={18} className="text-amber-600" />
              <p className="font-bold text-amber-800">Don't Wait on These Symptoms</p>
            </div>
            <ul className="space-y-2">
              {symptoms.map(s => (
                <li key={s} className="flex items-start gap-2 text-sm text-amber-900">
                  <CheckCircle size={14} className="text-amber-600 mt-0.5 shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Treatments */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-[#1A5FA8] font-semibold uppercase tracking-widest text-sm mb-2">How We Treat It</p>
            <h2 className="text-3xl font-extrabold text-gray-900">A Full-Team Approach to Whiplash</h2>
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

      {/* Auto accident note */}
      <section className="py-12 bg-[#E8F4FB]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Injured in an Auto Accident?</h3>
          <p className="text-gray-600 mb-4">Whiplash is the most common auto accident injury. We work directly with PIP insurance and personal injury attorneys — most patients pay nothing out of pocket.</p>
          <Link href="/personal-injury" className="text-[#1A5FA8] font-semibold hover:underline">Learn about auto accident care →</Link>
        </div>
      </section>

      <section className="py-16 bg-[#0d3d6e] text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold mb-3">Start Treatment This Week</h2>
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
