import { Star, CalendarCheck, Phone } from "lucide-react";

function BookBtn({ label = "Book My $149 Visit", className = "" }: { label?: string; className?: string }) {
  return (
    <a href="https://www.zocdoc.com" target="_blank" rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-white font-bold px-7 py-3.5 rounded-full transition-colors shadow-lg ${className}`}>
      <CalendarCheck size={18} />
      {label}
    </a>
  );
}

const reviews = [
  {
    name: "Sophie",
    source: "Google",
    stars: 5,
    service: "Chiropractic",
    text: "Dr. Chevigny was great! He made my back aches and migraines go away after two appointments. He understood my situation and created a plan that actually worked for me. All around great!",
  },
  {
    name: "Patient",
    source: "Google",
    stars: 5,
    service: "Chiropractic",
    text: "My neck has never felt better. After years of ignoring whiplash from a horse riding accident, I suffered from migraines, trouble sleeping, and feeling irritable until I came here. My back has made progress too — I have lumbar scoliosis — and I no longer have the sciatic pain that inhibited my work life. I have so much more energy now! Dr. Chevigny takes his time explaining the home exercises and why they benefit my specific condition.",
  },
  {
    name: "Christine P.",
    source: "Yelp",
    stars: 5,
    service: "Massage",
    text: "I come here for massage and it is always wonderful. They work out the kinks in my muscles and I feel so much better. The place is low key, the price is right, and the results speak for themselves.",
  },
  {
    name: "Patient",
    source: "Google",
    stars: 5,
    service: "Chiropractic",
    text: "Dr. John Chevigny has saved my back! I had a reoccurrence of sciatica and couldn't stand for more than a couple minutes due to extreme nerve pain in my leg. It's been less than a month and I'm almost back to 100%. Thank you! I'd totally recommend stopping in.",
  },
  {
    name: "Alyssa R.",
    source: "Google",
    stars: 5,
    service: "Chiropractic",
    text: "I am late in my pregnancy and have experienced severe lower back pain to the point where I could barely walk and was in constant pain. The massage therapists here have been so wonderful — working with me to treat my pain and making sure they're addressing my needs. It has helped SO much! They are all so sweet and have been super accommodating. I highly recommend going here!",
  },
  {
    name: "Patient",
    source: "Yelp",
    stars: 5,
    service: "Chiropractic",
    text: "I hurt my lower back to the point I couldn't walk — I was crawling on the floor to get everywhere. I wasn't getting any sleep at all because I couldn't get up once I was laying down. Through the divine chiropractic care of Dr. John I am way better than I was. You rock Dr. John!",
  },
  {
    name: "Patient",
    source: "Google",
    stars: 5,
    service: "Massage",
    text: "I have come now for almost 3 years, 26 times a year for deep tissue massage. The therapists here have brought me back into shape after several injuries. I'll be 75 this August, and my stuck points and pain have been eliminated. I feel 40!",
  },
  {
    name: "Patient",
    source: "Google",
    stars: 5,
    service: "Chiropractic",
    text: "Dr. Chevigny is very patient and direct. I like that he lets you explain what you're feeling thoroughly instead of rushing you through. My old chiropractor retired and I'm glad Dr. Chevigny gave me a similar thorough assessment. Great practice.",
  },
];

const stats = [
  { stat: "4.9★", label: "Average rating" },
  { stat: "200+", label: "Google reviews" },
  { stat: "15+", label: "Years serving Seattle" },
  { stat: "3 mo", label: "Massage wait list" },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(count)].map((_, i) => (
        <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="py-20 bg-[#0d3d6e] text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <p className="text-amber-400 font-semibold uppercase tracking-widest text-sm mb-3">Patient Reviews</p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">What Our Patients Say</h1>
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => <Star key={i} size={24} className="fill-amber-400 text-amber-400" />)}
          </div>
          <p className="text-blue-100 text-lg">4.9 / 5 across Google, Yelp & Facebook</p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 py-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map(s => (
            <div key={s.label}>
              <p className="text-3xl font-extrabold text-[#1A5FA8]">{s.stat}</p>
              <p className="text-gray-500 text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {reviews.map((r, i) => (
            <div key={i} className="break-inside-avoid bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <Stars count={r.stars} />
              <p className="text-gray-700 text-sm leading-relaxed mt-3 mb-4">"{r.text}"</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{r.name}</p>
                  <p className="text-xs text-gray-400">{r.source}</p>
                </div>
                <span className="bg-[#E8F4FB] text-[#1A5FA8] text-xs font-medium px-3 py-1 rounded-full">{r.service}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Leave a review CTA */}
      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-3">Been a Patient? Leave Us a Review</h3>
          <p className="text-gray-500 mb-6 text-sm">Your feedback helps other Seattle patients find the care they need.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="https://g.page/r/mindbodymedseattle/review" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#1A5FA8] hover:bg-[#134a85] text-white font-semibold px-6 py-3 rounded-full transition-colors">
              Leave a Google Review
            </a>
            <a href="https://www.yelp.com/biz/mindbody-med-seattle" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-700 font-semibold px-6 py-3 rounded-full border border-gray-200 transition-colors">
              Leave a Yelp Review
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0d3d6e] text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold mb-3">Ready to Experience the Difference?</h2>
          <p className="text-blue-100 mb-8">New patient evaluation + first treatment — $149. Join hundreds of satisfied Seattle patients.</p>
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
