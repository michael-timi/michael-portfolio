export const profile = {
  name: "Michael B. Oluwatimileyin",
  role: "Fullstack Software Developer · Mobile Developer",
  email: "michtimiael@gmail.com",
  github: "https://github.com/michael-timi",
  linkedin: "https://linkedin.com/in/oluwatimileyin-michael-1a034b",
  location: "Remote · Nigeria / Global",
  summary:
    "Fullstack software engineer with a strong mobile background. I design and ship end‑to‑end products — REST and GraphQL APIs in Node.js, type‑safe Next.js and React dashboards, and production iOS/Android apps in Flutter and React Native. Comfortable owning a feature from database schema and API design to the screens users actually tap.",
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
      "Distributed Systems",
      "Databases",
      "Statistics",
      "Object Oriented Programming",
    ],
    activities: [
      "Google Developer Student Community",
      "Open Source Community Africa",
    ],
  },
  skills: {
    technologies: [
      "TypeScript",
      "JavaScript",
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "NestJS",
      "GraphQL",
      "REST APIs",
      "Tailwind CSS",
      "Flutter (Dart)",
      "React Native",
      "Swift",
      "Kotlin",
      "Java",
      "Python",
    ],
    tools: [
      "Git",
      "GitHub Actions",
      "Docker",
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "Redis",
      "Firebase",
      "AWS (S3, Lambda)",
      "GCP",
      "Vercel",
      "Postman",
      "Figma",
      "Sentry",
      "Android",
      "iOS",
    ],
    softSkills: [
      "Product thinking",
      "Clear written communication",
      "Pragmatic problem‑solving",
      "Cross‑functional collaboration",
      "Mentorship & code review",
      "Time management",
      "Attention to detail",
      "Continuous learning",
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
    title: "Software Engineer — Fullstack & Mobile",
    type: "Full Time",
    period: "September 2023 – Present",
    highlights: [
      "Own end‑to‑end development of the Gigbanc iOS and Android apps from new feature ideas through to App Store and Play Store releases.",
      "Built and maintain an internal Next.js merchant console backed by a Node.js + PostgreSQL service for onboarding, KYC review, and transaction monitoring.",
      "Design REST endpoints and TypeScript shared types that keep the mobile, web, and admin clients in sync as the product evolves.",
      "Implemented secure local data storage, JWT auth, and refresh‑token flows so sensitive information stays safe across web and mobile.",
      "Set up GitHub Actions pipelines for lint, test, and Fastlane/Vercel deploys, reducing release prep from a half‑day to under 30 minutes.",
      "Use crash reports, Sentry alerts, and Mixpanel analytics to prioritise fixes and ship improvements that move the metrics product cares about.",
    ],
  },
  {
    company: "Afara Hub",
    location: "Nigeria (Remote)",
    title: "Fullstack & Mobile Developer",
    type: "Contract",
    period: "April 2023 – April 2024",
    highlights: [
      "Built a Node.js/Express + MongoDB API and a React Native client for a community marketplace, integrating Paystack payments and secure checkout end‑to‑end.",
      "Shipped a Next.js admin dashboard for moderators to review listings, manage disputes, and pull weekly revenue reports.",
      "Turned Figma designs into production‑ready Flutter and React Native screens that matched the brand and felt familiar to everyday users.",
      "Containerised services with Docker and deployed APIs to a small DigitalOcean droplet behind Nginx, keeping monthly infra costs predictable.",
      "Worked in an agile setup, breaking work into small, shippable pieces so the team could see real progress every sprint.",
    ],
  },
  {
    company: "Huzz Technologies",
    location: "Nigeria (Remote)",
    title: "Mobile Developer (with Backend support)",
    type: "Contract",
    period: "June 2022 – January 2023",
    highlights: [
      "Built and maintained production mobile apps used daily by non‑technical users, focusing on clear flows and predictable behaviour.",
      "Contributed Node.js endpoints and Postman collections so the mobile team could unblock itself without waiting on the backend roadmap.",
      "Implemented security best practices around API calls and on‑device storage so personal and financial data stayed protected.",
      "Added Firebase Analytics, Crashlytics, and basic monitoring to track crashes, slow screens, and key events the product team cared about.",
      "Worked closely with QA, designers, and backend engineers to triage issues quickly and keep releases stable.",
    ],
  },
  {
    company: "Springital",
    location: "Nigeria (Hybrid)",
    title: "Software Developer — Mobile & Web",
    type: "Contract",
    period: "June 2021 – July 2022",
    highlights: [
      "Supported a small engineering team building mobile and web products for clients — contributing features, bug fixes, and UI polish across React, Flutter, and Node.js codebases.",
      "Built a couple of internal React dashboards on top of a shared Express API so non‑engineers could update content without pinging developers.",
      "Set up and maintained CI/CD pipelines so the team could ship test builds and production releases with fewer manual steps.",
      "Introduced simple Git workflows (branching, pull requests, code reviews) that made collaboration and hand‑offs less stressful.",
    ],
  },
];

export type ProjectKind = "mobile" | "fullstack" | "web" | "backend";

export type ProjectItem = {
  name: string;
  role: string;
  kind?: ProjectKind;
  links: { platform: string; url: string }[];
};

export const featuredProjects: ProjectItem[] = [
  {
    name: "Gigbanc",
    role: "iOS & Android · React Native + Node.js",
    kind: "mobile",
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
    name: "Gigbanc Merchant Console",
    role: "Fullstack · Next.js + Node.js + PostgreSQL",
    kind: "fullstack",
    links: [
      {
        platform: "Case Study",
        url: "https://github.com/michael-timi",
      },
    ],
  },
  {
    name: "Fundall",
    role: "Mobile · Flutter",
    kind: "mobile",
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
    role: "Mobile · React Native",
    kind: "mobile",
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
    role: "Mobile · Flutter",
    kind: "mobile",
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
    role: "Mobile · Flutter",
    kind: "mobile",
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
    role: "Mobile · Flutter (multi‑app)",
    kind: "mobile",
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
  {
    name: "Open Recipes API",
    role: "Side project · Node.js + Express + PostgreSQL",
    kind: "backend",
    links: [
      {
        platform: "GitHub",
        url: "https://github.com/michael-timi",
      },
    ],
  },
  {
    name: "Michael Portfolio",
    role: "Personal site · Next.js 16 + Tailwind + Framer Motion + Firebase Hosting",
    kind: "web",
    links: [
      {
        platform: "Live",
        url: "https://michael-portfolio-25dea.web.app",
      },
      {
        platform: "GitHub",
        url: "https://github.com/michael-timi/michael-portfolio",
      },
    ],
  },
];
