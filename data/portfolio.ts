export const portfolio = {
  name: "Dhruv Patel",
  title: "Full-Stack Developer and Competitive Programmer",
  location: "Gandhinagar, Gujarat, India",
  email: "dhruv711622@gmail.com",
  phone: "+91 8866324260",
  links: {
    linkedin: "https://linkedin.com/in/pateldhruv22",
    github: "https://github.com/PatelDhruv2",
    resume: "/resume/Patel_Dhruv.pdf",
    codeforces: "https://codeforces.com/profile/Patel_Dhruv22",
    codechef: "https://www.codechef.com/users/dhruv711622",
    leetcode: "https://leetcode.com/u/dhruv711622/",
  },
  intro:
    "I build ambitious web products with a backend-first mindset, blending polished interfaces with distributed systems, realtime experiences, and production-oriented engineering.",
  status:
    "B.Tech Computer Science student at IIIT Vadodara, actively building scalable products and looking for strong internship and collaboration opportunities.",
  education: {
    school: "Indian Institute of Information Technology Vadodara",
    degree: "B.Tech in Computer Science",
    period: "Aug 2023 - May 2027",
    achievements: ["JEE Mains 98.03 percentile (AIR 22k)", "GUJCET 98.17 percentile"],
  },
  experience: [
    {
      company: "Site Guru",
      role: "Full Stack Developer Intern",
      period: "Aug 2025 - Sep 2025",
      summary:
        "Built workflow-heavy hiring features across employer and candidate journeys, with a strong focus on modular services and realtime interactions.",
      highlights: [
        "Built a job and internship listing platform using Vue.js, React, Node.js, and Express.",
        "Developed realtime chat and interview scheduling with Socket.IO and REST API integration.",
        "Designed modular service architecture to improve maintainability and support horizontal scaling.",
      ],
    },
  ],
  projects: [
    {
      name: "Scalable Grocery E-Commerce Platform",
      href: "https://github.com/PatelDhruv2/Grocery-app",
      summary:
        "A distributed commerce platform designed around reliability, async processing, and operational visibility.",
      stack: ["Next.js", "PostgreSQL", "Node.js", "Tailwind CSS", "Kafka", "Redis", "Docker"],
      highlights: [
        "Built ordering, catalog, cart, auth, and order-processing APIs with server-side pagination and filtering.",
        "Used Kafka queues for async workflows and Redis to reduce database load and improve response time.",
        "Set up Nginx load balancing, containerized services, and monitoring with Grafana and Prometheus.",
      ],
    },
    {
      name: "Real-Time Chat Application",
      href: "https://github.com/PatelDhruv2/Chat-App-Quick",
      summary:
        "A realtime messaging system centered on smooth user presence, secure auth flows, and scalable socket events.",
      stack: ["Next.js", "Node.js", "Express", "Socket.IO", "Prisma", "Redis"],
      highlights: [
        "Supported private and group conversations over bidirectional WebSocket communication.",
        "Implemented OTP verification and Google OAuth 2.0 for secure authentication.",
        "Added typing indicators, read receipts, online presence, and efficient concurrent event handling.",
      ],
    },
    {
      name: "Email Notification System",
      href: "https://github.com/PatelDhruv2/Email-notifier",
      summary:
        "A rule-based notification platform for automated email workflows with deployment-conscious architecture.",
      stack: ["React", "Node.js", "Express", "Google OAuth", "Vercel", "Railway"],
      highlights: [
        "Created configurable notification triggers and delivery scheduling for automated outreach.",
        "Integrated Google OAuth for email access and sending flows.",
        "Deployed frontend and backend separately with CI/CD-friendly infrastructure choices.",
      ],
    },
  ],
  skillGroups: [
    {
      label: "Frontend",
      items: ["React", "Next.js", "Vue.js", "Tailwind CSS", "TypeScript", "JavaScript"],
    },
    {
      label: "Backend",
      items: ["Node.js", "Express.js", "REST APIs", "WebSockets", "Socket.IO"],
    },
    {
      label: "Data",
      items: ["PostgreSQL", "MySQL", "MongoDB", "Prisma ORM", "Redis", "Kafka"],
    },
    {
      label: "DevOps and Tooling",
      items: ["Docker", "Jenkins", "Nginx", "Grafana", "Prometheus", "Git", "Postman"],
    },
    {
      label: "Core CS",
      items: ["C++", "C", "Data Structures", "Algorithms", "Dynamic Programming", "Graph Theory"],
    },
  ],
  stats: [
    { value: "600+", label: "LeetCode problems solved" },
    { value: "1200+", label: "Problems across platforms" },
    { value: "1291", label: "Peak Codeforces rating" },
    { value: "1650", label: "Peak CodeChef rating" },
  ],
  profiles: [
    {
      label: "Codeforces",
      value: "Pupil",
      detail: "Max rating 1291",
      href: "https://codeforces.com/profile/Patel_Dhruv22",
    },
    {
      label: "CodeChef",
      value: "3-Star",
      detail: "Rating 1650, Global Rank 244 in a rated contest",
      href: "https://www.codechef.com/users/dhruv711622",
    },
    {
      label: "LeetCode",
      value: "600+ solved",
      detail: "Consistent algorithm and interview-style problem solving",
      href: "https://leetcode.com/u/dhruv711622/",
    },
  ],
  interests: ["Competitive Programming", "Backend Development", "Distributed Systems"],
  languages: ["English", "Gujarati", "Hindi"],
} as const;
