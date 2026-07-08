import { Link } from 'react-router-dom'
import { Printer } from 'lucide-react'

export default function PrintToolbar({ title }) {
  return (
    <div className="no-print sticky top-0 z-40 bg-[#f8f5ef]/95 backdrop-blur border-b border-[#e6dac8]">
      <div className="max-w-6xl mx-auto px-5 py-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-[#c98b2c]">
            TRSP Print Center
          </p>
          <h1 className="font-serif text-2xl text-[#071f3a]">
            {title}
          </h1>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link
            to="/print"
            className="border border-[#e4d8c7] bg-white px-4 py-2 text-sm font-semibold text-[#071f3a] hover:border-[#c98b2c] transition"
          >
            Back to Print Center
          </Link>
          <button
            type="button"
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 bg-[#071f3a] px-4 py-2 text-sm font-semibold text-white hover:bg-[#0d2f57] transition"
          >
            <Printer size={16} />
            Print / Save PDF
          </button>
        </div>
      </div>
    </div>
  )
}
