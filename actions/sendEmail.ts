"use server";
import { Resend } from "resend";
import { validateString } from "@/lib/utils";
import { getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/public/email/contact-form-email";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
	const message = formData.get("message");
	const senderEmail = formData.get("senderEmail");

	// server side validation
	if (!validateString(senderEmail, 500)) {
		return {
			error: "Invalid sender email",
		};
	}

	if (!validateString(message, 5000)) {
		return {
			error: "Invalid sender email",
		};
	}

	let data;

	try {
		await resend.emails.send({
			from: "Contact Form <onboarding@resend.dev>",
			to: "sachin_drz125@hotmail.com",
			subject: "Message from Contact Form",
			reply_to: senderEmail as string,
			react: React.createElement(ContactFormEmail, {
				message: message as string,
				senderEmail: senderEmail as string,
			}),
		});
	} catch (error: unknown) {
		return {
			error: getErrorMessage(error),
		};
	}

	return {
		data,
	};
};
