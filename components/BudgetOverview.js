import React from "react";
import BudgetDonut from "./../components/BudgetDonut";

import { outerBudgetData } from "../data/charts";
const { labels } = outerBudgetData;
const { backgroundColor: color } = outerBudgetData.datasets[0];

function BudgetOverview() {
	return (
		<div className="stack flex w-full flex-col gap-10 rounded-2xl bg-white px-12 py-8 pb-14 max-[560px]:w-[60%] xl:w-[50%]">
			<h2 className="text-202834  text-2xl text-[#202834]">Budget</h2>
			<div className="flex flex-col gap-6 min-[560px]:flex-row">
				<BudgetDonut />
				<div className="flex min-h-[180px] flex-col justify-between py-4">
					{labels.map((budget, index) => (
						<div key={index} className="flex items-center gap-4 text-slate-600">
							<div
								className="h-[8px] w-3.5"
								style={{
									backgroundColor: `${color[index]}`,
								}}
							/>
							<li className="list-none text-sm">{budget}</li>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default BudgetOverview;
