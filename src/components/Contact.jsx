import { profile } from '../data/profile.js'

function Contact({ t }) {
  return (
    <section className="section contact-section" id="contact"><div className="container contact-card"><div><p className="section-label">{t.contactLabel}</p><h2>{t.contactTitle}</h2><p>{t.contactDescription}</p></div><div className="contact-links"><a href={`mailto:${profile.email}`}><span>{t.email}</span><strong>{profile.email}</strong></a><a href={profile.github} target="_blank" rel="noreferrer"><span>GitHub</span><strong>yourusername</strong></a><a href={profile.linkedin} target="_blank" rel="noreferrer"><span>LinkedIn</span><strong>yourusername</strong></a></div></div></section>
  )
}

export default Contact
