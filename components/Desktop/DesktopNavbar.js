/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import React from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Image from "next/image";

const DesktopNavbar = () => {
	return (
		<nav className="sticky top-0 z-50 hidden flex-wrap items-center justify-between border-b border-[#373C51] bg-[#1A1E2C] p-6 pl-8 pr-8 lg:flex">
			<a href="/">
				<Image src="logo.svg" alt="Logo" height="32" width="157" />
			</a>
			<Bars3Icon className="h-8 w-8 stroke-[#8A8A9C]" />
		</nav>
	);
};

export default DesktopNavbar;
