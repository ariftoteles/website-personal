export const profile = {
  name: "Arif Santoso",
  title: "Software Engineer",
  location: "Surakarta, Indonesia",
  phone: "+62-821-3406-3355",
  email: "arif.santoso4@gmail.com",
  linkedin: "https://www.linkedin.com/in/ariftoteles",
  summary:
    "Software engineer with 5+ years of experience building scalable, production-grade systems in Golang, Node.js, and .NET across EdTech and HealthTech domains. Currently leveraging AI agent workflows to accelerate development cycles — from automated code generation and intelligent test scaffolding to AI-assisted API design and observability. Comfortable owning full backend stacks: microservices, event-driven architecture, gRPC, search, caching, and cloud infrastructure. Fast learner who thrives in cross-functional teams shipping high-impact products.",
};

export const experiences = [
  {
    company: "Semesta Integrasi Digital",
    country: "Indonesia",
    role: "Software Engineer - Backend",
    period: "AUG 2025 - PRESENT",
    description:
      "PT Semesta Integrasi Digital (SID) is an Indonesian EdTech company founded by Najelaa Shihab, focused on building a high-quality and accessible education ecosystem. Its platforms include Sekolah.mu, Sekolah Murid Merdeka, Karier.mu, and Talentics.",
    highlights: [
      "Design and develop scalable backend systems using Golang within a microservices architecture.",
      "Build and maintain RESTful APIs and gRPC services for efficient inter-service communication.",
      "Implement event-driven architecture using NATS for asynchronous data processing.",
      "Manage and optimize databases including PostgreSQL and MongoDB.",
      "Utilize Redis for caching strategies.",
      "Integrate Firestore for real-time data synchronization and push notification strategy.",
      "Develop and optimize search capabilities using Elasticsearch.",
      "Implement observability using OpenTelemetry and Grafana, enabling faster debugging in microservices.",
      "Apply AI agent tooling to automate repetitive scaffolding tasks and accelerate feature delivery.",
    ],
    tags: ["Golang", "gRPC", "NATS", "PostgreSQL", "MongoDB", "Redis", "Firestore", "Elasticsearch", "OpenTelemetry", "Grafana"],
    current: true,
  },
  {
    company: "Bithealth",
    country: "Indonesia",
    role: "Software Engineer",
    period: "AUG 2021 - AUG 2025",
    description:
      "BitHealth is the first digital health solution provider in Indonesia specializing in digital health technology and transformation for healthcare organizations.",
    highlights: [
      "Developed a Financial Accounting Interface for Siloam Hospital using .NET 8, NextJs 14, MSSQL, Redis, RabbitMQ, Jest and XUnit.",
      "Built a Kidney Transplant Registry web app using NestJs, NextJs, PostgreSQL, and Redis.",
      "Revamped Aido Health platform using PHP Laravel.",
      "Developed a Digital Doctor Governance web app using ExpressJS, ReactJS, PostgreSQL, Redis, and RabbitMQ.",
    ],
    tags: [".NET 8", "NestJS", "NextJS", "PostgreSQL", "Redis", "RabbitMQ", "PHP Laravel", "ReactJS"],
    current: false,
  },
  {
    company: "Kampus Merdeka x Hacktiv8",
    country: "Indonesia",
    role: "Instructor / Mentor",
    period: "JAN 2022 - JAN 2025",
    description:
      "Kampus Merdeka is an internship and independent study program for students, collaborating with Hacktiv8 to provide high-quality learning materials.",
    highlights: [
      "Providing material on the basics of becoming a backend developer using NodeJS.",
      "Teaching about the basics of HTML, CSS, and ReactJS.",
    ],
    tags: ["NodeJS", "HTML", "CSS", "ReactJS", "Teaching"],
    current: false,
  },
  {
    company: "B3 Network",
    country: "Indonesia",
    role: "Software Engineer",
    period: "JUN 2021 - JUL 2021",
    description:
      "B3Networks is a Cloud Communications company headquartered in Singapore with offices across the Asia Pacific.",
    highlights: [
      "Created additional features using NodeJS, AWS Lambda, S3, Azure Application Service, and Azure Blob Storage.",
    ],
    tags: ["NodeJS", "AWS Lambda", "S3", "Azure"],
    current: false,
  },
  {
    company: "Cuso",
    country: "Indonesia",
    role: "Fullstack Developer",
    period: "FEB 2021 - MAY 2021",
    description:
      "Cuso is an IT solution company specializing in the cooperative sector.",
    highlights: [
      "Developed an online voting application for cooperative administrator elections using ExpressJS, ReactJS, and MySQL.",
    ],
    tags: ["ExpressJS", "ReactJS", "MySQL"],
    current: false,
  },
  {
    company: "Kinarya Alihdaya Mandiri",
    country: "Indonesia",
    role: "Tech. Support Engineer",
    period: "OCT 2018 - JAN 2020",
    description:
      "Technical support role at PT Telkomsel's data center, coordinating and monitoring network and electrical resources.",
    highlights: [
      "Coordinate and monitor network and electrical resources in the data center.",
    ],
    tags: ["Networking", "Data Center", "Technical Support"],
    current: false,
  },
];

export const education = [
  {
    institution: "Universitas Semarang",
    location: "Semarang",
    degree: "Bachelor of Electrical Engineering",
    period: "AUG 2011 - FEB 2016",
    detail: "Graduated with GPA 3.24",
    type: "degree" as const,
  },
];

export const bootcamps = [
  {
    institution: "Hacktiv8",
    location: "Indonesia",
    program: "Fullstack Javascript Immersive Bootcamp",
    period: "OCT 2020 - FEB 2021",
    detail: "Graduated with Teachers' Awards",
    type: "bootcamp" as const,
  },
  {
    institution: "Purwadhika",
    location: "Indonesia",
    program: "Data Science and Machine Learning",
    period: "JAN 2020 - JUN 2020",
    detail: "",
    type: "bootcamp" as const,
  },
];

export const skills = [
  {
    category: "Programming Languages",
    items: ["Go (Golang)", "JavaScript", "Python", "C#", "PHP"],
    icon: "code",
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB"],
    icon: "database",
  },
  {
    category: "Frameworks & Libraries",
    items: ["Gin", "Express.js", "NestJS", "React", "Next.js", ".NET 8"],
    icon: "layers",
  },
  {
    category: "Cloud & Infrastructure",
    items: ["AWS", "Docker", "Git"],
    icon: "cloud",
  },
  {
    category: "Architecture & Technologies",
    items: ["Microservices", "gRPC", "NATS", "RabbitMQ", "Redis", "Elasticsearch", "Firestore"],
    icon: "cpu",
  },
  {
    category: "Observability & Monitoring",
    items: ["Grafana", "OpenTelemetry"],
    icon: "monitor",
  },
  {
    category: "AI & Tooling",
    items: ["AI Agent Workflows", "LLM-Assisted Development", "Prompt Engineering", "Automated Code Scaffolding"],
    icon: "brain",
  },
];
