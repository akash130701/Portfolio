import { ArrowRight, Download, Code2, Network, Mail, MapPin } from 'lucide-react'
import { profile } from '../data/portfolio'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_rgba(14,165,233,0.14),_transparent_35%),radial-gradient(circle_at_20%_20%,_rgba(20,184,166,0.12),_transparent_30%)]" />
      <div className="mx-auto grid min-h-[82vh] max-w-6xl items-center gap-10 px-5 py-20 sm:px-6 lg:grid-cols-[1.35fr_0.65fr] lg:px-8">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-medium text-sky-800">
            <MapPin size={16} /> {profile.location} · Open to UK data roles
          </div>
          <h1 className="max-w-4xl text-5xl font-black tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
            Turning messy data into <span className="gradient-text">decisions that hold up.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            <strong className="text-slate-900">{profile.name}</strong> · <strong className="text-slate-900">{profile.headline}</strong>. I work across analytics, BI, machine learning and data engineering, with a bias toward practical outputs stakeholders can actually use.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#projects" className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3 font-semibold text-white transition hover:bg-sky-800">
              View projects <ArrowRight size={18} />
            </a>
            <a href={profile.cv} className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-900 transition hover:border-sky-300 hover:text-sky-800">
              Download CV <Download size={18} />
            </a>
          </div>
          <div className="mt-8 flex items-center gap-4 text-slate-500">
            <a href={profile.linkedin} aria-label="LinkedIn" className="transition hover:text-sky-700"><Network /></a>
            <a href={profile.github} aria-label="GitHub" className="transition hover:text-sky-700"><Code2 /></a>
            <a href={`mailto:${profile.email}`} aria-label="Email" className="transition hover:text-sky-700"><Mail /></a>
          </div>
        </div>
        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white card-shadow">
          <img
            src="/profile.jpeg"
            alt="Akash Somasundaran"
            className="aspect-[4/5] w-full object-cover object-center"
          />
          <div className="p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">Focus</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {['Data Scientist', 'Data Analyst', 'BI Analyst', 'Data Engineer'].map((role) => (
                <div key={role} className="rounded-2xl bg-slate-50 px-5 py-4">
                  <p className="font-semibold text-slate-950">{role}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-800 shadow-sm">
              <img src="/uk-flag.svg" alt="UK flag" className="h-4 w-6" />
              <span>Anywhere in the UK</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
