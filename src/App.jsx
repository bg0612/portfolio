import { useEffect, useState } from 'react'
import './App.css'

const content = {
  zh: {
    nav: ['作品', '關於', '聯絡'],
    navLabel: '主要導覽',
    menuLabel: '開啟選單',
    role: '設計系學生 · Hong Kong',
    greeting: <>嗨，我是 CP。<br />正在學習如何把<br /><em>想法變得更清楚。</em></>,
    intro: '我對產品設計與前端開發感興趣，喜歡從觀察問題開始，慢慢把想法整理成容易理解、好用的數位體驗。',
    workCta: '看看我的作品',
    profileLabel: '學生簡介',
    focusLabel: '目前專注',
    focus: <>產品設計<br />與前端開發</>,
    motto: '從實作中學習。',
    projectEyebrow: '精選專案',
    projectTitle: '最近的學習作品',
    projectIntro: '這些專案記錄了我如何理解問題、嘗試方法，以及從過程中學到什麼。',
    projects: [
      { type: '課堂專題 · UX/UI', title: '校園活動整合平台', description: '重新整理分散的活動資訊，讓學生更容易發現、收藏與參加感興趣的校園活動。', tags: ['使用者研究', 'Wireframe', 'Prototype'], visual: 'events' },
      { type: '自主練習 · Web', title: '個人閱讀記錄', description: '一個簡單的閱讀追蹤工具，練習從資訊架構、介面設計到前端實作的完整流程。', tags: ['React', 'Responsive', 'UI Design'], visual: 'reading' },
      { type: '小組專案 · Research', title: '學生學習習慣研究', description: '透過訪談與問卷了解學生如何安排學習，並將洞察整理成可行的產品方向。', tags: ['訪談', '資料整理', 'Presentation'], visual: 'research' },
    ],
    aboutEyebrow: '關於我',
    aboutTitle: <>我還在學習，<br />也很享受這個過程。</>,
    aboutText: '目前我正在探索使用者研究、介面設計和網頁開發。我喜歡把課堂上學到的方法放進實際專案，再從做錯、修改和討論裡累積經驗。',
    learning: [
      ['正在學習', 'UX Research、Visual Design、React'],
      ['常用工具', 'Figma、VS Code、Notion'],
      ['正在尋找', '實習、學生合作與學習機會'],
    ],
    contactEyebrow: '聯絡我',
    contactTitle: <>如果你想聊聊專案、實習，<br />或只是交換想法，歡迎找我。</>,
    backToTop: '回到頂部',
  },
  en: {
    nav: ['Projects', 'About', 'Contact'],
    navLabel: 'Main navigation',
    menuLabel: 'Open menu',
    role: 'Design Student · Hong Kong',
    greeting: <>Hi, I’m CP.<br />I’m learning to turn<br /><em>ideas into clarity.</em></>,
    intro: 'I’m interested in product design and front-end development. I enjoy observing real problems and shaping ideas into clear, useful digital experiences.',
    workCta: 'View my projects',
    profileLabel: 'Student profile',
    focusLabel: 'Current focus',
    focus: <>Product Design<br />& Front-end</>,
    motto: 'Learning by making.',
    projectEyebrow: 'Selected projects',
    projectTitle: 'Recent learning projects',
    projectIntro: 'These projects show how I understand problems, try different methods, and learn throughout the process.',
    projects: [
      { type: 'Course project · UX/UI', title: 'Campus Events Platform', description: 'A clearer way for students to discover, save, and join events from across campus.', tags: ['User Research', 'Wireframe', 'Prototype'], visual: 'events' },
      { type: 'Personal practice · Web', title: 'Personal Reading Log', description: 'A simple reading tracker built to practise the full process from information architecture to front-end implementation.', tags: ['React', 'Responsive', 'UI Design'], visual: 'reading' },
      { type: 'Group project · Research', title: 'Student Study Habits', description: 'Interviews and surveys exploring how students plan their study time, translated into practical product directions.', tags: ['Interviews', 'Synthesis', 'Presentation'], visual: 'research' },
    ],
    aboutEyebrow: 'About me',
    aboutTitle: <>I’m still learning—<br />and enjoying the process.</>,
    aboutText: 'I’m currently exploring user research, interface design, and web development. I like applying classroom methods to real projects, then learning through mistakes, iterations, and conversations.',
    learning: [
      ['Learning', 'UX Research, Visual Design, React'],
      ['Tools I use', 'Figma, VS Code, Notion'],
      ['Looking for', 'Internships, student collaborations, and learning opportunities'],
    ],
    contactEyebrow: 'Get in touch',
    contactTitle: <>Want to talk about a project, internship,<br />or simply exchange ideas? Say hello.</>,
    backToTop: 'Back to top',
  },
}

function ProjectVisual({ type, lang }) {
  if (type === 'events') return <div className="calendar-ui"><span>OCT</span><strong>24</strong><p>Design Week</p></div>
  if (type === 'reading') return <div className="book-ui"><small>READING LOG</small><strong>12</strong><span>books this year</span><div /></div>
  const labels = lang === 'zh' ? ['訪談', '整理', '洞察'] : ['Talk', 'Sort', 'Learn']
  return <div className="notes-ui">{labels.map((label) => <i key={label}>{label}</i>)}</div>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [lang, setLang] = useState(() => localStorage.getItem('portfolio-language') || 'zh')
  const t = content[lang]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('visible')),
      { threshold: 0.15 },
    )
    document.querySelectorAll('[data-reveal]').forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang === 'zh' ? 'zh-Hant' : 'en'
    document.title = lang === 'zh' ? 'CP — 學生作品集' : 'CP — Student Portfolio'
    localStorage.setItem('portfolio-language', lang)
  }, [lang])

  const closeMenu = () => setMenuOpen(false)
  const changeLanguage = (nextLang) => {
    setLang(nextLang)
    setMenuOpen(false)
  }

  return (
    <div className="page">
      <header className="header">
        <a className="logo" href="#top" onClick={closeMenu} aria-label="CP portfolio">CP.</a>
        <nav className={menuOpen ? 'nav open' : 'nav'} aria-label={t.navLabel}>
          {['projects', 'about', 'contact'].map((target, index) => <a href={`#${target}`} onClick={closeMenu} key={target}>{t.nav[index]}</a>)}
        </nav>
        <div className="header-actions">
          <div className="language-switch" aria-label="Language">
            <button className={lang === 'zh' ? 'active' : ''} onClick={() => changeLanguage('zh')} lang="zh-Hant" aria-pressed={lang === 'zh'}>中</button>
            <span>/</span>
            <button className={lang === 'en' ? 'active' : ''} onClick={() => changeLanguage('en')} lang="en" aria-pressed={lang === 'en'}>EN</button>
          </div>
          <button className="menu" type="button" aria-label={t.menuLabel} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><span /><span /></button>
        </div>
      </header>

      <main>
        <section className="hero" id="top">
          <div className="hero-copy">
            <p className="label">{t.role}</p>
            <h1>{t.greeting}</h1>
            <p className="intro">{t.intro}</p>
            <div className="hero-links"><a className="primary" href="#projects">{t.workCta}</a><a className="text-link" href="mailto:hello@example.com">hello@example.com</a></div>
          </div>
          <aside className="student-card" aria-label={t.profileLabel}>
            <div className="card-head"><span>{t.profileLabel}</span><span>2026</span></div>
            <div className="monogram">CP</div>
            <div className="card-info"><p>{t.focusLabel}</p><strong>{t.focus}</strong></div>
            <div className="card-foot"><span>{t.motto}</span><i /></div>
          </aside>
        </section>

        <section className="projects" id="projects">
          <div className="section-title" data-reveal><p className="label">{t.projectEyebrow}</p><h2>{t.projectTitle}</h2><p>{t.projectIntro}</p></div>
          <div className="project-grid">
            {t.projects.map((project, index) => (
              <article className="project" data-reveal key={project.title}>
                <div className={`project-cover ${project.visual}`} aria-hidden="true"><span className="cover-number">0{index + 1}</span><ProjectVisual type={project.visual} lang={lang} /></div>
                <div className="project-body"><p className="project-type">{project.type}</p><h3>{project.title}</h3><p>{project.description}</p><ul>{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul></div>
              </article>
            ))}
          </div>
        </section>

        <section className="about" id="about">
          <div data-reveal><p className="label">{t.aboutEyebrow}</p><h2>{t.aboutTitle}</h2></div>
          <div className="about-content" data-reveal><p>{t.aboutText}</p><div className="learning-list">{t.learning.map((item, index) => <div key={item[0]}><span>0{index + 1}</span><strong>{item[0]}</strong><p>{item[1]}</p></div>)}</div></div>
        </section>

        <section className="contact" id="contact" data-reveal><p className="label">{t.contactEyebrow}</p><h2>{t.contactTitle}</h2><a href="mailto:hello@example.com">hello@example.com</a></section>
      </main>

      <footer className="footer"><p>© 2026 CP Portfolio</p><div><a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a><a href="#top">{t.backToTop}</a></div></footer>
    </div>
  )
}

export default App
