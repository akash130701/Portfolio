import Section from './Section'

export default function MyStory() {
  return (
    <Section id="mystory" eyebrow="My Story" title="From curiosity to confidence in data science.">
      <div className="relative rounded-3xl">
        <img src="/mystory-bg.jpg" alt="My story background" className="pointer-events-none absolute inset-0 w-full h-full object-cover rounded-3xl opacity-20" />
        <div className="relative rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-sm backdrop-blur-sm">
          <p className="text-lg leading-8 text-slate-700">
            I have always had a knack for the data side of things. Halfway through my quantitative course in Aeronautical Engineering, I was introduced to the concept of data science, and that sparked a lasting interest in how data can be turned into meaningful insight and real impact.
          </p>
          <p className="mt-5 text-lg leading-8 text-slate-700">
            After my undergraduate degree, I joined Ganit Inc., where I had the opportunity to explore not just data science, but also data engineering and business intelligence. That experience gave me a broader perspective across the analytics stack and helped me grow quickly in a practical, hands-on environment.
          </p>
          <p className="mt-5 text-lg leading-8 text-slate-700">
            At the same time, I felt a bit insecure that I did not yet have enough foundation in the space, so I chose to pursue a Business Analytics MSc at the University of Manchester. Now, I feel fully prepared to tackle the data science space with confidence and purpose.
          </p>
        </div>
      </div>
    </Section>
  )
}
