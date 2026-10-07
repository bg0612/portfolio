import { profile } from '../data/profile.js'

function Skills({ t }) {
  return (
    <section className="section" id="skills"><div className="container"><div className="section-heading"><div><p className="section-label">{t.skillsLabel}</p><h2>{t.skillsTitle}</h2></div><p>{t.skillsDescription}</p></div><ul className="skills-list">{profile.skills.map((skill, index) => <li key={skill}><span>{String(index + 1).padStart(2, '0')}</span>{skill}</li>)}</ul></div></section>
  )
}

export default Skills
