export interface Skill {
  name: string;
  category: 'Languages' | 'Frontend' | 'Backend' | 'Databases' | 'Concepts' | 'Tools';
  proficiency: number; // 0-100
  experience: string;
  description: string;
  appliedIn: string;
  iconName: string;
}

export interface ProjectModel {
  name: string;
  fields: string[];
  purpose: string;
}

export interface ProjectEndpoint {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  path: string;
  description: string;
  authRequired: boolean;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  type: string;
  period: string;
  overview: string;
  githubUrl: string;
  demoUrl?: string;
  technologies: string[];
  keyHighlights: string[];
  models: ProjectModel[];
  endpoints: ProjectEndpoint[];
  interactiveType: 'food-delivery' | 'expense-tracker';
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  description: string;
  achievements: string[];
  techStack: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  certNumber: string;
  regNumber: string;
  issueDate: string;
  accreditations: string[];
  verifiedSkills: string[];
  summary: string;
}

export interface Education {
  degree: string;
  major: string;
  institution: string;
  period: string;
  score: string;
  highlights: string[];
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "ROHINDH S",
    role: "Python Full Stack Developer",
    tagline: "Building scalable DRF micro-architectures & reactive React web platforms",
    location: "Bangalore, Karnataka, India",
    phone: "+91 7305733955",
    email: "rohindhshan@gmail.com",
    github: "https://github.com/rohindhshan",
    linkedin: "https://linkedin.com/in/rohindh-s",
    whatsapp: "https://wa.me/917305733955",
    availability: "Available for Immediate Full-Time Roles",
    yearsExperience: "Fresher with Internship Experience",
    avatarUrl: "", // Customizable via photo upload/switcher
  },

  summary: {
    lead: "Results-driven Python Full Stack Developer with hands-on experience architecting robust RESTful backends using Django & Django REST Framework (DRF) and building high-performance, component-driven client applications in React.js.",
    body: "Specialized in translating business logic into scalable relational database schemas (MySQL & SQLite), engineering token-based authentication workflows with SimpleJWT, and enforcing strict Role-Based Access Control (RBAC). Proven track record across frontend, backend, and database layers—from developing a full-featured multi-role food delivery platform with automated invoice generation to architecting real-time budgeting systems. Dedicated to writing clean, maintainable, Object-Oriented code backed by modern Git version-control workflows.",
    valueProps: [
      {
        title: "Full-Cycle Architectural Delivery",
        desc: "Able to take an idea from relational schema design and DRF serializer logic straight to responsive React UI components and real-time state sync.",
      },
      {
        title: "Security & Authentication First",
        desc: "Experienced implementing JWT authentication with token rotation, refresh routines, and granular permission classes for protected API endpoints.",
      },
      {
        title: "Production Mindset & Clean Code",
        desc: "Committed to SOLID principles, Object-Oriented Programming (OOP), Git-flow collaboration, and performance-optimized database queries.",
      },
    ],
    stats: [
      { label: "Core Relational Models Designed", value: "6+" },
      { label: "Full-Stack Production Projects", value: "2" },
      { label: "Certified Core Technologies", value: "8+" },
      { label: "Graduation Year (B.Tech IT)", value: "2025" },
    ]
  },

  skills: [
    // Programming Languages
    {
      name: "Python",
      category: "Languages",
      proficiency: 92,
      experience: "Primary Backend Language",
      description: "Writing clean, object-oriented, PEP8-compliant code for web backends, data modeling, algorithm implementation, and business logic.",
      appliedIn: "Django REST Framework APIs, FoodExpress & Expense Tracker backends",
      iconName: "Code"
    },
    {
      name: "JavaScript (ES6+)",
      category: "Languages",
      proficiency: 88,
      experience: "Frontend & Full Stack",
      description: "Modern JavaScript features including async/await, closures, promises, array methods, DOM manipulation, and modular architecture.",
      appliedIn: "React.js SPAs, real-time calculations, dynamic UI state management",
      iconName: "FileCode"
    },
    {
      name: "Java",
      category: "Languages",
      proficiency: 80,
      experience: "Core & OOP Foundations",
      description: "Strong foundation in Core Java, Object-Oriented Programming principles, collections framework, and multi-tier application architecture.",
      appliedIn: "Academic computer science curriculum & Tap Academy certification",
      iconName: "Coffee"
    },

    // Frontend
    {
      name: "React.js",
      category: "Frontend",
      proficiency: 90,
      experience: "Modern SPA Architecture",
      description: "Building reactive component trees using functional components, hooks (useState, useEffect, useMemo), context API, and modular styling.",
      appliedIn: "FoodExpress (Vite) client, Expense Tracker dashboard, Tap Academy internal UI",
      iconName: "Layers"
    },
    {
      name: "HTML5 & CSS3",
      category: "Frontend",
      proficiency: 94,
      experience: "Semantic Web & Modern Layouts",
      description: "Structuring semantic web pages, accessibility compliance, Flexbox, CSS Grid layouts, media queries, and smooth animations.",
      appliedIn: "All web projects with cross-browser responsive testing",
      iconName: "Layout"
    },
    {
      name: "Tailwind CSS",
      category: "Frontend",
      proficiency: 92,
      experience: "Utility-First Styling",
      description: "Rapidly designing bespoke, responsive, and maintainable user interfaces with zero CSS bloat, custom theming, and dark mode support.",
      appliedIn: "Modern portfolio layout, FoodExpress client components",
      iconName: "Palette"
    },

    // Backend
    {
      name: "Django",
      category: "Backend",
      proficiency: 90,
      experience: "Enterprise Python Web Framework",
      description: "Architecting backend applications using Django's MVT pattern, ORM, URL routing, migration management, and security middleware.",
      appliedIn: "FoodExpress platform, Tap Academy internal web services",
      iconName: "Server"
    },
    {
      name: "Django REST Framework (DRF)",
      category: "Backend",
      proficiency: 92,
      experience: "Robust REST API Development",
      description: "Building production-ready RESTful APIs with ModelViewSets, serializers, pagination, filtering, exception handling, and status codes.",
      appliedIn: "FoodExpress & Expense Tracker REST endpoints",
      iconName: "Cpu"
    },
    {
      name: "JWT & SimpleJWT",
      category: "Backend",
      proficiency: 88,
      experience: "Token Authentication & RBAC",
      description: "Securing APIs via JSON Web Tokens, access/refresh token rotation, Bearer authorization headers, and custom permission classes.",
      appliedIn: "FoodExpress role-based access control (Customer vs Restaurant Owner)",
      iconName: "ShieldCheck"
    },
    {
      name: "REST APIs",
      category: "Backend",
      proficiency: 94,
      experience: "API Design & Integration",
      description: "Designing stateless HTTP APIs following REST principles: GET, POST, PUT, PATCH, DELETE with strict payload validation and JSON responses.",
      appliedIn: "Live frontend-backend communications across all full-stack applications",
      iconName: "Network"
    },

    // Databases
    {
      name: "MySQL",
      category: "Databases",
      proficiency: 86,
      experience: "Relational Database Management",
      description: "Designing normalized schemas (1NF, 2NF, 3NF), establishing foreign key constraints, indexes, joins, and writing efficient SQL queries.",
      appliedIn: "FoodExpress platform & Tap Academy internship internal database",
      iconName: "Database"
    },
    {
      name: "SQLite",
      category: "Databases",
      proficiency: 90,
      experience: "Embedded Relational Storage",
      description: "Configuring lightweight zero-configuration relational storage for rapid prototyping, transactional consistency, and local environments.",
      appliedIn: "Expense Tracker full-stack application data persistence",
      iconName: "HardDrive"
    },

    // Concepts & Architecture
    {
      name: "Object-Oriented Programming (OOP)",
      category: "Concepts",
      proficiency: 92,
      experience: "Core Architectural Paradigm",
      description: "Applying encapsulation, inheritance, polymorphism, and abstraction to write scalable, DRY, and maintainable software systems.",
      appliedIn: "Python classes, Django models, React component hierarchy",
      iconName: "Workflow"
    },
    {
      name: "CRUD Operations",
      category: "Concepts",
      proficiency: 95,
      experience: "Data Lifecycle Management",
      description: "Designing end-to-end Create, Read, Update, and Delete operations with atomic transactions and client-side optimistic UI feedback.",
      appliedIn: "Menu item catalog, order lifecycle, expense transactions",
      iconName: "RefreshCw"
    },
    {
      name: "Responsive Web Design",
      category: "Concepts",
      proficiency: 94,
      experience: "Mobile-First UX",
      description: "Delivering seamless user experiences across mobile, tablet, laptop, and ultra-wide desktop viewports with fluid typography.",
      appliedIn: "Mobile checkout flow in FoodExpress, responsive budgeting ledger",
      iconName: "Smartphone"
    },

    // Tools
    {
      name: "Git & GitHub",
      category: "Tools",
      proficiency: 90,
      experience: "Version Control & Collaboration",
      description: "Git CLI branching, merging, conflict resolution, pull requests, conventional commit messages, and repository hosting.",
      appliedIn: "All project codebases and Tap Academy team collaboration",
      iconName: "GitBranch"
    },
    {
      name: "VS Code",
      category: "Tools",
      proficiency: 95,
      experience: "Primary Development IDE",
      description: "Optimized workflow with Python & Django extensions, linting, debugging, integrated terminal, Prettier, and Git integration.",
      appliedIn: "Daily software development workflow",
      iconName: "Terminal"
    }
  ] as Skill[],

  projects: [
    {
      id: "foodexpress",
      title: "FoodExpress",
      subtitle: "Full-Stack Food Delivery Platform",
      type: "Full-Stack Web Application",
      period: "2025",
      overview: "A comprehensive, role-based food ordering and management platform engineered with React.js (Vite) and Django REST Framework. Solves real-world restaurant-to-customer logistics with JWT authentication, dynamic menus, live cart calculations, mock payments, and automated PDF invoice generation.",
      githubUrl: "https://github.com/rohindhshan/FoodExpress",
      technologies: ["React.js", "Vite", "Django REST Framework", "Python", "SimpleJWT", "MySQL", "jsPDF", "Tailwind CSS"],
      keyHighlights: [
        "Architected role-based authentication with SimpleJWT, separating Customer and Restaurant-Owner dashboards with protected route access and token refresh cycles.",
        "Engineered RESTful APIs for real-time restaurant search, multi-category menu catalog management, and automated order status tracking (Pending → Accepted → In Kitchen → Out for Delivery → Delivered).",
        "Built an interactive shopping cart with dynamic subtotal, delivery fee, and tax calculations coupled with mock UPI and Card payment workflows.",
        "Designed and normalized 6 core database models: User, RestaurantProfile, MenuItem, CartItem, Order, and OrderItem.",
        "Integrated client-side automatic PDF invoice generation upon order confirmation using jsPDF for instantaneous receipt download."
      ],
      models: [
        { name: "User", fields: ["id", "username", "email", "role (Customer/Owner)", "date_joined"], purpose: "Handles authentication, credentials, and RBAC authorization." },
        { name: "RestaurantProfile", fields: ["id", "owner_id", "restaurant_name", "cuisine_type", "address", "is_open"], purpose: "Stores restaurant vendor credentials and operational metadata." },
        { name: "MenuItem", fields: ["id", "restaurant_id", "name", "price", "category", "is_available"], purpose: "Represents food items with pricing, category tags, and availability status." },
        { name: "CartItem", fields: ["id", "user_id", "menu_item_id", "quantity", "created_at"], purpose: "Tracks ephemeral cart states with real-time quantity modifiers." },
        { name: "Order", fields: ["id", "user_id", "restaurant_id", "total_amount", "status", "payment_method", "created_at"], purpose: "Maintains transaction state, payment verification, and delivery pipeline." },
        { name: "OrderItem", fields: ["id", "order_id", "menu_item_id", "quantity", "unit_price"], purpose: "Immutable snapshot of purchased items for auditing and PDF receipts." }
      ],
      endpoints: [
        { method: "POST", path: "/api/auth/token/", description: "Issues JWT access and refresh tokens upon valid user login", authRequired: false },
        { method: "POST", path: "/api/auth/token/refresh/", description: "Refreshes expired access tokens without re-prompting user credentials", authRequired: false },
        { method: "GET", path: "/api/restaurants/", description: "Returns list of open restaurants with cuisine filter & search query", authRequired: false },
        { method: "GET", path: "/api/restaurants/{id}/menu/", description: "Retrieves complete categorized menu items for a selected restaurant", authRequired: false },
        { method: "POST", path: "/api/cart/items/", description: "Adds or updates item quantities in the user's active shopping cart", authRequired: true },
        { method: "POST", path: "/api/orders/checkout/", description: "Processes mock payment, generates order record, and triggers receipt payload", authRequired: true },
        { method: "PATCH", path: "/api/owner/orders/{id}/status/", description: "Owner-only endpoint to update order progression state", authRequired: true }
      ],
      interactiveType: "food-delivery"
    },
    {
      id: "expense-tracker",
      title: "Expense Tracker",
      subtitle: "Full-Stack Budgeting & Finance Application",
      type: "Full-Stack Web Application",
      period: "2025",
      overview: "An intuitive full-stack personal budgeting web application engineered with React.js and Django REST Framework backed by SQLite. Delivers real-time financial transparency with target budget allocations, instant balance recalculation, category analytics, and complete CRUD operations.",
      githubUrl: "https://github.com/rohindhshan/ExpenseTracker",
      technologies: ["React.js", "Django REST Framework", "Python", "SQLite", "Token Authentication", "Tailwind CSS"],
      keyHighlights: [
        "Constructed a reactive single-page frontend using React.js and connected it to a modular Django REST Framework backend via custom fetch wrappers.",
        "Implemented token-based user authentication ensuring private user session isolation and secured personal budgeting records.",
        "Engineered full CRUD (Create, Read, Update, Delete) capability for expense transactions with instantaneous UI synchronization.",
        "Built dynamic mathematical ledger calculations computing available balance, category breakdown percentages, and budget overrun warnings.",
        "Structured normalized SQLite database schema with foreign-key relationships associating transactions directly with authenticated user accounts."
      ],
      models: [
        { name: "User", fields: ["id", "username", "email", "password_hash"], purpose: "Secures user access and isolates personal transaction records." },
        { name: "BudgetSetting", fields: ["id", "user_id", "monthly_target", "currency", "alert_threshold"], purpose: "Stores user-defined spending targets and budgeting limits." },
        { name: "ExpenseCategory", fields: ["id", "name", "color_code", "icon"], purpose: "Standardizes categorization (Food, Rent, Utilities, Entertainment, Transit)." },
        { name: "ExpenseRecord", fields: ["id", "user_id", "category_id", "title", "amount", "date", "notes"], purpose: "Stores detailed ledger entries for calculations and audits." }
      ],
      endpoints: [
        { method: "POST", path: "/api/auth/register/", description: "Creates a new user profile with initial default budget profile", authRequired: false },
        { method: "POST", path: "/api/auth/login/", description: "Authenticates credentials and returns user authorization token", authRequired: false },
        { method: "GET", path: "/api/expenses/", description: "Fetches user's transaction ledger with optional date and category filters", authRequired: true },
        { method: "POST", path: "/api/expenses/", description: "Creates a new expense item and triggers real-time balance update", authRequired: true },
        { method: "DELETE", path: "/api/expenses/{id}/", description: "Deletes an expense record and restores available budget balance", authRequired: true },
        { method: "GET", path: "/api/budget/summary/", description: "Calculates total spend vs monthly target with remaining balance", authRequired: true }
      ],
      interactiveType: "expense-tracker"
    }
  ] as Project[],

  experience: [
    {
      role: "Full Stack Web Developer Intern",
      company: "Tap Academy",
      period: "2025",
      location: "Bangalore, Karnataka, India",
      type: "Internship",
      description: "Contributed to developing and scaling a live internal enterprise web application across frontend, backend, and relational database layers.",
      achievements: [
        "Developed responsive React.js UI components and seamlessly integrated them with Django REST Framework APIs for a live internal web application.",
        "Designed relational database schemas and implemented query logic using MySQL for robust application data management and fast lookup times.",
        "Implemented and tested frontend and backend modules, resolved cross-browser bugs, and contributed to feature development using Git-based workflows.",
        "Collaborated across frontend, backend, and database layers to develop, debug, and integrate end-to-end application features adhering to clean coding standards."
      ],
      techStack: ["React.js", "Django REST Framework", "Python", "MySQL", "JavaScript", "Git", "REST APIs"]
    }
  ] as Experience[],

  certification: {
    title: "Full Stack Web Development Certification",
    issuer: "Tap Academy",
    certNumber: "11470",
    regNumber: "TAMAR25593",
    issueDate: "27.09.2025",
    signatory: "Rohit Ravinder, CEO, Tap Academy",
    accreditations: ["ISO 9001:2015 Certified", "#startupindia Recognized", "DIPP Approved"],
    verifiedSkills: ["Java", "Python", "HTML5", "CSS3", "JavaScript", "Bootstrap", "Spring", "Hibernate", "MySQL"],
    summary: "Rigorous industry-aligned training covering complete full-stack development lifecycle, object-oriented software engineering, relational database modeling, and end-to-end web architecture."
  } as Certification,

  education: {
    degree: "Bachelor of Technology (B.Tech)",
    major: "Information Technology",
    institution: "Sri Ramakrishna Institute of Technology",
    period: "2021 – 2025",
    score: "CGPA: 7.1 / 10.0",
    highlights: [
      "Specialized in core Computer Science & IT fundamentals: Data Structures, Algorithms, DBMS, and Object-Oriented Software Engineering.",
      "Graduated with practical engineering project portfolio in Python, Django REST Framework, and React.js web systems.",
      "Actively led peer technical discussions and Git collaborative repositories."
    ]
  } as Education
};
