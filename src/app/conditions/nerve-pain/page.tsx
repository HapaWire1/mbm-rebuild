import { CalendarCheck, Phone, CheckCircle } from "lucide-react";

const HERO = "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1600&q=80";

function BookBtn({ label = "Book My $149 Visit", className = "" }: { label?: string; className?: string }) {
  return (
    <a href="https://www.zocdoc.com" target="_blank" rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-white font-bold px-7 py-3.5 rounded-full transition-colors shadow-lg ${className}`}>
      <CalendarCheck size={18} />{label}
    </a>
  );
}

const types = [
  { title: "Radiculopathy", desc: "Nerve root compression in the spine producing pain, numbness, or weakness radiating into the arms or legs (sciatica is a common example)." },
  { title: "Thoracic Outlet Syndrome", desc: "Compression of nerves and vessels between the collarbone and first rib — causes arm pain, numbness, and hand weakness. Ash Chima specializes in this condition." },
  { title: "Carpal Tunnel Syndrome", desc: "Median nerve compression at the wrist causing hand numbness, tingling, and weakness. Often has a cervical component." },
  { title: "Peripheral Neuropathy", desc: "Damage to peripheral nerves producing burning, tingling, or numbness — often in the feet and hands." },
  { title: "Nerve Compression from Disc Herniation", desc: "Herniated disc material directly pressing on a spinal nerve root, causing shooting pain into the extremity." },
  { title: "Piriformis Syndrome", desc: "Sciatic nerve compression by the piriformis muscle producing buttock and leg symptoms identical to true sciatica." },
];

const treatments = [
  { title: "Chiropractic Adjustment", desc: "Reduces the spinal joint restriction and disc pressure compressing nerve roots at the source." },
  { title: "Nerve Flossing / Mobilization", desc: "Specialized techniques to restore normal nerve movement through tight tissue and joint restrictions." },
  { title: "Sports Massage (Ash Chima)", desc: "Clinical expertise in thoracic outlet syndrome, cervicalgia, and nerve entrapment from the soft tissue side." },
  { title: "Soft Tissue / Myofascial Release", desc: "Releases the muscle and fascial entrapments that compress peripheral nerves." },
  { title: "Acupuncture", desc: "Reduces nerve inflammation systemically and locally — strong evidence for neuropathic pain reduction." },
  { title: "Red Light Therapy", desc: "Photobiomodulation promotes nerve healing and reduces the inflammation driving neuropathic symptoms." },
];

export default function NervePainPage() {
  return (
    <main>
      <section className="relative min-h-[440px] flex items-center text-white bg-cover bg-center"
        style={{ backgroundImage: `url('${HERO}')` }}>
        <div className="absolute inset-0 bg-[#0d3d6e]/78" />
        <div className="relative max-w-5xl mx-auto px-4 py-20">
          <p className="text-amber-400 font-semibold uppercase tracking-widest text-sm mb-3">Conditions We Treat</p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight max-w-2xl">Nerve Pain & Compression Treatment in Seattle</h1>
          <p className="text-blue-100 text-lg mb-8 max-w-xl">Tingling, numbness, burning, shooting pain — these are nerve symptoms. We identify where the compression is and treat it at the source.</p>
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
            <p className="text-[#1A5FA8] font-semibold uppercase tracking-widest text-sm mb-2">Types of Nerve Conditions</p>
            <h2 className="text-3xl font-extrabold text-gray-900">What's Causing Your Symptoms</h2>
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
            <h2 className="text-3xl font-extrabold text-gray-900">Treating the Source, Not Just the Symptom</h2>
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
          <h2 className="text-3xl font-extrabold mb-3">Don't Live With Nerve Pain</h2>
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
