import "../styles/globals.css";
import { useState } from "react";

export default function App({ Component, pageProps }) {
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
	});

	return <Component {...pageProps} data={data} setData={setData} />;
}
