import "../styles/globals.css";
import { useState } from "react";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import baby from "../public/baby.png";
import xmas from "../public/xmas.png";
import palmtree from "../public/palmtree.png";
import presents from "../public/present.png";
import { Inter } from "@next/font/google";
import Head from "next/head";

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
});

export default function App({ Component, pageProps }) {
	//unsure need to research what this means later
	const [supabase] = useState(() => createBrowserSupabaseClient());

	const [data, setData] = useState({
		totalIncome: 3200,
		expenses: [
			{ label: "Rent or Mortgage", amount: 1200 },
			{ label: "Food and Groceries", amount: 350 },
			{ label: "Home Energy Bills", amount: 170 },
			{ label: "Council Tax", amount: 240 },
			{ label: "Credit Payments", amount: 500 },
			{ label: "Leftover Income", amount: 740 },
		],
		savings: { total: 12900, goal: 20000 },
		pots: [
			{
				label: "Christmas",
				total: 300,
				goal: 750,
				img: xmas,
				width: 98,
				height: 82,
				alt: "A cartoon santa hat",
				color: "#FFA59E",
			},
			{
				label: "Holiday",
				total: 340,
				goal: 1000,
				img: palmtree,
				width: 98,
				height: 82,
				alt: "Cartoon palm trees",
				color: "#AFF192",
			},
			{
				label: "Nursery",
				total: 1200,
				goal: 5000,
				img: baby,
				width: 98,
				height: 82,
				alt: "A cartoon baby bottle and baby grow",
				color: "#B884FF",
			},
			{
				label: "Birthday",
				total: 300,
				goal: 500,
				img: presents,
				width: 98,
				height: 82,
				alt: "A cartoon present with blue ribbons",
				color: "#ABE6FF",
			},
		],
	});

	return (
		<>
	{/* This head adds our logo to the favicon on the browswer tab	 */}
     <Head>
        <link rel="icon" href="/favBicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
		<SessionContextProvider
			supabaseClient={supabase}
			initialSession={pageProps.initialSession}
		>
			<main
				className={`${inter.variable} font-sans`}
				style={{ height: "100%" }}
			>
				<Component {...pageProps} data={data} setData={setData} />
			</main>
		</SessionContextProvider>
	</>
	);
}
