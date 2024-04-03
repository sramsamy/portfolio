"use client";

import React from "react";
import "../public/css/styles.css";
import SectionHeading from "./section-heading";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

export default function Experience() {

	const { ref } = useSectionInView("Experience");

	return (
		<section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
			<div className="flex items-center gap-4 text-center mb-28">
				<h1 className="text-[#e0fd27] text-3xl mb-8">04.</h1>
				<SectionHeading>Experience</SectionHeading>
			</div>
			<VerticalTimeline lineColor="" className="">
				{experiencesData.map((experienceItem, index) => (
					<React.Fragment key={index}>
						<VerticalTimelineElement
							visible={true}
							contentStyle={{
								backgroundColor: "#020617",
								boxShadow: "none",
								border: "1px solid rgba(0, 0, 0, 0.05)",
								textAlign: "left",
								padding: "1.3rem 2rem",
							}}
							contentArrowStyle={{
								borderRight: "0.4rem solid rgb(224,253,39)",
							}}
							dateClassName="custom-date"
							date={experienceItem.date}
							icon={experienceItem.icon}
							iconStyle={{
								background: "#020617",
								color: "#2563eb",
								fontSize: "1.5rem",
							}}
						>
							<h3 className="font-semibold capitalize text-blue-600">
								{experienceItem.title}
							</h3>
							<p className="font-normal !mt-0 text-slate-300">
								{experienceItem.location}
							</p>
							<p className="!mt-1 !font-normal text-slate-300">
								{experienceItem.description}
							</p>
						</VerticalTimelineElement>
					</React.Fragment>
				))}
			</VerticalTimeline>
		</section>
	);
}
