function About({ t }) {
  const facts = [[t.study, t.studyValue], [t.interests, t.interestsValue], [t.exploring, t.exploringValue]]
  return (
    <section className="section" id="about"><div className="container section-grid"><div><p className="section-label">{t.aboutLabel}</p><h2>{t.aboutTitle}</h2></div><div className="about-body">{t.aboutParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}<dl className="facts">{facts.map(([term, detail]) => <div key={term}><dt>{term}</dt><dd>{detail}</dd></div>)}</dl></div></div></section>
  )
}

export default About
