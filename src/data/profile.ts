export const profile = {
  name: "Michael B. Oluwatimileyin",
  role: "Mobile Developer",
  email: "michtimiael@gmail.com",
  github: "https://github.com/michaeltimi",
  linkedin: "https://linkedin.com/in/oluwatimileyin-michael-1a034b",
  location: "Remote · Nigeria / Global",
  summary:
    "Mobile developer specializing in high-quality iOS and Android applications, with experience leading end-to-end delivery, integrating secure data flows, and collaborating with cross-functional teams to ship production apps.",
  education: {
    school: "Obafemi Awolowo University, Nigeria",
    degree: "B.Sc. Computer Science with Mathematics",
    years: "2017 – 2023",
    coursework: [
      "Operating Systems",
      "Compilers",
      "Computer Architecture",
      "Microprocessors",
      "Data Structures & Algorithms",
      "Statistics",
      "Abstract Algebra",
      "Object Oriented Programming",
    ],
    activities: [
      "Google Developer Student Community",
      "Open Source Community Africa",
    ],
  },
  skills: {
    technologies: [
      "Flutter (Dart)",
      "Swift",
      "Kotlin",
      "Java",
      "JavaScript",
      "React Native",
      "Python",
      "Node.js",
    ],
    tools: [
      "Android",
      "iOS",
      "Git",
      "Bitbucket",
      "Postman",
      "Firebase",
      "MySQL",
    ],
    softSkills: [
      "Communication",
      "Problem-solving",
      "Adaptability",
      "Team Collaboration",
      "Time Management",
      "Attention to Detail",
      "Leadership",
      "Continuous Learning",
    ],
  },
};

export type ExperienceItem = {
  company: string;
  location: string;
  title: string;
  type: string;
  period: string;
  highlights: string[];
};

export const experience: ExperienceItem[] = [
  {
    company: "Gigbanc",
    location: "USA (Remote)",
    title: "Mobile Developer",
    type: "Full Time",
    period: "September 2023 – Present",
    highlights: [
      "Own end‑to‑end development of the Gigbanc mobile apps on iOS and Android, from new feature ideas through to App Store and Play Store releases.",
      "Work closely with product and design to turn business requirements into simple mobile flows that feel natural for non‑technical users.",
      "Integrated in‑app customer support and notifications so users can get help and key updates without leaving the app.",
      "Implemented secure local data storage and API integrations to keep sensitive information safe while still feeling fast and responsive.",
      "Use crash reports, analytics, and direct user feedback to prioritise fixes and improvements that have the biggest impact on day‑to‑day usage.",
    ],
  },
  {
    company: "Afara Hub",
    location: "Nigeria (Remote)",
    title: "Mobile Developer",
    type: "Contract",
    period: "April 2023 – April 2024",
    highlights: [
      "Turned Figma designs into production‑ready Flutter and React Native screens that matched the brand and felt familiar to everyday users.",
      "Collaborated with designers and backend engineers in an agile setup, breaking work into small, shippable pieces so the team could see progress every sprint.",
      "Integrated Paystack payments and secure checkout flows so customers could pay with cards and bank transfers without leaving the app.",
      "Focused on performance on low‑ to mid‑range Android devices, reducing jank and improving perceived load times with code‑level optimisations.",
    ],
  },
  {
    company: "Huzz Technologies",
    location: "Nigeria (Remote)",
    title: "Mobile Developer",
    type: "Contract",
    period: "June 2022 – January 2023",
    highlights: [
      "Helped build and maintain production mobile apps used daily by non‑technical users, focusing on clear flows and predictable behaviour.",
      "Implemented security best practices around API calls and on‑device storage so that personal and financial data stayed protected.",
      "Added Firebase Analytics and basic monitoring to track crashes, slow screens, and key events the product team cared about.",
      "Worked closely with QA, designers, and backend engineers to triage issues quickly and keep releases stable.",
    ],
  },
  {
    company: "Springital",
    location: "Nigeria (Hybrid)",
    title: "Mobile Developer",
    type: "Contract",
    period: "June 2021 – July 2022",
    highlights: [
      "Supported a small engineering team building mobile products for clients, contributing features, bug fixes, and UI polish.",
      "Set up and maintained CI/CD pipelines so the team could ship test builds and production releases with fewer manual steps.",
      "Introduced simple Git workflows (branching, pull requests, code reviews) that made collaboration and hand‑offs less stressful.",
    ],
  },
];

export type ProjectItem = {
  name: string;
  role: string;
  links: { platform: string; url: string }[];
};

export const featuredProjects: ProjectItem[] = [
  {
    name: "Gigbanc",
    role: "Mobile Developer",
    links: [
      {
        platform: "Google Play",
        url: "https://play.google.com/store/apps/details?id=com.gigbanc.app",
      },
      {
        platform: "App Store",
        url: "https://apps.apple.com/ng/app/gigbanc/id6478639894",
      },
    ],
  },
  {
    name: "Fundall",
    role: "Mobile Developer",
    links: [
      {
        platform: "Google Play",
        url: "https://play.google.com/store/apps/details?id=com.fundall.io&hl=en&gl=US",
      },
      {
        platform: "App Store",
        url: "https://apps.apple.com/ng/app/fundall/id1545242036",
      },
    ],
  },
  {
    name: "Huzz",
    role: "Mobile Developer",
    links: [
      {
        platform: "Google Play",
        url: "https://play.google.com/store/apps/details?id=com.app.huzz",
      },
      {
        platform: "App Store",
        url: "https://apps.apple.com/ng/app/huzz/id1596574133",
      },
    ],
  },
  {
    name: "SearchKee",
    role: "Mobile Developer",
    links: [
      {
        platform: "Google Play",
        url: "https://play.google.com/store/apps/details?id=com.searchkee.apps",
      },
      {
        platform: "App Store",
        url: "https://apps.apple.com/ng/app/searchkee/id1658787073",
      },
    ],
  },
  {
    name: "CarryGo",
    role: "Mobile Developer",
    links: [
      {
        platform: "Google Play",
        url: "https://play.google.com/store/apps/details?id=com.carrygo.rider",
      },
      {
        platform: "App Store",
        url: "https://apps.apple.com/ng/app/carrygo-carrier-app/id1626480631",
      },
    ],
  },
  {
    name: "Foodgital & GrowPro",
    role: "Mobile Developer",
    links: [
      {
        platform: "Foodgital – Google Play",
        url: "https://play.google.com/store/apps/details?id=com.foodgital",
      },
      {
        platform: "Foodgital – App Store",
        url: "https://apps.apple.com/ng/app/foodgital/id6443846004",
      },
      {
        platform: "GrowPro – Google Play",
        url: "https://play.google.com/store/apps/details?id=com.foodgital.growpro.app",
      },
    ],
  },
];
