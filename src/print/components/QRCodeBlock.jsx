const websiteUrl = 'therenewedstrengthproject.org'

export default function QRCodeBlock() {
  return (
    <div className="flex items-center gap-3">
      <img
        src="/trsp-community-partner-qr.svg"
        alt="QR code to learn more about The Renewed Strength Project"
        className="h-[0.72in] w-[0.72in] shrink-0 bg-white p-1"
      />

      <div>
        <p className="text-[#d8a066] uppercase tracking-[0.14em] font-bold text-[9px] leading-tight">
          Scan to Learn More
        </p>
        <p className="mt-1 font-semibold text-[9.5px] leading-tight">
          {websiteUrl}
        </p>
      </div>
    </div>
  )
}