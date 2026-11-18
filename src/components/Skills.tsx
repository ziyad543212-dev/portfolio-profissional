import { skills } from '../data/skills';

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="section-band">
      <div className="page-width section-split">
        <h2 id="skills-title" className="section-title">Technical skills</h2>
        <div>
          <dl className="info-list">
            {skills.map(({ category, technologies }) => (
              <div key={category} className="info-row">
                <dt>{category}</dt>
                <dd>
                  <ul className="tags">
                    {technologies.map((tech) => <li key={tech}>{tech}</li>)}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>
          <p className="section-note">Basic knowledge of C++ and Java.</p>
        </div>
      </div>
    </section>
  );
}
