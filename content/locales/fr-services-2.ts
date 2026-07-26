import type { ServicePageCopy } from '../types'
import type { ServiceId } from '../data/services'

/** French SEO landing pages, part 2. See fr-services.ts for the first batch. */
export const frServicePages2: Partial<Record<ServiceId, ServicePageCopy>> = {
  mobile: {
    metaTitle: 'Développement d\'application mobile en Algérie | SiteDZ',
    metaDescription:
      "Développement d'applications mobiles Android et iOS en Algérie : gestion de livreurs, réservation, catalogue, mode hors ligne. Deux applications déjà sur le Play Store.",
    h1: 'Développement\nd\'*application mobile*',
    intro:
      "Applications Android et iOS pour la gestion terrain, la réservation et la vente. Deux de nos applications sont en ligne sur le Play Store.",
    body: [
      "Une application n'est pas un site en plus petit. Elle se justifie quand vos utilisateurs reviennent tous les jours, quand ils travaillent sur le terrain sans réseau stable, ou quand vous avez besoin du GPS, de l'appareil photo ou des notifications. Si ce n'est pas votre cas, un site bien fait sur mobile coûtera moins cher et servira mieux.",
      "Là où les applications tiennent leurs promesses en Algérie, c'est la gestion de flotte et de livreurs, la prise de commande en tournée, la réservation, et les marketplaces avec plusieurs rôles. Le mode hors ligne compte : un livreur à Djelfa n'aura pas toujours de connexion, et l'application doit continuer à fonctionner puis se synchroniser au retour du réseau.",
      "Nous livrons généralement une application Android avec un back-office web, en français et en arabe, avec les rôles dont vous avez besoin. iOS est ajouté quand votre public le justifie — en Algérie, Android représente la très grande majorité du parc.",
    ],
    deliverablesTitle: 'Ce que nous livrons',
    deliverables: [
      { name: 'Application Android', desc: "Publiée sur le Play Store sous votre compte développeur, ou sous le nôtre le temps que vous ouvriez le vôtre." },
      { name: 'Back-office web', desc: "Interface d'administration pour piloter les utilisateurs, les données et les rapports depuis un ordinateur." },
      { name: 'Rôles et permissions', desc: "Administrateur, opérateur, livreur, analyste — chaque profil ne voit que ce qui le concerne." },
      { name: 'Mode hors ligne', desc: "L'application continue de fonctionner sans réseau et synchronise dès que la connexion revient." },
      { name: 'GPS et rapports', desc: "Suivi de position quand l'usage le demande, et export des données en PDF ou Excel." },
      { name: 'Bilingue français / arabe', desc: "Interface complète dans les deux langues, avec mise en page arabe de droite à gauche." },
    ],
    faqTitle: 'Questions fréquentes',
    faq: [
      {
        q: "Combien coûte une application mobile en Algérie ?",
        a: "Une application de gestion à périmètre défini — trois rôles, back-office, bilingue — démarre à 80 000 DA. Une marketplace ou une application avec paiement intégré se chiffre au cas par cas, généralement à partir de 250 000 DA. Nous établissons un devis après avoir cadré les fonctionnalités.",
      },
      {
        q: 'Faut-il développer sur Android et iOS ?',
        a: "Rarement au départ. Android couvre la très grande majorité du parc algérien. Nous conseillons de sortir sur Android, de valider l'usage réel, puis d'ajouter iOS si vos utilisateurs le réclament.",
      },
      {
        q: "Ai-je besoin d'une application ou un site suffit-il ?",
        a: "Un site suffit si vos utilisateurs viennent occasionnellement, cherchent une information et repartent. Une application se justifie s'ils l'ouvrent quotidiennement, travaillent hors ligne, ou si vous avez besoin du GPS, de la caméra ou des notifications. Nous vous le dirons honnêtement avant de vous vendre quoi que ce soit.",
      },
      {
        q: 'Qui publie l\'application sur le Play Store ?',
        a: "Idéalement vous, sous votre propre compte développeur Google — c'est 25 dollars une fois et l'application vous appartient sans ambiguïté. Nous gérons la publication et les visuels de la fiche.",
      },
    ],
    ctaTitle: 'Votre application,\n*cadrée* d\'abord',
    ctaSub: 'Décrivez-nous le problème à résoudre. Nous vous dirons si une application est la bonne réponse.',
  },

  bilingue: {
    metaTitle: 'Site bilingue français-arabe avec RTL en Algérie | SiteDZ',
    metaDescription:
      "Site web bilingue français et arabe avec mise en page RTL correcte. Pas de traduction automatique : deux versions complètes, indexées séparément par Google.",
    h1: 'Site bilingue\nfrançais-*arabe*',
    intro:
      "Deux versions complètes du site, avec une mise en page arabe de droite à gauche correcte et un référencement séparé pour chaque langue.",
    body: [
      "La plupart des sites algériens dits bilingues ne le sont pas vraiment. Ils ont un bouton qui déclenche Google Translate, ou une version arabe où la mise en page reste alignée à gauche et où les flèches pointent dans le mauvais sens. Un lecteur arabophone le remarque en trois secondes, et l'effet sur la crédibilité est l'inverse de celui recherché.",
      "Une version arabe correcte demande plus qu'une traduction. La direction du texte change, ce qui retourne la navigation, les marges, les icônes directionnelles et l'ordre des colonnes. La typographie change aussi — une police latine rend mal l'arabe, et l'interlignage doit être plus généreux pour rester lisible.",
      "Côté référencement, chaque langue a sa propre adresse et ses propres titres, reliés entre eux par des balises hreflang. C'est ce qui permet à Google de proposer la version arabe à un utilisateur arabophone et la version française à un francophone, au lieu de considérer les deux comme du contenu dupliqué.",
    ],
    deliverablesTitle: 'Ce que couvre la version arabe',
    deliverables: [
      { name: 'Traduction humaine', desc: "Chaque page traduite et relue, pas passée à la machine. Les termes métier sont vérifiés avec vous." },
      { name: 'Mise en page RTL', desc: "Navigation, marges, colonnes et icônes directionnelles retournées. La page se lit naturellement de droite à gauche." },
      { name: 'Typographie arabe', desc: "Police adaptée à l'arabe et interlignage ajusté. Le confort de lecture n'est pas le même qu'en latin." },
      { name: 'URLs séparées', desc: "Une adresse par langue, indexable indépendamment, avec ses propres titre et description." },
      { name: 'Balises hreflang', desc: "Chaque version déclare ses équivalents. Google sert la bonne langue au bon utilisateur au lieu de voir du contenu dupliqué." },
      { name: 'Sélecteur de langue', desc: "Visible sur chaque page, sans redirection automatique — qui pénalise l'indexation et agace les visiteurs." },
    ],
    faqTitle: 'Questions fréquentes',
    faq: [
      {
        q: 'Combien coûte la version bilingue ?',
        a: "25 000 DA pour ajouter une deuxième langue avec RTL à un site que nous construisons, 45 000 DA pour trois langues. Sur un site existant, cela dépend de la structure — nous regardons avant de chiffrer.",
      },
      {
        q: 'Une traduction automatique ne suffit-elle pas ?',
        a: "Non, pour deux raisons. Google indexe mal les contenus traduits à la volée par script, donc vous ne gagnez rien en référencement. Et la qualité se voit : un texte commercial traduit automatiquement fait perdre en crédibilité plus qu'une absence de version arabe.",
      },
      {
        q: 'Faut-il rediriger automatiquement selon la langue du navigateur ?',
        a: "Non. Google déconseille explicitement la redirection automatique, et son robot explore depuis les États-Unis — il verrait donc toujours la version anglaise. Mieux vaut un sélecteur visible, éventuellement accompagné d'un bandeau discret proposant l'autre langue.",
      },
      {
        q: "Faut-il aussi une version anglaise ?",
        a: "Seulement si vous exportez ou visez des clients étrangers. Pour un marché purement algérien, français et arabe couvrent l'essentiel. L'anglais devient utile pour les exportateurs agroalimentaires et les entreprises visant l'Afrique de l'Ouest ou le Golfe.",
      },
    ],
    ctaTitle: 'Deux langues,\n*un seul* site',
    ctaSub: "Envoyez-nous l'adresse de votre site actuel. Nous vous disons ce qu'il faut pour l'arabe.",
  },

  refonte: {
    metaTitle: 'Refonte de site web en Algérie — 250 000 DA | SiteDZ',
    metaDescription:
      "Refonte complète de votre site web : design moderne, rapide sur mobile, référencement corrigé et redirections propres pour ne perdre aucune position Google.",
    h1: 'Refonte de\nvotre *site web*',
    intro:
      "Vous avez déjà un site, mais il est lent, illisible sur téléphone ou invisible sur Google. Refonte complète à 250 000 DA, sans perdre vos positions acquises.",
    body: [
      "Un site de 2018 ne vieillit pas seulement sur le plan esthétique. Il charge en huit secondes sur une connexion mobile, il n'est pas lisible sur un téléphone, et il n'a probablement jamais eu de balises correctes. Vous continuez à payer l'hébergement d'un outil qui, en pratique, envoie vos visiteurs chez un concurrent.",
      "La refonte est aussi le bon moment pour corriger ce qui n'a jamais été fait : structure des pages, vitesse de chargement, fiche Google d'établissement, version arabe. Un site refait sans traiter ces points est juste un site plus joli qui ne se classe pas davantage.",
      "Le point technique à ne pas rater, c'est la migration. Si vos anciennes adresses disparaissent sans redirection, vous perdez d'un coup les positions Google que vous aviez mises des années à construire. Nous relevons chaque URL existante et nous la redirigeons vers son équivalent avant la mise en ligne.",
    ],
    deliverablesTitle: 'Ce que comprend la refonte',
    deliverables: [
      { name: 'Audit de l\'existant', desc: "Relevé des pages, des positions actuelles et des problèmes techniques avant de toucher à quoi que ce soit." },
      { name: 'Design refait', desc: "Jusqu'à 15 pages, pensées mobile d'abord, avec une identité visuelle cohérente." },
      { name: 'Redirections 301', desc: "Chaque ancienne adresse redirigée vers la nouvelle. C'est ce qui préserve vos positions Google." },
      { name: 'Tableau de bord', desc: "Interface pour modifier vos textes, vos produits et vos actualités sans nous appeler." },
      { name: 'Référencement corrigé', desc: "Titres, descriptions, données structurées, plan de site et fiche Google d'établissement." },
      { name: 'Vitesse', desc: "Images compressées, polices auto-hébergées, code allégé. L'objectif est un chargement sous deux secondes en 4G." },
    ],
    faqTitle: 'Questions fréquentes',
    faq: [
      {
        q: 'Vais-je perdre mon référencement Google ?',
        a: "Pas si la migration est faite correctement. Nous relevons toutes vos adresses existantes et nous mettons en place des redirections permanentes vers les nouvelles pages. Une baisse temporaire de quelques semaines est normale, le temps que Google réindexe, puis les positions reviennent — généralement à un meilleur niveau, le site étant plus rapide et mieux structuré.",
      },
      {
        q: 'Puis-je garder mon nom de domaine ?',
        a: "Oui, et c'est vivement conseillé. Votre domaine porte l'ancienneté et les liens accumulés. Nous le pointons simplement vers le nouvel hébergement, sans coupure de service.",
      },
      {
        q: 'Combien de temps prend une refonte ?',
        a: "Deux à trois semaines pour un site de 15 pages, à partir du moment où nous avons vos contenus. L'audit et le plan de redirections ajoutent quelques jours en amont.",
      },
      {
        q: 'Et si mon site actuel est sur WordPress ?',
        a: "Aucun problème. Nous récupérons vos contenus, vos images et votre structure d'URL. Vous n'avez rien à ressaisir.",
      },
    ],
    ctaTitle: 'Votre site,\n*remis à niveau*',
    ctaSub: 'Envoyez-nous votre adresse actuelle. Nous vous renvoyons un diagnostic gratuit sous 24 heures.',
  },

  maintenance: {
    metaTitle: 'Maintenance de site web en Algérie — 15 000 DA/mois | SiteDZ',
    metaDescription:
      "Maintenance mensuelle de votre site : hébergement, sauvegardes, mises à jour de sécurité, modifications de contenu et support WhatsApp. 15 000 DA par mois, sans engagement.",
    h1: 'Maintenance de\nvotre *site web*',
    intro:
      "Hébergement, sauvegardes, mises à jour, modifications de contenu et support WhatsApp. 15 000 DA par mois, résiliable à tout moment.",
    body: [
      "La plupart des sites algériens meurent doucement. Personne ne renouvelle le domaine, le certificat de sécurité expire et le navigateur affiche un avertissement rouge, ou un plugin non mis à jour ouvre une faille et le site se retrouve rempli de spam. Le propriétaire s'en aperçoit trois mois plus tard, quand un client le lui signale.",
      "Le pack de maintenance évite ça. Nous gérons l'hébergement, nous renouvelons ce qui doit l'être, nous appliquons les mises à jour de sécurité et nous sauvegardons chaque semaine. Si quelque chose casse, nous le voyons avant vous.",
      "Il couvre aussi les petites modifications, qui sont la vraie raison pour laquelle les sites se figent : changer un prix, ajouter une photo, corriger un horaire. Ce sont des tâches de cinq minutes que personne ne veut facturer à l'unité, et qui du coup ne se font jamais. Ici elles sont incluses.",
    ],
    deliverablesTitle: 'Ce qui est couvert',
    deliverables: [
      { name: 'Hébergement et domaine', desc: "Hébergement rapide et renouvellement du nom de domaine gérés pour vous. Plus d'expiration par oubli." },
      { name: 'Sauvegardes hebdomadaires', desc: "Copie complète du site chaque semaine, restaurable en quelques minutes en cas de problème." },
      { name: 'Mises à jour de sécurité', desc: "Certificat HTTPS et composants tenus à jour, ce qui ferme la porte aux piratages les plus courants." },
      { name: 'Modifications de contenu', desc: "Textes, prix, photos, horaires, nouvelles pages simples. Vous envoyez la demande sur WhatsApp." },
      { name: 'Surveillance', desc: "Alerte automatique si le site tombe, avec intervention de notre côté sans attendre votre appel." },
      { name: 'Support WhatsApp', desc: "Une vraie personne qui répond, en français ou en arabe, aux heures ouvrables." },
    ],
    faqTitle: 'Questions fréquentes',
    faq: [
      {
        q: 'La maintenance est-elle obligatoire ?',
        a: "Non. Le site vous appartient et vous pouvez l'héberger où vous voulez. Le pack existe parce que la plupart des clients préfèrent ne pas s'en occuper, pas parce qu'il est imposé.",
      },
      {
        q: 'Combien de modifications sont incluses ?',
        a: "Les modifications courantes de contenu sont incluses sans compteur : textes, prix, photos, horaires, ajout d'une page simple. Une nouvelle fonctionnalité ou une refonte de section fait l'objet d'un devis séparé.",
      },
      {
        q: 'Y a-t-il un engagement de durée ?',
        a: "Non. C'est mensuel et vous arrêtez quand vous voulez. Nous vous remettons alors une sauvegarde complète et le domaine reste à votre nom.",
      },
      {
        q: 'Que se passe-t-il si mon site est piraté ?',
        a: "Nous restaurons la dernière sauvegarde saine et nous corrigeons la faille, sans frais supplémentaires dans le cadre du pack. C'est précisément le risque qu'il couvre.",
      },
    ],
    ctaTitle: 'Un site qui reste\n*en ligne*',
    ctaSub: 'Que le site vienne de nous ou non, dites-nous où il est hébergé et nous regardons.',
  },

  techsellers: {
    metaTitle: 'Site web pour magasin informatique en Algérie | SiteDZ',
    metaDescription:
      "Site e-commerce pour magasins informatiques, monteurs PC et vendeurs de téléphones en Algérie : catalogue technique, configurateur PC, intégration livraison et SEO produit.",
    h1: 'Site web pour\n*vendeurs* informatique',
    intro:
      "Un pack pensé pour les magasins informatiques, les monteurs PC et les vendeurs de téléphones et accessoires. Catalogue technique, configurateur et livraison intégrée.",
    body: [
      "Vendre du matériel informatique en ligne n'a rien à voir avec vendre des vêtements. Vos clients comparent des références précises, veulent les fiches techniques complètes, et cherchent sur Google des modèles exacts — « RTX 4060 prix Algérie », pas « carte graphique ». Une boutique généraliste ne capte pas ces recherches.",
      "Le catalogue doit donc être construit autour des caractéristiques : socket, chipset, capacité, fréquence, garantie. C'est ce qui permet au client de filtrer, de comparer deux produits côte à côte, et à Google d'indexer chaque référence comme une page qui répond à une requête précise.",
      "S'y ajoute le configurateur PC, qui est l'argument différenciant sur ce marché. Le client assemble sa configuration, le site vérifie la compatibilité des composants et affiche le prix en temps réel. En pratique cela augmente le panier moyen et supprime la moitié des questions qui arrivaient jusque-là sur WhatsApp.",
    ],
    deliverablesTitle: 'Ce que contient le pack',
    deliverables: [
      { name: 'Catalogue technique', desc: "Fiches avec caractéristiques complètes, variantes, stock en direct et comparaison côte à côte." },
      { name: 'Configurateur PC', desc: "Le client monte sa configuration avec vérification de compatibilité et prix calculé en temps réel." },
      { name: 'SEO produit', desc: "Chaque référence devient une page indexable, ciblée sur le modèle exact que les acheteurs recherchent." },
      { name: 'Intégration livraison', desc: "Yalidine, ZR Express ou Noest, avec bordereaux générés et suivi automatique." },
      { name: 'Générateur de landing pages', desc: "Une page dédiée par promotion, marque ou arrivage, créée en quelques minutes sans développeur." },
      { name: 'Identité visuelle', desc: "Logo, couleurs et kit réseaux sociaux pour que votre magasin devienne la référence de votre wilaya." },
    ],
    faqTitle: 'Questions fréquentes',
    faq: [
      {
        q: 'Combien coûte ce pack ?',
        a: "La base est celle de la boutique en ligne : 150 000 DA d'installation et 8 000 DA par mois. Le configurateur PC et le générateur de landing pages sont chiffrés selon la taille de votre catalogue. Envoyez-nous le nombre de références pour un devis précis.",
      },
      {
        q: 'Puis-je importer mon catalogue existant ?',
        a: "Oui. Si vous avez un fichier Excel ou un export de votre logiciel de caisse, nous l'importons. C'est généralement plus rapide que de tout ressaisir, même quand le fichier est imparfait.",
      },
      {
        q: 'Le stock se met-il à jour automatiquement ?',
        a: "Il se met à jour à chaque commande passée sur le site. Une synchronisation avec un logiciel de caisse existant est possible si celui-ci expose une interface — à voir au cas par cas.",
      },
      {
        q: 'Le configurateur gère-t-il vraiment la compatibilité ?',
        a: "Oui, sur les règles qui comptent : socket processeur et carte mère, type de mémoire, format du boîtier, puissance de l'alimentation et longueur de la carte graphique. Les règles sont paramétrables, vous pouvez les ajuster.",
      },
    ],
    ctaTitle: 'Votre magasin,\n*en ligne*',
    ctaSub: 'Dites-nous combien de références vous vendez. Devis détaillé sous 24 heures.',
  },
}
