import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import agriStorageImage from "@/public/agri.png";
import portfolioImage from "@/public/portfolio.png";
import workIntegratedLearningImage from "@/public/wil.png";
import dataVisualiser from "@/public/dataVisualiser.png";
import dataVisualiser1 from "@/public/dataVisualiser1.png";
import formulaOneImage from "@/public/f1.png";
import gymAppImage from "@/public/gymapp.png";
// import fakeStoreAppImage from "@/public/fakeStoreApp.png"
import fakeStoreAppImage1 from "@/public/fakeStoreApp1.png";
import ibm from "@/public/ibm.png";
import chat from "@/public/chat.png";

export const links = [
	{
		name: "Home",
		hash: "#home",
		num: 0,
	},
	{
		name: "About",
		hash: "#about",
		num: 1,
	},
	{
		name: "Projects",
		hash: "#projects",
		num: 2,
	},
	{
		name: "Skills",
		hash: "#skills",
		num: 3,
	},
	{
		name: "Experience",
		hash: "#experience",
		num: 4,
	},
	{
		name: "Contact",
		hash: "#contact",
		num: 5,
	},
] as const;

export const eeducationData = [
	{
		qualification: "Bachlor of Information Technology",
		location: "Griffith University",
		major: "Software Development",
		icon: React.createElement(LuGraduationCap),
		date: "2023 - 2024",
		gpa: "6.88",
	},
	{
		qualification: "Diploma of Information Technology",
		location: "Griffith College",
		major: "",
		icon: React.createElement(CgWorkAlt),
		date: "2022 - 2023",
		gpa: "6.88",
	},
	{
		qualification: "Higher School Education",
		location: "Moree Secondary College",
		description: "2nd in Chemistry & Biology",
		icon: React.createElement(FaReact),
		date: "",
		gpa: "",
	},
] as const;
export const experiencesData = [
	{
		title: "Software Developer Intern @ IBM",
		location: "Gold Coast, QLD",
		description:
			"Collobrated with a team of specialised security software engineers and developed an open-source passkey browser extension capable of performing FIDO2 registration and authentication ceremonies at supprting relying parties.",
		icon: React.createElement(CgWorkAlt),
		date: "Jun 2024 - Oct 2024",
	},
	{
		title: "Full-Stack Developer @ Agri-Storage & Logistics",
		location: "Gold Coast, QLD",
		description:
			"Designed and developed a fully functional booking management system for a key player in the agri-cultural sector",
		icon: React.createElement(CgWorkAlt),
		date: "Dec 2023 - Present",
	},
	{
		title: "Bachelor of Information Technology",
		location: "Griffith Universtiy, Gold Coast, QLD",
		description: "Software Development | GPA: 6.88",
		icon: React.createElement(LuGraduationCap),
		date: "Mar 2022 - Oct 2024",
	},
	{
		title: "Pharmacy Assistant @ TerryWhite Chemmart",
		location: "Gold Coast, QLD",
		description:
			"Ensured accurate processing of prescriptions and maintained a high level of precision.",
		icon: React.createElement(CgWorkAlt),
		date: "Aug 2023 - Mar 2024",
	},
	{
		title: "Bachelor of Biomedical Science",
		location: "University of New England, NSW",
		description: "",
		icon: React.createElement(LuGraduationCap),
		date: "Feb 2013 - Nov 2016",
	},
	{
		title: "Higher School Education",
		location: "Moree Secondary College, NSW",
		description: "",
		icon: React.createElement(LuGraduationCap),
		date: "Feb 2007 - Nov 2012",
	},
] as const;

export const projectsData = [
	{
		title: "IBM Passkey Browser Extension",
		description:
			"This is an open-source project developed during my placement at IBM which aims to provide passkey support to major vendors such as chromium, firefox and webkit. This browser extension also aims to provide developers/technical sales a tool for demonstrating passkey functionality without using hardware based security keys.",
		tags: ["JavaScript", "FIDO2", "Selenium", "Agile"],
		imageUrl: ibm,
	},
	{
		title: "Truck Booking System",
		description:
			"A booking management system for Agri Storage & Logistics, a prominent player in the agricultural industry spanning across QLD and NSW. I am working as a full-stack developer on this project for the last 4 months.",
		tags: ["PHP", "Laravel", "SQLite3", "Tailwind"],
		imageUrl: agriStorageImage,
	},
	{
		title: "Portfolio Website",
		description: "My personal website built with React, Typescript and Next.js",
		tags: ["React", "TypeScript", "Next.js", "Tailwind"],
		imageUrl: portfolioImage,
	},
	{
		title: "Chat-Byte",
		description:
			"A MEAN stack chat application with real-time messaging, group and channel management, admin roles, user approval, banning, and full CRUD operations.",
		tags: [
			"Angular",
			"Typescript",
			"Bootstrap",
			"MongoDB",
			"NodeJS",
			"Express",
		],
		imageUrl: chat,
	},
	{
		title: "Work Integrated Learning Application",
		description:
			"A web application for allocating students to Work Integrated Learning (WIL) projects. The system allows industry partners (InPs) to advertise projects and students to apply for projects they are interested in.",
		tags: ["PHP", "Laravel", "SQLite3", "Tailwind"],
		imageUrl: workIntegratedLearningImage,
	},
	{
		title: "Crash Statistics Data Visualiser",
		description:
			"Led a team in a data analysis project to visualise and gain insights into the state of Victoria’s Road and crash statistics.",
		tags: ["Python", "Tkinter", "SQLite3", "Pandas", "Unit Testing"],
		imageUrl: dataVisualiser1,
	},
	{
		title: "Fake Store App",
		description:
			"A full stack dynamic e-commerce app designed to simulate a real online shopping experience. Users can log in/sign up and browse a variety of product categories fetched from the Fake Store API, view detailed product information, and manage their shopping carts and orders",
		tags: ["React Native", "JavaScript", "Express.js", "SQLite3"],
		imageUrl: fakeStoreAppImage1,
	},
	// {
	// 	title: "Gym Workout Tracker App",
	// 	description:
	// 		"An app that provides an evidence-based workout routine, accommodating for individuals with busy lifestyles.",
	// 	tags: ["Ionic", "Angular", "Typescript"],
	// 	imageUrl: gymAppImage,
	// },
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
	"Redux",
	"React Native",
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
