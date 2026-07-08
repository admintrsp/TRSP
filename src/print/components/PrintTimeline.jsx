export default function PrintTimeline({ steps }) {
  return (
    <div className="grid grid-cols-6 gap-2">
      {steps.map((step, index) => (
        <div key={step.title} className="relative text-center">
          {index < steps.length - 1 && (
            <div className="absolute left-1/2 top-[0.36in] h-px w-full bg-[#c98b2c]/70" />
          )}
          <div className="relative mx-auto grid h-[0.72in] w-[0.72in] place-items-center rounded-full border border-[#c98b2c] bg-[#fbfaf7] text-[#071f3a]">
            <step.icon size={30} strokeWidth={1.55} />
            <span className="absolute -top-3 -right-1 grid h-6 w-6 place-items-center rounded-full bg-[#c98b2c] text-[10px] font-bold text-white">
              {index + 1}
            </span>
          </div>
          <h3 className="mt-4 text-[10.5px] font-extrabold uppercase tracking-[0.05em] leading-tight">
            {step.title}
          </h3>
          <p className="mt-2 text-[10px] leading-snug text-[#334155]">
            {step.copy}
          </p>
        </div>
      ))}
    </div>
  )
}
