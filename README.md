# SiteDZ Store - Website

Un site web moderne et élégant pour SiteDZ Store, une agence web professionnelle basée en Algérie.

## 🚀 Technologies Utilisées

- **Next.js 15** - Framework React avec App Router
- **TypeScript** - Typage statique
- **Tailwind CSS** - Framework CSS utilitaire
- **React** - Bibliothèque JavaScript
- **Google Fonts** - Polices élégantes (Playfair Display, Inter)

## ✨ Fonctionnalités

### 🎨 Design
- Design moderne et premium avec gradient élégant
- Thème cohérent : `bg-gradient-to-br from-slate-900 via-red-900 to-slate-900`
- Interface responsive et mobile-first
- Animations fluides et transitions élégantes

### 📱 Pages
- **Accueil** - Hero section avec CTA, aperçu des services web, témoignages clients
- **Galerie** - Grille de projets web réalisés
- **Services** - Détails complets des services web (sites vitrine, e-commerce, sur mesure)
- **À Propos** - Histoire, valeurs, expertise
- **Contact** - Informations de contact et couverture nationale

### 🔧 Fonctionnalités Techniques
- Navigation sticky avec effets de scroll
- Bouton WhatsApp flottant
- Optimisation SEO complète
- Images optimisées avec Next.js Image
- Accessibilité (ARIA, navigation clavier)
- Performance optimisée

## 🛠️ Installation et Démarrage

### Prérequis
- Node.js 18+ 
- npm ou yarn

### Installation
```bash
# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm run dev

# Build pour production
npm run build

# Démarrer en production
npm start
```

## 📁 Structure du Projet

```
src/
├── app/                    # Pages Next.js App Router
│   ├── globals.css        # Styles globaux
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Page d'accueil
│   ├── gallery/           # Page galerie
│   ├── services/          # Page services
│   ├── about/             # Page à propos
│   └── contact/           # Page contact
├── components/            # Composants React
│   ├── Navbar.tsx        # Navigation
│   ├── WhatsAppButton.tsx # Bouton WhatsApp
│   ├── HeroSection.tsx   # Section hero
│   ├── GalleryGrid.tsx   # Grille galerie
│   ├── ServicesList.tsx  # Liste services
│   └── ...               # Autres composants
└── lib/                  # Utilitaires
```

## 🎨 Personnalisation

### Couleurs
Le thème utilise un gradient élégant :
- `slate-900` (noir profond)
- `red-900` (rouge foncé)
- `slate-900` (noir profond)

### Polices
- **Playfair Display** - Titres élégants
- **Inter** - Texte de contenu

### Images
- Utilisez des images de haute qualité
- Format recommandé : JPG/WebP
- Taille optimale : 1200x800px

## 📞 Contact

### Informations de Contact
- **WhatsApp** : +213 797 339 451
- **Téléphone** : +213 797 339 451
- **Email** : autonomy.owner@gmail.com
- **Localisation** : Algérie
- **Instagram** : https://www.instagram.com/site.dz.store/
- **Facebook** : https://www.facebook.com/sitedz.store/
- **Site Web** : https://www.sitedz.store/

### Zone de Service
- Alger
- Oran
- Constantine
- Tlemcen
- Annaba
- Partout en Algérie (services à distance)

## 🔧 Configuration

### Variables d'Environnement
Créez un fichier `.env.local` :
```env
NEXT_PUBLIC_SITE_URL=https://www.sitedz.store
NEXT_PUBLIC_PHONE_NUMBER=+213797339451
NEXT_PUBLIC_EMAIL=autonomy.owner@gmail.com
```

### SEO
- Métadonnées optimisées pour "Agence web en Algérie"
- OpenGraph tags pour les réseaux sociaux
- Structure de données pour Google

## 🚀 Déploiement

### Vercel (Recommandé)
```bash
npm run build
vercel --prod
```

### Autres Plateformes
- Netlify
- AWS Amplify
- DigitalOcean App Platform

## 📝 Notes de Développement

### Bonnes Pratiques
- Utilisation de const functions avec TypeScript
- Noms descriptifs avec préfixe "handle" pour les événements
- Accessibilité complète (ARIA, navigation clavier)
- Performance optimisée (lazy loading, images optimisées)

### Structure Modulaire
- Composants réutilisables
- Séparation claire des responsabilités
- Code maintenable et extensible

## 🤝 Contribution

1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/AmazingFeature`)
3. Commit les changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

---

**SiteDZ Store** - Votre agence web de confiance en Algérie 