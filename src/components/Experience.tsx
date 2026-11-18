const experience = [
  { title: 'Full-stack development', detail: 'React applications and Node.js / Express APIs', duration: '3 years' },
  { title: 'Cross-platform development', detail: 'Desktop apps with Electron and mobile apps with React Native', duration: '2 years' },
];

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="section-band">
      <div className="page-width section-split">
        <h2 id="experience-title" className="section-title">Experience</h2>
        <ul className="info-list">
          {experience.map(({ title, detail, duration }) => (
            <li className="info-row experience-row" key={title}>
              <div>
                <h3>{title}</h3>
                <p>{detail}</p>
              </div>
              <span className="range">{duration}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
