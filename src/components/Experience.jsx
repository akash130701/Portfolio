import Section from './Section'
import { experiences } from '../data/portfolio'

export default function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Client-facing analytics, from SQL pipelines to executive-ready dashboards.">
      <div className="space-y-6">
        {experiences.map((experience) => (
          <article key={experience.company} className="rounded-3xl border border-slate-200 bg-white p-8 card-shadow">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-white p-1">
                  <img src="https://www.ganitinc.com/images/ganit-blue-logo.svg" alt="Ganit logo" className="h-full w-full object-contain" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-950">{experience.role}</h3>
                  <p className="mt-1 font-medium text-slate-600">{experience.company}</p>
                </div>
              </div>
              <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">{experience.period}</span>
            </div>
            <p className="mt-6 leading-7 text-slate-600">{experience.description}</p>
            <ul className="mt-6 grid gap-3 md:grid-cols-2">
              {experience.bullets.map((bullet) => (
                <li key={bullet} className="rounded-2xl bg-slate-50 p-4 text-sm leading-6 text-slate-700">
                  {bullet}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  )
}
