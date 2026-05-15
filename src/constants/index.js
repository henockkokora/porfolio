import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  nextjs,
  canva,
  clang,
  java,
  postgresql,
  python,
  esatic,
  ecefa,
  pigier,
  talentium,
  mairie,
  ecole,
  ecfa_motors,
  jobit,
  tripguide,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "À propos",
  },
  {
    id: "project",
    title: "Projets",
  },
  {
    id: "work",
    title: "Formation & Expérience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Développement Full Stack Web",
    icon: web,
  },
  {
    title: "Développement d'applications mobiles et desktop",
    icon: mobile,
  },
  {
    title: "Conception et modélisation des systèmes d'information",
    icon: backend,
  },
  {
    title: "Gestion de projets et contenu numérique",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Next.js",
    icon: nextjs,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Canva",
    icon: canva,
  },
  {
    name: "C",
    icon: clang,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "Python",
    icon: python,
  },
];

const formations = [
  {
    title: "Master 1 BIHAR - Big Data et Intelligence Artificielle",
    company_name: "ESATIC (en cours)",
    icon: esatic,
    iconBg: "#fff",
    date: "2025 - 2026",
    points: [
      "Formation en Big Data et Intelligence Artificielle.",
      "Étude des algorithmes de machine learning et deep learning.",
      "Analyse de grandes volumétries de données et développement de solutions intelligentes.",
    ],
  },
  {
    title: "Licence DASI - Développeur Application et Systèmes d'Information",
    company_name: "ESATIC",
    icon: esatic,
    iconBg: "#fff",
    date: "2024 - 2025",
    points: [
      "Formation en développement d'applications et systèmes d'information.",
      "Renforcement des bases en conception, développement et intégration logicielle.",
      "Approfondissement des pratiques de modélisation et de gestion de projets.",
    ],
  },
  {
    title: "BTS IDA - Informatique Développeur d'Application",
    company_name: "Pigier Côte d'Ivoire",
    icon: pigier,
    iconBg: "#fff",
    date: "2022 - 2023",
    points: [
      "Développement d'applications avec C, Java, PHP, HTML, CSS et JavaScript.",
      "Bases de données avec MySQL, PostgreSQL et SQLite.",
      "Conception et modélisation avec Merise et UML.",
    ],
  },
  {
    title: "Baccalauréat Série D",
    company_name: "Externat Jean François Lionnel",
    icon: ecole,
    iconBg: "#fff",
    date: "2020 - 2021",
    points: [
      "Obtention du Baccalauréat Série D à Yopougon.",
      "Développement de compétences analytiques et mathématiques solides.",
      "Premiers intérêts pour l'informatique et la technologie.",
    ],
  },
];

const professionalExperiences = [
  {
    title: "Stage - Développeur web et mobile",
    company_name: "Groupe ECEFA",
    icon: ecefa,
    iconBg: "#fff",
    date: "Avr 2025 - Oct 2025",
    points: [
      "Développement d'applications web et mobiles full stack.",
      "Conception de nouvelles fonctionnalités et maintenance des applications existantes.",
      "Encadrement technique de l'équipe de développement et participation aux choix d'architecture.",
    ],
  },
  {
    title: "Stage - Développeur d'application web",
    company_name: "Talentium",
    icon: talentium,
    iconBg: "#fff",
    date: "Avr 2024 - Sep 2024",
    points: [
      "Développement de sites vitrines responsives avec HTML, CSS, TailwindCSS et JavaScript.",
      "Conception et intégration d'APIs backend avec Node.js.",
      "Création d'interfaces utilisateur modernes et optimisation de l'expérience utilisateur.",
    ],
  },
  {
    title: "Stage - Développeur d'application web",
    company_name: "Mairie du Plateau",
    icon: mairie,
    iconBg: "#fff",
    iconSize: "90%",
    date: "Nov 2023 - Mar 2024",
    points: [
      "Développement d'une application de gestion administrative.",
      "Modélisation et implémentation d'une base de données relationnelle en MySQL.",
      "Analyse des besoins et conception d'interfaces adaptées aux utilisateurs.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Henoch a développé notre application web avec une grande maîtrise technique et un sens aigu du détail. Excellent travail !",
    name: "Responsable ECEFA",
    designation: "Directeur",
    company: "Groupe ECEFA",
    image: "https://randomuser.me/api/portraits/men/10.jpg",
  },
  {
    testimonial:
      "Un développeur sérieux, créatif et très adaptable. Il a livré un projet mobile de qualité dans les délais impartis.",
    name: "Formateur Talentium",
    designation: "Encadrant",
    company: "Talentium",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    testimonial:
      "Henoch maîtrise aussi bien le front-end que le back-end. C'est un atout précieux dans n'importe quelle équipe.",
    name: "Professeur ESATIC",
    designation: "Enseignant",
    company: "ESATIC",
    image: "https://randomuser.me/api/portraits/men/15.jpg",
  },
];

const projects = [
  {
    name: "Youth Greatness",
    description:
      "plateforme de vente en ligne de produit pour un t-shirt Youth Greatness, au style urbain et au rendu premium, avec mise en avant d'un best seller bientôt disponible.",
    tags: [
      {
        name: "landing-page",
        color: "blue-text-gradient",
      },
      {
        name: "branding",
        color: "green-text-gradient",
      },
      {
        name: "e-commerce",
        color: "pink-text-gradient",
      },
    ],
    image: "https://youth-greatness.vercel.app/logo_youth.jpeg",
    source_code_link: "https://youth-greatness.vercel.app/",
  },
  {
    name: "MaillotCI",
    description:
      "Boutique e-commerce dédiée aux maillots officiels de l'Équipe de Côte d'Ivoire, avec mise en avant de modèles premium, de la livraison rapide et d'avis clients.",
    tags: [
      {
        name: "e-commerce",
        color: "blue-text-gradient",
      },
      {
        name: "fashion",
        color: "green-text-gradient",
      },
      {
        name: "supporters",
        color: "pink-text-gradient",
      },
    ],
    image: "https://maillotci.vercel.app/assets/maillot_blanc_brode-D--H_fun.jpg",
    source_code_link: "https://maillotci.vercel.app/",
  },
  {
    name: "Site web ECEFA Motors",
    description:
      "Plateforme officielle d'un centre de formation en conduite d'engins BTP agréé par l'État ivoirien, mettant en avant des formations certifiantes, un apprentissage pratique sur chantier réel et l'accompagnement vers l'insertion professionnelle.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "Node.js",
        color: "pink-text-gradient",
      },
    ],
    image: ecfa_motors,
    source_code_link: "https://www.ecefamotors.com/index.html",
  },
  {
    name: "ECEFA Marketplace",
    description:
      "Marketplace e-commerce orientée Afrique, avec catégories produits, nouveautés, offres spéciales, newsletter et expérience d'achat centrée sur la livraison rapide et le paiement sécurisé.",
    tags: [
      {
        name: "e-commerce",
        color: "blue-text-gradient",
      },
      {
        name: "marketplace",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
    ],
    image: "https://marketplace-topaz-six.vercel.app/logo_ecefa.png",
    source_code_link: "https://marketplace-topaz-six.vercel.app/",
  },
  {
    name: "Mon Hébergement",
    description:
      "Plateforme de location et réservation de biens (studios, appartements, villas) avec recherche par zone, type de bien et consultation des annonces récentes à Abidjan.",
    tags: [
      {
        name: "immobilier",
        color: "blue-text-gradient",
      },
      {
        name: "marketplace",
        color: "green-text-gradient",
      },
      {
        name: "location",
        color: "pink-text-gradient",
      },
    ],
    image: "/monhebergement.png",
    source_code_link: "https://mon-hebergement.vercel.app/",
  },
  {
    name: "Plateforme de gestion Caissier/Commercial - ECEFA (Privé)",
    description:
      "Application métier privée dédiée au poste de caissier commercial. Elle sert à enregistrer les ventes, suivre les paiements clients, gérer la caisse au quotidien, éditer les reçus et consulter les états d'encaissement pour le pilotage commercial. Accès restreint: la plateforme nécessite des identifiants internes, donc non consultable publiquement par les recruteurs.",
    tags: [
      {
        name: "application-metier",
        color: "blue-text-gradient",
      },
      {
        name: "gestion-caisse",
        color: "green-text-gradient",
      },
      {
        name: "prive",
        color: "pink-text-gradient",
      },
    ],
    image: "https://ecefa.net/image_autres.jpg",
    source_code_link: "https://ecefa.net/login/caissier-commercial",
  },
];

export { services, technologies, formations, professionalExperiences, testimonials, projects };
