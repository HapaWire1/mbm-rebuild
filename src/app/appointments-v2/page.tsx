import { CalendarCheck, Phone, Clock, UserPlus, RefreshCw, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Book an Appointment | MindBody Med Seattle",
  description: "Book an appointment at MindBody Med in Seattle's Ravenna neighborhood.",
};

export default function AppointmentsV2Page() {
  return (
    <main>

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="bg-[#0d3d6e] text-white py-16 px-4 text-center">
        <p className="text-amber-400 font-semibold uppercase tracking-widest text-sm mb-3">Appointments</p>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Let's Get You Booked</h1>
        <p className="text-blue-100 text-lg max-w-lg mx-auto">
          One quick question before we send you to the right place.
        </p>
      </section>

      {/* ── The Question ─────────────────────────────────────── */}
      <section className="bg-gray-50 py-14 px-4 border-b border-gray-200">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">
            Have you been seen at MindBody Med before?
          </p>
          <p className="text-gray-500 text-sm">Your answer determines which booking system to use.</p>
        </div>
      </section>

      {/* ── Two Cards ────────────────────────────────────────── */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">

          {/* NEW PATIENT */}
          <a
            href="https://www.zocdoc.com/practice/mindbody-medicine-150405?isNewPatient=true"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col rounded-2xl overflow-hidden border-2 border-amber-400 shadow-md hover:shadow-xl transition-shadow bg-white"
          >
            <div className="bg-amber-400 px-8 py-5 flex items-center gap-3">
              <UserPlus size={26} className="text-white shrink-0" />
              <div>
                <p className="text-white font-black text-xl uppercase tracking-wide leading-tight">New Patient</p>
                <p className="text-amber-100 text-xs font-medium">First time at MindBody Med</p>
              </div>
            </div>
            <div className="flex flex-col flex-1 px-8 py-6 gap-5">
              <p className="text-gray-700 font-semibold text-base leading-relaxed">
                You have <span className="text-amber-600 font-black">never been seen</span> at MindBody Med — this is your first appointment.
              </p>
              <ul className="space-y-2.5 text-sm text-gray-600">
                {[
                  "Browse real-time availability instantly",
                  "Insurance verification included",
                  "Reminders via text & email",
                  "Confirm your visit in under 2 minutes",
                ].map(item => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0 mt-1.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-2">
                <div className="flex items-center justify-between bg-amber-400 group-hover:bg-amber-500 transition-colors text-white font-black px-6 py-4 rounded-xl">
                  <span className="text-lg">Book as a New Patient</span>
                  <ArrowRight size={22} />
                </div>
                <p className="text-center text-xs text-gray-400 mt-2">via ZocDoc</p>
              </div>
            </div>
          </a>

          {/* RETURNING PATIENT */}
          <a
            href="https://ca.clinicdr.com/website-forms/?uid=c3eefb8461dc258b225ab3a2339c0a172fcceeafae4458c06f292c829b7cf202&tg=m07"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col rounded-2xl overflow-hidden border-2 border-[#1A5FA8] shadow-md hover:shadow-xl transition-shadow bg-white"
          >
            <div className="bg-[#1A5FA8] px-8 py-5 flex items-center gap-3">
              <RefreshCw size={26} className="text-white shrink-0" />
              <div>
                <p className="text-white font-black text-xl uppercase tracking-wide leading-tight">Returning Patient</p>
                <p className="text-blue-200 text-xs font-medium">Follow-up or existing patient</p>
              </div>
            </div>
            <div className="flex flex-col flex-1 px-8 py-6 gap-5">
              <p className="text-gray-700 font-semibold text-base leading-relaxed">
                You have <span className="text-[#1A5FA8] font-black">already been seen</span> at MindBody Med and are booking a follow-up or additional visit.
              </p>
              <ul className="space-y-2.5 text-sm text-gray-600">
                {[
                  "Access your existing patient records",
                  "Request follow-up appointments",
                  "Submit intake & health history forms",
                  "Manage and update your visits",
                ].map(item => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1A5FA8] shrink-0 mt-1.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-2">
                <div className="flex items-center justify-between bg-[#1A5FA8] group-hover:bg-[#154d8a] transition-colors text-white font-black px-6 py-4 rounded-xl">
                  <span className="text-lg">Book as a Returning Patient</span>
                  <ArrowRight size={22} />
                </div>
                <p className="text-center text-xs text-gray-400 mt-2">via ChiroSpring</p>
              </div>
            </div>
          </a>

        </div>
      </section>

      {/* ── Not Sure? ────────────────────────────────────────── */}
      <section className="py-8 px-4 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-gray-100 shadow-sm px-8 py-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
          <div>
            <p className="font-bold text-gray-900 mb-1">Not sure which to use?</p>
            <p className="text-gray-500 text-sm">If you've never been to our clinic, you're a new patient. When in doubt, call us — we'll get you sorted in 30 seconds.</p>
          </div>
          <a href="tel:2065239000"
            className="shrink-0 inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-700 text-white font-bold px-6 py-3 rounded-full transition-colors text-sm whitespace-nowrap">
            <Phone size={16} />
            (206) 523-9000
          </a>
        </div>
      </section>

      {/* ── Massage Notice ───────────────────────────────────── */}
      <section className="py-10 px-4 bg-amber-50 border-t border-amber-100">
        <div className="max-w-4xl mx-auto flex gap-4 items-start">
          <Clock size={22} className="text-amber-600 shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-amber-900 mb-1">A note about massage therapy</p>
            <p className="text-amber-800 text-sm leading-relaxed">
              Massage appointments are in high demand and currently booking about 3 months out. Chiropractic and acupuncture appointments are available sooner. Massage clients are welcome to join our cancellation list for earlier openings.
            </p>
            <p className="text-amber-800 text-sm mt-2 font-medium">
              Massage is not available to book online — please call the office to be added to the waitlist.
            </p>
          </div>
        </div>
      </section>

      {/* ── Phone Fallback ───────────────────────────────────── */}
      <section className="py-10 bg-white border-t border-gray-100 text-center px-4">
        <p className="text-gray-500 text-sm mb-1">Prefer to talk to someone?</p>
        <a href="tel:2065239000"
          className="inline-flex items-center gap-2 text-[#1A5FA8] font-bold text-lg hover:underline">
          <Phone size={20} />
          (206) 523-9000
        </a>
        <p className="text-gray-400 text-xs mt-2">Mon–Fri: 8:00am–6:00pm</p>
      </section>

    </main>
  );
}
