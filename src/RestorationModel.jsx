export default function RestorationModel() {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 mt-8">

      <p className="text-slate-500 uppercase tracking-widest text-sm mb-4">
        Organizational Philosophy
      </p>

      <h2 className="text-3xl font-semibold mb-6">
        The TRSP Restoration Model
      </h2>

      <p className="text-slate-300 mb-8">
        Cancer survivorship is not simply about surviving treatment.
        It is about restoring participation in life.
      </p>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="border border-slate-800 rounded-2xl p-6 hover:border-[#d8a066] transition-all">
          <h3 className="text-xl font-semibold mb-4">
            Clinical Outcomes
          </h3>

          <ul className="text-slate-400 space-y-2">
            <li>FACIT-F</li>
            <li>PROMIS Fatigue</li>
            <li>PROMIS Physical Function</li>
          </ul>
        </div>

        <div className="border border-slate-800 rounded-2xl p-6 hover:border-[#d8a066] transition-all">
          <h3 className="text-xl font-semibold mb-4">
            Operational Outcomes
          </h3>

          <ul className="text-slate-400 space-y-2">
            <li>Attendance</li>
            <li>Retention</li>
            <li>Completion Rate</li>
            <li>Assessment Compliance</li>
          </ul>
        </div>

        <div className="border border-slate-800 rounded-2xl p-6 hover:border-[#d8a066] transition-all">
          <h3 className="text-xl font-semibold mb-4">
            Life Restoration Outcomes
          </h3>

          <ul className="text-slate-400 space-y-2">
            <li>Return to Hiking</li>
            <li>Return to Gardening</li>
            <li>Return to Work</li>
            <li>Return to Travel</li>
            <li>Return to Family Activities</li>
            <li>Restored Independence</li>
          </ul>
        </div>

      </div>

      <div className="mt-8 border border-[#d8a066] rounded-2xl p-6">

        <p className="text-[#d8a066] uppercase tracking-widest text-sm mb-3">
          Core Question
        </p>

        <h3 className="text-2xl font-semibold">
          "What are you hoping to get back to?"
        </h3>

      </div>

    </div>
  )
}