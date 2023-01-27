const { calculateLeftoverIncome } = require("../utils/helpers");

test("calculateLeftoverIncome income returns the correct amount when handed array of expenses and totalIncome", () => {
	const expenses = [
		{ amount: 1 },
		{ amount: 1 },
		{ amount: 1 },
		{ amount: 1 },
		{ amount: 1 },
	];
	const totalIncome = 10;
	const expected = 5;
	const actual = calculateLeftoverIncome(expenses, totalIncome);

	expect(actual).toBe(expected);
});
