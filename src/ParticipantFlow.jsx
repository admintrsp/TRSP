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
    <div className="bg-white border border-[#e4d8c7] rounded-2xl p-8 mb-8 shadow-[0_18px_50px_rgba(7,31,58,0.07)]">

      <p className="text-[#c98b2c] uppercase tracking-[0.24em] text-sm mb-4">
        Participant Restoration Pathway
      </p>

      <h2 className="font-serif text-3xl md:text-4xl font-normal mb-10 text-[#071f3a]">
        Survivorship Flow Architecture
      </h2>

      <div className="space-y-6">

        {stages.map((stage, index) => (

          <div key={stage.title}>

            <div
              onClick={() => toggleNode(index)}
              className="border border-[#e4d8c7] rounded-2xl p-6 bg-[#f8f5ef] hover:border-[#c98b2c] transition-all cursor-pointer"
            >

              <div className="flex items-start justify-between">

                <div>
                  <h3 className="font-serif text-2xl text-[#071f3a]">
                    {stage.title}
                  </h3>

                  <p className="text-[#4b5563] mt-2">
                    {stage.description}
                  </p>
                </div>

                <div className="text-[#c98b2c] text-sm">
                  0{index + 1}
                </div>

              </div>

              {/* EXPANDED CONTENT */}

              {openIndex === index && stage.details && (

                <div className="mt-8 border-t border-[#e4d8c7] pt-6 grid md:grid-cols-2 gap-6">

                  <div>
                    <h4 className="text-lg font-semibold mb-3">
                      Forms
                    </h4>

                    <ul className="space-y-2 text-[#4b5563]">
                      {stage.details.forms.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>


                  <div>
                    <h4 className="text-lg font-semibold mb-3">
                      SOPs
                    </h4>

                    <ul className="space-y-2 text-[#4b5563]">
                      {stage.details.sops.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>


                  <div>
                    <h4 className="text-lg font-semibold mb-3">
                      Systems
                    </h4>

                    <ul className="space-y-2 text-[#4b5563]">
                      {stage.details.systems.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>


                  <div>
                    <h4 className="text-lg font-semibold mb-3">
                      Metrics
                    </h4>

                    <ul className="space-y-2 text-[#4b5563]">
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
                <div className="w-px h-8 bg-[#c98b2c]/40"></div>
              </div>
            )}

          </div>

        ))}

      </div>

    </div>
  )
}
