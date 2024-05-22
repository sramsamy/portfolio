"use client"
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer";
import StarsCanvas from "@/components/starBackground";
import { Open_Sans } from "next/font/google";
import SplashScreen from "@/components/splash-screen";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/react";

const open_Sans = Open_Sans({ subsets: ["latin"] });


// export const metadata = {
// 	title: "Sachin Ramsamy",
// 	description:
// 		"Sachin is an aspiring full-stack developer and IT student at Griffith University.",
// };

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const pathname = usePathname();
	const isHome = pathname === "/";
	const [isLoading, setIsLoading] = useState(isHome);

	useEffect(() => {
		if (isLoading) return;
	}, [isLoading]);
	return (
		<html lang="en" className="!scroll-smooth">
			<body
				className={`${open_Sans.className} bg-slate-950 text-slate-200 relative p-8`}
			>
				{isLoading && isHome ? (
					<SplashScreen finishLoading={() => setIsLoading(false)} />
				) : (
					<ActiveSectionContextProvider>
						<Header />
						<Toaster position="bottom-center" />
						{children}
						<Analytics />
						<Footer />
						<div
							style={{
								position: "absolute",
								zIndex: -1,
								top: 0,
								left: 0,
								right: 0,
								bottom: 0,
							}}
						>
							<StarsCanvas />
						</div>
					</ActiveSectionContextProvider>
				)}
			</body>
		</html>
	);
}
