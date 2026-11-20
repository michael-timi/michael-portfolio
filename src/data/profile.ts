export const profile = {
  name: "Michael B. Oluwatimileyin",
  role: "Senior Fullstack Engineer",
  focus: "Web & product",
  email: "michtimiael@gmail.com",
  github: "https://github.com/michael-timi",
  linkedin: "https://www.linkedin.com/in/oluwatimileyin-michael/",
  cv: "/michael-oluwatimileyin-cv.pdf",
  site: "https://michael-portfolio-25dea.web.app",
  location: "Remote",
  now: "Web platforms, APIs, and the Gigbanc apps",
  summary:
    "Senior fullstack engineer and web developer. Next.js, TypeScript, Node, and Firebase on the web, plus production iOS and Android apps. Gigbanc is live at 100K+ installs.",
  hero: "I design and ship the whole product: the website, the admin, the API, and the iOS and Android apps. TypeScript and Next.js are home base. Flutter is how the product lives in someone’s pocket.",
  about: [
    "I’m a fullstack engineer who treats the website as a product. Recent web work includes a Next.js commerce admin with Gemini tools, and a protected dashboard that shares a production Firebase backend with a Flutter app.",
    "The other half is mobile. For five years I’ve taken iOS and Android apps from architecture to the stores. I currently own Gigbanc end to end — past 100K installs — in Flutter with Riverpod and Bloc, on typed APIs and secure on-device storage.",
    "I studied Computer Science with Mathematics at Obafemi Awolowo University. I lead reviews, mentor, and sit with design and product until the release is real.",
  ],
  principles: [
    {
      title: "The web product",
      detail:
        "Next.js, TypeScript, and Firebase, from the public site to the admin that staff actually use.",
    },
    {
      title: "The API contract",
      detail:
        "REST, typed errors, auth, and data rules that the website and the mobile apps can share.",
    },
    {
      title: "The pocket client",
      detail:
        "Flutter and React Native when the product has to ship to the App Store and Google Play.",
    },
    {
      title: "The release",
      detail:
        "GitHub Actions, Fastlane, and a review culture so shipping stays repeatable.",
    },
  ],
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
      "Programming",
      "Statistics",
      "Abstract Algebra",
      "Object-Oriented Programming",
    ],
  },
  skillGroups: [
    {
      title: "Web",
      items: ["TypeScript", "JavaScript", "React", "Next.js", "HTML", "CSS", "Tailwind"],
    },
    {
      title: "Backend",
      items: [
        "Node.js / Express",
        "REST & JSON",
        "OAuth / JWT",
        "WebSockets",
        "Python",
        "Laravel-backed APIs",
      ],
    },
    {
      title: "Mobile",
      items: [
        "Flutter (Dart)",
        "React Native",
        "Riverpod",
        "Bloc",
        "Provider",
        "Swift",
        "Kotlin",
        "Java",
      ],
    },
    {
      title: "Data & storage",
      items: [
        "SQL",
        "PostgreSQL",
        "MySQL",
        "SQLite",
        "MongoDB",
        "Redis",
        "Hive",
        "Secure storage",
        "Keychain / Keystore",
      ],
    },
    {
      title: "Cloud & delivery",
      items: [
        "Firebase Auth",
        "Firestore",
        "FCM",
        "Crashlytics",
        "Analytics",
        "GitHub Actions",
        "Fastlane",
        "Docker",
        "AWS (EC2, S3, IAM)",
      ],
    },
    {
      title: "AI in the product",
      items: [
        "Google Gemini",
        "ElevenLabs",
        "Flux via fal.ai",
        "Google Veo",
        "Structured outputs",
        "Prompt pipelines",
        "Cursor",
        "GitHub Copilot",
      ],
    },
  ],
};

export const highlights = [
  { value: "5+", label: "Years shipping products" },
  { value: "Web", label: "Next.js, TypeScript, Node" },
  { value: "100K+", label: "Installs on Gigbanc" },
  { value: "7", label: "Apps released to stores" },
];

export const ticker = [
  "Next.js",
  "TypeScript",
  "React",
  "Node.js",
  "Firebase",
  "PostgreSQL",
  "Flutter",
  "React Native",
  "Gemini",
  "REST",
];

export type ExperienceItem = {
  company: string;
  location: string;
  title: string;
  type?: string;
  period: string;
  current?: boolean;
  highlights: string[];
};

export const experience: ExperienceItem[] = [
  {
    company: "Gigbanc",
    location: "USA · Remote",
    title: "Mobile Engineer, iOS & Android",
    period: "Sep 2023 – Present",
    current: true,
    highlights: [
      "Own end-to-end mobile architecture for the Gigbanc apps on iOS and Android, from product concept through store release.",
      "Designed the state and navigation foundation in Flutter with Riverpod and Bloc, in a feature-first Clean Architecture.",
      "Built secure persistence for application state and sensitive user data with encrypted local storage and platform keystores (Keychain / Keystore).",
      "Integrated native in-app customer support on both platforms, removing a long-standing gap in the feedback loop.",
      "Hardened REST integration with typed error contracts, retry, and offline handling so features stay reliable as the backend evolves.",
      "Lead mobile code reviews, set coding standards, and mentor teammates on Flutter, architecture, and release hygiene.",
    ],
  },
  {
    company: "Afara Hub",
    location: "Nigeria · Remote",
    title: "Mobile Engineer",
    type: "Contract",
    period: "Apr 2023 – Dec 2025",
    highlights: [
      "Partnered with design and product to turn UI/UX into polished mobile interfaces that improved engagement.",
      "Kept an agile delivery rhythm with PMs and engineers that shortened cycle times and tightened feedback loops.",
      "Standardized review checklists and performance patterns — lazy loading, build-time optimizations, and render-cost audits — that reduced screen load times.",
      "Integrated Paystack into a secure end-to-end checkout, owning payment, callback, and reconciliation on the client.",
    ],
  },
  {
    company: "Huzz Technologies",
    location: "Nigeria · Remote",
    title: "Mobile Engineer",
    type: "Contract",
    period: "Jun 2022 – Jan 2023",
    highlights: [
      "Hardened online and offline data handling across APIs and local storage so private data stayed protected and the app remained usable on poor connectivity.",
      "Instrumented Firebase Analytics and used it to surface and remove UX bottlenecks in critical flows.",
      "Coordinated with QA, design, backend, and leadership through structured release cycles so quality builds shipped on schedule.",
    ],
  },
  {
    company: "Springital",
    location: "Nigeria · Hybrid",
    title: "Mobile Developer",
    type: "Contract",
    period: "Jun 2021 – Jul 2022",
    highlights: [
      "Automated builds and store releases with GitHub Actions and Fastlane, removing manual deployment steps and shortening release time.",
      "Established Git branching and review conventions that improved traceability and how the team collaborated.",
    ],
  },
];

export type ProjectKind = "mobile" | "ai" | "web";

export type ProjectItem = {
  name: string;
  kind: ProjectKind;
  also?: ProjectKind[];
  status: string;
  summary: string;
  metrics?: string[];
  stack?: string[];
  featured?: boolean;
  caseStudy?: { problem: string; shipped: string; result: string };
  links: { platform: string; url: string }[];
};

export const projects: ProjectItem[] = [
  {
    name: "Gigbanc",
    kind: "mobile",
    status: "Live · both stores",
    featured: true,
    summary:
      "Fintech app I currently own end to end on iOS and Android. Flutter, Riverpod, and Bloc in a feature-first architecture, with encrypted on-device storage and a hardened API client. Actively maintained.",
    metrics: ["100K+ installs", "4.6★ · 1,090+ Play reviews", "4.7★ on the App Store"],
    stack: ["Flutter", "Riverpod", "Bloc", "REST", "Keychain / Keystore"],
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
    kind: "mobile",
    status: "Live · both stores",
    summary:
      "Personal finance and digital banking app, live on both stores and actively maintained.",
    metrics: ["50K+ installs", "3.9★ · 690 Play reviews", "4.4★ · 270 App Store ratings"],
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
    name: "CarryGo Carrier",
    kind: "mobile",
    status: "Live · App Store",
    summary:
      "Carrier-side logistics app for a Nigerian moving and delivery platform. The iOS version is live; the Android release has been retired.",
    links: [
      {
        platform: "App Store",
        url: "https://apps.apple.com/ng/app/carrygo-carrier-app/id1626480631",
      },
    ],
  },
  {
    name: "Foodgital",
    kind: "mobile",
    status: "Live · Google Play",
    summary:
      "Food and merchant marketplace, currently live on Google Play. The iOS listing has been retired.",
    links: [
      {
        platform: "Google Play",
        url: "https://play.google.com/store/apps/details?id=com.foodgital",
      },
    ],
  },
  {
    name: "GrowPro",
    kind: "mobile",
    status: "Live · Google Play",
    summary: "Merchant productivity companion to Foodgital, live on Google Play.",
    links: [
      {
        platform: "Google Play",
        url: "https://play.google.com/store/apps/details?id=com.foodgital.growpro.app",
      },
    ],
  },
  {
    name: "SearchKee",
    kind: "mobile",
    status: "Live · App Store",
    summary:
      "Buyer and seller discovery app shipped to the App Store. The Android version has been retired.",
    links: [
      {
        platform: "App Store",
        url: "https://apps.apple.com/ng/app/searchkee/id1658787073",
      },
    ],
  },
  {
    name: "Huzz",
    kind: "mobile",
    status: "Retired",
    summary:
      "Earlier business app shipped to both stores during 2022–2023. Both listings have since been retired.",
    links: [],
  },
  {
    name: "Lizzy Fusion",
    kind: "web",
    also: ["ai"],
    status: "Web product",
    featured: true,
    summary:
      "Next.js and Firebase storefront with two Gemini admin tools: one places a customer-uploaded dress on a faceless mannequin for catalogue heroes, and another drafts structured product metadata from that image. Typed client wrappers, security rules, and a WhatsApp checkout that snapshots orders to Firestore.",
    caseStudy: {
      problem:
        "A dress photo from a customer is not a catalogue hero, and it is not a product listing.",
      shipped:
        "A Next.js and Firebase storefront, a Gemini tool that places the uploaded dress on a faceless mannequin, a second tool that drafts structured metadata from that image, and a WhatsApp checkout that writes the order to Firestore.",
      result:
        "The shop is live. One upload becomes the hero and the listing, and the order snapshot stays in Firestore behind the security rules.",
    },
    stack: ["Next.js 16", "React 19", "TypeScript", "Firebase", "Gemini"],
    links: [
      { platform: "Live site", url: "https://lizzyfusion.vercel.app/" },
      {
        platform: "GitHub",
        url: "https://github.com/michael-timi/lizzyfusion_website",
      },
    ],
  },
  {
    name: "History Without Walls",
    kind: "ai",
    status: "Side project",
    summary:
      "Python pipeline that turns a markdown script into a captioned 1920×1080 episode. Gemini storyboards scenes, ElevenLabs narrates with forced-alignment captions, Flux makes the stills, Veo cuts hero shots, and ffmpeg assembles the cut. Stage gates keep a 25-minute episode around $5–6 to iterate.",
    stack: ["Python", "Gemini", "ElevenLabs", "Flux", "Veo", "ffmpeg"],
    links: [
      {
        platform: "YouTube",
        url: "https://www.youtube.com/@HistoryWithoutWalls",
      },
      {
        platform: "GitHub",
        url: "https://github.com/michael-timi/history_without_walls",
      },
    ],
  },
  {
    name: "Covmerc Web",
    kind: "web",
    status: "Web product",
    featured: true,
    summary:
      "Marketing site and protected admin on a production Firebase backend that already serves Flutter clients. Access is checked through custom claims, an admins document, and the user role. Firestore writes use field allowlists so the web and mobile contracts stay in sync.",
    stack: ["Next.js 14", "TypeScript", "Tailwind", "Firebase", "GitHub Actions"],
    links: [{ platform: "Live site", url: "https://convmerc-baeef.web.app/" }],
  },
];

export const certifications = [
  {
    name: "Introduction to Generative AI",
    issuer: "Google Cloud",
    year: "2026",
    detail:
      "Learning path and skill badge covering generative AI fundamentals, foundation models, and responsible AI.",
  },
  {
    name: "ChatGPT Prompt Engineering for Developers",
    issuer: "DeepLearning.AI",
    year: "2026",
    detail:
      "Short course by Isa Fulford and Andrew Ng on prompt design, iterative prompting, and LLM-powered applications.",
  },
  {
    name: "Building Systems with the ChatGPT API",
    issuer: "DeepLearning.AI",
    year: "2026",
    detail:
      "Chained LLM calls, multi-step reasoning, moderation, and evaluation patterns for production LLM features.",
  },
  {
    name: "LangChain for LLM Application Development",
    issuer: "DeepLearning.AI",
    year: "2026",
    detail:
      "Composable LLM applications: prompt templates, chains, memory, retrieval, and agent patterns.",
  },
];

export const leadership = [
  {
    name: "Open Source Community Africa",
    role: "Member",
    period: "Aug 2022 – present",
  },
  {
    name: "Google Developer Student Community",
    role: "Member",
    period: "Jan 2018 – Aug 2020",
  },
];

export const projectFilters = [
  { id: "all", label: "All" },
  { id: "mobile", label: "Mobile" },
  { id: "ai", label: "AI" },
  { id: "web", label: "Web" },
] as const;

export type ProjectFilter = (typeof projectFilters)[number]["id"];
