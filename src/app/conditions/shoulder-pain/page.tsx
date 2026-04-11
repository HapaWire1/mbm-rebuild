import { CalendarCheck, Phone, CheckCircle } from "lucide-react";

const HERO = "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1600&q=80";

function BookBtn({ label = "Book My $149 Visit", className = "" }: { label?: string; className?: string }) {
  return (
    <a href="https://www.zocdoc.com" target="_blank" rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-white font-bold px-7 py-3.5 rounded-full transition-colors shadow-lg ${className}`}>
      <CalendarCheck size={18} />{label}
    </a>
  );
}

const conditions = [
  { title: "Rotator Cuff Injuries", desc: "Tears, strains, and tendinopathy of the rotator cuff muscles — extremely common in active patients." },
  { title: "Shoulder Impingement", desc: "Compression of soft tissue in the subacromial space causing pain with overhead motion." },
  { title: "Frozen Shoulder (Adhesive Capsulitis)", desc: "Progressive stiffening and pain limiting all shoulder motion. Ash Chima specializes in clinical treatment of this condition." },
  { title: "Bursitis", desc: "Inflammation of the bursa sac causing aching shoulder pain, particularly when lying on the affected side." },
  { title: "AC Joint Sprain", desc: "Injury to the acromioclavicular joint from falls or direct impact — common in cyclists and contact sport athletes." },
  { title: "Biceps Tendinopathy", desc: "Pain at the front of the shoulder from overuse or degeneration of the long head of the biceps tendon." },
];

const treatments = [
  { title: "Chiropractic Adjustment", desc: "Addresses cervical and thoracic dysfunction that contributes to shoulder mechanics and impingement." },
  { title: "Sports Massage", desc: "Ash Chima's expertise in Russian sports massage and clinical conditions like frozen shoulder and thoracic outlet syndrome." },
  { title: "Soft Tissue / Myofascial Release", desc: "Breaks up adhesions and scar tissue limiting shoulder movement and causing chronic pain." },
  { title: "Functional Rehabilitation", desc: "Rotator cuff strengthening, scapular stabilization, and movement re-education to restore full function." },
  { title: "Cupping Therapy", desc: "Lifts and separates tissue to release deep shoulder tension — particularly effective for chronic impingement." },
  { title: "Acupuncture", desc: "Reduces pain and inflammation in shoulder structures — especially useful for chronic or resistant cases." },
];

export default function ShoulderPainPage() {
  return (
    <main>
      <section className="relative min-h-[440px] flex items-center text-white bg-cover bg-center"
        style={{ backgroundImage: `url('${HERO}')` }}>
        <div className="absolute inset-0 bg-[#0d3d6e]/78" />
        <div className="relative max-w-5xl mx-auto px-4 py-20">
          <p className="text-amber-400 font-semibold uppercase tracking-widest text-sm mb-3">Conditions We Treat</p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight max-w-2xl">Shoulder Pain Treatment in Seattle</h1>
          <p className="text-blue-100 text-lg mb-8 max-w-xl">From rotator cuff injuries to frozen shoulder — our team has the clinical background to diagnose and treat the full spectrum of shoulder conditions.</p>
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
            <p className="text-[#1A5FA8] font-semibold uppercase tracking-widest text-sm mb-2">What We Treat</p>
            <h2 className="text-3xl font-extrabold text-gray-900">Shoulder Conditions</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {conditions.map(c => (
              <div key={c.title} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-2">{c.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-[#1A5FA8] font-semibold uppercase tracking-widest text-sm mb-2">Treatment</p>
            <h2 className="text-3xl font-extrabold text-gray-900">How We Treat Shoulder Pain</h2>
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
          <h2 className="text-3xl font-extrabold mb-3">Get Your Shoulder Moving Again</h2>
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
