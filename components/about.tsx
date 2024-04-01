"use client";
import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'
import Image from "next/image";
import introImage from "@/public/meAndBella.jpeg";

export default function About() {
    return (

        <motion.section
        className="mb-28 max-w-[45rem] leading-8 text-center sm:mb-40 scroll-mt-23 scroll-mt-28"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
        id="about"
        >
            <SectionHeading>About me</SectionHeading>
            <p className="mb-3">
                After studying a degree in{" "}
                <span className="font-medium">Biomedical Science</span>, I decided to pursue my
                passion for programming. I enrolled in and a Bachelor of IT and fell in love{" "}
                <span className="font-medium text-blue-600">with web development</span>.{" "}
                <span className="italic">My favorite part of programming</span> is the
                problem-solving aspect. I <span className="underline text-blue-600">love</span> the
                feeling of finally figuring out a solution to a problem. My core stack
                is{" "}
                <span className="font-medium text-blue-600">
                    React, Next.js, Node.js, and MongoDB
                </span>
                . I am also familiar with Laravel and PHP. I am always looking to
                learn new technologies. I am currently looking for a{" "}
                <span className="font-medium">full-time position</span> as a software
                developer.
                </p>

                <p>
                <span className="italic">When I'm not coding</span>, I enjoy playing
                golf, watching F1, and playing with my dog. I also enjoy{" "}
                <span className="font-medium">learning new things</span>. I am currently
                learning how{" "}
                <span className="font-medium">to play the guitar</span>. I also
                love to cook.
                </p>
    </motion.section>
    );
}