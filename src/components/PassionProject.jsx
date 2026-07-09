import Section from './Section'
import { passionProjects } from '../data/portfolio'

export default function PassionProjects() {
  return (
    <Section id="passion" eyebrow="Passion projects" title="Portfolio and learning projects built to explore ideas.">
      <div className="grid gap-8 lg:grid-cols-2">
        {passionProjects.map((project) => (
          <div key={project.title} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="flex items-center gap-4">
              {project.logo && (
                <img src={project.logo} alt={`${project.title} logo`} className="h-14 w-14 rounded-2xl bg-slate-100 p-2 flex-shrink-0" />
              )}
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">
                  {project.link ? (
                    <a href={project.link} target="_blank" rel="noopener noreferrer">{project.title}</a>
                  ) : (
                    project.title
                  )}
                </p>
                <p className="mt-1 text-lg font-bold text-slate-950">{project.subtitle}</p>
              </div>
            </div>
            <p className="mt-6 text-slate-600 leading-7">
              {project.description}
            </p>
            <div className="mt-5 rounded-2xl bg-slate-50 p-4">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-700">Highlights</p>
              <ul className="mt-3 space-y-2 text-slate-600">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="text-sm">• {highlight}</li>
                ))}
              </ul>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.tools?.map((tool) => (
                <span key={tool} className="rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-800">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

