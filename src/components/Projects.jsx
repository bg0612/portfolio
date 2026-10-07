import ProjectCard from './ProjectCard.jsx'
import { projects } from '../data/projects.js'

function Projects({ language, t }) {
  return (
    <section className="section" id="projects"><div className="container"><div className="section-heading"><div><p className="section-label">{t.projectsLabel}</p><h2>{t.projectsTitle}</h2></div><p>{t.projectsDescription}</p></div><div className="projects-grid">{projects.map((project, index) => <ProjectCard key={project.id} project={project} language={language} t={t} index={index} />)}</div></div></section>
  )
}

export default Projects
