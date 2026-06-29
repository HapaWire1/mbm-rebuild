import Link from "next/link";
import { CalendarCheck, Phone, CheckCircle, Sun, CloudRain, ArrowRight } from "lucide-react";

export const metadata = {
  title: { absolute: "Red Light Therapy for Seasonal Depression in Seattle | MindBody Med" },
  description: "Seattle gets 200+ cloudy days per year. Red light therapy (photobiomodulation) at MindBody Med's Prism Light Pod can help with SAD symptoms, low energy, and winter blues.",
};

function BookBtn({ label = "Book a Session", className = "" }: { label?: string; className?: string }) {
  return (
    <a href="/appointments-v2"
      className={`inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-white font-bold px-7 py-3.5 rounded-full transition-colors shadow-lg ${className}`}>
      <CalendarCheck size={18} />
      {label}
    </a>
  );
}

const sadSymptoms = [
  "Low energy and persistent fatigue",
  "Low mood or feeling \"flat\" for weeks at a time",
  "Difficulty concentrating or motivating",
  "Increased sleep but still waking unrefreshed",
  "Carbohydrate cravings and weight gain",
  "Social withdrawal and reduced interest in activities",
];

const rltVsSadLamp = [
  { feature: "Coverage", sadLamp: "Face only", rlt: "Full body — 17,000 LEDs" },
  { feature: "Session length", sadLamp: "20–30 min", rlt: "15 min" },
  { feature: "Wavelengths used", sadLamp: "Broad spectrum white light", rlt: "Targeted 660nm + 850nm" },
  { feature: "Cellular mechanism", sadLamp: "Circadian rhythm via eyes", rlt: "Mitochondrial ATP + serotonin pathway" },
  { feature: "Evidence for SAD", sadLamp: "Strong (decades of research)", rlt: "Emerging — promising early trials" },
  { feature: "Additional benefits", sadLamp: "Limited", rlt: "Inflammation, pain, recovery, skin" },
];

const faqs = [
  {
    q: "Is red light therapy the same as a SAD lamp?",
    a: "No — they work differently. SAD lamps use broad-spectrum white light to regulate circadian rhythm through the eyes. Red light therapy uses targeted 660nm and 850nm wavelengths to stimulate mitochondria throughout the body. They complement each other but are not interchangeable.",
  },
  {
    q: "How many sessions would I need for SAD symptoms?",
    a: "For seasonal mood support, most people use 2–3 sessions per week during fall and winter. Many patients report noticeable energy improvements within 2–3 weeks of consistent use.",
  },
  {
    q: "When in the year should I start?",
    a: "Seattle's light deprivation typically intensifies from October through February. Starting sessions in late September or early October — before symptoms peak — is more effective than waiting until you're already in a mood trough.",
  },
  {
    q: "Is there research supporting RLT for depression?",
    a: "Early research is promising. A 2019 study published in JMIR Mental Health found significant reductions in depression scores following transcranial near-infrared light therapy. A 2021 review in Photobiomodulation, Photomedicine, and Laser Surgery identified multiple mechanisms by which RLT may support mood regulation, including effects on serotonin production and mitochondrial function in brain tissue.",
  },
];

export default function RLTSeasonalDepressionPage() {
  return (
    <main>

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="bg-[#0d3d6e] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-amber-400 font-semibold uppercase tracking-widest text-sm mb-3">Red Light Therapy · Seattle</p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
            Seattle Gets 200+ Cloudy Days a Year.<br className="hidden md:block" /> Your Body Notices.
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-8">
            Seasonal Affective Disorder (SAD) and winter blues affect more Seattleites than most people realize. Red light therapy — specifically photobiomodulation — is an emerging, evidence-backed tool for managing the symptoms.
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

      {/* ── Seattle SAD Context ───────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-[#1A5FA8] font-semibold uppercase tracking-widest text-sm mb-2">The Seattle Reality</p>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Why SAD Hits Harder Here</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Seattle averages only 152 sunny days per year — well below the national average of 205. From October through March, many days see less than 2 hours of usable sunlight. The body's response to this sustained light deficit is measurable and physiological: reduced serotonin production, disrupted circadian rhythms, and suppressed mitochondrial energy output.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Seasonal Affective Disorder affects an estimated 1–2% of the population with a clinical diagnosis, but a much larger group — up to 20% — experiences subclinical "winter blues": lower energy, worse mood, and reduced motivation from roughly October to April.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Seattle's latitude (47.6°N) places it in the same range as cities with well-documented seasonal mood challenges: Oslo, Copenhagen, and Calgary. The Pacific cloud cover amplifies the effect compared to cities at the same latitude with clearer winters.
            </p>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-4 bg-amber-50 rounded-xl p-5 border border-amber-100">
              <CloudRain size={32} className="text-amber-500 shrink-0" />
              <div>
                <p className="font-bold text-gray-900">152 sunny days/year</p>
                <p className="text-gray-500 text-sm">Seattle average — 53 fewer than the US average</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-amber-50 rounded-xl p-5 border border-amber-100">
              <Sun size={32} className="text-amber-500 shrink-0" />
              <div>
                <p className="font-bold text-gray-900">October–March</p>
                <p className="text-gray-500 text-sm">Peak window for SAD and winter blues symptoms</p>
              </div>
            </div>
            <div className="bg-[#E8F4FB] rounded-xl p-5 border border-blue-100">
              <p className="font-bold text-gray-900 mb-1">Up to 20% affected</p>
              <p className="text-gray-500 text-sm">
                Subclinical seasonal mood changes affect a large portion of the Pacific Northwest population — most go unaddressed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── What is SAD ──────────────────────────────────────── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-[#1A5FA8] font-semibold uppercase tracking-widest text-sm mb-2">Understanding SAD</p>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Common Symptoms of Seasonal Affective Disorder</h2>
          <p className="text-gray-600 mb-8 leading-relaxed max-w-2xl">
            SAD is a subtype of depression that follows a seasonal pattern — typically worsening in fall and winter and improving in spring. The symptoms are real, physiological, and respond to light-based interventions.
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {sadSymptoms.map(s => (
              <div key={s} className="flex items-start gap-3 bg-white rounded-lg px-5 py-3.5 border border-gray-100">
                <CheckCircle size={16} className="text-[#1A5FA8] shrink-0 mt-0.5" />
                <span className="text-gray-700 text-sm">{s}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-400 text-xs mt-4">
            If you're experiencing severe or persistent symptoms, speak with a licensed mental health professional. Red light therapy is a complementary intervention, not a replacement for clinical care.
          </p>
        </div>
      </section>

      {/* ── How RLT Helps ────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-[#1A5FA8] font-semibold uppercase tracking-widest text-sm mb-2">The Mechanism</p>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">How Photobiomodulation May Help SAD</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Traditional SAD lamps work through the eyes to regulate circadian rhythm. Red light therapy — photobiomodulation — works differently: it acts directly on mitochondria throughout the body, stimulating ATP production, reducing oxidative stress, and supporting the serotonin-melatonin pathway via a distinct mechanism.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Mitochondrial energy production",
                desc: "660nm and 850nm wavelengths are absorbed by cytochrome c oxidase in mitochondria, boosting ATP output. Low cellular energy is a key driver of fatigue and low mood in SAD.",
              },
              {
                title: "Serotonin pathway support",
                desc: "Emerging research suggests photobiomodulation influences serotonin synthesis and receptor sensitivity — the same neurotransmitter pathway targeted by antidepressants and bright light therapy.",
              },
              {
                title: "Reduced systemic inflammation",
                desc: "Chronic low-grade inflammation is elevated in depression. Red light therapy is one of the most consistent anti-inflammatory interventions in the photomedicine literature.",
              },
            ].map(m => (
              <div key={m.title} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-2 text-sm">{m.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RLT vs SAD Lamp ──────────────────────────────────── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-[#1A5FA8] font-semibold uppercase tracking-widest text-sm mb-2 text-center">Comparison</p>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">Red Light Therapy vs. SAD Lamp</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#0d3d6e] text-white">
                  <th className="text-left px-5 py-3 font-semibold">Feature</th>
                  <th className="text-left px-5 py-3 font-semibold">SAD Lamp</th>
                  <th className="text-left px-5 py-3 font-semibold text-amber-300">Prism Light Pod (RLT)</th>
                </tr>
              </thead>
              <tbody>
                {rltVsSadLamp.map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-5 py-3 font-medium text-gray-900">{row.feature}</td>
                    <td className="px-5 py-3 text-gray-500">{row.sadLamp}</td>
                    <td className="px-5 py-3 text-[#1A5FA8] font-medium">{row.rlt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-400 text-xs mt-3 text-center">
            These modalities are complementary — many patients use both for maximum effect.
          </p>
        </div>
      </section>

      {/* ── The Prism Light Pod ───────────────────────────────── */}
      <section className="py-16 bg-[#0d3d6e] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-amber-400 font-semibold uppercase tracking-widest text-sm mb-3">At MindBody Med Seattle</p>
          <h2 className="text-3xl font-extrabold mb-4">The Prism Light Pod — Seattle's Only Full-Body RLT Bed</h2>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-10">
            MindBody Med in Ravenna houses a Prism Light Pod — an FDA-registered full-body red light therapy enclosure with 17,000 LEDs providing 360° coverage in a single 15-minute session. It's the same device used by professional sports franchises worldwide.
          </p>
          <div className="grid sm:grid-cols-3 gap-6 mb-10">
            {[
              { stat: "17,000", label: "Individual LEDs" },
              { stat: "15 min", label: "Per session" },
              { stat: "360°", label: "Full body coverage" },
            ].map(s => (
              <div key={s.label} className="bg-white/10 rounded-xl p-5 border border-white/10">
                <p className="text-3xl font-extrabold text-amber-400">{s.stat}</p>
                <p className="text-blue-100 text-sm mt-1">{s.label}</p>
              </div>
            ))}
          </div>
          <Link href="/services/red-light-therapy"
            className="inline-flex items-center gap-2 text-amber-400 font-bold hover:text-amber-300 transition-colors">
            Learn more about the Prism Light Pod <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-extrabold text-gray-900 text-center mb-10">Common Questions</h2>
          <div className="space-y-5">
            {faqs.map(f => (
              <div key={f.q} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
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
          <h2 className="text-3xl font-extrabold mb-3">Don't Wait Out Another Seattle Winter</h2>
          <p className="text-blue-100 mb-8">
            Book a Prism Light Pod session at MindBody Med in Ravenna. 15 minutes. No prescription required.
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
