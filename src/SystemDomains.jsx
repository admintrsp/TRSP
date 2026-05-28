import { useState } from 'react'

const domains = [
  {
    title: 'Assessments',

    purpose:
      'Build evidence-informed survivorship outcomes infrastructure.',

links: [
    {
  name: 'Participant Readiness Questionnaire (PAR-Q)',
  url: 'https://docs.google.com/document/d/1TLUh-ywz6qYGzjAelkOV_k4iyl3LzG30uZfAlKFr2gk/edit?usp=sharing&ouid=117171131327816663431&rtpof=true&sd=true',
  status: 'complete',
},
  {
    name: 'FACIT-F Form',
    url: 'https://docs.google.com/document/d/1xoxxlZ7A9vuEGXcxdJmhwXHpisrqevGR/edit?usp=sharing&ouid=117171131327816663431&rtpof=true&sd=true',
  },

  {
    name: 'FACIT License Agreement',
    url: 'https://drive.google.com/file/d/17R1vSFOiPbaXEfhlVweCR1Z7qYEBoGuR/view?usp=drive_link'
  },

  {
    name: 'TRSP Participant Baseline Questionnaire',
    url: 'https://docs.google.com/forms/d/e/1FAIpQLSeIDHAyzslSeibxRDzmsv8Iihvb48GKp2Dm_BU9uXv_X7k_DQ/viewform?usp=sharing&ouid=117171131327816663431&rtpof=true&sd=true',
  },

  {
    name: 'Assessment SOP',
    url: 'https://google.com',
  },

],
},

{
  title: 'Coaching', 
    purpose:
      'Develop survivorship-specific coaching systems and progression.',

    links: [
      {
      name: 'Training Philosophy + Safety Framework',
      url: 'https://docs.google.com/document/d/14jDb0V3AzEHgth9OF7JG9-CGM2uCpXr77cCPdgw-ZPs/edit?usp=sharing&ouid=117171131327816663431&rtpof=true&sd=true',
      status: 'operational',
    },
    ],
  },

  {
    title: 'Operations',

    purpose:
      'Create sustainable organizational systems and workflows.',

    links: [
        {
  name: 'Participant Operations Hub',
  url: 'https://docs.google.com/spreadsheets/d/1Hp3tjcPxWeE81ZWiAHah9HgqDcvZGu49/edit?usp=sharing&ouid=117171131327816663431&rtpof=true&sd=true ',
  status: 'operational',
},
{
  name: 'Participant Program Guide',
  url: 'https://docs.google.com/document/d/13wzyVojbp23SX_74jOP8RdGXw2tUsDCOlNukt5UhInE/edit?usp=sharing&ouid=117171131327816663431&rtpof=true&sd=true',
  status: 'operational',
},
{
  name: 'Participant Intake Checklist',
  url: 'https://docs.google.com/document/d/1ZG0ghmoRFfgCMHGLRV8_bfZ24ruFo4epjCjRJ4fppec/edit?usp=sharing&ouid=117171131327816663431&rtpof=true&sd=true',
  status: 'development',
},
{
  name: 'TRSP Participant Welcome Guide',
  url: 'https://docs.google.com/document/d/1y4Di8mOSduYSMwyLQOxuuX_xq4Mel9CuWrWQ1hbD6yc/edit?usp=sharing&ouid=117171131327816663431&rtpof=true&sd=true',
  status: 'complete',
},
{
  name: 'Physician Clearance Form',
  url: 'https://docs.google.com/document/d/1yE9HRxsrI_crmwzPJf4fLFiNf3KvNelxWdkqPhHkl_c/edit?usp=sharing&ouid=117171131327816663431&rtpof=true&sd=true',
  status: 'complete',
},
{
  name: 'Emergency Contact & Medical Information Form',
  url: 'https://docs.google.com/document/d/1GnxsIs2qeDgUNYdlYzQBO2JaMGFNCbvxAjiUKFCSElA/edit?usp=sharing&ouid=117171131327816663431&rtpof=true&sd=true',
  status: 'complete',
},
{
  name: 'Participant Intake Workflow',
  url: 'https://docs.google.com/document/d/15B3aGeOaq9iLpMVDAwlTclg4dC1W_hlXhXJlJmkZ4w8/edit?usp=sharing&ouid=117171131327816663431&rtpof=true&sd=true',
  status: 'operational',
},
      {
        name: 'Participant Liability Waiver',
        url: 'https://docs.google.com/document/d/1s19h_PsDA6fY3Fld63LKB6D6C2Yo-8O9Hr5YHw_yNWA/edit?usp=sharing&ouid=117171131327816663431&rtpof=true&sd=true',
      },
    ],
  },

  {
    title: 'Partnerships',

    purpose:
      'Develop community and clinical referral relationships.',

    links: [
{
  name: 'Partnership Pipeline Tracker',
  url: 'https://docs.google.com/spreadsheets/d/1jKIbsqhyfl4QIiz10jVo5IN0XYJKkGeA97z6JK8WLTY/edit?usp=sharing&ouid=117171131327816663431&rtpof=true&sd=true',
  status: 'operational',
},
    ],
  },

  {
    title: 'Board Governance',

    purpose:
      'Maintain healthy organizational oversight and strategic guidance.',

    links: [
      {
        name: 'Board Agendas',
        url: 'https://google.com',
      },

      {
        name: 'Strategic Planning',
        url: 'https://google.com',
      },

      {
        name: 'Financial Oversight',
        url: 'https://google.com',
      },

      {
        name: 'Governance SOPs',
        url: 'https://google.com',
      },

      {
        name: 'Meeting Cadence',
        url: 'https://google.com',
      },
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

  <a
    key={link.name}
    href={link.url}
    target="_blank"
    rel="noopener noreferrer"
className="border border-slate-800 rounded-xl p-4 hover:border-[#d8a066] transition-all block"  >

    <p className="text-slate-300">
      {link.name}
    </p>

  </a>

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