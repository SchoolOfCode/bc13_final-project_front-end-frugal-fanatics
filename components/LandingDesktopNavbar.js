/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import React from "react";
import Image from "next/image";

const LandingDesktopNavbar = () => {
	return (
		<nav className="sticky top-0 z-50 hidden flex-wrap items-center justify-between border-b border-[#373C51] bg-[#1A1E2C] bg-opacity-70 p-6 pl-8 pr-8 bg-blur-xl md:flex">
			<a href="/">
				<Image src="logo.svg" alt="Logo" height="32" width="157" />
			</a>
		</nav>
	);
	z;
};

export default LandingDesktopNavbar;
