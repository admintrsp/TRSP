export default function PrintPage({ children, className = '' }) {
  return (
    <main className="trsp-print-stage bg-[#f8f5ef] py-8">
      <article className={`trsp-print-page bg-[#fbfaf7] text-[#071f3a] shadow-2xl shadow-[#071f3a]/10 ${className}`}>
        {children}
      </article>
    </main>
  )
}
