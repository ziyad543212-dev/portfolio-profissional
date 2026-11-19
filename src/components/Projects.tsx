import { ChevronDown, Maximize2 } from 'lucide-react';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="section-band">
      <div className="page-width">
        <h2 id="projects-title" className="section-title">Selected projects</h2>
        <div className="project-grid">
          {projects.map((project) => (
            <article key={project.id} id={project.id} className="project-card" aria-labelledby={project.id + '-title'}>
              <figure>
                <div className="project-visual">
                  <a
                    href={project.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="screenshot-link"
                    aria-label={'Open screenshot of ' + project.name + ' in a new tab'}
                  >
                    <img src={project.image} alt={project.imageAlt} loading="lazy" decoding="async" />
                    <span className="screenshot-expand" aria-hidden="true"><Maximize2 size={15} /></span>
                  </a>
                </div>
                <figcaption>{project.imageCaption}</figcaption>
              </figure>

              <div className="project-content">
                <p className="project-platforms">{project.platforms}</p>
                <h3 id={project.id + '-title'}>{project.name}</h3>
                <p className="project-summary">{project.summary}</p>

                <ul className="tags" aria-label="Technologies">
                  {project.technologies.map((tech) => <li key={tech}>{tech}</li>)}
                </ul>

                <details className="project-details">
                  <summary>Project details <ChevronDown size={17} aria-hidden="true" /></summary>
                  <ul>
                    {project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                  </ul>
                </details>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
