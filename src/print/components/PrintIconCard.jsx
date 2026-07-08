export default function PrintIconCard({ icon: Icon, title, children, className = '' }) {
  return (
    <div className={`text-center ${className}`}>
      <div className="mx-auto mb-2 grid h-[0.55in] w-[0.55in] place-items-center rounded-full border border-[#c98b2c] text-[#071f3a]">
        <Icon size={26} strokeWidth={1.7} />
      </div>
      <h3 className="text-[11px] font-extrabold uppercase tracking-[0.08em] leading-tight">
        {title}
      </h3>
      <p className="mt-2 text-[10.5px] leading-snug text-[#334155]">
        {children}
      </p>
    </div>
  )
}
