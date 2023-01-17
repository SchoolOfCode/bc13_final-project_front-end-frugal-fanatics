import "../styles/globals.css";
import { useState } from "react";

export default function App({ Component, pageProps }) {
	const [data, setData] = useState({
		savings: { total: 12900, goal: 20000 },
	});

	return <Component {...pageProps} data={data} setData={setData} />;
}
