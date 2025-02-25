import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import projectPizza from "@/public/projectPizza.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  { name: "Home", hash: "#home" },
  { name: "About", hash: "#about" },
  { name: "Projects", hash: "#projects" },
  { name: "Skills", hash: "#skills" },
  { name: "Experience", hash: "#experience" },
  { name: "Contact", hash: "#contact" },
] as const;

export const experiencesData = [
  {
    title: "Web Developer intern | Ford9 Solutions",
    location: "Mingora, KPK, Pakistan",
    description:
      "Gained hands-on experience with HTML, CSS, and JavaScript, building responsive web pages and improving UI/UX designs. Worked closely with senior developers, learning best practices in clean code, performance optimization, and accessibility. This role laid the foundation for frontend development skills and introduced me to React.",
    icon: React.createElement(CgWorkAlt),
    date: "Jan 2024 - Mar 2024",
  },
  {
    title: "React Developer Intern | CyberVision International",
    location: "Mingora, KPK, Pakistan",
    description:
      "Focused on React development, working on dynamic UI components and integrating APIs. Improved understanding of React hooks, state management, and reusable components. Collaborated with the team to debug issues and optimize application performance, strengthening problem-solving skills.",
    icon: React.createElement(CgWorkAlt),
    date: "Jun 2024 - Jul 2024",
  },
  {
    title: "Frontend Developer Intern | Evamp & Saanga",
    location: "Islamabad, Pakistan",
    description:
      "Deeply involved in building scalable React applications with Redux for state management. Worked on real-world projects, including an e-commerce platform with an admin dashboard, implementing CRUD operations, authentication, and responsive design. This role has enhanced the ability to write clean, maintainable code, collaborate in an agile team, and handle complex frontend challenges.",
    icon: React.createElement(CgWorkAlt),
    date: "Oct 2024 - Feb 2025",
  },
] as const;

export const projectsData = [
  {
    title: "Pizza Ordering App",
    description: `A responsive pizza ordering app using React & Tailwind, featuring customization, real-time cart management, and a smooth, modern UI. 🍕🚀`,
    tags: ["React", "Tailwind",],
    imageUrl: projectPizza,
    link: "https://fastrpizza.vercel.app/",
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
    link: "https://rmtdev.com",
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
    link: "https://wordanalytics.com",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Redux",
  "Next.js",
  "Git",
  "Tailwind",
  "Firebase",
  "Framer Motion",
] as const;
