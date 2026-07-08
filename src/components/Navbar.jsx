import { Menu } from 'lucide-react'
import { navItems, profile } from '../data/portfolio'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8" aria-label="Primary navigation">
        <a href="#top" className="text-lg font-bold tracking-tight text-slate-950">
          Akash<span className="text-sky-700 font-mono">.py</span>
        </a>
        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-medium text-slate-600 transition hover:text-sky-700">
              {item.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="hidden rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-800 md:inline-flex"
        >
          Contact
        </a>
        <button className="inline-flex rounded-lg border border-slate-200 p-2 text-slate-700 md:hidden" aria-label="Menu">
          <Menu size={20} />
        </button>
      </nav>
    </header>
  )
}
