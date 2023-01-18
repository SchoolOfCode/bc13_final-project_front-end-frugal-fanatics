import React from "react";
import { classNames } from "../utils/helpers";
import { handleNavClick } from "../utils/navigation";
import { useRouter } from "next/router";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

const DesktopSidebar = ({ primaryNavigation, secondaryNavigation }) => {
	const router = useRouter();
	const supabase = useSupabaseClient();
	return (
		<div className="hidden lg:flex lg:flex-shrink-0">
			<div className="flex w-64 flex-col">
				<div className="flex min-h-0 flex-1 flex-col bg-white">
					<div className="flex flex-1 flex-col overflow-y-auto pt-1 pb-4">
						<nav className="mt-5 flex-1 p-4" aria-label="Sidebar">
							<div className="space-y-6 px-2">
								{primaryNavigation.map((item) => (
									<button
										key={item.name}
										onClick={() => handleNavClick(item.name, router)}
										className={classNames(
											item.current
												? "bg-[#F4F7FB] tracking-wide text-black"
												: "tracking-wide text-slate-600 hover:bg-slate-50 hover:text-slate-900",
											"group flex w-full items-center rounded-md px-2 py-2 text-base font-normal"
										)}
									>
										<item.icon
											className={classNames(
												item.current
													? "text-slate-500"
													: "text-slate-400 group-hover:text-slate-500",
												"mr-3 h-6 w-6"
											)}
											aria-hidden="true"
										/>
										{item.name}
									</button>
								))}
							</div>
						</nav>
					</div>
					<div className="flex flex-col border-t border-slate-200 p-4">
						<div className="space-y-6 py-9 px-2">
							{secondaryNavigation.map((item) => (
								<button
									key={item.name}
									onClick={() => handleNavClick(item.name, router, supabase)}
									className={classNames(
										item.current
											? "bg-[#F4F7FB] tracking-wide text-black"
											: "tracking-wide text-slate-600 hover:bg-slate-50 hover:text-slate-900",
										"group flex w-full rounded-md px-2 py-2 text-base font-normal first-letter:items-center"
									)}
								>
									<item.icon
										className={classNames(
											item.current
												? "text-slate-500"
												: "text-slate-400 group-hover:text-slate-500",
											"mr-3 h-6 w-6"
										)}
										aria-hidden="true"
									/>
									{item.name}
								</button>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DesktopSidebar;
