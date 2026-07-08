import QRCodeBlock from './QRCodeBlock'

const websiteUrl = 'therenewedstrengthproject.org'

export default function PrintFooter() {
  return (
<footer className="absolute bottom-0 left-0 right-0 bg-[#071f3a] text-white px-[0.38in] py-[0.1in]">     
<div className="grid grid-cols-[0.9fr_1.1fr_0.85fr] items-center gap-5 text-[10.5px]">
        <div className="flex items-center gap-3">
          <img src="/rsp-logo.png" alt="" className="h-[0.38in] w-[0.38in] object-contain" />
          <div>
            <p className="font-serif text-[13px] uppercase tracking-[0.08em]">
              The Renewed Strength Project
            </p>
            <p className="text-[#d8a066] uppercase tracking-[0.15em]">
              Empowering Renewed Strength
            </p>
          </div>
        </div>

        <div className="border-l border-[#d8a066]/70 pl-5">
          <p className="font-serif text-[17px] leading-tight">
            Ready to help someone find their way back?
          </p>
          <p className="mt-1 text-white/80 leading-snug">
            Your partnership restores more than strength — it helps restore life.
          </p>
        </div>

<div className="border-l border-[#d8a066]/70 pl-5">
  <QRCodeBlock />
</div>
      </div>
    </footer>
  )
}
