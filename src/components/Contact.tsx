import { ArrowUpRight, Github, Mail } from 'lucide-react';
import { profile } from '../data/profile';

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="section-band">
      <div className="page-width">
        <div className="contact-panel">
          <div>
            <h2 id="contact-title" className="section-title">Get in touch</h2>
            <p>For project inquiries and collaboration.</p>
          </div>
          <div className="actions">
            <a className="button button-primary" href={'mailto:' + profile.email}>
              <Mail size={17} aria-hidden="true" /> {profile.email}
            </a>
            <a className="button button-secondary" href={profile.github} target="_blank" rel="noopener noreferrer">
              <Github size={17} aria-hidden="true" /> GitHub <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
