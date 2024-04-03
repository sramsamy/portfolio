"use client";
import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import Image from "next/image";
import introImage from "@/public/meAndBella.jpeg";
import { GiTriangleTarget } from "react-icons/gi";
import { recentTechs } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';



export default function About() {

    const {ref} = useSectionInView('About');

    return (    
        <motion.section
            ref={ref}
            className="pl-28 h-screen sm:mb-0 max-w-[80rem] leading-8 text-center scroll-mt-23 scroll-mt-28"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id="about"
        >
            <SectionHeading>About me</SectionHeading>
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-8">
                <div className="md:w-[50%] text-left text-xl">
                    <p className="mb-3">
                        After studying a degree in{" "}
                        <span className="font-medium">Biomedical Science</span>, I decided to pursue my
                        passion for programming. I enrolled in and a Bachelor of IT and fell in love{" "}
                        <span className="font-medium text-blue-600">with web development</span>.{" "}
                        <span className="italic">My favorite part of programming</span> is the
                        problem-solving aspect. <br /><br /> I <span className="underline text-blue-600">love</span> the
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
                    <p className=''>
                        <span className="italic">When I'm not coding</span>, I enjoy cooking, playing
                        golf, watching F1, and playing with my dog. I also enjoy{" "}
                        <span className="font-medium">learning new things</span> and I am currently
                        learning how{" "}
                        <span className="font-medium">to play the guitar</span>.
                    </p>
                    <br />
                    <p>Here are some recent technologies I've been working with:</p>
                    <div className='mt-10'>
                    <ul className="grid grid-cols-2 md:grid-cols-2 gap-2">
                        {recentTechs.map((recentTech, index) => (
                            <li key={index} className="flex items-center">
                                <GiTriangleTarget className='text-blue-700 rotate-90 mr-2' />
                                <span>{recentTech}</span>
                            </li>
                        ))}
                    </ul>
                    </div>
                </div>
                <div className="md:w-1/3 relative">
                    <div id='box' className="relative rounded-xl border-2 border-blue-700 overflow-hidden">
                        <Image src={introImage} alt="Me and Bella" />
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-blue-700 to-transparent opacity-50"></div>
                        <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-r from-blue-700 to-transparent opacity-50"></div>
                    </div>
                    
                </div>
            </div>

        </motion.section>
    );
}
