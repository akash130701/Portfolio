import Section from './Section'
import { skills } from '../data/portfolio'

export default function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="A practical stack for analysis, dashboards, modelling and data preparation.">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((skillGroup) => (
          <div key={skillGroup.group} className="rounded-3xl border border-slate-200 bg-white p-6">
            <h3 className="text-lg font-bold text-slate-950">{skillGroup.group}</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {skillGroup.items.map((item) => (
                <span key={item} className="rounded-full border border-slate-200 px-3 py-1.5 text-sm font-medium text-slate-700">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
