export const timelineData = [
  {
    id: 1,
    types: ['academic', 'professional'],
    date: 'Janvier 2026',
    titleKey: 'project_1_title',
    subtitleKey: 'project_1_subtitle',
    descriptionKey: 'project_1_description',
    skills: ['Nuxt 4', 'Vue 3', 'TypeScript', 'Three.js', 'Tailwind CSS', 'SSR/SPA'],
    images: [],
    href: null,
    position: 'right'
  },
  {
    id: 2,
    types: ['personal'],
    date: '2025',
    titleKey: 'project_2_title',
    subtitleKey: 'project_2_subtitle',
    descriptionKey: 'project_2_description',
    skills: ['Figma', 'UX/UI Design', 'Design System', 'Front-end'],
    images: [],
    href: 'https://www.figma.com/proto/ALW3JKNEZU88Lc2CXph2PS/showOff?t=QVfp2Bc6vK47vqlQ-1',
    position: 'left'
  },
  {
    id: 3,
    types: ['academic'],
    date: 'Mai/Juin 2024',
    titleKey: 'project_3_title',
    subtitleKey: 'project_3_subtitle',
    descriptionKey: 'project_3_description',
    skills: ['React', 'Tailwind CSS', 'AnodisJS', 'Docker', 'PostgreSQL', 'API REST', 'Full-stack'],
    images: [],
    href: 'https://github.com/aurelien2247/IMTVENTAIRE',
    position: 'right'
  },
  {
    id: 4,
    types: ['academic'],
    date: 'Octobre 2025',
    titleKey: 'project_4_title',
    subtitleKey: 'project_4_subtitle',
    descriptionKey: 'project_4_description',
    skills: ['Flutter', 'Dart', 'Android Studio', 'API REST', 'Gestion asynchrone'],
    images: [],
    href: 'https://github.com/HugoBraj/space_hics',
    position: 'left'
  }
];

// Fonction helper pour filtrer par type
export const filterByType = (type) => {
  return timelineData.filter(item => item.type === type);
};

// Fonction helper pour trier par date (plus récent en premier)
export const sortByDate = (data) => {
  return [...data].sort((a, b) => {
    // Logique de tri basée sur les dates
    // À améliorer selon le format de date utilisé
    return b.id - a.id; // Temporaire: tri par ID
  });
};
