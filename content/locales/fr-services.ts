import type { ServicePageCopy } from '../types'
import type { ServiceId } from '../data/services'

/**
 * French SEO landing pages. Split out of fr.ts to keep both files readable.
 *
 * Language is drawn from what the business already sells with: the pain-point
 * framing in outreach-playbook.html and the module breakdowns in
 * proposal-ecommerce-fr.html. Each H1 carries the target query verbatim.
 */
export const frServicePages: Partial<Record<ServiceId, ServicePageCopy>> = {
  vitrine: {
    metaTitle: 'Création de site web en Algérie — 100 000 DA, livré en 7 jours | SiteDZ',
    metaDescription:
      'Création de site vitrine professionnel en Algérie. 5 pages, bilingue français/arabe, nom de domaine et hébergement inclus. 100 000 DA tout compris, livré en 7 jours.',
    h1: 'Création de site web\nen *Algérie*',
    intro:
      "Un site vitrine professionnel, bilingue français/arabe, livré en 7 jours ouvrés. 100 000 DA tout compris — nom de domaine et hébergement de la première année inclus.",
    body: [
      "Quand un client cherche votre entreprise sur Google, il ne trouve rien — ou seulement une page Facebook mise à jour il y a huit mois. Pendant ce temps, un concurrent avec un vrai site apparaît en premier et récupère l'appel. Ce n'est pas une question de qualité de produit : c'est une question de visibilité.",
      "Un site vitrine règle ça. Il travaille 24h/24, même quand vous ne répondez pas au téléphone. Il présente vos produits, vos références et vos coordonnées de manière crédible, et il donne à un acheteur — algérien ou étranger — une raison de vous prendre au sérieux avant même le premier contact.",
      "Nous construisons ces sites en une semaine parce que nous ne partons pas de zéro à chaque fois. La structure est éprouvée, le code est propre, et le résultat est rapide sur un téléphone en 3G — ce qui compte, puisque c'est comme ça que la majorité de vos visiteurs arriveront.",
    ],
    deliverablesTitle: 'Ce qui est inclus',
    deliverables: [
      { name: '5 pages sur mesure', desc: "Accueil, à propos, produits ou services, galerie et contact. Structure adaptée à votre activité, pas un gabarit générique." },
      { name: 'Bilingue français / arabe', desc: "Les deux versions avec une mise en page arabe correcte de droite à gauche, pas une traduction automatique collée dans un site français." },
      { name: 'Domaine et hébergement', desc: "Nom de domaine .com ou .dz et hébergement inclus la première année. Renouvellement à prix coûtant ensuite." },
      { name: 'Design responsive', desc: "Testé sur téléphone, tablette et ordinateur. La majorité de vos visiteurs viendront d'un mobile, c'est donc là que nous optimisons en premier." },
      { name: 'Référencement de base', desc: "Titres, descriptions, plan de site et données structurées configurés dès le départ pour que Google puisse indexer chaque page." },
      { name: 'Contact WhatsApp direct', desc: "Bouton WhatsApp sur chaque page. En Algérie c'est le canal qui convertit — les formulaires de contact restent souvent sans réponse." },
    ],
    faqTitle: 'Questions fréquentes',
    faq: [
      {
        q: 'Combien coûte un site web en Algérie ?',
        a: "Chez SiteDZ, un site vitrine de 5 pages coûte 100 000 DA tout compris, sans frais cachés. Une refonte complète avec tableau de bord est à 250 000 DA, et une boutique en ligne à 150 000 DA d'installation plus 8 000 DA par mois. Les prix du marché algérien vont d'environ 25 000 DA pour une page unique à plusieurs centaines de milliers de dinars pour du sur-mesure.",
      },
      {
        q: 'Combien de temps faut-il pour créer le site ?',
        a: "7 jours ouvrés à partir du moment où nous avons vos textes, votre logo et vos photos. Le délai dépend surtout de la rapidité avec laquelle vous nous transmettez ces éléments — la partie technique, elle, est planifiée.",
      },
      {
        q: 'Le site sera-t-il visible sur Google ?',
        a: "Oui. Chaque page est indexable dès la mise en ligne, avec titres, descriptions et plan de site configurés. Nous créons aussi votre fiche Google d'établissement, qui est souvent ce qui apporte le plus d'appels pour une entreprise locale. Apparaître en première position sur une requête concurrentielle demande ensuite plusieurs mois de contenu.",
      },
      {
        q: 'Est-ce que je suis propriétaire du site ?',
        a: "Oui. Le nom de domaine est enregistré à votre nom et le code source vous est remis. Vous pouvez partir chez un autre prestataire à tout moment sans rien perdre.",
      },
      {
        q: 'Quel est le mode de paiement ?',
        a: "50 % à la commande, 50 % à la livraison. Par virement, CCP, BaridiMob ou en espèces.",
      },
      {
        q: "J'ai déjà une page Facebook, est-ce suffisant ?",
        a: "Une page Facebook ne se classe pas sur Google, ne vous appartient pas et peut disparaître du jour au lendemain. Elle est utile pour l'animation quotidienne, mais un acheteur qui compare trois fournisseurs jugera plus sérieux celui qui a un vrai site. Les deux se complètent, ils ne se remplacent pas.",
      },
    ],
    ctaTitle: 'Votre site,\n*en 7 jours*',
    ctaSub: 'Dites-nous ce que vous vendez. Nous vous envoyons une proposition chiffrée sous 24 heures.',
  },

  boutique: {
    metaTitle: 'Créer une boutique en ligne en Algérie — 150 000 DA | SiteDZ',
    metaDescription:
      'Boutique en ligne clé en main pour vendeurs algériens : catalogue, panier, paiement à la livraison, intégration Yalidine et ZR Express. 150 000 DA + 8 000 DA/mois.',
    h1: 'Créer une *boutique*\nen ligne en Algérie',
    intro:
      "Catalogue, panier, paiement à la livraison et bordereaux transporteur générés automatiquement. 150 000 DA d'installation, puis 8 000 DA par mois.",
    body: [
      "Vendre sur Instagram fonctionne jusqu'à un certain volume. Passé une trentaine de commandes par semaine, vous passez vos journées à répondre aux mêmes questions en message privé, à noter des adresses dans un carnet et à recopier des bordereaux à la main. Ce n'est plus de la vente, c'est de la saisie.",
      "Une boutique en ligne déplace ce travail vers le site. Le client voit le stock réel, choisit sa wilaya, paie à la livraison, et la commande part directement chez Yalidine ou ZR Express avec le bordereau déjà généré. Vous récupérez vos soirées et vous arrêtez de perdre des commandes sur des messages sans réponse.",
      "Nous utilisons ma5zani plutôt que de développer une boutique sur mesure à chaque fois. C'est notre propre plateforme, conçue pour le marché algérien : paiement à la livraison, transporteurs locaux, interface arabe. Vous êtes en ligne en quelques jours au lieu de plusieurs semaines, et les mises à jour arrivent sans nouvelle facture.",
    ],
    deliverablesTitle: 'Ce qui est inclus',
    deliverables: [
      { name: 'Catalogue et stock', desc: "Produits, variantes, photos et stock en direct. Quand un article est épuisé il disparaît du site, sans intervention de votre part." },
      { name: 'Panier et commande', desc: "Tunnel de commande court, pensé mobile. Le client choisit sa wilaya et voit les frais de livraison avant de valider." },
      { name: 'Paiement à la livraison', desc: "Le mode de paiement dominant en Algérie, activé par défaut. Paiement CIB ou Edahabia disponible en option." },
      { name: 'Intégration transporteur', desc: "Yalidine, ZR Express ou Noest. Les commandes partent automatiquement et le suivi revient dans votre tableau de bord." },
      { name: 'Tableau de bord', desc: "Commandes, chiffre d'affaires, produits les plus vendus. Vous savez ce qui marche sans tenir de fichier Excel." },
      { name: 'Commande par WhatsApp', desc: "Pour les clients qui préfèrent parler avant d'acheter, un bouton qui pré-remplit le message avec le produit consulté." },
    ],
    faqTitle: 'Questions fréquentes',
    faq: [
      {
        q: 'Combien coûte une boutique en ligne en Algérie ?',
        a: "150 000 DA d'installation puis 8 000 DA par mois chez SiteDZ. L'abonnement couvre l'hébergement, les mises à jour, les sauvegardes et le support. Une boutique développée entièrement sur mesure coûte généralement entre 300 000 et 800 000 DA et prend deux à trois mois.",
      },
      {
        q: 'Puis-je accepter le paiement à la livraison ?',
        a: "Oui, c'est le mode par défaut. C'est encore la grande majorité des transactions e-commerce en Algérie, et l'imposer autrement fait chuter le taux de conversion.",
      },
      {
        q: 'Quelles sociétés de livraison sont intégrées ?',
        a: "Yalidine, ZR Express et Noest. Les commandes sont transmises automatiquement avec le bordereau généré, et le statut de livraison remonte dans votre tableau de bord sans que vous ayez à consulter le site du transporteur.",
      },
      {
        q: 'Puis-je gérer la boutique moi-même ?',
        a: "Oui. L'interface est en français et en arabe et ne demande aucune compétence technique. Nous faisons une formation d'une heure à la livraison, et le support WhatsApp reste disponible ensuite.",
      },
      {
        q: 'Que se passe-t-il si j\'arrête l\'abonnement ?',
        a: "Vous récupérez l'export complet de vos produits et de vos commandes, et le nom de domaine reste le vôtre. La boutique cesse simplement d'être hébergée et maintenue par nous.",
      },
    ],
    ctaTitle: 'Votre boutique,\n*en ligne*',
    ctaSub: 'Envoyez-nous votre catalogue et le nombre de commandes par semaine. Devis sous 24 heures.',
  },

  livraison: {
    metaTitle: 'Intégration Yalidine et ZR Express sur votre site | SiteDZ',
    metaDescription:
      'Connectez votre boutique à Yalidine, ZR Express ou Noest. Bordereaux générés automatiquement, suivi des colis en direct, plus de saisie manuelle. Intégration par SiteDZ.',
    h1: 'Intégration *Yalidine*\net ZR Express',
    intro:
      "Vos commandes partent directement chez le transporteur, avec le bordereau déjà généré et le suivi qui remonte automatiquement dans votre tableau de bord.",
    body: [
      "Le vrai coût d'une commande n'est pas la livraison, c'est la saisie. Recopier un nom, une adresse et un numéro sur le site du transporteur prend deux à trois minutes. À quarante commandes par jour, c'est deux heures perdues — et une erreur de frappe sur un numéro suffit à transformer un colis en retour.",
      "L'intégration supprime cette étape. La commande validée sur votre site crée le bordereau chez Yalidine, ZR Express ou Noest, avec les bonnes coordonnées et la bonne wilaya. Vous imprimez, vous collez, vous expédiez. Le statut du colis revient ensuite tout seul, ce qui veut dire que vous pouvez répondre à « où est ma commande ? » sans ouvrir trois onglets.",
      "Nous branchons ces intégrations sur les boutiques que nous construisons, mais aussi sur un site existant si vous en avez déjà un et qu'il est techniquement accessible.",
    ],
    deliverablesTitle: 'Ce que fait l\'intégration',
    deliverables: [
      { name: 'Bordereaux automatiques', desc: "Générés à la validation de la commande, avec les coordonnées du client et la wilaya déjà remplies." },
      { name: 'Suivi en direct', desc: "Le statut du colis remonte du transporteur vers votre tableau de bord, sans consultation manuelle." },
      { name: 'Frais par wilaya', desc: "La grille tarifaire du transporteur est appliquée automatiquement selon la wilaya choisie par le client." },
      { name: 'Stop desk et domicile', desc: "Les deux modes de livraison proposés au client, avec le tarif correspondant affiché avant la validation." },
      { name: 'Multi-transporteur', desc: "Yalidine, ZR Express et Noest peuvent coexister. Vous choisissez par commande ou vous laissez une règle par défaut." },
      { name: 'Notification client', desc: "Un message WhatsApp ou SMS au client quand le colis part, ce qui réduit nettement les retours pour absence." },
    ],
    faqTitle: 'Questions fréquentes',
    faq: [
      {
        q: 'Yalidine, ZR Express ou Noest : lequel choisir ?',
        a: "Cela dépend de votre zone. Yalidine a la couverture la plus large et le réseau de stop desks le plus dense. ZR Express est souvent plus rapide sur le centre et l'est du pays. Noest est compétitif sur les tarifs. Rien n'oblige à n'en choisir qu'un : l'intégration permet de router selon la wilaya.",
      },
      {
        q: 'Faut-il un compte professionnel chez le transporteur ?',
        a: "Oui. Il vous faut un compte marchand et une clé API, que le transporteur fournit gratuitement. Nous vous accompagnons dans la demande si vous ne l'avez pas encore.",
      },
      {
        q: 'Est-ce que ça marche sur un site que je possède déjà ?',
        a: "Dans la plupart des cas oui, à condition que le site ait un back-office accessible. Envoyez-nous l'adresse et nous vous disons si c'est faisable et à quel coût avant de vous engager.",
      },
      {
        q: 'Combien coûte cette intégration ?',
        a: "20 000 DA quand elle est ajoutée à un site que nous construisons. Sur un site existant, le tarif dépend de la plateforme — nous chiffrons après avoir regardé.",
      },
    ],
    ctaTitle: 'Arrêtez de recopier\n*les bordereaux*',
    ctaSub: 'Dites-nous quel transporteur vous utilisez et sur quelle plateforme tourne votre boutique.',
  },

  paiement: {
    metaTitle: 'Paiement en ligne CIB et Edahabia sur votre site | SiteDZ',
    metaDescription:
      'Acceptez les paiements par carte CIB et Edahabia sur votre site en Algérie. Intégration SATIM, guide des démarches, et alternative au paiement à la livraison.',
    h1: 'Paiement en ligne\n*CIB* et Edahabia',
    intro:
      "Encaissez par carte CIB et Edahabia en plus du paiement à la livraison. Intégration technique et accompagnement sur les démarches SATIM.",
    body: [
      "Le paiement à la livraison reste dominant en Algérie, et il le restera un moment. Mais il a un coût que peu de vendeurs calculent : les colis refusés à l'arrivée. Selon le secteur, entre 10 et 25 % des commandes payées à la livraison ne sont jamais réglées, et vous payez quand même l'aller-retour au transporteur.",
      "Le paiement par carte règle ce problème pour la partie de vos clients qui est prête à l'utiliser. La commande est encaissée avant l'expédition, donc plus de retour sec. En pratique, la bonne configuration n'est pas de remplacer le paiement à la livraison mais de proposer les deux, éventuellement avec une petite remise sur le paiement en ligne pour orienter le choix.",
      "Techniquement, l'encaissement par carte en Algérie passe par la SATIM, qui gère les cartes CIB et Edahabia. La partie longue n'est pas le développement, c'est le dossier : il faut un compte bancaire professionnel et une convention. Nous faisons l'intégration et nous vous guidons sur les pièces à fournir.",
    ],
    deliverablesTitle: 'Ce qui est mis en place',
    deliverables: [
      { name: 'Passerelle SATIM', desc: "Intégration de la solution de paiement pour les cartes CIB et Edahabia, en environnement de test puis en production." },
      { name: 'Double option de paiement', desc: "Carte et paiement à la livraison proposés côte à côte. Le client choisit, vous ne perdez personne." },
      { name: 'Page de paiement sécurisée', desc: "Redirection vers la page bancaire, certificat HTTPS et aucune donnée de carte stockée sur votre site." },
      { name: 'Confirmation automatique', desc: "La commande passe en payée dès la validation bancaire, et le client reçoit sa confirmation sans intervention." },
      { name: 'Réconciliation', desc: "Les paiements encaissés sont rapprochés des commandes dans le tableau de bord, ce qui simplifie la comptabilité." },
      { name: 'Accompagnement au dossier', desc: "Liste des pièces, aide au remplissage et suivi jusqu'à l'activation du compte marchand." },
    ],
    faqTitle: 'Questions fréquentes',
    faq: [
      {
        q: "Que faut-il pour accepter les paiements CIB et Edahabia ?",
        a: "Un registre de commerce, un compte bancaire professionnel et une convention marchand via votre banque, qui déclenche l'ouverture du compte SATIM. Le site doit être en HTTPS et disposer de conditions générales de vente ainsi que d'une politique de remboursement.",
      },
      {
        q: 'Combien de temps prennent les démarches ?',
        a: "Comptez généralement de trois à huit semaines côté banque et SATIM. C'est la partie la plus longue, et elle ne dépend pas de nous. L'intégration technique, elle, prend quelques jours une fois les accès reçus.",
      },
      {
        q: 'Faut-il abandonner le paiement à la livraison ?',
        a: "Non, ce serait une erreur. La majorité des acheteurs algériens veulent encore payer à réception. Proposez les deux et laissez le client choisir — le paiement en ligne se développera de lui-même avec le temps.",
      },
      {
        q: 'Quels sont les frais par transaction ?',
        a: "La commission est fixée par votre banque et la SATIM, pas par nous. Elle se situe généralement autour de quelques dixièmes de pourcent selon la convention négociée. Notre intervention est facturée une fois, à l'intégration.",
      },
    ],
    ctaTitle: 'Encaissez\n*avant* d\'expédier',
    ctaSub: "Dites-nous si vous avez déjà un compte marchand. Si non, nous vous envoyons la liste des pièces.",
  },

  gmb: {
    metaTitle: "Créer une fiche Google d'établissement en Algérie | SiteDZ",
    metaDescription:
      "Création et optimisation de votre fiche Google Business Profile en Algérie. Apparaissez sur Google Maps, collectez des avis et captez les recherches locales. 10 000 DA.",
    h1: "Fiche *Google*\nd'établissement",
    intro:
      "Apparaissez sur Google Maps quand quelqu'un cherche votre activité dans votre wilaya. Création, vérification et optimisation complète : 10 000 DA.",
    body: [
      "Pour une entreprise locale, la fiche Google d'établissement rapporte souvent plus d'appels que le site lui-même. Quelqu'un tape « menuisier Médéa » ou « pièces auto Blida » sur son téléphone : les trois fiches affichées sur la carte reçoivent la majorité des clics, bien avant les résultats classiques en dessous.",
      "C'est gratuit, et c'est justement pour ça que la plupart des entreprises algériennes la négligent ou la remplissent à moitié. Une fiche vide, sans photos, sans horaires et sans avis, ne se classe pas — et quand elle apparaît, elle inspire moins confiance qu'un concurrent qui a douze avis et vingt photos récentes.",
      "Nous créons la fiche, nous gérons la vérification par courrier, nous remplissons chaque champ correctement et nous mettons en place la collecte d'avis. Le résultat est une présence locale cohérente avec votre site, avec les mêmes coordonnées partout — ce que Google contrôle activement.",
    ],
    deliverablesTitle: 'Ce que nous faisons',
    deliverables: [
      { name: 'Création et vérification', desc: "Ouverture de la fiche et suivi de la vérification par courrier Google, qui prend une à deux semaines en Algérie." },
      { name: 'Catégories et zone', desc: "Choix des catégories principale et secondaires, et définition de la zone desservie — wilaya ou pays entier." },
      { name: 'Photos et horaires', desc: "Mise en ligne de vos photos, horaires d'ouverture et jours fériés. Les fiches avec photos reçoivent nettement plus de demandes d'itinéraire." },
      { name: 'Description optimisée', desc: "Texte de présentation rédigé autour des termes que vos clients tapent réellement, en français et en arabe." },
      { name: 'Collecte d\'avis', desc: "Lien de dépôt d'avis et modèle de message WhatsApp à envoyer à vos clients satisfaits. Les avis sont le premier facteur de classement local." },
      { name: 'Cohérence avec le site', desc: "Nom, adresse et téléphone identiques sur la fiche, le site et les données structurées. Google recoupe ces informations." },
    ],
    faqTitle: 'Questions fréquentes',
    faq: [
      {
        q: "La fiche Google d'établissement est-elle gratuite ?",
        a: "Oui, Google ne facture rien. Nous facturons 10 000 DA la création complète, la vérification, l'optimisation et la mise en place de la collecte d'avis — c'est le temps passé, pas l'outil.",
      },
      {
        q: "Faut-il une adresse physique ?",
        a: "Pas obligatoirement. Si vous recevez des clients, vous déclarez votre adresse et Google la vérifie par courrier. Si vous vous déplacez ou travaillez à distance, vous pouvez masquer l'adresse et déclarer une zone desservie.",
      },
      {
        q: 'Combien de temps avant d\'apparaître sur Maps ?',
        a: "La fiche est visible dès la validation de la vérification, soit une à deux semaines en Algérie. Se classer dans les trois premiers résultats locaux prend ensuite plusieurs semaines et dépend surtout des avis et de la complétude de la fiche.",
      },
      {
        q: 'Comment obtenir des avis ?',
        a: "En les demandant. Un message WhatsApp court à un client satisfait, avec le lien direct, fonctionne mieux que n'importe quelle automatisation. Cinq à dix avis réels changent déjà nettement votre position. N'achetez jamais d'avis : Google les détecte et suspend la fiche.",
      },
    ],
    ctaTitle: 'Soyez trouvable\n*près de chez vous*',
    ctaSub: 'Dites-nous votre activité et votre wilaya. Nous créons la fiche cette semaine.',
  },
}
