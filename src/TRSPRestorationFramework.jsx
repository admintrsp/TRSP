export default function RestorationFramework() {
  return (
    <div className="bg-white border border-[#e4d8c7] rounded-2xl p-8 mt-8 shadow-[0_18px_50px_rgba(7,31,58,0.07)]">

      <p className="text-[#c98b2c] uppercase tracking-[0.24em] text-sm mb-4">
        Organizational Philosophy
      </p>

      <h2 className="font-serif text-3xl md:text-4xl font-normal mb-6 text-[#071f3a]">
        TRSP Restoration Outcomes Framework
      </h2>

      <p className="text-[#334155] mb-8 leading-relaxed">
        The goal is not simply improved exercise performance.
        The goal is restored participation in life.
      </p>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="border border-[#e4d8c7] rounded-2xl p-6 bg-[#f8f5ef] hover:border-[#c98b2c] transition-all">
          <h3 className="font-serif text-2xl mb-4 text-[#071f3a]">
            Clinical Outcomes
          </h3>

          <ul className="text-[#4b5563] space-y-2">
            <li>FACIT-F</li>
            <li>PROMIS Fatigue</li>
            <li>PROMIS Physical Function</li>
            <li>Movement Assessments</li>
          </ul>
        </div>

        <div className="border border-[#e4d8c7] rounded-2xl p-6 bg-[#f8f5ef] hover:border-[#c98b2c] transition-all">
          <h3 className="font-serif text-2xl mb-4 text-[#071f3a]">
            Operational Outcomes
          </h3>

          <ul className="text-[#4b5563] space-y-2">
            <li>Attendance</li>
            <li>Retention</li>
            <li>Program Completion</li>
            <li>Assessment Completion</li>
            <li>Participant Engagement</li>
          </ul>
        </div>

        <div className="border border-[#e4d8c7] rounded-2xl p-6 bg-[#f8f5ef] hover:border-[#c98b2c] transition-all">
          <h3 className="font-serif text-2xl mb-4 text-[#071f3a]">
            Restoration Outcomes
          </h3>

          <ul className="text-[#4b5563] space-y-2">
            <li>Return to Hiking</li>
            <li>Return to Gardening</li>
            <li>Return to Work</li>
            <li>Return to Travel</li>
            <li>Family Activities</li>
            <li>Restored Independence</li>
          </ul>
        </div>

      </div>

      <div className="mt-8 border border-[#c98b2c] rounded-2xl p-8 bg-[#071f3a] text-white">

        <p className="text-[#d8a066] uppercase tracking-widest text-sm mb-3">
          Core Restoration Question
        </p>

        <h3 className="font-serif text-3xl font-normal mb-4 text-white">
          What are you hoping to get back to?
        </h3>

        <p className="text-white/75">
          Restoration goals are participant-defined and may include
          meaningful activities, relationships, experiences, or roles
          that cancer has disrupted.
        </p>

      </div>

      <div className="mt-8 border border-[#e4d8c7] rounded-2xl p-8 bg-[#f8f5ef]">

        <h3 className="font-serif text-3xl mb-4 text-[#071f3a]">
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
