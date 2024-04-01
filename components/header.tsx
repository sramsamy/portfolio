"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { links } from "@/lib/data";
import Link from 'next/link';
import Image from "next/image";
import logo from "@/public/SR.png";
import clsx from 'clsx';

export default function Header() {

    const [activeSection, setActiveSection] = useState('Home');

    return (
        <header className="z-[999] relative px-4">
            <div className="flex top-0 left-0 h-12 py-2 pl-2 sm:h-[initial] sm:py-0 ">
                <Image 
                width={50}
                height={50}
                src={logo}
                alt='Logo' 
                />
            </div>
            <motion.div className="absolute top-0 right-0 w-full bg-slate-950 bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            >

                <nav className="flex top-0 h-12 py-2 sm:h-[initial] sm:py-0 justify-end">
                    <ul className='flex w-[22rem flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-blue-600 sm:w-[initial sm:flex-nowrap sm:gap-5 mr-5 text-xl'>
                        {links.map(link => (
                            <motion.li
                                className='h-3/4 flex items-center justify-center'
                                key={link.hash}
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                            >
                                <Link
                                    className={clsx('flex w-full items-center justify-center px-2 py-3 hover:text-blue-700 transition ', {
                                    "text-blue-700": activeSection === link.name 
                                    }
                                    )}
                                    href={link.hash}
                                    onClick={() => setActiveSection(link.name)}
                                >
                                    {link.name}
                                </Link>
                            </motion.li>
                        ))}
                    </ul>
                </nav>
            </motion.div>
        </header>
    )
}
