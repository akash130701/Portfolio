import { Code2, Network, Mail, Phone } from 'lucide-react'
import Section from './Section'
import { profile } from '../data/portfolio'

export default function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Interested in data work that is useful, not ornamental?">
      <div className="rounded-[2rem] bg-slate-950 p-8 text-white sm:p-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="max-w-2xl text-lg leading-8 text-slate-300">
              I am currently targeting UK data analyst, BI analyst, data scientist and junior data engineer roles where I can combine technical delivery with stakeholder-facing problem solving.
            </p>
            <p className="mt-4 text-slate-400">Based in Manchester and open to relevant UK opportunities.</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            <ContactLink href={`mailto:${profile.email}`} icon={<Mail size={18} />} label="Email" value={profile.email} />
            <ContactLink href={`tel:${profile.phone.replaceAll(' ', '')}`} icon={<Phone size={18} />} label="Phone" value={profile.phone} />
            <ContactLink href={profile.linkedin} icon={<Network size={18} />} label="LinkedIn" value="akash-somasundaran0713" />
            <ContactLink href={profile.github} icon={<Code2 size={18} />} label="GitHub" value="akash130701" />
          </div>
        </div>
      </div>
    </Section>
  )
}

function ContactLink({ href, icon, label, value }) {
  return (
    <a href={href} className="rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10">
      <div className="flex items-center gap-2 text-sky-300">
        {icon}
        <span className="text-sm font-semibold uppercase tracking-[0.18em]">{label}</span>
      </div>
      <p className="mt-2 break-words text-sm text-slate-300">{value}</p>
    </a>
  )
}
