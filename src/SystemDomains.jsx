import { useState } from 'react'

const domains = [
  {
    title: 'Assessments',

    purpose:
      'Build evidence-informed survivorship outcomes infrastructure.',

    links: [
      'FACIT-F Workflow',
      'PROMIS Assessments',
      'Assessment SOP',
      'Reassessment Cadence',
      'Outcomes Tracking Sheet',
    ],
  },

  {
    title: 'Coaching',

    purpose:
      'Develop survivorship-specific coaching systems and progression.',

    links: [
      'Coaching Standards',
      'Session Structure',
      'Participant Progression',
      'Exercise Modifications',
      'Coach Development Pathway',
    ],
  },

  {
    title: 'Operations',

    purpose:
      'Create sustainable organizational systems and workflows.',

    links: [
      'Intake Workflow',
      'Participant Tracker',
      'Waiver Management',
      'Communication Templates',
      'Scheduling Systems',
    ],
  },

  {
    title: 'Partnerships',

    purpose:
      'Develop community and clinical referral relationships.',

    links: [
      'Oncology Relationships',
      'Physical Therapy Connections',
      'Community Outreach',
      'Referral Pipeline',
      'Partnership SOP',
    ],
  },

  {
    title: 'Board Governance',

    purpose:
      'Maintain healthy organizational oversight and strategic guidance.',

    links: [
      'Board Agendas',
      'Strategic Planning',
      'Financial Oversight',
      'Governance SOPs',
      'Meeting Cadence',
    ],
  },
]

export default function SystemDomains() {

  const [openIndex, setOpenIndex] = useState(null)

  const toggleDomain = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 mt-8">

      <p className="text-slate-500 uppercase tracking-widest text-sm mb-4">
        Operational Architecture
      </p>

      <h2 className="text-3xl font-semibold mb-10">
        Expandable System Domains
      </h2>

      <div className="space-y-4">

        {domains.map((domain, index) => (

          <div
            key={domain.title}
className="border border-slate-800 hover:border-[#d8a066] transition-all rounded-2xl overflow-hidden"          >

            <button
              onClick={() => toggleDomain(index)}
              className="w-full text-left p-6 bg-slate-950 hover:bg-slate-900 transition-all"
            >

              <div className="flex items-center justify-between">

                <div>

                  <h3 className="text-2xl font-semibold">
                    {domain.title}
                  </h3>

                  <p className="text-slate-400 mt-2">
                    {domain.purpose}
                  </p>

                </div>

                <div className="text-slate-500 text-2xl">
                  {openIndex === index ? '−' : '+'}
                </div>

              </div>

            </button>

            {openIndex === index && (

              <div className="border-t border-slate-800 bg-slate-900 p-6">

                <h4 className="text-lg font-semibold mb-4">
                  Operational Links
                </h4>

                <div className="grid md:grid-cols-2 gap-4">

                  {domain.links.map((link) => (

                    <div
                      key={link}
                      className="border border-slate-800 rounded-xl p-4 hover:border-[#d8a066] transition-all cursor-pointer"
                    >
                      <p className="text-slate-300">
                        {link}
                      </p>
                    </div>

                  ))}

                </div>

              </div>

            )}

          </div>

        ))}

      </div>

    </div>
  )
}