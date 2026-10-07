import { useEffect, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import { copy } from './data/profile.js'

function App() {
  const [language, setLanguage] = useState(() => localStorage.getItem('portfolio-language') || 'zh')
  const t = copy[language]

  useEffect(() => {
    document.documentElement.lang = language === 'zh' ? 'zh-Hant' : 'en'
    document.title = language === 'zh' ? 'Ben — 資訊工程作品集' : 'Ben — Information Engineering Portfolio'
    localStorage.setItem('portfolio-language', language)
  }, [language])

  return (
    <>
      <Navbar language={language} setLanguage={setLanguage} t={t} />
      <main>
        <Hero t={t} />
        <About t={t} />
        <Skills t={t} />
        <Projects language={language} t={t} />
        <Contact t={t} />
      </main>
      <Footer t={t} />
    </>
  )
}

export default App
