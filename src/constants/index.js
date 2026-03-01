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
    id: "work",
    title: "Travail",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Développeur Full Stack Web",
    icon: web,
  },
  {
    title: "Développeur Mobile",
    icon: mobile,
  },
  {
    title: "Développeur Backend",
    icon: backend,
  },
  {
    title: "Conception Systèmes d'Information",
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

const experiences = [
  {
    title: "Baccalauréat Série D",
    company_name: "Externat Jean François Lionnel",
    icon: ecole,
    iconBg: "#fff",
    date: "2020 - 2021",
    points: [
      "Obtention du Baccalauréat Série D (Sciences exactes) à Yopougon.",
      "Développement de compétences analytiques et mathématiques solides.",
      "Premiers intérêts pour l'informatique et la technologie.",
    ],
  },
  {
    title: "BTS IDA - Informatique Développeur Application",
    company_name: "Pigier Côte d'Ivoire",
    icon: pigier,
    iconBg: "#fff",
    date: "2021 - 2023",
    points: [
      "Formation en développement d'applications : C, Java, PHP, HTML, CSS, JavaScript.",
      "Initiation aux bases de données : MySQL, PostgreSQL.",
      "Conception et modélisation avec Merise et UML.",
      "Première et deuxième année de Licence IDA.",
    ],
  },
  {
    title: "Stage - Développeur d'Application Web",
    company_name: "Mairie du Plateau",
    icon: mairie,
    iconBg: "#fff",
    iconSize: "90%",
    date: "2023 - 2024",
    points: [
      "Stage de développement d'application web au sein de la Mairie du Plateau.",
      "Conception et développement d'interfaces web modernes et responsives.",
      "Intégration de bases de données et gestion des données administratives.",
      "Collaboration avec les équipes techniques pour répondre aux besoins métiers.",
    ],
  },
  {
    title: "Stage - Développeur d'Application Web",
    company_name: "Talentium",
    icon: talentium,
    iconBg: "#fff",
    date: "2024",
    points: [
      "Stage de perfectionnement en développement d'application web.",
      "Développement de fonctionnalités front-end et back-end.",
      "Utilisation de React.js, Node.js, TailwindCSS.",
      "Gestion de projets avec Trello et Postman.",
    ],
  },
  {
    title: "Stage - Développeur Web & Mobile",
    company_name: "Groupe ECEFA",
    icon: ecefa,
    iconBg: "#fff",
    date: "2025",
    points: [
      "Stage de soutenance en tant que développeur d'application web et mobile.",
      "Développement d'applications mobiles avec React Native et Flutter.",
      "Intégration de bases de données NoSQL : MongoDB, Firebase.",
      "Conception et modélisation de systèmes d'information (Merise, UML).",
    ],
  },
  {
    title: "Master 1 BIHAR — Big Data & Intelligence Artificielle",
    company_name: "ESATIC (en cours)",
    icon: esatic,
    iconBg: "#fff",
    date: "2025 - 2026",
    points: [
      "Formation avancée en Big Data et Intelligence Artificielle.",
      "Étude des algorithmes de machine learning et deep learning.",
      "Manipulation et analyse de grandes volumétries de données.",
      "Développement de solutions intelligentes appliquées aux systèmes d'information.",
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
    name: "App Mobile de Commerce",
    description:
      "Application mobile de vente en ligne développée avec React Native et Firebase, avec gestion des produits, panier et paiement en ligne.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Plateforme de Gestion de Projets",
    description:
      "Plateforme web de gestion de projets et tâches en équipe avec tableau de bord et suivi en temps réel. Stack : Next.js, Django, PostgreSQL.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "django",
        color: "green-text-gradient",
      },
      {
        name: "postgresql",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
