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

	// potential data shape to be passed to back end and changes by data inputted by user into form:
	const [incomeData, setIncomeData] = useState({
		total_income: 0,
		user_id: ""
	})
	const [expensesData, setExpensesData] = useState({
            expense_type: "",
            expense_amount: 0,
            frequency: "",
            user_id: 0
	})
	const [savingsData, setSavingsData] = useState({
		overall_target: 5000,
		savings_total: 100,
		pot_totals: 100,
		user_id: 1
	})
	const [userData, setUserData] = useState({
		user_name: "",
		auth_token: "",
		first_name: "",
		last_name: ""
	})
	
	return <Component {...pageProps} data={data} setData={setData} incomeData={incomeData} setIncomeData={setIncomeData} expensesData={expensesData} setExpensesData={setExpensesData} savingsData={savingsData} setSavingsData={setSavingsData} userData={userData} setUserData={setUserData} />;
}


