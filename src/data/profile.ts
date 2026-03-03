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
      "Led development of iOS and Android applications from concept to deployment, ensuring optimal performance.",
      "Integrated a native customer support system across iOS and Android versions.",
      "Developed secure data storage mechanisms for persistent application logic.",
      "Incorporated user feedback into iterative product improvements.",
      "Integrated application process APIs to maintain and enhance core functionality.",
    ],
  },
  {
    company: "Afara Hub",
    location: "Nigeria (Remote)",
    title: "Mobile Developer",
    type: "Contract",
    period: "April 2023 – April 2024",
    highlights: [
      "Collaborated closely with designers to ship visually appealing, intuitive interfaces that improved engagement.",
      "Applied agile methodologies to streamline development, accelerating delivery timelines and collaboration.",
      "Implemented efficient code practices and regular code reviews to optimize app performance and reduce load times.",
      "Integrated Paystack payment gateway and secure transaction flows for the e-commerce system.",
    ],
  },
  {
    company: "Huzz Technologies",
    location: "Nigeria (Remote)",
    title: "Mobile Developer",
    type: "Contract",
    period: "June 2022 – January 2023",
    highlights: [
      "Implemented robust security measures to safeguard user data and privacy both online (via API) and offline (via local storage).",
      "Set up monitoring with Firebase Analytics to analyze app performance and identify bottlenecks.",
      "Collaborated with managers, QA, designers, and backend engineers to hit milestones and deliver a high-quality application.",
    ],
  },
  {
    company: "Springital",
    location: "Nigeria (Hybrid)",
    title: "Mobile Developer",
    type: "Contract",
    period: "June 2021 – July 2022",
    highlights: [
      "Implemented CI/CD pipelines to automate build and deployment, enabling quicker release cycles.",
      "Used Git-based workflows to maintain codebase integrity and support efficient team collaboration.",
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

