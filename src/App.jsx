import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import PassionProjects from './components/PassionProject'
import Skills from './components/Skills'
import MyStory from './components/MyStory'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <PassionProjects />
        <Skills />
        <MyStory />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
