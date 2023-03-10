/* eslint-disable @next/next/no-img-element */
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { classNames } from "../../utils/helpers";
import { handleNavClick } from "../../utils/navigation";
import { Fragment } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

const MobileSidebar = ({
	sidebarOpen,
	setSidebarOpen,
	primaryNavigation,
	secondaryNavigation,
}) => {
	const supabase = useSupabaseClient();
	const router = useRouter();
	return (
		// The Transition component adds conditional enter/leave transitions to sidebar:
		// https://headlessui.com/react/transition
		<Transition.Root show={sidebarOpen} as={Fragment}>
			{/* The Dialog component is used to build the mobile sidebar: */}
			{/* https://headlessui.com/react/dialog */}
			<Dialog
				as="div"
				className="relative z-40 lg:hidden"
				onClose={setSidebarOpen}
			>
				<Transition.Child
					as={Fragment}
					enter="transition-opacity ease-linear duration-300"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="transition-opacity ease-linear duration-300"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div className="fixed inset-0 bg-slate-600 bg-opacity-75" />
				</Transition.Child>

				<div className="fixed inset-0 z-40 flex">
					<Transition.Child
						as={Fragment}
						enter="transition ease-in-out duration-300 transform"
						enterFrom="-translate-x-full"
						enterTo="w-full"
						leave="transition ease-in-out duration-300 transform"
						leaveFrom="w-full"
						leaveTo="-translate-x-full"
					>
						<Dialog.Panel className="relative flex h-full w-full max-w-xs flex-1 flex-col bg-[#1A1E2C] focus:outline-none">
							<Transition.Child
								as={Fragment}
								enter="ease-in-out duration-300"
								enterFrom="opacity-0"
								enterTo="opacity-100"
								leave="ease-in-out duration-300"
								leaveFrom="opacity-100"
								leaveTo="opacity-0"
							>
								{/* Close sidebar icon starts here */}
								<div className="absolute top-0 right-0 -mr-12 pt-2">
									<button
										type="button"
										className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
										onClick={() => setSidebarOpen(false)}
									>
										<span className="sr-only">Close sidebar</span>
										<XMarkIcon
											className="h-6 w-6 text-white"
											aria-hidden="true"
										/>
									</button>
								</div>
							</Transition.Child>
							<div className="h-0 flex-1 overflow-y-auto pt-5 pb-4">
								{/* Logo starts here */}
								<div className="flex flex-shrink-0 items-center px-6">
									<Image
										src="logo.svg"
										alt="Your Company"
										height="27"
										width="126"
									/>
								</div>
								{/* Mobile primary navigation starts here */}
								<nav aria-label="Sidebar" className="mt-8 flex-1 p-4">
									<div className="space-y-6 p-4 px-2">
										{primaryNavigation.map((item) => (
											<button
												key={item.name}
												onClick={() => handleNavClick(item.name, router)}
												className={classNames(
													item.current
														? "bg-[#4E29AA] tracking-wide text-white"
														: "tracking-wide text-white hover:bg-[#242A3D]",
													"group flex w-full items-center rounded-md px-2 py-2 tracking-wide"
												)}
												style={{
													fontFamily: "sans-serif",
													fontWeight: "500",
												}}
											>
												<item.icon
													className="mr-4 h-6 w-6"
													style={{
														stroke: item.current ? "#FFF" : item.iconColor,
													}}
													aria-hidden="true"
												/>
												{item.name}
											</button>
										))}
									</div>
								</nav>
							</div>
							{/* Mobile secondary navigation starts here */}
							<div className="flex flex-col border-t border-[#373C51] p-4">
								<div className="space-y-6 py-9 px-2">
									{secondaryNavigation.map((item) => (
										<button
											key={item.name}
											onClick={() =>
												handleNavClick(item.name, router, supabase)
											}
											className={classNames(
												item.current
													? "bg-[#4E29AA] tracking-wide text-white"
													: "tracking-wide text-white hover:bg-[#242A3D]",
												"group flex w-full items-center rounded-md px-2 py-2 text-base font-normal"
											)}
											style={{
												fontFamily: "sans-serif",
												fontWeight: "500",
											}}
										>
											<item.icon
												className={classNames(
													item.current
														? "text-slate-500"
														: "text-slate-400 group-hover:text-white",
													"mr-3 h-6 w-6"
												)}
												aria-hidden="true"
											/>
											{item.name}
										</button>
									))}
								</div>
							</div>
						</Dialog.Panel>
					</Transition.Child>
					<div className="w-14 flex-shrink-0" aria-hidden="true">
						{/* Force sidebar to shrink to fit close icon */}
					</div>
				</div>
			</Dialog>
		</Transition.Root>
	);
};

export default MobileSidebar;
