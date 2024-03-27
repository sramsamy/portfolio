"use client";
import Image from "next/image";
import introImage from "@/public/meAndBella.jpeg";
import { motion } from "framer-motion";


export default function Intro() {
    return (
        <section className="mb-28 text-left sm:mb:0 flex flex-col items-center justify-center sm:flex-row">
                <p className="mb-10 mt-4 px-4 font-medium !leading-[1.5]">
                    <span className="text-blue-700 ">Hi, my name is <br /><span className="text-slate-200 font-bold text-5xl"> Sachin Ramsamy.</span></span><br />
                    <span className="text-slate-300 font-bold text-4xl"> Aspiring full-stack developer.</span><br />
                    <span className="italic text-slate-300">I'm a university student at <span className="text-blue-700">Griffith Univerity</span> who's passion is to <br /> bridge the gap 
                    between humans and technology by designing<br /> and developing  user friendly and intuitive apps.
                    </span>
                </p>
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
        </section>
    )
}