export const profile = {
  name: "Mostafa Mahmoud",
  role: "Backend Developer",
  focus: "PHP · Laravel · REST APIs",
  email: "mostafaa.mahmoudd550@gmail.com",
  portrait: "me.jpeg",
  social: {
    github: "https://github.com/mostafaamahmoudd",
    linkedin: "https://linkedin.com/in/mostafaamahmoudd",
    medium: "https://medium.com/@mostafaamahmoudd",
  },
  intro:
    "Backend developer specializing in PHP and Laravel, focused on scalable systems, clean architecture, and production-ready APIs.",
  about: [
    "I build backend systems designed for real usage, not isolated features. My work focuses on domain logic, scalable architecture, API design, and handling edge cases as systems grow.",
    "Working primarily with PHP and Laravel, I focus on clarity in design: defining responsibilities, reducing coupling, and building maintainable systems that evolve cleanly over time.",
  ],
  availability:
    "Open to backend engineering roles, freelance API projects, and collaborations on products that need clean architecture and reliable systems.",
};

export const workingStyle = [
  {
    label: "Architecture first",
    description: "Designing boundaries before implementation details.",
  },
  {
    label: "Real workflows",
    description: "Projects modeled around users, roles, and business rules.",
  },
  {
    label: "Scalable thinking",
    description: "Codebases structured to stay understandable as features expand.",
  },
];

export const skillGroups = [
  {
    title: "PHP & Laravel development",
    label: "Core backend",
    description:
      "Building backend systems using Laravel with focus on clean structure, business logic implementation, and scalable application design.",
    items: [
      "PHP",
      "Laravel",
      "Eloquent ORM",
      "MVC",
      "Authentication",
      "Admin dashboards",
    ],
  },
  {
    title: "RESTful APIs & backend services",
    label: "API development",
    description:
      "Designing and building RESTful APIs for mobile and web applications, focusing on structured responses, validation, and reliable integration.",
    items: [
      "REST APIs",
      "JSON responses",
      "Validation",
      "Pagination",
      "API Resources",
      "MySQL",
    ],
  },
  {
    title: "Business logic & real-world systems",
    label: "Systems & workflows",
    description:
      "Implementing booking systems, service platforms, order processing, and operational flows with attention to edge cases and data movement.",
    items: [
      "Scheduling systems",
      "Service platforms",
      "Order workflows",
      "Data handling",
      "System logic",
      "Scalability",
    ],
  },
  {
    title: "Development tools & workflow",
    label: "Tools & environment",
    description:
      "Working with modern development tools to maintain code quality, collaboration, and efficient backend delivery.",
    items: ["Git", "PhpStorm", "VS Code", "MySQL", "PHPUnit", "Debugging"],
  },
];

export const journey = [
  {
    label: "Early stage",
    meta: "PHP · Laravel",
    title: "Building foundations through real backend development",
    points: [
      "Developed backend features and APIs using Laravel across multiple projects.",
      "Built understanding of MVC architecture, RESTful APIs, and structured application design.",
      "Focused on writing clean, maintainable code while handling real data and user flows.",
    ],
  },
  {
    label: "Professional experience",
    meta: "Production systems",
    title: "Working on scalable systems and real-world business logic",
    points: [
      "Developed and maintained production REST APIs powering mobile applications.",
      "Implemented business workflows for service platforms, booking systems, and retail management.",
      "Built admin dashboards and backend tools for managing users, operations, and system data.",
      "Collaborated with teams to support performance, reliability, and clean system architecture.",
    ],
  },
];

export const projects = [
  {
    slug: "elmohandes",
    title: "ElMohandes",
    type: "Service marketplace",
    summary:
      "A production mobile service marketplace connecting users with providers, supported by scalable Laravel APIs and an administrative dashboard.",
    scope:
      "The backend needed to support real mobile app workflows: service discovery, requests, operational management, and administrative control for users, services, and day-to-day activity.",
    responsibilities: [
      "Developed core REST APIs powering mobile application flows.",
      "Built admin dashboard features to manage users, services, and operations.",
      "Handled service request flows, tracking, and structured data management.",
    ],
    stack: ["Laravel", "PHP", "MySQL", "REST APIs", "Admin dashboard"],
    liveUrl:
      "https://play.google.com/store/apps/details?id=com.true.elmohandesclients&pcampaignid=web_share",
    liveLabel: "Open live app",
  },
  {
    slug: "satic",
    title: "SATIC",
    type: "Retail management",
    summary:
      "A production retail management platform for cement distribution, handling selling workflows, order processing, and operational business logic.",
    scope:
      "The system focused on practical retail operations, where backend logic had to model orders, transactions, and operational control clearly.",
    responsibilities: [
      "Implemented core workflows for retail selling and order lifecycle.",
      "Designed backend logic for transactions and system operations.",
      "Supported data management and operational control through APIs.",
    ],
    stack: ["Laravel", "Business workflows", "Order processing", "System logic"],
    liveUrl:
      "https://play.google.com/store/apps/details?id=com.true.satic&pcampaignid=web_share",
    liveLabel: "Open live app",
  },
  {
    slug: "salahly",
    title: "Salahly",
    type: "Service platform",
    summary:
      "A mobile service platform connecting customers with technicians, powered by backend workflows for booking, tracking, and operations.",
    scope:
      "The backend organized the service request lifecycle from booking through operational management, with admin tools for visibility and control.",
    responsibilities: [
      "Developed complete backend API for service booking and management.",
      "Built admin dashboard flows for users, providers, and requests.",
      "Designed request tracking and real-world service operations workflows.",
    ],
    stack: ["Laravel", "REST APIs", "Booking systems", "Admin dashboards"],
    liveUrl: "https://play.google.com/store/apps/details?id=com.salahly.app",
    liveLabel: "Open live app",
  },
  {
    slug: "bas10",
    title: "BAS10 Platform",
    type: "Consultation system",
    summary:
      "A consultation and scheduling platform with structured backend APIs, session management, user flows, and performance improvements.",
    scope:
      "The platform needed backend APIs that could support scheduled consultations, session data, and maintainable growth as the product evolved.",
    responsibilities: [
      "Developed APIs for scheduling and consultation workflows.",
      "Implemented session management, user handling, and data flow logic.",
      "Improved performance while maintaining scalable architecture.",
    ],
    stack: ["Laravel", "Scheduling", "REST APIs", "System design"],
    liveUrl: "https://bas-10.com/",
    liveLabel: "Open live website",
  },
];

export const articles = [
  {
    slug: "laravel-db-transactions",
    title: "Laravel DB Transactions: when to use them and when not",
    category: "Laravel",
    source: "Medium",
    summary:
      "A practical note on transaction boundaries, failure handling, and keeping backend changes consistent without over-coupling the system.",
    focus:
      "The article explains how to decide when a database transaction helps and when it can create unnecessary complexity. It is written for backend developers who want safer data changes without wrapping every operation by default.",
    points: [
      "Choosing clear transaction boundaries around related data changes.",
      "Avoiding hidden coupling between database writes and external side effects.",
      "Thinking about rollback behavior before implementation details.",
    ],
    url: "https://medium.com/@mostafaamahmoudd/laravel-db-transactions-when-to-use-them-and-when-not-to-0280464293f3",
  },
];

export const legacyRoutes = {
  "projects.html": "index.html#projects",
  "blogs.html": "index.html#writing",
  "project-elmohandes.html": "index.html#project/elmohandes",
  "project-satic.html": "index.html#project/satic",
  "project-salahly.html": "index.html#project/salahly",
  "project-bas10.html": "index.html#project/bas10",
  "blog-laravel-db-transactions.html":
    "index.html#article/laravel-db-transactions",
};
