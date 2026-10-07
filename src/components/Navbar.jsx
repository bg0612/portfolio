import { useState } from 'react'

function Navbar({ language, setLanguage, t }) {
  const [open, setOpen] = useState(false)
  const links = [['about', t.nav.about], ['skills', t.nav.skills], ['projects', t.nav.projects], ['contact', t.nav.contact]]
  const switchLanguage = (next) => { setLanguage(next); setOpen(false) }
  return (
    <header className="navbar">
      <div className="container nav-inner">
        <a className="brand" href="#top" onClick={() => setOpen(false)}>Ben<span>.</span></a>
        <nav className={`nav-links ${open ? 'open' : ''}`} aria-label="Primary navigation">
          {links.map(([target, label]) => <a key={target} href={`#${target}`} onClick={() => setOpen(false)}>{label}</a>)}
        </nav>
        <div className="nav-actions">
          <div className="language" aria-label="Language">
            <button className={language === 'zh' ? 'active' : ''} aria-pressed={language === 'zh'} onClick={() => switchLanguage('zh')}>中</button>
            <span>/</span>
            <button className={language === 'en' ? 'active' : ''} aria-pressed={language === 'en'} onClick={() => switchLanguage('en')}>EN</button>
          </div>
          <button className="menu-button" type="button" aria-label={open ? t.menuClose : t.menuOpen} aria-expanded={open} onClick={() => setOpen(!open)}><span /><span /></button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
