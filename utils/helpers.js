/**
 * Calculates the percentages of each expense in the data object
 * and returns an array of the percentages.
 *
 * @param {Object} data - our main mock data object located in _app.js
 * @returns {Array} percentages - an array of percentages
 * representing each expense amount to the totalIncome
 */
export const calculatePercentages = (data) => {
	const percentages = data.expenses.map((expense) => {
		return Math.round((expense.amount / data.totalIncome) * 100);
	});
	return percentages;
};

/**
 * Pads out the percentage numbers so they display larger
 * on budget charts while maintaining their ratios.
 *
 * @param {Array} arr - an array of numbers
 * @returns {Array} - an array of numbers rounded and scaled
 */
export const padPercentages = (arr) => {
	const padding = 90 / Math.max(...arr);
	return arr.map((percentage) => {
		return Math.round(percentage * padding);
	});
};

/**
 * Extracts the label property from each object in the input array
 * and returns an array of the labels.
 *
 * @param {Array} data - an array of objects with a label property
 * @returns {Array} - an array of labels
 */
export const extractLabels = (data) => {
	return data.map((expense) => {
		return expense.label;
	});
};

/**
 * Extracts the amount property from each object in the input array
 * and returns an array of the amounts.
 *
 * @param {Array} data - an array of objects with a amount property
 * @returns {Array} - an array of amounts
 */
export const extractAmounts = (data) => {
	return data.map((expense) => {
		return expense.amount;
	});
};

/**
 * Used to return condidtional tailwind className strings. Filters out
 * falsey class names and joins them with " ".
 *
 * @param {...string} classes - a list of classnames
 * @returns {string} - a string of classnames filtered and joined by " "
 */
export const classNames = (...classes) => {
	return classes.filter(Boolean).join(" ");
};

export const handleChange1 = (e, formInput, setFormInput) => {
	// convert a string to a number using the plus operator ( + )e.target.value
	setFormInput({ ...formInput, totalIncome: +e.target.value });
};
export const handleSubmit1 = (
	e,
	formInput,
	data,
	setData,
	steps,
	nextFormStep
) => {
	e.preventDefault();
	setData({ ...data, totalIncome: +formInput.totalIncome });
	nextFormStep();
	steps[0].status = "complete";
	steps[1].status = "current";
};

export const calculateLeftoverIncome = (expenses, totalIncome) => {
	const leftoverIncome =
		totalIncome -
		expenses[0].amount -
		expenses[1].amount -
		expenses[2].amount -
		expenses[3].amount -
		expenses[4].amount;
	return leftoverIncome;
};

export const handleChange2 = (e, formInput, setFormInput, key, labels) => {
	const updatedExpenses = [...formInput.expenses];
	updatedExpenses[key] = {
		label: labels[key],
		amount: +e.target.value,
	};
	updatedExpenses[5] = {
		label: "Leftover Income",
		amount: calculateLeftoverIncome(updatedExpenses, formInput.totalIncome),
	};
	setFormInput({
		...formInput,
		expenses: updatedExpenses,
	});
};

export const handleSubmit2 = (
	e,
	formInput,
	data,
	setData,
	steps,
	nextFormStep
) => {
	e.preventDefault();
	setData({ ...data, expenses: formInput.expenses });
	nextFormStep();
	steps[1].status = "complete";
	steps[2].status = "current";
};

export const handleChange3 = (e, formInput, setFormInput) => {
	if (e.target.id === "total") {
		const updatedSavings = { ...formInput.savings, total: +e.target.value };
		setFormInput({ ...formInput, savings: updatedSavings });
	}
	if (e.target.id === "goal") {
		const updatedSavings = { ...formInput.savings, goal: +e.target.value };
		setFormInput({ ...formInput, savings: updatedSavings });
	}
};

export const handleSubmit3 = (e, formInput, data, setData, steps, router) => {
	steps[2].status = "complete";
	e.preventDefault();
	setData({ ...data, savings: formInput.savings });
	router.push("/overview");
};

// useEffect(() => {
// 	console.log("userSavings", userSavings);
// }, [userSavings]);
// useEffect(() => {
// 	console.log("userIncome", userIncome);
// }, [userIncome]);
// useEffect(() => {
// 	console.log("userExpenses", userExpenses);
// }, [userExpenses]);
