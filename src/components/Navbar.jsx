export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-950/90 backdrop-blur border-b border-slate-800 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-white font-semibold text-lg">
          Renewed Strength Project
        </div>

        <a
          href="#donate"
          className="bg-blue-700 hover:bg-blue-600 text-white px-5 py-2 rounded-lg transition"
        >
          Donate
        </a>
      </div>
    </nav>
  )
}