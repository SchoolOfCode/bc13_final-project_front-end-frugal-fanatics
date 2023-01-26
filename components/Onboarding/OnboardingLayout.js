import Head from "next/head";
import DesktopNavbar from "../Desktop/DesktopNavbar";
import MobileNavbar from "../Mobile/MobileNavbar";

const OnboardingLayout = ({
	children,
	title = "Onboarding Page",
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

export default OnboardingLayout;
