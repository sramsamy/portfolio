"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import Image from "next/image";
import introImage from "@/public/meAndBella.jpeg";
import profileImage from "@/public/profileImage.png";
import imageOfMe from "@/public/imageOfMe.png";
import { GiTriangleTarget } from "react-icons/gi";
import { recentTechs } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
	const { ref } = useSectionInView("About");

	return (
		<motion.section
			ref={ref}
			className="px-4 mb-14 md:px-[12rem] py-8 md:py-0 md:mb-40 leading-8 text-center md:text-left scroll-mt-28 "
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.175 }}
			id="about"
		>
			<div className="flex items-center gap-4 text-center">
				<h1 className="text-blue-600 text-2xl mb-8">01.</h1>
				<SectionHeading>About me</SectionHeading>
			</div>
			<div className="flex flex-col md:flex-row justify-center md:justify-start gap-8 md:mt-4">
				<div className="md:w-[60%] text-left text-l">
					<p className="mb-3">
						After studying a degree in{" "}
						<span className="font-medium">Biomedical Science</span>, I later
						discovered that my true passion lay in software development. So, I
						enrolled in a Bachelor of IT and fell in love with{" "}
						<span className="font-medium text-blue-600">building software</span>
						. <span className="">My favourite part of programming</span> is the
						joy I feel when seeing others interact with something I've built. I
						also <span className=" text-blue-600">love</span> the feeling of
						finally figuring out a solution to a problem.
						<br />
						<br /> My core stack is{" "}
						<span className="font-medium text-blue-600">
							Larvel, PHP & SQlite{" "}
						</span>
						and I'm also familiar with React, Node.js, and MongoDB.
						I'm always looking to learn new technologies and I am currently
						looking for a{" "}
						<span className="font-medium">full-time position</span> as a
						software developer.
					</p>
					<p className="">
						<span className="">When I'm not coding</span>, I enjoy cooking,
						playing golf, watching F1, and playing with my dog. I also enjoy{" "}
						<span className="font-medium">learning new things</span> and I'm
						currently learning how{" "}
						<span className="font-medium">to play the guitar</span>.
					</p>
					<br />
					<p>Here are some recent technologies I've been working with:</p>
					<div className="mt-6">
						<ul className="grid grid-cols-2 md:grid-cols-2 gap-2">
							{recentTechs.map((recentTech, index) => (
								<li key={index} className="flex items-center text-sm">
									<GiTriangleTarget className="text-blue-600 rotate-90 mr-2 text-xs" />
									<span>{recentTech}</span>
								</li>
							))}
						</ul>
					</div>
				</div>
				<div className="md:ml-8 md:w-1/3 relative">
					<div id="box" className="relative rounded-xl  overflow-hidden">
						<Image src={introImage} alt="Me and Bella" />
						<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-blue-700 to-transparent opacity-50"></div>
						<div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-r from-blue-700 to-transparent opacity-50"></div>
					</div>
				</div>
			</div>
		</motion.section>
	);
}
