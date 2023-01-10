import React from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";

const DesktopNavbar = () => {
	return (
		<nav className="hidden lg:flex sticky top-0 z-50 flex-wrap items-center justify-between bg-white p-6 pl-8 pr-8 shadow">
			<a href="/">
				<img src="next.svg" alt="Logo" className="h-8 cursor-pointer" />
			</a>
			<Bars3Icon className="h-8 w-8" />
		</nav>
	);
};

export default DesktopNavbar;