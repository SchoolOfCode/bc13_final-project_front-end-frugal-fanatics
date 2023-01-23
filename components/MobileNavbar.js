/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Image from "next/image";

const MobileNavbar = ({ setSidebarOpen }) => {
	return (
		<div className="lg:hidden">
			<div className="flex items-center justify-between border-b border-slate-200 bg-white px-4 py-1.5">
				<div>
					<Image src="logo.svg" alt="Your Company" height="32" width="157" />
				</div>
				<div>
					<button
						type="button"
						className="-mr-3 inline-flex h-12 w-12 items-center justify-center rounded-md text-gray-500 hover:text-gray-900"
						onClick={() => setSidebarOpen(true)}
					>
						<span className="sr-only">Open sidebar</span>
						<Bars3Icon className="h-6 w-6" aria-hidden="true" />
					</button>
				</div>
			</div>
		</div>
	);
};

export default MobileNavbar;
