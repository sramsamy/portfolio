"use client";
import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'
import Image from "next/image";
import introImage from "@/public/meAndBella.jpeg";

export default function About() {
    return (
        <section className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40'>
            <SectionHeading>About Me</SectionHeading>
            <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", duration: 0.7 }}
            className="mt-2 sm:mt-0"
            >
                <Image
                    src={introImage}
                    alt="cartoon photo of me and Bella"
                    width="192"
                    height="192"
                    quality="95"
                    priority={true}
                    className="h-150 w-150 rounded-full object-cover border-[0.35rem] border-white shadow-xl md:mt-12 md:ml-12"
                />
            </motion.div>
            <p>Hello there</p>
            <p></p>

        </section>
    )
}
