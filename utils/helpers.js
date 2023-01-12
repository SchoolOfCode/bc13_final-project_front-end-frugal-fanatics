/**
 * Calculates the percentages of each expense in the data object
 * and returns an array of the percentages.
 *
 * @param {Object} data - an object with property expenses and totalIncome
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
