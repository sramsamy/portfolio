"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/SR.png";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";

const svgVariants = {
	hidden: { rotate: -180 },
	visible: {
		rotate: 0,
		transition: { duration: 1 },
	},
};

const pathVariants = {
	hidden: {
		opacity: 0,
		pathLength: 0,
	},
	visible: {
		opacity: 1,
		pathLength: 1,
		transition: {
			duration: 2,
			ease: "easeInOut",
		},
	},
};

export default function Header() {
	const { activeSection, setActiveSection, setTimeOfLastClick } =
		useActiveSectionContext();

	return (
		<header className="z-[999] relative px-4">
			<motion.div
				className="sm:flex top-0 left-0 h-12 py-2 pl-2 sm:h-[initial] sm:py-0 hidden"
				initial={{ y: -100, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
			>
				<a
					href="/"
					className="logo-container focus:scale-110 hover:scale-110 hover:text-blue-600 hover:border-blue-500 hover:bg-black active:scale-105 transition"
				>
					{/* <Image width={50} height={50} src={logo} alt="Logo" /> */}
					<motion.svg
						variants={svgVariants}
						initial="hidden"
						animate="visible"
						width="50"
						height="50"
						viewBox="0 0 368 328"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<line
							x1="6.54781"
							y1="166.176"
							x2="102.548"
							y2="4.17648"
							stroke="#2563EB"
							stroke-width="15"
						/>
						<motion.path
							variants={pathVariants}
							d="M96 8H272"
							stroke="#2563EB"
							stroke-width="15"
						/>
						<motion.path
							variants={pathVariants}
							d="M96 320H272"
							stroke="#2563EB"
							stroke-width="15"
						/>
						<line
							x1="266.491"
							y1="4.24264"
							x2="360.83"
							y2="167.216"
							stroke="#2563EB"
							stroke-width="15"
						/>
						<line
							x1="360.23"
							y1="161.814"
							x2="264.458"
							y2="323.949"
							stroke="#2563EB"
							stroke-width="15"
						/>
						<line
							x1="101.611"
							y1="323.326"
							x2="6.52634"
							y2="160.787"
							stroke="#2563EB"
							stroke-width="15"
						/>
						<motion.path
							variants={pathVariants}
							d="M159.727 128.727C159.045 122.97 156.28 118.5 151.432 115.318C146.583 112.136 140.636 110.545 133.591 110.545C128.439 110.545 123.932 111.379 120.068 113.045C116.242 114.712 113.25 117.004 111.091 119.92C108.97 122.837 107.909 126.152 107.909 129.864C107.909 132.97 108.648 135.64 110.125 137.875C111.64 140.072 113.572 141.909 115.92 143.386C118.269 144.826 120.731 146.019 123.307 146.966C125.883 147.875 128.25 148.614 130.409 149.182L142.227 152.364C145.258 153.159 148.629 154.258 152.341 155.659C156.091 157.061 159.67 158.973 163.08 161.398C166.527 163.784 169.367 166.852 171.602 170.602C173.837 174.352 174.955 178.955 174.955 184.409C174.955 190.697 173.307 196.379 170.011 201.455C166.754 206.53 161.981 210.564 155.693 213.557C149.443 216.549 141.848 218.045 132.909 218.045C124.576 218.045 117.36 216.701 111.261 214.011C105.201 211.322 100.428 207.572 96.9432 202.761C93.4962 197.951 91.5455 192.364 91.0909 186H105.636C106.015 190.394 107.492 194.03 110.068 196.909C112.682 199.75 115.977 201.871 119.955 203.273C123.97 204.636 128.288 205.318 132.909 205.318C138.288 205.318 143.117 204.447 147.398 202.705C151.678 200.924 155.068 198.462 157.568 195.318C160.068 192.136 161.318 188.424 161.318 184.182C161.318 180.318 160.239 177.174 158.08 174.75C155.92 172.326 153.08 170.356 149.557 168.841C146.034 167.326 142.227 166 138.136 164.864L123.818 160.773C114.727 158.159 107.53 154.428 102.227 149.58C96.9242 144.731 94.2727 138.386 94.2727 130.545C94.2727 124.03 96.0341 118.348 99.5568 113.5C103.117 108.614 107.89 104.826 113.875 102.136C119.898 99.4091 126.621 98.0454 134.045 98.0454C141.545 98.0454 148.212 99.3901 154.045 102.08C159.879 104.731 164.5 108.367 167.909 112.989C171.356 117.61 173.174 122.856 173.364 128.727H159.727Z"
							fill="#2563EB"
						/>
						<motion.path
							variants={pathVariants}
							d="M198.091 216V99.6364H237.409C246.5 99.6364 253.962 101.189 259.795 104.295C265.629 107.364 269.947 111.587 272.75 116.966C275.553 122.345 276.955 128.462 276.955 135.318C276.955 142.174 275.553 148.254 272.75 153.557C269.947 158.86 265.648 163.027 259.852 166.057C254.057 169.049 246.652 170.545 237.636 170.545H205.818V157.818H237.182C243.394 157.818 248.394 156.909 252.182 155.091C256.008 153.273 258.773 150.697 260.477 147.364C262.22 143.992 263.091 139.977 263.091 135.318C263.091 130.659 262.22 126.587 260.477 123.102C258.735 119.617 255.951 116.928 252.125 115.034C248.299 113.102 243.242 112.136 236.955 112.136H212.182V216H198.091ZM252.864 163.727L281.5 216H265.136L236.955 163.727H252.864Z"
							fill="#2563EB"
						/>
					</motion.svg>
				</a>
			</motion.div>
			<motion.div
				className="mt-6 fixed top-0 justify-end right-0 w-full bg-slate-950 bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:h-[3.25rem] sm:w-[42rem] sm:rounded-full"
				initial={{ y: -100, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
			>
				<nav className=" flex fixed top-0 h-12 py-2 sm:h-[initial] sm:py-0 justify-end">
					<ul className="flex w-[22rem flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-slate-400 sm:w-[initial sm:flex-nowrap sm:gap-5 mr-5 text-base">
						{links.map((link) => (
							<motion.li
								className="h-3/4 flex items-center justify-center relative"
								key={link.hash}
								initial={{ y: -100, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
							>
								<Link
									className={clsx(
										"flex w-full items-center justify-center px-2 py-3 hover:text-blue-600 transition gap-2",
										{
											"text-blue-600": activeSection === link.name,
										}
									)}
									href={link.hash}
									onClick={() => {
										setActiveSection(link.name);
										setTimeOfLastClick(Date.now());
									}}
								>
									<span className="text-blue-600">0{link.num}.</span>
									{link.name}
									{link.name === activeSection && (
										<motion.span
											className="bg-slate-900 rounded-full absolute inset-0 -z-10"
											layoutId="activeSection"
											transition={{
												type: "spring",
												stiffness: 380,
												damping: 30,
											}}
										></motion.span>
									)}
								</Link>
							</motion.li>
						))}
					</ul>
				</nav>
			</motion.div>
		</header>
	);
}
