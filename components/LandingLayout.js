import Head from "next/head";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

const LandingLayout = ({children, title = "Frugal Fanatics FORM", description = "personal budgeting app"}) => {
	return (
    <>
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="flex h-full flex-col">
				<DesktopNavbar />
				<div className="flex flex-grow">
					
					<div className="flex min-w-0 flex-1 flex-col overflow-hidden bg-[#F4F7FB]">
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

export default LandingLayout;
