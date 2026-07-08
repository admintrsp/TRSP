export default function SectionLabel({ children, className = '' }) {
  return (
    <p className={`text-[#c98b2c] uppercase tracking-[0.22em] text-[10px] font-bold ${className}`}>
      {children}
    </p>
  )
}
