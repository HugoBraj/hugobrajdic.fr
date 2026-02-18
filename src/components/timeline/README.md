# Timeline Component - Guide d'utilisation

## 📁 Structure

```
components/timeline/
├── Timeline.jsx          # Composant principal
├── TimelineItem.jsx      # Item individuel de la timeline
├── ImageCarousel.jsx     # Carrousel d'images
├── timeline.css          # Styles
└── data.js              # Données de la timeline
```

## 🎯 Fonctionnalités

### ✨ Caractéristiques principales

- **Timeline verticale** avec ligne centrale animée
- **Éléments alternés** gauche/droite automatiquement
- **3 types de contenu** : Professionnel, Académique, Personnel
- **Hover interactif** : agrandissement + affichage du carrousel
- **Carrousel d'images** avec navigation et indicateurs
- **Responsive** : adapté mobile et tablette
- **Animations fluides** avec reveal au scroll

## 📝 Comment ajouter un élément

### 1. Ouvrir `data.js`

```javascript
export const timelineData = [
  {
    id: 1,                              // ID unique (incrémentiel)
    type: 'professional',                // 'professional', 'academic', ou 'personal'
    date: '2024 - Présent',             // Période
    title: 'Titre du poste/projet',     // Titre principal
    company: 'Nom de l\'entreprise',    // Entreprise/école/projet
    description: 'Description courte',   // Description (1-2 lignes)
    skills: ['Skill1', 'Skill2'],       // Tableau de compétences
    images: [                            // Tableau d'URLs d'images
      '/assets/image1.jpg',
      '/assets/image2.jpg'
    ]
  },
  // Ajouter d'autres éléments ici...
];
```

### 2. Types d'éléments disponibles

#### 💼 Professionnel (`professional`)
- Stages, alternances, emplois
- Badge bleu
- Icône 💼

#### 🎓 Académique (`academic`)
- Formations, diplômes, certifications
- Badge vert
- Icône 🎓

#### 🚀 Personnel (`personal`)
- Projets personnels, side projects
- Badge rose
- Icône 🚀

## 🖼️ Gestion des images

### Ajouter des images

1. **Placer les images** dans `/public/assets/` ou `/src/assets/`
2. **Référencer dans data.js** :

```javascript
images: [
  '/assets/projet1/screenshot1.jpg',
  '/assets/projet1/screenshot2.jpg',
  'https://exemple.com/image-externe.jpg'
]
```

### Sans images

Si pas d'images disponibles :
```javascript
images: []  // Le carrousel affichera un placeholder
```

## 🎨 Personnalisation

### Modifier les couleurs des badges

Dans `timeline.css`, chercher :

```css
.timeline__badge--professional { /* Bleu - Pro */ }
.timeline__badge--academic { /* Vert - École */ }
.timeline__badge--personal { /* Rose - Perso */ }
```

### Ajuster l'animation au hover

Dans `timeline.css` :

```css
.timeline__item--expanded .timeline__card {
    transform: scale(1.05);  /* Ajuster le zoom */
}
```

### Modifier la hauteur du carrousel

Dans `timeline.css` :

```css
.carousel__container {
    height: 300px;  /* Ajuster la hauteur */
}
```

## 📱 Comportement responsive

- **Desktop (>1024px)** : Éléments alternés gauche/droite
- **Tablette (768-1024px)** : Éléments réduits, toujours alternés
- **Mobile (<768px)** : Timeline à gauche, tous les éléments à droite

## 🔧 Fonctions utilitaires disponibles

### Filtrer par type

```javascript
import { filterByType } from './data';

const proItems = filterByType('professional');
const acadItems = filterByType('academic');
const persItems = filterByType('personal');
```

### Trier par date

```javascript
import { sortByDate } from './data';

const sortedItems = sortByDate(timelineData);
```

## 💡 Bonnes pratiques

1. **Ordre chronologique** : Du plus récent (haut) au plus ancien (bas)
2. **Descriptions concises** : 1-2 lignes maximum
3. **Compétences pertinentes** : 4-6 skills par élément
4. **Images optimisées** : Format WebP, < 500Ko par image
5. **Noms explicites** : Titres et entreprises clairs

## 🎯 Exemple complet

```javascript
{
  id: 4,
  type: 'professional',
  date: 'Sept 2024 - Fév 2025',
  title: 'Développeur Full-stack Junior',
  company: 'Tech Company',
  description: 'Développement d\'une application de gestion interne en React et Node.js avec base MongoDB.',
  skills: ['React', 'Node.js', 'MongoDB', 'Express', 'Docker', 'Git'],
  images: [
    '/assets/tech-company/dashboard.jpg',
    '/assets/tech-company/api-diagram.png',
    '/assets/tech-company/mobile-view.jpg'
  ]
}
```

## 🚀 Améliorations futures possibles

- [ ] Filtres par type (Pro/Acad/Perso)
- [ ] Recherche dans la timeline
- [ ] Export en PDF
- [ ] Mode sombre/clair
- [ ] Animation de défilement automatique
- [ ] Liens externes vers projets GitHub

## ❓ Support

Pour toute question ou suggestion d'amélioration, consultez la documentation React ou créez une issue dans le projet.
