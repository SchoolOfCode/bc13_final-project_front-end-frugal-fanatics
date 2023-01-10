import Head from "next/head";

const LandingLayout = ({children, title = "Frugal Fanatics FORM", description = "personal budgeting app"}) => {
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
