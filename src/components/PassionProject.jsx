import Section from './Section'

export default function PassionProject() {
  return (
    <Section id="passion" eyebrow="Passion project" title="FreshOps: reducing food waste with practical week-ahead planning.">
      <div className="grid gap-8 lg:grid-cols-[1.3fr_0.9fr]">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="flex items-center gap-4">
            <img src="/freshops-logo.svg" alt="FreshOps logo" className="h-14 w-14 rounded-2xl bg-slate-100 p-2" />
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-700"><a href="https://freshops.streamlit.app/" target="_blank" rel="noopener noreferrer">FreshOps</a></p>
              <p className="mt-1 text-lg font-bold text-slate-950">Weekly produce planning for less waste</p>
            </div>
          </div>
          <p className="mt-6 text-slate-600 leading-7">
            Built a Streamlit app to reduce fruit and vegetable waste by planning weekly consumption around quantity and shelf life. Used PuLP-based optimisation logic to allocate produce across the week while respecting expiry constraints, helping users make practical grocery decisions and avoid unnecessary spoilage.
          </p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-700">What it does</p>
          <ul className="mt-4 space-y-3 text-slate-600">
            <li>Optimises weekly produce usage by considering remaining shelf life.</li>
            <li>Allocates fruit and vegetables to meals when they will be used best.</li>
            <li>Helps users reduce spoilage and make grocery decisions with confidence.</li>
          </ul>
        </div>
      </div>
    </Section>
  )
}
