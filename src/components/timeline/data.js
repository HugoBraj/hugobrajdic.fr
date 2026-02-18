// Structure de données pour la timeline
// Type: 'professional', 'academic', 'personal'

export const timelineData = [
  {
    id: 1,
    type: 'professional',
    date: '2024 - Présent',
    title: 'Alternant Développeur Full-stack',
    company: 'Groupe Covéa',
    description: 'Développement d\'applications web et maintenance de systèmes existants.',
    skills: ['Java EE', 'React', 'SQL', 'Spring Boot'],
    images: [
      // URLs des images à ajouter
      '/path/to/image1.jpg',
      '/path/to/image2.jpg'
    ],
    position: 'right' // 'left' or 'right'
  },
  {
    id: 2,
    type: 'academic',
    date: '2022 - 2025',
    title: 'BUT Informatique',
    company: 'IUT de Paris',
    description: 'Formation en développement logiciel, bases de données et génie logiciel.',
    skills: ['Java', 'Python', 'JavaScript', 'SQL', 'UML'],
    images: [],
    position: 'left'
  },
  {
    id: 3,
    type: 'personal',
    date: '2023',
    title: 'Projet Personnel - Jeu Unity',
    company: 'Projet personnel',
    description: 'Création d\'un jeu vidéo en 3D avec Unity et C#.',
    skills: ['Unity', 'C#', 'Blender', '3D Modeling'],
    images: [],
    position: 'right'
  }
  // Ajouter plus d'éléments ici
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
