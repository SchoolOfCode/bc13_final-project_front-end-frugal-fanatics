import BudgetingBar from "./BudgetingBar";
import { calculatePercentages, padPercentages } from "../utils/helpers";
import { budgetColors } from "../data/colors";
import React from "react";

function BudgetingSection({ data, income }) {
	const percentages = calculatePercentages(data, income);
	const paddedPercentages = padPercentages(percentages);

	return (
		<section
			className="flex w-full flex-col gap-8 rounded-2xl bg-[#212637] px-12 py-9 pb-11 xl:w-full"
			style={{ fontFamily: "Shapiro Welter Wide", weight: "400" }}
		>
			<h2 className=" mb-4 text-2xl font-medium leading-none text-[#EDEDEE] md:text-3xl">
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
