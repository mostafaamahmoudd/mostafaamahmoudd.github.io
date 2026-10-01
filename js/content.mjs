export const profile = {
  name: "Mustafa Mahmoud",
  role: "Backend Engineer",
  focus: "Laravel · REST APIs · Business Systems",
  email: "mostafaa.mahmoudd550@gmail.com",
  portrait: "me.jpeg",
  social: {
    github: "https://github.com/mostafaamahmoudd",
    linkedin: "https://linkedin.com/in/mostafaamahmoudd",
    medium: "https://medium.com/@mostafaamahmoudd",
  },
  intro:
    "Backend Engineer focused on Laravel APIs, business workflows, data integrity, and reliable backend architecture.",
  about: [
    "I currently work as a Back-End Engineer at DrCorp, where I develop EasyLink CRM as the sole backend engineer for a Saudi telecommunications reseller.",
    "My work focuses on Laravel backend architecture, REST APIs, business workflows, authentication, authorization, asynchronous processing, automated testing, and data consistency.",
  ],
  availability:
    "Open to backend engineering roles, freelance API projects, and collaborations on products that need clean architecture and reliable systems.",
};

export const resume = {
  path: "Mustafa_Mahmoud_BackEnd.pdf",
  label: "View CV",
};

export const education = {
  school: "Mansoura University",
  location: "Mansoura, Egypt",
  degree: "Bachelor in Computer Science",
  period: "2021 – 2025",
  grade: "Good",
  graduationProject: "A+, 199/200",
};

export const workingStyle = [
  {
    label: "Backend architecture",
    description: "Designing APIs, data models, and business rules as durable systems.",
  },
  {
    label: "Data integrity",
    description: "Protecting workflows with validation, authorization, transactions, and tests.",
  },
  {
    label: "Production collaboration",
    description: "Working with frontend, UI/UX, QA, BA, and DevOps teams to ship reliable backend work.",
  },
];

export const skillGroups = [
  {
    title: "Languages",
    label: "Foundation",
    description:
      "Languages used across backend systems, APIs, academic work, and production development.",
    items: ["PHP", "Go", "C++", "C#", "SQL"],
  },
  {
    title: "Backend engineering",
    label: "Core backend",
    description:
      "Designing Laravel systems, REST APIs, authentication, authorization, data models, and automated test coverage.",
    items: [
      "Laravel",
      "Laravel 13",
      "PHP 8.3",
      "Eloquent ORM",
      "REST APIs",
      "PHPUnit",
      "Sanctum",
      "MySQL",
      "PostgreSQL",
    ],
  },
  {
    title: "Business systems",
    label: "Workflow depth",
    description:
      "Building operational backend workflows including CRM domains, pipelines, bulk processing, dashboards, and KPI systems.",
    items: [
      "RBAC",
      "IDOR protection",
      "Background jobs",
      "Maatwebsite Excel",
      "Spatie Media Library",
      "API Resources",
      "Bulk imports",
      "Admin dashboards",
    ],
  },
  {
    title: "Tools & delivery",
    label: "Workflow",
    description:
      "Tools and frontend-adjacent technologies used while collaborating across product delivery teams.",
    items: [
      "Git",
      "GitHub",
      "PhpStorm",
      "VS Code",
      "Jira",
      "Tailwind CSS",
      "Alpine.js",
      "Flowbite",
    ],
  },
];

export const journey = [
  {
    company: "DrCorp",
    label: "Current role",
    period: "Jan 2026 – Present",
    location: "Mansoura, Egypt",
    title: "Back-End Engineer",
    meta: "EasyLink CRM · Laravel 13",
    points: [
      "Sole backend engineer responsible for EasyLink CRM, an internal CRM for a Saudi telecom reseller managing Mobily, Zain, STC, and EasyLink projects.",
      "Designed Laravel backend architecture, 50+ RESTful API endpoints, authentication, authorization, IDOR protection, and complex CRM workflows.",
      "Built asynchronous Excel bulk processing, KPI/target systems, SIM activation workflows, and maintained 1,674+ automated tests with zero regressions.",
      "Collaborated with frontend, UI/UX, QA, BA, and DevOps teams in an Agile/Scrum workflow using Jira.",
    ],
  },
  {
    company: "TRUE Marketing Consultancy",
    label: "Full-time internship",
    period: "Sep 2024 – Dec 2025",
    location: "Mansoura, Egypt",
    title: "Back-End Engineer Intern",
    meta: "Production mobile APIs",
    points: [
      "Developed and maintained scalable Laravel REST APIs for multiple production mobile applications.",
      "Worked on ElMohandes service marketplace APIs and admin dashboard features for users, services, and operations.",
      "Contributed to SATIC retail management workflows for sales, orders, and mobile integration reliability.",
    ],
  },
  {
    company: "BAS10",
    label: "Part-time role",
    period: "Oct 2024 – Sep 2025",
    location: "Remote",
    title: "Junior Back-End Developer",
    meta: "Consultation platform",
    points: [
      "Developed and maintained backend APIs and dashboard features for a Laravel consultation and scheduling platform.",
      "Implemented session scheduling, user management, structured REST APIs, and data handling.",
      "Collaborated with frontend developers to support reliable system integration.",
    ],
  },
  {
    company: "Salahly",
    label: "Freelance role",
    period: "Sep 2025 – Dec 2025",
    location: "Remote",
    title: "Back-End Developer",
    meta: "Service platform",
    points: [
      "Developed the complete backend API for a mobile service platform connecting customers with local technicians.",
      "Built and maintained admin dashboard flows for users, service providers, service requests, and operations.",
      "Implemented core business workflows for booking, tracking, and service management.",
    ],
  },
];

export const projects = [
  {
    slug: "easylink-crm",
    title: "EasyLink CRM",
    type: "Internal CRM platform",
    role: "Sole Backend Engineer",
    summary:
      "A Laravel 13 backend for an internal CRM used by a Saudi telecommunications reseller managing Mobily, Zain, STC, and EasyLink projects.",
    scope:
      "I designed and developed the Laravel backend from the ground up, including database architecture, REST API architecture, authentication, authorization, business logic, integrations, background jobs, and automated testing. The project is internal, so no public demo or source link is exposed.",
    metrics: {
      endpoints: "50+",
      tests: "1,674+",
      pipelineStages: "8",
      statuses: "24+",
      kpis: "5",
    },
    responsibilities: [
      "Designed and developed 50+ RESTful API endpoints with pagination, filtering, sorting, validation, API Resources, authentication, authorization, and IDOR protection.",
      "Modeled CRM domains including contacts, clients, employee management, activities, opportunities, and related workflows.",
      "Built an opportunity pipeline with 8 stages, 24+ statuses, workflow transitions, expiry handling, and SIM activation tracking.",
      "Implemented manual SIM operations, bulk Excel imports, confirmation workflows, duplicate detection, result tracking, pagination, and downloadable result buckets.",
      "Designed employee targets and KPI tracking across activities, opportunities, contracts, new clients, and sales with weighted real-time calculations.",
      "Implemented RBAC, Laravel Sanctum, token expiration, per-user timezone handling, Spatie Media Library usage, and an Arabic RTL Laravel Blade admin dashboard with 15+ CRUD modules.",
      "Maintained 1,674+ automated tests with zero regressions during development.",
    ],
    stack: [
      "Laravel",
      "Laravel 13",
      "PHP 8.3",
      "MySQL",
      "Eloquent ORM",
      "Laravel Sanctum",
      "PHPUnit",
      "Spatie Media Library",
      "Maatwebsite Excel",
      "Tailwind CSS",
      "Alpine.js",
      "Flowbite",
      "REST APIs",
      "Git",
    ],
  },
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
  {
    slug: "flash-sale-checkout-api",
    title: "Flash-Sale Checkout API",
    type: "Concurrency-focused API",
    summary:
      "A Laravel and MySQL checkout API designed for flash-sale scenarios with limited inventory and strict consistency requirements.",
    scope:
      "The API focused on high-concurrency checkout behavior, preventing overselling and allowing orders only from valid, unexpired stock reservations.",
    responsibilities: [
      "Designed a high-concurrency checkout API for limited-inventory flash-sale scenarios.",
      "Prevented overselling using database transactions and row-level locking.",
      "Implemented short-lived stock reservations and order creation only from valid, unexpired holds.",
    ],
    stack: ["Laravel", "MySQL", "REST APIs", "Database transactions"],
  },
  {
    slug: "blogging-platform-api",
    title: "Blogging Platform REST API",
    type: "REST API",
    summary:
      "A Laravel 11 RESTful API for posts, comments, and tags with Sanctum authentication.",
    scope:
      "The project focused on clean CRUD API structure, authenticated access, and relational content management using Laravel and MySQL.",
    responsibilities: [
      "Developed CRUD operations for posts, comments, and tags.",
      "Implemented Sanctum authentication for API access.",
      "Structured RESTful endpoints around Laravel 11 and MySQL.",
    ],
    stack: ["Laravel", "Laravel 11", "Sanctum", "MySQL", "REST APIs"],
  },
  {
    slug: "thinkink-backend",
    title: "ThinkInk Backend Server",
    type: "Graduation project backend",
    summary:
      "A Go and PostgreSQL backend server developed for the graduation project.",
    scope:
      "The backend supported the graduation project through RESTful APIs, PostgreSQL data storage, and server-side application logic.",
    responsibilities: [
      "Developed backend server functionality using Go.",
      "Used PostgreSQL for data persistence.",
      "Built RESTful APIs for the graduation project system.",
    ],
    stack: ["Go", "PostgreSQL", "REST APIs"],
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
