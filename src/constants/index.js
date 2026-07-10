export const navLinks = [
  { id: "about", title: "About" },
  { id: "skills", title: "Skills" },
  { id: "projects", title: "Projects" },
  { id: "coding", title: "Coding" },
  { id: "achievements", title: "Achievements" },
  { id: "certifications", title: "Certifications" },
  { id: "contact", title: "Contact" },
];

export const personalInfo = {
  name: "Priyanshu Tayal",
  email: "priyanshutayal35@gmail.com",
  phone: "+91 9027500401",
  linkedin: "https://www.linkedin.com/in/priyanshu-tayal-34949328a",
  location: "Ghaziabad, Uttar Pradesh",
  github: "https://github.com/",
};

export const codingProfiles = [
  {
    platform: "LeetCode",
    stats: "Solved 70+ DSA problems",
    icon: "https://cdn.iconscout.com/icon/free/png-256/free-leetcode-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-company-brand-vol-4-pack-logos-icons-2944960.png",
    link: "https://leetcode.com/u/Priyanshu_Tayal/",
  },
  {
    platform: "CodeChef",
    stats: "Active Problem Solver",
    icon: "https://cdn.iconscout.com/icon/free/png-256/free-codechef-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-2-pack-logos-icons-3029941.png",
    link: "#",
  },
];

export const skills = [
  { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "DSA", icon: "https://cdn-icons-png.flaticon.com/512/10061/10061735.png" },
  { name: "OOPs", icon: "https://cdn-icons-png.flaticon.com/512/8099/8099307.png" },
  { name: "REST APIs", icon: "https://cdn-icons-png.flaticon.com/512/10103/10103328.png" },
];

export const achievements = [
  {
    title: "SIH 2025 Finalist",
    company_name: "Smart India Hackathon",
    icon: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    iconBg: "#383E56",
    date: "2025",
    points: ["Reached the finals of Smart India Hackathon 2025."],
  },
  {
    title: "Codathon Finalist",
    company_name: "3rd Year",
    icon: "https://cdn-icons-png.flaticon.com/512/2950/2950711.png",
    iconBg: "#E6DEDD",
    date: "3rd Year",
    points: ["Competed and reached the finals in the university Codathon."],
  },
  {
    title: "Volunteer",
    company_name: "Rubix Technical Club (CSE)",
    icon: "https://cdn-icons-png.flaticon.com/512/1256/1256224.png",
    iconBg: "#383E56",
    date: "Present",
    points: ["Actively volunteering and organizing technical events for students."],
  },
  {
    title: "Volunteer",
    company_name: "Blood Donation Camp",
    icon: "https://cdn-icons-png.flaticon.com/512/1055/1055666.png",
    iconBg: "#E6DEDD",
    date: "Past",
    points: ["Helped organize and manage blood donation drives."],
  },
  {
    title: "Participant",
    company_name: "National Hackathons",
    icon: "https://cdn-icons-png.flaticon.com/512/3652/3652191.png",
    iconBg: "#383E56",
    date: "Various",
    points: ["Participated in multiple national-level hackathons."],
  },
];

export const certifications = [
  {
    name: "AI – Infosys",
    description: "ML basics, supervised learning, real-world applications.",
    icon: "https://cdn-icons-png.flaticon.com/512/2083/2083213.png",
    link: "/ai-certificate.png",
  },
  {
    name: "DBMS – Infosys",
    description: "SQL, normalization, relational design.",
    icon: "https://cdn-icons-png.flaticon.com/512/1150/1150592.png",
    link: "/dbms-certificate.png",
  },
  {
    name: "DSA – CodeChef",
    description: "Problem solving using core data structures.",
    icon: "https://cdn-icons-png.flaticon.com/512/10061/10061735.png",
    link: "/codechef-certificate.png",
  },
  {
    name: "Linux & AWS Cloud",
    description: "Basic fundamentals of Linux administration and AWS cloud computing.",
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968853.png",
    link: "/linux-aws-certificate.png",
  },
];

export const projects = [
  {
    name: "Civic Issue Reporting System",
    description: "A web-based platform for reporting civic issues with image upload and geolocation tagging. Features an interactive dashboard with map-based visualization for real-time issue tracking, enabling authorities to prioritize and resolve issues efficiently.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "rest-api", color: "green-text-gradient" },
      { name: "geolocation", color: "pink-text-gradient" },
    ],
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    source_code_link: "https://github.com/",
    live_demo_link: "#",
  },
  {
    name: "People Count Monitoring System",
    description: "A real-time people counting system using computer vision techniques and object detection algorithms. Features threshold-based alert mechanisms for crowd management, optimizing system performance for real-time processing with minimal latency.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "computer-vision", color: "green-text-gradient" },
      { name: "machine-learning", color: "pink-text-gradient" },
    ],
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    source_code_link: "https://github.com/",
    live_demo_link: "#",
  },
  {
    name: "NextAgro – Smart Marketplace",
    description: "A full-stack web platform connecting farmers directly with consumers. Implemented role-based authentication and integrated AI-based crop disease prediction using machine learning for early detection, improving farmers' profitability.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "ai-ml", color: "green-text-gradient" },
      { name: "full-stack", color: "pink-text-gradient" },
    ],
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    source_code_link: "https://github.com/",
    live_demo_link: "#",
  },
  {
    name: "SewMitra",
    description: "Developed a smart platform connecting customers with local tailors and stitching services. Implemented modern responsive frontend using React.js and Tailwind CSS with booking management and clean UI/UX focused on scalability.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
      { name: "frontend", color: "green-text-gradient" },
    ],
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    source_code_link: "https://github.com/",
    live_demo_link: "#",
  },
];
