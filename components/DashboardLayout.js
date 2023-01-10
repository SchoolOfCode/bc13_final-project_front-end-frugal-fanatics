import DesktopNavbar from "./DesktopNavbar";
import DesktopSidebar from "./DesktopSidebar";
import Head from "next/head";

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

const DashboardLayout = ({
	children,
	primaryNavigation,
	secondaryNavigation,
	title = "Frugal Franatics",
	description = "Dashboard"
}) => {
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="description" content={description} />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className="flex h-full flex-col">
				<DesktopNavbar />
				<div className="flex flex-grow">
					<DesktopSidebar
						primaryNavigation={primaryNavigation}
						secondaryNavigation={secondaryNavigation}
						classNames={classNames}
					/>
					<div className="flex min-w-0 flex-1 flex-col overflow-hidden">
						<div className="relative z-0 flex flex-1 overflow-hidden">
							<main className="relative z-0 flex-1 overflow-y-auto focus:outline-none">
								<div className="absolute inset-0 py-6 px-4 sm:px-6 lg:px-8">
									{children}
								</div>
							</main>
						</div>
					</div>
				</div>
			</main>
		</>
	);
};

export default DashboardLayout;
