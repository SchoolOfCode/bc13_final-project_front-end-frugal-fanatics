/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";

const LandingMobileNavbar = ({ setSidebarOpen }) => {
	return (
		<div className="sticky top-0 z-50 md:hidden">
			<div className=" flex items-center justify-between border-b border-[#373C51] bg-[#1A1E2C] bg-opacity-70 px-4 py-1.5 bg-blur-xl">
				<div>
					<Image src="logo.svg" alt="Your Company" height="27" width="126" />
				</div>
				<div>
					<button
						type="button"
						className="pointer-events-none -mr-3 inline-flex h-12 w-12 items-center justify-center rounded-md text-gray-500 hover:text-gray-900"
						// onClick={() => setSidebarOpen(true)}
					>
						<span className="sr-only">Open sidebar</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default LandingMobileNavbar;
