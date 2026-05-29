export default function RestorationFramework() {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 mt-8">

      <p className="text-slate-500 uppercase tracking-widest text-sm mb-4">
        Organizational Philosophy
      </p>

      <h2 className="text-3xl font-semibold mb-6">
        TRSP Restoration Outcomes Framework
      </h2>

      <p className="text-slate-300 mb-8">
        The goal is not simply improved exercise performance.
        The goal is restored participation in life.
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
            <li>Movement Assessments</li>
          </ul>
        </div>

        <div className="border border-slate-800 rounded-2xl p-6 hover:border-[#d8a066] transition-all">
          <h3 className="text-xl font-semibold mb-4">
            Operational Outcomes
          </h3>

          <ul className="text-slate-400 space-y-2">
            <li>Attendance</li>
            <li>Retention</li>
            <li>Program Completion</li>
            <li>Assessment Completion</li>
            <li>Participant Engagement</li>
          </ul>
        </div>

        <div className="border border-slate-800 rounded-2xl p-6 hover:border-[#d8a066] transition-all">
          <h3 className="text-xl font-semibold mb-4">
            Restoration Outcomes
          </h3>

          <ul className="text-slate-400 space-y-2">
            <li>Return to Hiking</li>
            <li>Return to Gardening</li>
            <li>Return to Work</li>
            <li>Return to Travel</li>
            <li>Family Activities</li>
            <li>Restored Independence</li>
          </ul>
        </div>

      </div>

      <div className="mt-8 border border-[#d8a066] rounded-2xl p-8">

        <p className="text-[#d8a066] uppercase tracking-widest text-sm mb-3">
          Core Restoration Question
        </p>

        <h3 className="text-3xl font-semibold mb-4">
          What are you hoping to get back to?
        </h3>

        <p className="text-slate-400">
          Restoration goals are participant-defined and may include
          meaningful activities, relationships, experiences, or roles
          that cancer has disrupted.
        </p>

      </div>

      <div className="mt-8 border border-slate-800 rounded-2xl p-8">

        <h3 className="text-2xl font-semibold mb-4">
          The TRSP Restoration Model
        </h3>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center">

          <div>
            <div className="text-lg font-semibold">
              Survive
            </div>
          </div>

          <div className="text-[#d8a066] text-2xl">
            →
          </div>

          <div>
            <div className="text-lg font-semibold">
              Recover
            </div>
          </div>

          <div className="text-[#d8a066] text-2xl">
            →
          </div>

          <div>
            <div className="text-lg font-semibold">
              Restore
            </div>
          </div>

          <div className="text-[#d8a066] text-2xl">
            →
          </div>

          <div>
            <div className="text-lg font-semibold">
              Thrive
            </div>
          </div>

        </div>

      </div>

    </div>
  )
}