export const getUserOverview = async (
	supabase,
	user,
	setUserIncome,
	setUserExpenses,
	setUserSavings
) => {
	// Get income
	try {
		let { data, error, status } = await supabase
			.from("income")
			.select(`total_income`)
			.eq("user_id", user.id)
			.single();

		if (error && status !== 406) {
			throw error;
		}
		if (data) {
			setUserIncome({ totalIncome: data.total_income });
		}
	} catch (error) {
		console.log("catch error ->", error);
	}
	// Get expenses
	try {
		let { data, error, status } = await supabase
			.from("expenses")
			.select(`expenses_type, expenses_amount`)
			.eq("user_id", user.id);
		if (error && status !== 406) {
			throw error;
		}
		if (data) {
			const expenseData = data.map((expense) => {
				return {
					label: expense.expenses_type,
					amount: expense.expenses_amount,
				};
			});
			setUserExpenses({ expenses: expenseData });
		}
	} catch (error) {
		console.log("catch error ->", error);
	}
	//Get savings
	try {
		let { data, error, status } = await supabase
			.from("savings")
			.select(`savings_total, savings_goal`)
			.eq("user_id", user.id)
			.single();
		if (error && status !== 406) {
			throw error;
		}
		if (data) {
			setUserSavings({
				savings: { total: data.savings_total, goal: data.savings_goal },
			});
		}
	} catch (error) {
		console.log("catch error ->", error);
	}
};
