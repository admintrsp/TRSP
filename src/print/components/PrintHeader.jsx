export default function PrintHeader() {
  return (
    <header className="flex items-start gap-4">
      <img
        src="/rsp-logo.png"
        alt="The Renewed Strength Project logo"
        className="h-[0.55in] w-[0.55in] object-contain"
      />

      <div>
        <p className="font-serif text-[18px] uppercase leading-[0.94] tracking-[0.05em] text-[#071f3a]">
          The Renewed
          <br />
          Strength Project
        </p>
        <p className="mt-2 text-[9px] uppercase tracking-[0.22em] text-[#c98b2c]">
          Empowering Renewed Strength
        </p>
      </div>
    </header>
  )
}
