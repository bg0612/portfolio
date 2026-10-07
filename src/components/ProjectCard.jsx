function ProjectCard({ project, language, t, index }) {
  return (
    <article className="project-card">
      <div className="project-top"><span>{String(index + 1).padStart(2, '0')}</span><span className="project-status">{project.id === 'coming-soon' ? 'TBD' : '2026'}</span></div>
      <h3>{project.title[language]}</h3><p>{project.description[language]}</p>
      <ul className="tags">{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
      {project.links && <div className="project-links">{project.links.github && <a href={project.links.github}>{t.source}</a>}{project.links.demo && <a href={project.links.demo}>{t.demo}</a>}</div>}
    </article>
  )
}

export default ProjectCard
