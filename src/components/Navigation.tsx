import { useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/ziad-logo.webp';
import { navigation, profile } from '../data/profile';

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);

  return (
    <header className="site-header" onKeyDown={(event) => {
      if (event.key === 'Escape' && open) {
        setOpen(false);
        toggle.current?.focus();
      }
    }}>
      <div className="page-width header-row">
        <a className="brand" href="#home" onClick={() => setOpen(false)}>
          <img src={logo} alt="" width="34" height="34" />
          {profile.name}
        </a>

        <button
          type="button"
          className="menu-toggle"
          ref={toggle}
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          aria-controls="site-navigation"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={23} aria-hidden="true" /> : <Menu size={23} aria-hidden="true" />}
        </button>

        <nav id="site-navigation" aria-label="Main navigation" className={'site-nav' + (open ? ' is-open' : '')}>
          {navigation.map(({ href, label }) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
          <a className="button button-secondary" href="#contact" onClick={() => setOpen(false)}>Contact</a>
        </nav>
      </div>
    </header>
  );
}
