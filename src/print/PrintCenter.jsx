import { Link } from 'react-router-dom'
import { ExternalLink, Printer } from 'lucide-react'
import SEO from '../components/SEO'
import SectionLabel from './components/SectionLabel'

const printCards = [
  {
    title: 'Community Partner Leave-Behind',
    description: 'A two-page community partner piece with the front and back flyer together.',
    path: '/print/community-partner',
    status: 'Ready',
  },
  {
    title: 'Future Participant Flyer',
    description: 'A simple handout for individuals affected by cancer and caregivers.',
    status: 'Future',
  },
  {
    title: 'Future Provider One-Pager',
    description: 'A referral-oriented overview for clinicians and care teams.',
    status: 'Future',
  },
  {
    title: 'Future Board Packet',
    description: 'Founder narrative, governance context, and operating priorities.',
    status: 'Future',
  },
  {
    title: 'Future Grant Summary',
    description: 'Concise case statement, impact model, and funding language.',
    status: 'Future',
  },
  {
    title: 'Future Annual Impact Report',
    description: 'A polished public accountability and donor communication piece.',
    status: 'Future',
  },
]

export default function PrintCenter() {
  return (
    <div className="min-h-screen bg-[#f8f5ef] text-[#071f3a]">
      <SEO
        title="TRSP Print Center"
        description="Internal print center for editable Renewed Strength Project materials."
        path="/print"
        noindex
      />

      <main id="main-content" className="max-w-7xl mx-auto px-5 sm:px-6 py-16 md:py-24">
        <div className="max-w-4xl">
          <SectionLabel className="mb-5">Internal Print Center</SectionLabel>
          <h1 className="font-serif text-5xl md:text-7xl leading-tight">
            TRSP Print Center
          </h1>
          <div className="my-8 h-px w-20 bg-[#c98b2c]" />
          <p className="text-xl leading-relaxed text-[#4b5563]">
            Editable, coded print materials for partnership conversations,
            participant outreach, provider trust, and future organizational
            communication.
          </p>
        </div>

        <section className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {printCards.map((card) => {
            const isReady = Boolean(card.path)

            const content = (
              <article className="h-full border border-[#e4d8c7] bg-white p-7 shadow-[0_18px_50px_rgba(7,31,58,0.06)] transition hover:border-[#c98b2c]">
                <div className="mb-8 flex items-center justify-between gap-4">
                  <FileBadge status={card.status} />
                  {isReady && <ExternalLink size={18} className="text-[#c98b2c]" />}
                </div>
                <h2 className="font-serif text-3xl leading-tight">
                  {card.title}
                </h2>
                <p className="mt-4 leading-relaxed text-[#4b5563]">
                  {card.description}
                </p>
              </article>
            )

            return isReady ? (
              <Link key={card.title} to={card.path} className="block">
                {content}
              </Link>
            ) : (
              <div key={card.title}>
                {content}
              </div>
            )
          })}
        </section>

        <section className="mt-14 border border-[#e4d8c7] bg-white p-8 md:p-10">
          <div className="flex items-start gap-4">
            <Printer className="mt-1 shrink-0 text-[#c98b2c]" size={26} />
            <div>
              <SectionLabel className="mb-3">Export Instructions</SectionLabel>
              <h2 className="font-serif text-3xl leading-tight">
                Save a print page as a professional PDF.
              </h2>
              <p className="mt-5 leading-relaxed text-[#4b5563]">
                Open the print page, use browser Print, choose Save as PDF,
                paper size Letter, scale 100%, and turn backgrounds on. If your
                browser adds headers or footers, turn those off before saving.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

function FileBadge({ status }) {
  return (
    <span className={`rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] ${
      status === 'Ready'
        ? 'bg-[#071f3a] text-white'
        : 'bg-[#f8f5ef] text-[#6b7280] border border-[#e4d8c7]'
    }`}>
      {status}
    </span>
  )
}
