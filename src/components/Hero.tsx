import { ArrowDown, ArrowUpRight, Github } from 'lucide-react';
import portrait from '../assets/ziad.webp';
import { profile } from '../data/profile';

export default function Hero() {
  return (
    <section id="home" aria-labelledby="hero-title" className="hero page-width">
      <div className="hero-copy">
        <p className="role-label">Full-stack developer</p>
        <h1 id="hero-title">{profile.name}</h1>
        <p className="hero-intro">I build web, desktop, and mobile applications.</p>
        <p className="hero-description">
          I work in the Node.js ecosystem. My recent projects include a workshop cutting planner
          and a management system for Hajj and Umrah operations.
        </p>
        <div className="actions">
          <a className="button button-primary" href="#projects">
            Explore my work <ArrowDown size={17} aria-hidden="true" />
          </a>
          <a className="button button-secondary" href={profile.github} target="_blank" rel="noopener noreferrer">
            <Github size={17} aria-hidden="true" /> GitHub <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="portrait-frame">
        <img src={portrait} alt={profile.name} width="510" height="617" fetchPriority="high" />
      </div>
    </section>
  );
}
