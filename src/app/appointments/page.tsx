import { CalendarCheck, Phone, Clock } from "lucide-react";

export const metadata = {
  title: "Book an Appointment | MindBody Med Seattle",
  description: "Book an appointment at MindBody Med in Seattle's Ravenna neighborhood. Schedule online via ZocDoc or ChiroSpring, or call us at (206) 523-9000.",
  robots: { index: false, follow: false },
};

export default function AppointmentsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative bg-[#0d3d6e] text-white py-16 px-4 text-center overflow-hidden">
        <img src="/logo/mbm-icon.png" alt="" className="absolute top-6 right-6 w-[300px] h-[300px] opacity-90 hidden md:block" />
        <p className="text-amber-400 font-semibold uppercase tracking-widest text-sm mb-3">Appointments</p>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Book Your Visit</h1>
        <p className="text-blue-100 text-lg max-w-xl mx-auto">
          Choose whichever booking platform works best for you. Both connect directly to our schedule.
        </p>
      </section>

      {/* Booking options */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">

          {/* ZocDoc */}
          <div className="flex flex-col border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
            <div className="bg-[#E8F4FB] px-8 py-6 border-b border-gray-100">
              <p className="text-xs font-bold text-[#1A5FA8] uppercase tracking-widest mb-1">New Patients — Chiropractic &amp; Acupuncture</p>
              <h2 className="text-2xl font-extrabold text-gray-900">ZocDoc</h2>
            </div>
            <div className="flex flex-col flex-1 px-8 py-6 gap-4">
              <p className="text-gray-600 text-sm leading-relaxed">
                The fastest way to book a new chiropractic or acupuncture appointment. Browse real-time availability, select your provider, and confirm instantly.
              </p>
              <ul className="text-sm text-gray-500 space-y-1.5">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#1A5FA8] shrink-0" />Real-time availability</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#1A5FA8] shrink-0" />Insurance verification included</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#1A5FA8] shrink-0" />Appointment reminders via text &amp; email</li>
              </ul>
              <div className="mt-auto pt-4">
                <a
                  href="https://www.zocdoc.com/practice/mindbody-medicine-150405?isNewPatient=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#D97706] hover:bg-[#B45309] text-white font-bold px-6 py-3.5 rounded-full transition-colors w-full"
                >
                  <CalendarCheck size={18} />
                  Book via ZocDoc
                </a>
              </div>
            </div>
          </div>

          {/* ChiroSpring */}
          <div className="flex flex-col border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
            <div className="bg-[#E8F4FB] px-8 py-6 border-b border-gray-100">
              <p className="text-xs font-bold text-[#1A5FA8] uppercase tracking-widest mb-1">Returning Patients &amp; Follow-Up Visits</p>
              <h2 className="text-2xl font-extrabold text-gray-900">ChiroSpring</h2>
            </div>
            <div className="flex flex-col flex-1 px-8 py-6 gap-4">
              <p className="text-gray-600 text-sm leading-relaxed">
                Our patient portal for follow-up visits and returning patients. Request an appointment and our team will confirm your visit.
              </p>
              <ul className="text-sm text-gray-500 space-y-1.5">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#1A5FA8] shrink-0" />Access your patient records</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#1A5FA8] shrink-0" />Manage existing appointments</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#1A5FA8] shrink-0" />Submit intake forms online</li>
              </ul>
              <div className="mt-auto pt-4">
                <a
                  href="https://ca.clinicdr.com/website-forms/?uid=c3eefb8461dc258b225ab3a2339c0a172fcceeafae4458c06f292c829b7cf202&tg=m07"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#1A5FA8] hover:bg-[#154d8a] text-white font-bold px-6 py-3.5 rounded-full transition-colors w-full"
                >
                  <CalendarCheck size={18} />
                  Book via ChiroSpring
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Massage waitlist notice */}
      <section className="py-10 px-4 bg-amber-50 border-t border-amber-100">
        <div className="max-w-4xl mx-auto flex gap-4 items-start">
          <Clock size={22} className="text-amber-600 shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-amber-900 mb-1">A note about massage therapy</p>
            <p className="text-amber-800 text-sm leading-relaxed">
              Our massage appointments are in high demand and are currently booking about 3 months out. Need care sooner? Chiropractic and acupuncture appointments are available earlier. Massage clients and all other existing patients are also welcome to join our cancellation list for sooner openings.
            </p>
            <p className="text-amber-800 text-sm mt-2 font-medium">
              Massage appointments are not available to schedule online — please call the office to be added to the waitlist or cancellation list.
            </p>
          </div>
        </div>
      </section>

      {/* Phone fallback */}
      <section className="py-10 bg-gray-50 border-t border-gray-100 text-center px-4">
        <p className="text-gray-700 font-medium mb-1">Don&apos;t see a time that works?</p>
        <p className="text-gray-500 text-sm mb-4">Call the office for the most up-to-date availability.</p>
        <a
          href="tel:2065239000"
          className="inline-flex items-center gap-2 text-[#1A5FA8] font-bold text-lg hover:underline"
        >
          <Phone size={20} />
          (206) 523-9000
        </a>
        <p className="text-gray-400 text-xs mt-2">Mon–Fri: 8:00am–6:00pm</p>
      </section>
    </main>
  );
}
