import Head from "next/head";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

const LandingLayout = ({
	children,
	title = "Landing Page",
	description = "Personal Budgeting App",
}) => {
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="description" content={description} />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<DesktopNavbar />
			<MobileNavbar />
			<main>{children}</main>
			{/* <Footer /> */}
		</>
	);
};

export default LandingLayout;
