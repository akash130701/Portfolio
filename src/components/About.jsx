import { BarChart3, Building2, HeartPulse, ShoppingBag } from 'lucide-react'
import BurgerIcon from './icons/Burger'
import Section from './Section'
import { profile } from '../data/portfolio'

export default function About() {
  return (
    <Section id="about" eyebrow="About" title="Analytics with enough engineering to survive reality.">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 card-shadow">
          <p className="text-lg leading-8 text-slate-700">{profile.summary}</p>
          <p className="mt-5 text-lg leading-8 text-slate-700">
            My work sits at the intersection of business questions, data preparation, modelling and communication. I am especially interested in roles where analysis is not treated as decoration, but as a way to improve operational decisions, reporting quality and stakeholder confidence.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          <Stat value="2+" label="Years as Senior Data Analyst" />
          <Stat value="4" label="Target role families" />
          <Stat value="5+" label="Domains across client projects">
            <div className="mt-4 flex flex-wrap gap-2">
              <div className="flex items-center gap-2 rounded-full bg-slate-800 px-3 py-1 text-sm font-semibold text-slate-300">
                <BarChart3 className="h-4 w-4 text-sky-300" />
                <span>CPG</span>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-slate-800 px-3 py-1 text-sm font-semibold text-slate-300">
                <Building2 className="h-4 w-4 text-sky-300" />
                <span>BFSI</span>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-slate-800 px-3 py-1 text-sm font-semibold text-slate-300">
                <HeartPulse className="h-4 w-4 text-sky-300" />
                <span>Healthcare</span>
              </div>
                <div className="flex items-center gap-2 rounded-full bg-slate-800 px-3 py-1 text-sm font-semibold text-slate-300">
                  <BurgerIcon className="h-4 w-4 text-sky-300" />
                  <span>QSR</span>
                </div>
            </div>
          </Stat>
        </div>
      </div>
    </Section>
  )
}

function Stat({ value, label, children }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-slate-950 p-6 text-white">
      <p className="text-4xl font-black text-sky-300">{value}</p>
      <p className="mt-2 text-sm font-medium text-slate-300">{label}</p>
      {children && <div className="mt-3">{children}</div>}
    </div>
  )
}

function DomainItem({ icon, label }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700">
      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-100 text-sky-700">
        {icon}
      </div>
      <span>{label}</span>
    </div>
  )
}
