import React from "react";

const DesktopSidebar = ({
	primaryNavigation,
	secondaryNavigation,
	classNames
}) => {
	return (
		<div className="hidden lg:flex lg:flex-shrink-0">
			<div className="flex w-64 flex-col">
				<div className="flex min-h-0 flex-1 flex-col border-r border-gray-200 bg-gray-100">
					<div className="flex flex-1 flex-col overflow-y-auto pt-1 pb-4">
						<nav className="mt-5 flex-1 p-4" aria-label="Sidebar">
							<div className="space-y-6 px-2">
								{primaryNavigation.map((item) => (
									<a
										key={item.name}
										href={item.href}
										className={classNames(
											item.current
												? "bg-gray-200 text-gray-900"
												: "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
											"group flex items-center rounded-md px-2 py-2 text-sm font-medium"
										)}
									>
										<item.icon
											className={classNames(
												item.current
													? "text-gray-500"
													: "text-gray-400 group-hover:text-gray-500",
												"mr-3 h-6 w-6"
											)}
											aria-hidden="true"
										/>
										{item.name}
									</a>
								))}
							</div>
						</nav>
					</div>
					<div className="flex flex-col border-t border-gray-200 p-4">
						<div className="space-y-6 py-9 px-2">
							{secondaryNavigation.map((item) => (
								<a
									key={item.name}
									href={item.href}
									className={classNames(
										item.current
											? "bg-gray-200 text-gray-900"
											: "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
										"group flex items-center rounded-md px-2 py-2 text-sm font-medium"
									)}
								>
									<item.icon
										className={classNames(
											item.current
												? "text-gray-500"
												: "text-gray-400 group-hover:text-gray-500",
											"mr-3 h-6 w-6"
										)}
										aria-hidden="true"
									/>
									{item.name}
								</a>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DesktopSidebar;
