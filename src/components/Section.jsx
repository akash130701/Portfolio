export default function Section({ id, eyebrow, title, children, className = '' }) {
  return (
    <section id={id} className={`mx-auto w-full max-w-6xl px-5 py-16 sm:px-6 lg:px-8 ${className}`}>
      <div className="mb-8">
        {eyebrow && <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">{eyebrow}</p>}
        {title && <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">{title}</h2>}
      </div>
      {children}
    </section>
  )
}
