import BudgetingBar from "./BudgetingBar";
import { calculatePercentages, padPercentages } from "../utils/helpers";
import { budgetColors } from "../data/colors";
import React from "react";

function BudgetingSection({ data }) {
	const percentages = calculatePercentages(data);
	const paddedPercentages = padPercentages(percentages);

	return (
		<section className="flex w-full flex-col gap-8 rounded-2xl bg-white px-12 py-9 pb-11 xl:w-full">
			<h2 className=" mb-4 text-2xl font-medium leading-none text-[#202834] md:text-3xl">
				Budgeting
			</h2>
			{data.expenses.map((expense, i) => (
				<BudgetingBar
					label={expense.label}
					amount={expense.amount}
					percentage={percentages[i]}
					paddedPercentage={paddedPercentages[i]}
					color={budgetColors[i]}
					key={i}
				/>
			))}
		</section>
	);
}

export default BudgetingSection;