import { CheckCircle } from 'lucide-react'

export default function CheckList({ items }) {
  return (
    <ul className="space-y-1.5 text-[11px] leading-tight text-[#071f3a]">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2">
          <CheckCircle size={13} className="mt-0.5 shrink-0 text-[#c98b2c]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}
