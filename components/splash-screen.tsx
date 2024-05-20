import React, { useEffect, useState } from "react";
import Image from "next/image";
import anime from 'animejs';
import logo from "@/public/SR.png";

interface SplashScreenProps {
    finishLoading: ()=>void
}

const SplashScreen: React.FC<SplashScreenProps> = ({ finishLoading }) => {
	const [isMounted, setIsMounted] = useState(false);

    useEffect(()=>{
        const timeout = setTimeout(() => setIsMounted(true), 10);
        animate();
        return ()=>clearTimeout(timeout)
    },[])

    const animate = () => {
			const loader = anime.timeline({
				complete: () => finishLoading(),
			});
			loader
				.add({
					targets: "#logo",
					delay: 0,
					scale: 1,
					duration: 500,
					easing: "easeInOutExpo",
				})
				.add({
					targets: "#logo",
					delay: 0,
					scale: 1.25,
					duration: 500,
					easing: "easeInOutExpo",
				})
				.add({
					targets: "#logo",
					delay: 0,
					scale: 1,
					duration: 500,
					easing: "easeInOutExpo",
				})
				.add({
					targets: "#logo",
					delay: 0,
					scale: 1.25,
					duration: 500,
					easing: "easeInOutExpo",
				});
		};

	return (
		<div
			className="flex h-screen items-center justify-center"
		>
			
            <Image id="logo" src={logo} width={80} height={80} alt=""/>
		</div>
	);
};
export default SplashScreen;
