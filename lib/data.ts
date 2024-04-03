import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import agriStorageImage from "@/public/agri.png";
import portfolioImage from "@/public/portfolio.png";
import workIntegratedLearningImage from "@/public/wil.png";
import formulaOneImage from "@/public/f1.png";
import gymAppImage from "@/public/gym2.png";

export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Education",
        hash: "#education",
    },
    {
        name: "Experience",
        hash: "#experience",
    },
] as const;

export const eeducationData = [
    {
        qualification: "Bachlor of Information Technology",
        location: "Griffith University",
        major:"Software Development",
        icon: React.createElement(LuGraduationCap),
        date: "2023 - 2024",
        gpa: "6.88"
    },
    {
        qualification: "Diploma of Information Technology",
        location: "Griffith College",
        major: "",
        icon: React.createElement(CgWorkAlt),
        date: "2022 - 2023",
        gpa: "6.88"
    },
    {
        qualification: "Higher School Education",
        location: "Moree Secondary College",
        description:
            "2nd in Chemistry & Biology",
        icon: React.createElement(FaReact),
        date: "",
        gpa: ""
    },
] as const;
export const experiencesData = [
    {
        title: "Software Developer @ Agri-Storage & Logistics",
        location: "Gold Coast, QLD",
        description:
            "I Designed and devloped a fully functional booking management system for a key player in the agri-cultural sector",
        icon: React.createElement(LuGraduationCap),
        date: "Nov 2024 - Present",
    },
    {
        title: "Software Developer Intern @",
        location: "Gold Coast, QLD",
        description: "Work Integrated Leearning (WIL)",
        icon: React.createElement(CgWorkAlt),
        date: "Jun 2024 - Oct 2024",
    },
    {
        title: "Pharmacy Assistant @ TeryyWhite Chemmart",
        location: "Gold Coast, QLD",
        description:
            "Ensured accurate processing of prescriptions and maintained a high level of precision.",
        icon: React.createElement(FaReact),
        date: "Aug 2023 - Marc 2024",
    },
] as const;

export const projectsData = [
    {
        title: "Truck Booking System",
        description:
            "A booking management system for Agri Storage and Logistics, a prominent player in the agricultural industry spanning across QLD and NSW. I am working as a full-stack developer on this project for the last 4 months.",
        tags: ["PHP", "Laravel", "SQLite3", "Tailwind"],
        imageUrl: agriStorageImage,
    },
    {
        title: "Portfolio Website",
        description:
        "My personal website built with React, Typescipt and Next.js",
        tags: ["React", "TypeScript", "Next.js", "Tailwind"],
        imageUrl: portfolioImage,
    },
    {
        title: "F1 Schedule",
        description:
            "A web application leverages various web APIs to access real-time data, enabling users to access the latest news, upcoming race schedules, driver championship standings, and delve into the rich history of the sport.",
        tags: ["Javascript", "HTML", "CSS"],
        imageUrl: formulaOneImage,
    },
    {
        title: "Work Integrated Learning Application",
        description:
            "A web application for allocating students to Work Integrated Learning (WIL) projects. The system allows industry partners (InPs) to advertise projects and students to apply for projects they are interested in.",
        tags: ["PHP", "Laravel", "SQLite3", "Tailwind"],
        imageUrl: workIntegratedLearningImage,
    },
    {
        title: "Gym Workout Tracker App",
        description:
            "An app that provides an evidence-based workout routine that accommodates for individuals with busy lifestyles.",
        tags: ["Ionic", "Angular", "Typescript"],
        imageUrl: gymAppImage,
    },
] as const;

export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Git",
    "Tailwind",
    "MongoDB",
    "Python",
    "Laravel",
    "PHP",
    "Angular",
    "Ionic",
    "Framer Motion",
] as const;

export const recentTechs = [
    "JavaScript (ES6+)",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind",
    "Laravel",
    "PHP",
    "Framer Motion",
] as const;