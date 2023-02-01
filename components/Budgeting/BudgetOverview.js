import React from "react";
import BudgetDonut from "./../Budgeting/BudgetDonut";
import { extractLabels } from "../../utils/helpers.js";
import { budgetOverviewColors as colors } from "../../data/colors";

function BudgetOverview({ data }) {
	// console.log("from budgetOverview ", data)
	const labels = extractLabels(data.expenses);

	return (
		<div className="stack flex w-full flex-col gap-10 rounded-2xl bg-[#212637] px-12 py-8 pb-14 max-[560px]:items-center xl:w-1/2">
			<h2
				className="text-2xl text-[#EDEDEE]"
				style={{ fontFamily: "Shapiro Welter Wide", fontWeight: "400" }}
			>
				Budget
			</h2>
			<div className="flex flex-col gap-6 min-[560px]:flex-row">
				<BudgetDonut data={data} />
				<div className="flex min-h-[180px] flex-col justify-between py-1">
					{labels.map((budget, index) => (
						<div key={index} className="flex items-center gap-4 text-[#C1C6CD]">
							<div
								className="h-[8px] w-3.5"
								style={{
									backgroundColor: `${colors[index]}`,
								}}
							/>
							<p className="text-md list-none">{budget}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default BudgetOverview;
