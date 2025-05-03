export const BaseInfo = {
  name: "Krushit",
  position: "Flutter Developer",
  description:
    "Passionate Flutter Developer with expertise in building dynamic, responsive applications. Skilled in Flutter, Dart, and modern web technologies to create seamless user experiences.",
  profilePic: "/images/hero1.jpg",
  resumeURL: "https://docs.google.com/document/d/1Y-Li3KU6WKwSro1LnxqlZyRounG6sUbn-cwqWF_dobk/edit?tab=t.0",
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/krushit-pandav-0b7958226/",
    github: "https://github.com/KrushitPandav",
    instagram: "https://www.instagram.com/krushit_pandav_",
  },
};



export const aboutInfo = {
  title: "Crafting Seamless Mobile Experiences",
  description: `I'm a passionate Flutter Developer with a strong focus on building dynamic, responsive, and visually appealing mobile applications. With expertise in Flutter and Dart, I specialize in creating cross-platform apps that deliver exceptional performance and user experiences.

My approach combines clean code practices with modern design principles, ensuring that every project not only functions flawlessly but also provides an intuitive and engaging user interface.`,
  stats: [
    {
      id: 1,
      value: "6+ months",
      label: "Experience",
      icon: "/images/experience.png"
    },
    {
      id: 2,
      value: "6+",
      label: "Projects Built",
      icon: "/images/completed.png"
    },
    {
      id: 3,
      value: "5+",
      label: "Technologies",
      icon: "/images/tech.png"
    },
    {
      id: 4,
      value: "3+",
      label: "Certifications",
      icon: "/images/certificate.png"
    }
  ]
};


export const projectData = [
  {
    "id": 1,
    "title": "Smart Meeting Scheduler",
    "description": "A modern, SEO-friendly meeting scheduler that allows users to share their availability through a personalized meeting page. Clients can request meetings based on available time slots. The platform integrates with Google Calendar and Google Meet for seamless scheduling. Built with Next.js, Prisma (Neon DB - PostgreSQL), and Clerk for authentication, it offers a smooth user experience with a clean UI powered by Tailwind CSS.",
    "image": "/images/meeting-scheduler.png",
    "techStack": ["Next.js", "JavaScript", "Prisma", "PostgreSQL (Neon DB)", "Clerk Auth", "Google Calendar API", "Google Meet API", "Tailwind CSS"],
    "liveUrl": "https://calendly-psi.vercel.app/",
    "githubUrl": "https://github.com/Jenesh18/calendly"
  },
  {
    "id": 2,
    "title": "YouTube Inspired Streaming App",
    "description": "A sleek and ad-free YouTube-inspired video streaming app built with React and Material UI. Users can search for videos, explore YouTube stats, view channel details, and watch videos without interruptions. The app fetches real-time data from Rapid API, providing a seamless video-watching experience with a modern UI.",
    "image": "/images/youtube.png",
    "techStack": ["React", "Material UI", "Rapid API", "YouTube Data API", "Netlify"],
    "liveUrl": "https://jeneshtube.netlify.app/",
    "githubUrl": "https://github.com/Jenesh18/youtube-clone-react"
  },  
  {
    "id": 3,
    "title": "Personal Developer Portfolio",
    "description": "A modern and visually appealing portfolio website showcasing my skills, projects, and professional experience. Built with Next.js, Tailwind CSS, and TypeScript, it offers a smooth user experience with fast performance and SEO optimization. The site includes a blog section, interactive UI elements, and a fully responsive design, ensuring accessibility across all devices.",
    "image": "/images/og-image.png",
    "techStack": ["Next.js", "Tailwind CSS", "TypeScript", "Vercel"],
    "liveUrl": "https://jenesh-portfolio.vercel.app/",
    "githubUrl": "https://github.com/Jenesh18/portfolio"
  },  
  {
    "id": 4,
    "title": "GraphQL Expense Tracker",
    "description": "A full-stack expense tracker built with the MERN stack, using GraphQL for efficient data fetching. The app allows users to register, log in, and track their expenses with interactive graphs and insights. This project was created to practice GraphQL in both frontend and backend development, ensuring a smooth and scalable API design.",
    "image": "/images/graphql-expense-tracker.png",
    "techStack": ["MongoDB", "Express.js", "React", "Node.js", "GraphQL", "Apollo Client", "Chart.js"],
    "liveUrl": "",
    "githubUrl": "https://github.com/Jenesh18/graphql-expense-tracker"
  },  
  {
    "id": 5,
    "title": "MERN Stack Chat App",
    "description": "A real-time chat application built with the MERN stack, featuring user authentication, single and group chats, and advanced group management. Users can create and manage chat groups, add or remove members, edit group profiles, and share images, all stored securely using Cloudinary. The app ensures seamless communication with WebSocket-based real-time messaging.",
    "image": "/images/chat-app.png",
    "techStack": ["MongoDB", "Express.js", "React", "Node.js", "Socket.io", "Cloudinary", "JWT Authentication"],
    "liveUrl": "",
    "githubUrl": "https://github.com/Jenesh18/MERN-stack-chat-app"
  },  
  {
    "id": 6,
    "title": "React.js Job Portal",
    "description": "A feature-rich job portal built with React.js, designed for both recruiters and job seekers. The platform includes two separate logins: one for candidates and one for employers. Candidates can upload resumes, browse job listings, and apply for positions, while recruiters can create companies, post job openings, and manage applications. Built with Supabase for the database, Clerk for authentication, and Tailwind CSS for styling, the app ensures a seamless user experience with Zod validation for secure and structured form handling.",
    "image": "/images/job-portal.png",
    "techStack": ["React.js", "Supabase", "Clerk", "Tailwind CSS", "Zod Validation"],
    "liveUrl": "",
    "githubUrl": "https://github.com/Jenesh18/job_portal"
  },
  {
    "id": 7,
    "title": "Node.js WhatsApp Bot with Meta API",
    "description": "An automated WhatsApp bot built using Node.js and the Meta WhatsApp Cloud API, designed to handle auto-replies and streamline communication. This bot enables businesses and individuals to set up automated responses, manage incoming messages, and integrate with external services for a seamless chat experience. It features message handling, dynamic response customization, and webhook integration for real-time updates.",
    "image": "/images/whatsapp-bot.jpg",
    "techStack": ["Node.js", "WhatsApp Cloud API", "Express.js", "Webhook"],
    "liveUrl": "",
    "githubUrl": "https://github.com/Jenesh18/whatsapp-bot-meta-api"
  }  

];

export const skillsData = [
  {
    id: 1,
    title: "Dart",
    image: "/images/dart.png",
  },
  {
    id: 2,
    title: "Java",
    image: "/images/java.png",
  },
  {
    id: 5,
    title: "HTML",
    image: "/images/html.png",
  },
  {
    id: 11,
    title: "CSS",
    image: "/images/css.png",
  },
  {
    id: 6,
    title: "Flutter",
    image: "/images/flutter.png",
  },
  {
    id: 14,
    title: "Firebase",
    image: "/images/firebase.png",
  },
  {
    id: 7,
    title: "Rest APIs",
    image: "/images/api.jpg",
  },
  {
    id: 8,
    title: "Figma",
    image: "/images/figma.jpg",
  },
  {
  ",
    image: "/images/android.png",
  },
  {
    id: 17,
    title: "Material Design",
    image: "/images/mu.png",
  },
  {
    id: 13,
    title: "Git & GitHub",
    image: "/images/git.png",
  },

];



export const contactData = {
  phone: "+91 8469277603",
  email: "krushitpandav089@gmail.com",
  address: "Surat , India",
};

export const experienceData = [
  {
    id: 2,
    role: "Flutter Intern",
    company: "softions",
    website: "https://softieons.com/",
    duration: "DEC 2023 - MAY 2024",
    location: "Surat, India",
    description: "Gained hands-on experience in flutter development and industry best practices.",
    highlights: [
      "Quickly completed internship with fast learning.",
      "Worked on real-world Flutter projects.",
      "Integrated APIs for better app functionality.",
      "Learned industry best practices."
    ],
    technologies: ["Flutter", "Dart", "Firebase", "REST APIs"],
  }
];


