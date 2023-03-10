import { Chart as ChartJS, ArcElement } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { extractAmounts } from "../../utils/helpers.js";
import {
	outerBudgetOptions,
	innerBudgetData,
	innerBudgetOptions,
} from "../../data/charts";
ChartJS.register(ArcElement);

const BudgetDonut = ({ data }) => {
	const amounts = extractAmounts(data.expenses);
	const outerBudgetData = {
		labels: [
			"Rent or Mortgage",
			"Food and Groceries",
			"Home Energy Bills",
			"Council Tax",
			"Credit Repayments",
			"Leftover Income",
		],
		datasets: [
			{
				label: "My First Dataset",
				data: amounts,
				backgroundColor: [
					"#956BFE",
					"#FF9264",
					"#E125FF",
					"#31C1FF",
					"#FF6054",
					"#3D4767",
				],
				hoverOffset: 0,
				responsive: true,
				maintainAspectRatio: true,
				borderWidth: 0,
			},
		],
	};

	return (
		<div className="relative h-[180px] w-[180px]">
			{/* Use relative parent and absolute children so donut charts overlay each other */}
			<div className="absolute left-1/2 top-1/2 z-50 h-full w-full translate-y-[-50%] translate-x-[-50%]">
				{/* Budget-breakdown outer donut chart ! */}
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
