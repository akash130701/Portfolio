import Section from './Section'
import { projects } from '../data/portfolio'

export default function Projects() {
  return (
    <Section id="projects" eyebrow="Featured projects" title="Selected work across forecasting, BI, data engineering and generative AI.">
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article key={project.title} className="group rounded-3xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl">
            <div className="flex items-start gap-4">
              <div>
                <p className="text-sm font-semibold text-sky-700">{project.category}</p>
                <h3 className="mt-3 text-2xl font-bold tracking-tight text-slate-950">{project.title}</h3>
              </div>
            </div>
            <p className="mt-4 leading-7 text-slate-600">{project.summary}</p>
            <div className="mt-5 rounded-2xl bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-950">Impact</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">{project.impact}</p>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.tools?.map((tool) => (
                <span key={tool} className="rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-800">
                  {tool}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
