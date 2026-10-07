function Hero({ t }) {
  return (
    <section className="hero container" id="top">
      <div className="hero-copy">
        <p className="status"><i />{t.badge}</p>
        <h1>{t.heroTitle}</h1>
        <h2>{t.heroSubtitle}</h2>
        <p className="hero-description">{t.heroDescription}</p>
        <div className="hero-actions"><a className="button primary-button" href="#projects">{t.viewProjects}</a><a className="button secondary-button" href="#contact">{t.contactMe}</a></div>
      </div>
      <aside className="terminal-card" aria-label="Profile summary">
        <div className="terminal-head"><span /><span /><span /><code>ben@portfolio:~</code></div>
        <div className="terminal-body"><p><b>$</b> whoami</p><p className="response">information-engineering-student</p><p><b>$</b> interests --list</p><p className="response">software · networks · linux · web</p><p><b>$</b> status</p><p className="response active-line">learning_and_building</p><span className="cursor" /></div>
      </aside>
    </section>
  )
}

export default Hero
