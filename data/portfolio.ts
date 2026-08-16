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
    "I build backend-leaning full-stack systems that hold up under load, with a focus on realtime products, distributed workflows, and clean operational surfaces.",
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
        "Built workflow-heavy hiring features across employer and candidate journeys, with a focus on verified profiles, listing flows, and realtime interactions.",
      highlights: [
        "Built job and internship listing pages across Vue.js, React, Node.js, and Express.",
        "Implemented profile verification workflows for cleaner candidate and employer records.",
        "Developed WebSocket-based post-shortlist chat with Socket.IO and REST API integration.",
        "Kept services modular so new hiring flows could be added without reshaping the whole app.",
      ],
    },
  ],
  projects: [
    {
      name: "Scalable Grocery E-Commerce Platform",
      href: "https://github.com/PatelDhruv2/Grocery-app",
      summary:
        "Distributed grocery platform with REST APIs, Redis caching, Nginx load balancing, and a Kafka-backed order pipeline.",
      stack: ["Next.js", "PostgreSQL", "Node.js", "Redis", "Kafka", "Docker", "Nginx"],
      highlights: [
        "19+ REST endpoints across catalog, cart, auth, ordering, and order-processing flows.",
        "Redis caching reduced repeated read latency from 50ms to 5ms.",
        "Nginx load balanced traffic across 4 application instances.",
        "Kafka powered the event-driven order pipeline.",
      ],
    },
    {
      name: "Real-Time Chat Application",
      href: "https://github.com/PatelDhruv2/Chat-App-Quick",
      summary:
        "Realtime messaging app with scalable WebSocket broadcasting, OTP and Google OAuth auth, and Redis-backed socket coordination.",
      stack: ["Next.js", "Node.js", "Socket.IO", "Redis", "Prisma"],
      highlights: [
        "Benchmarked at 2,935+ messages per second over WebSocket traffic.",
        "Implemented Google OAuth and OTP-based authentication.",
        "Used Redis as the Socket.IO adapter for cross-instance broadcasting.",
      ],
    },
    {
      name: "Email Triage Assistant",
      href: "https://github.com/PatelDhruv2/Email-notifier",
      summary:
        "Email workflow assistant with Gmail API integration, priority rules, queue processing, and split frontend/backend deployment.",
      stack: ["Next.js", "Express", "Prisma", "PostgreSQL", "Redis", "BullMQ"],
      highlights: [
        "Integrated Gmail API access for email workflow automation.",
        "Added priority rules for triage and routing.",
        "Used Redis and BullMQ for queued background work.",
        "Deployed across Vercel and Railway.",
      ],
    },
  ],
  skillGroups: [
    {
      label: "Languages",
      items: ["C++", "C", "TypeScript", "JavaScript", "SQL"],
    },
    {
      label: "Core CS",
      items: ["Data Structures", "Algorithms", "Dynamic Programming", "Graph Theory", "Problem Solving"],
    },
    {
      label: "Frameworks",
      items: ["React", "Next.js", "Vue.js", "Node.js", "Express.js", "Socket.IO", "Prisma"],
    },
    {
      label: "Infrastructure",
      items: ["PostgreSQL", "Redis", "Kafka", "Docker", "Nginx", "BullMQ", "Grafana", "Prometheus"],
    },
  ],
  stats: [
    { value: "50ms -> 5ms", label: "Cache latency" },
    { value: "2,935 msg/sec", label: "Peak throughput" },
    { value: "4", label: "Instances load-balanced" },
    { value: "1,400+", label: "Problems solved" },
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
