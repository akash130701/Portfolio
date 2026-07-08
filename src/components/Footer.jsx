import { profile } from '../data/portfolio'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white px-5 py-8 text-center text-sm text-slate-500">
      <p>© {new Date().getFullYear()} {profile.name}. Built with React, Vite, Tailwind CSS and a sensible dislike of bloated portfolios.</p>
    </footer>
  )
}
