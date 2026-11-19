import cuttingImage from '../assets/panel-cut-plan.webp';
import almadinahImage from '../assets/almadinah-dashboard.webp';

interface Project {
  id: string;
  name: string;
  platforms: string;
  summary: string;
  highlights: string[];
  technologies: string[];
  image: string;
  imageAlt: string;
  imageCaption: string;
}

export const projects: Project[] = [
  {
    id: 'panel-cut-optimizer',
    name: 'Panel Cut Optimizer',
    platforms: 'Web · Windows · Android',
    summary: 'A bilingual workshop tool that turns 3D box designs and part dimensions into printable sheet-cutting plans.',
    highlights: [
      'A 3D box designer generates labeled parts that can be sent straight to the cutting planner.',
      'A Web Worker compares guillotine layouts while accounting for blade width and reusable offcuts.',
      'Projects autosave offline in IndexedDB, with JSON backups and print-ready diagrams.',
    ],
    technologies: ['React', 'Web Workers', 'Dexie', 'Electron', 'Capacitor'],
    image: cuttingImage,
    imageAlt: 'A cutting diagram with color-coded panels, dimensions, a reusable offcut, and a part key.',
    imageCaption: 'Cutting plan for a sample box',
  },
  {
    id: 'almadinah-management',
    name: 'Al Madinah Hajj & Umrah Management System',
    platforms: 'Web · Windows',
    summary: 'An Arabic-first system for managing trips, pilgrim records, payments, and passenger manifests in one place.',
    highlights: [
      'Trip and payment dashboards give staff a shared view of day-to-day operations.',
      'Passport OCR extracts fields and flags uncertain or conflicting values for manual review.',
      'An Express API and PostgreSQL database serve the web client and the Electron desktop app.',
    ],
    technologies: ['React', 'TypeScript', 'Express', 'PostgreSQL', 'Electron', 'OCR'],
    image: almadinahImage,
    imageAlt: 'Arabic dashboard showing trip, pilgrim, and payment summaries with sample data.',
    imageCaption: 'Dashboard with sample data',
  },
];
