import { Chart, ArcElement } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import {
	outerBudgetData,
	outerBudgetOptions,
	innerBudgetData,
	innerBudgetOptions
} from "../data/charts";
Chart.register(ArcElement);

const BudgetDonut = () => {
	return (
		<div className="relative h-[180px] w-[180px]">
			{/* Use relative parent and absolute children so donut charts overlay each other */}
			<div className="absolute left-1/2 top-1/2 z-50 h-full w-full translate-y-[-50%] translate-x-[-50%]">
				{/* Budget-breakdown outer donut chart */}
				<Doughnut data={outerBudgetData} options={outerBudgetOptions} />
			</div>
			<div className="absolute left-1/2 top-1/2 h-full w-full translate-y-[-50%] translate-x-[-50%]">
				{/* Total-income inner donut chart */}
				<Doughnut data={innerBudgetData} options={innerBudgetOptions} />
			</div>
		</div>
	);
};

export default BudgetDonut;
