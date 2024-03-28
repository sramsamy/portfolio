"use client";
import Image from "next/image";
import introImage from "@/public/meAndBella.jpeg";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { FiGithub, FiLinkedin,FiInstagram } from "react-icons/fi";


export default function Intro() {
    return (
        <section className="mb-28 text-left sm:mb:0 flex flex-col items-center justify-center sm:flex-row">
            <div className="absolute left-0 w-16 hidden lg:flex pl-4 p">
                {/* Social Media Links */}
                <div className="flex flex-col items-center space-y-4">
                    {/* social media icons */}
                    <a href="#" className="text-blue-700 p-2">
                        <FiLinkedin />
                    </a>
                    <a href="#" className="text-blue-700 p-2">
                        <FiGithub />
                    </a>
                    <a href="#" className="text-blue-700 p-2">
                        <FiInstagram />
                    </a>
                </div>
            </div>
            <div className="flex flex-col items-center sm:flex-row">
                
                    <motion.h4 className="mb-10 mt-4 px-4 font-medium !leading-[1.5]"
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    >
                        <p className="text-blue-700 mb-4">Hi, my name is</p>
                        <p className="text-slate-200 font-bold text-5xl mb-4"> Sachin Ramsamy.</p>
                        <p className="text-slate-300 font-bold text-4xl mb-4"> Aspiring full-stack developer.</p>
                        <span className="italic text-slate-300">I'm a student at <span className="text-blue-700">Griffith University</span> who's passion is to bridge<br /> the gap
                        between humans and technology by designing<br /> and developing  user friendly and intuitive apps.
                        </span>

                        <motion.div className="flex items-center sm:flex-row gap-2 text-s font-medium"
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}>
                            <Link href="#contact" className="group mt-4 flex items-center border border-white rounded-md text-white px-4 py-3 gap-2 outline-none focus:scale-110 hover:scale-110 hover:bg-slate-900 active:scale-105 transition">
                                Contact me <BsArrowRight className="opacity-70 group-hover:translate-x-1" />
                            </Link>
                            <a href="/Cirriculum Vitae of Sachin Ramsamy.pdf" download className="group mt-4 flex items-center text-blue-700 border border-blue-700 rounded-md px-4 py-3 gap-2 outline-none focus:scale-110 hover:scale-110 hover:bg-slate-900 active:scale-105 transition ">Resume <HiDownload className="opacity-70 group-hover:translate-y-1 transition" /></a>
                        </motion.div>
                    </motion.h4>

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
                            className="h-150 w-150 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
                        />
                    </motion.div>
            </div>
        </section>
    )
}