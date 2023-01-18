import Head from "next/head";

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

			<main>{children}</main>
		</>
	);
};

export default LandingLayout;
