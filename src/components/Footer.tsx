import { ArrowUp } from 'lucide-react';
import { profile } from '../data/profile';

export default function Footer() {
  return (
    <footer className="page-width site-footer">
      <p>© {new Date().getFullYear()} {profile.name}</p>
      <a href="#home">Back to top <ArrowUp size={16} aria-hidden="true" /></a>
    </footer>
  );
}
