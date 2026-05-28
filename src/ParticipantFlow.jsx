import { useState } from 'react'

const stages = [
  {
    title: 'Inquiry',
    description: 'Initial contact and interest',
  },

  {
    title: 'Application',
    description: 'Participant intake and onboarding',
  },

  {
    title: 'Medical Clearance',
    description: 'Ensure safe participation',
  },

  {
    title: 'Baseline Assessment',
    description: 'FACIT, PROMIS, movement screening',

    details: {
      forms: [
        'FACIT-F',
        'PROMIS',
        'Intake Questionnaire',
      ],

      sops: [
        'Assessment Workflow SOP',
        'Data Entry Procedure',
      ],

      systems: [
        'Google Forms',
        'Google Sheets',
        'Outcomes Dashboard',
      ],

      metrics: [
        'Completion Rate',
        'Reassessment Adherence',
      ],
    },
  },

  {
    title: 'Program Placement',
    description: 'Determine appropriate support pathway',
  },

  {
    title: 'Coaching + Training',
    description: 'Guided survivorship restoration',
  },

  {
    title: 'Reassessment',
    description: 'Track outcomes and progression',
  },

  {
    title: 'Long-Term Community',
    description: 'Sustained support and reintegration',
  },
]

export default function ParticipantFlow() {

  const [openIndex, setOpenIndex] = useState(null)

  const toggleNode = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 mb-8">

      <p className="text-slate-500 uppercase tracking-widest text-sm mb-4">
        Participant Restoration Pathway
      </p>

      <h2 className="text-3xl font-semibold mb-10">
        Survivorship Flow Architecture
      </h2>

      <div className="space-y-6">

        {stages.map((stage, index) => (

          <div key={stage.title}>

            <div
              onClick={() => toggleNode(index)}
              className="border border-slate-800 rounded-2xl p-6 bg-slate-950 hover:border-[#d8a066] transition-all cursor-pointer"
            >

              <div className="flex items-start justify-between">

                <div>
                  <h3 className="text-2xl font-semibold">
                    {stage.title}
                  </h3>

                  <p className="text-slate-400 mt-2">
                    {stage.description}
                  </p>
                </div>

                <div className="text-slate-600 text-sm">
                  0{index + 1}
                </div>

              </div>

              {/* EXPANDED CONTENT */}

              {openIndex === index && stage.details && (

                <div className="mt-8 border-t border-slate-800 pt-6 grid md:grid-cols-2 gap-6">

                  <div>
                    <h4 className="text-lg font-semibold mb-3">
                      Forms
                    </h4>

                    <ul className="space-y-2 text-slate-400">
                      {stage.details.forms.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>


                  <div>
                    <h4 className="text-lg font-semibold mb-3">
                      SOPs
                    </h4>

                    <ul className="space-y-2 text-slate-400">
                      {stage.details.sops.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>


                  <div>
                    <h4 className="text-lg font-semibold mb-3">
                      Systems
                    </h4>

                    <ul className="space-y-2 text-slate-400">
                      {stage.details.systems.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>


                  <div>
                    <h4 className="text-lg font-semibold mb-3">
                      Metrics
                    </h4>

                    <ul className="space-y-2 text-slate-400">
                      {stage.details.metrics.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>

                </div>

              )}

            </div>

            {index < stages.length - 1 && (
              <div className="flex justify-center py-2">
                <div className="w-px h-8 bg-slate-800"></div>
              </div>
            )}

          </div>

        ))}

      </div>

    </div>
  )
}