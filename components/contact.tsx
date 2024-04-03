"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import { useFormStatus } from "react-dom";
import SubmitButton from "./submit-button";
import toast from "react-hot-toast";

export default function Contact() {
	const { ref } = useSectionInView("Contact");

	return (
		<motion.section
			id="contact"
			ref={ref}
			className="mb-20 sm:mb-28 w-[min(100%, 38rem)] text-center"
			initial={{
				opacity: 0,
			}}
			whileInView={{
				opacity: 1,
			}}
			transition={{
				duration: 1,
			}}
			viewport={{
				once: true,
			}}
		>
			<div className="flex items-center gap-4 text-center">
				<h1 className="text-[#e0fd27] text-3xl mb-8">01.</h1>
				<SectionHeading>Contact Me</SectionHeading>
			</div>
			<p className="text-slate-400 -mt-5">
				Please contact me directly at{" "}
				<a className="underline" href="mailto:">
					sachin_drz125@hotmail.com
				</a>{" "}
				or through the form below.
			</p>
			<form
				className="mt-10 flex flex-col"
				action={async (formData) => {
					const { data, error } = await sendEmail(formData);
					if (error) {
						toast.error(error);
						return;
					}
					toast.success("Email sent successfully");
				}}
			>
				<input
					placeholder="Your email"
					type="email"
					name="senderEmail"
					required
					maxLength={500}
					className="h-14 rounded-lg border border-black/10 px-4 text-slate-950"
				/>
				<textarea
					placeholder="Your Message"
					name="message"
					className="h-52 my-3 rounded-lg border border-black/10 p-4 text-slate-950"
					required
					maxLength={5000}
				></textarea>
				<SubmitButton />
			</form>
		</motion.section>
	);
}
