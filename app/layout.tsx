import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer";
import StarsCanvas from "@/components/starBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Sachin Ramsamy",
	description:
		"Sachin is an aspiring full-stack developer and IT student at Griffith University.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className="!scroll-smooth">
			<body
				className={`${inter.className} bg-slate-950 text-slate-200 relative p-8`}
			>
				<ActiveSectionContextProvider>
					<Header />
					<Toaster position="bottom-center" />
					{children}
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
			</body>
		</html>
	);
}
