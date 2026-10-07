import { useEffect, useState } from 'react'
import './App.css'

const projects = [
  { number:'01', title:'Aperture Finance', description:'把複雜的資產配置，轉化成清楚、安心的投資體驗。', meta:['Product Design','Front-end','2026'], tone:'violet', visual:<div className="project-ui finance-ui" aria-hidden="true"><div className="ui-top"><span>Portfolio</span><span className="ui-pill">Live</span></div><strong>$84,240.80</strong><div className="chart-bars">{[34,51,43,69,61,82,74,96].map((h,i)=><i key={i} style={{height:`${h}%`}} />)}</div><div className="ui-row"><span>All assets</span><span>+12.8%</span></div></div> },
  { number:'02', title:'Sunday Studio', description:'為獨立創作者打造，從靈感整理到作品發佈的一站式工作空間。', meta:['Brand System','UX/UI','2025'], tone:'coral', visual:<div className="project-ui studio-ui" aria-hidden="true"><div className="studio-card studio-card-a"><span>Idea 14</span><b>Quiet ideas,<br/>made visible.</b></div><div className="studio-disc">S</div><div className="studio-card studio-card-b"><span>02 / 24</span><div className="wave" /></div></div> },
  { number:'03', title:'Local / Field Notes', description:'一個讓旅人用氣味、聲音和片段文字，重新認識城市的數位誌。', meta:['Editorial','Creative Dev','2025'], tone:'blue', visual:<div className="project-ui field-ui" aria-hidden="true"><div className="field-map"><i/><i/><i/><span>22.3193° N</span></div><div className="field-copy"><small>HONG KONG · 07:40</small><b>A city<br/>before it wakes.</b><em>FIELD / 003</em></div></div> },
]

function Arrow(){return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9"/></svg>}

function App(){
  const [menuOpen,setMenuOpen]=useState(false)
  const [progress,setProgress]=useState(0)
  useEffect(()=>{
    const onScroll=()=>{const a=document.documentElement.scrollHeight-innerHeight;setProgress(a>0?scrollY/a:0)}
    const observer=new IntersectionObserver(entries=>entries.forEach(e=>e.isIntersecting&&e.target.classList.add('is-visible')),{threshold:.12})
    document.querySelectorAll('[data-reveal]').forEach(n=>observer.observe(n));addEventListener('scroll',onScroll,{passive:true});onScroll()
    return()=>{observer.disconnect();removeEventListener('scroll',onScroll)}
  },[])
  useEffect(()=>{document.body.classList.toggle('menu-open',menuOpen)},[menuOpen])
  const close=()=>setMenuOpen(false)
  return <div className="site-shell">
    <div className="scroll-progress" style={{transform:`scaleX(${progress})`}}/>
    <header className="site-header"><a className="wordmark" href="#top" onClick={close}>CP<span>®</span></a><nav className={`nav-links ${menuOpen?'is-open':''}`} aria-label="主要導覽"><a href="#work" onClick={close}>精選作品</a><a href="#about" onClick={close}>關於我</a><a href="#contact" onClick={close}>聯絡</a></nav><a className="availability" href="#contact"><i/> Open to work</a><button className="menu-button" aria-label="開啟選單" aria-expanded={menuOpen} onClick={()=>setMenuOpen(!menuOpen)}><span/><span/></button></header>
    <main>
      <section className="hero-section" id="top"><div className="hero-kicker hero-enter"><span>Product designer</span><span>Creative developer</span></div><h1 className="hero-title hero-enter"><span>設計有感的</span><span>數位<span className="accent-word">體驗。</span></span></h1><div className="hero-bottom hero-enter"><p>嗨，我是 CP。我把策略、設計與程式碼串在一起，打造既好看，也真正好用的數位產品。</p><a className="circle-link" href="#work"><span>View<br/>work</span><Arrow/></a></div><div className="hero-orbit" aria-hidden="true">Make it clear · Make it human ·</div></section>
      <section className="work-section" id="work"><div className="section-heading" data-reveal><p className="eyebrow">Selected work / 2025—26</p><h2>把想法，做成<br/>值得記住的體驗。</h2></div><div className="project-list">{projects.map(p=><article className="project-card" data-reveal key={p.title}><div className={`project-visual ${p.tone}`}>{p.visual}<span className="project-index">{p.number}</span></div><div className="project-copy"><div><h3>{p.title}</h3><p>{p.description}</p></div><ul>{p.meta.map(m=><li key={m}>{m}</li>)}</ul><button className="project-link">View case study <Arrow/></button></div></article>)}</div></section>
      <section className="about-section" id="about"><div className="about-lead" data-reveal><p className="eyebrow">A little about me</p><h2>理性做決定，<br/><span>感性做設計。</span></h2></div><div className="about-grid" data-reveal><p className="about-intro">我喜歡在模糊問題裡找出清楚方向，並一路把它實現到每個互動細節。對我來說，好的設計不是裝飾，而是讓人不費力地完成重要的事。</p><div className="principles"><div><span>01</span><h3>Think in systems</h3><p>從全局建立可延伸的邏輯，而不是只解一個畫面。</p></div><div><span>02</span><h3>Prototype early</h3><p>讓想法快速成形，在真正投入前找出問題。</p></div><div><span>03</span><h3>Sweat the details</h3><p>細節不是最後一步，而是信任感開始的地方。</p></div></div></div></section>
      <section className="experience-section"><div className="section-heading compact" data-reveal><p className="eyebrow">Experience</p><h2>一路走來</h2></div><div className="timeline" data-reveal><div><time>2024—Now</time><strong>Independent Designer</strong><span>Product design · Creative development</span></div><div><time>2021—24</time><strong>Senior Product Designer</strong><span>Digital product studio · Hong Kong</span></div><div><time>2019—21</time><strong>UI/UX Designer</strong><span>Brand & experience agency</span></div></div></section>
      <section className="contact-section" id="contact"><div className="contact-copy" data-reveal><p className="eyebrow">Have a project in mind?</p><h2>一起把下一個<br/><span>好想法</span>做出來。</h2><a href="mailto:hello@example.com">hello@example.com <Arrow/></a></div><footer><p>© 2026 CP Studio</p><div><a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a><a href="#top">Back to top</a></div></footer></section>
    </main>
  </div>
}
export default App
