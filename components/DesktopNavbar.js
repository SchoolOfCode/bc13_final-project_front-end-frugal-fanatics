/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import React from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Image from "next/image";

const DesktopNavbar = () => {
	return (
		<nav className="sticky top-0 z-50 hidden flex-wrap items-center justify-between border-b border-slate-200 bg-white p-6 pl-8 pr-8 lg:flex">
			<a href="/">
				<Image src="next.svg" alt="Logo" height="32" width="157" />
			</a>
			<Bars3Icon className="h-8 w-8" />
		</nav>
	);
};

export default DesktopNavbar;
