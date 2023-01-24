/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { Chart as ChartJS, ArcElement, Chart } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { savingsOptions } from "../../data/charts";
import TotalSavings from "../TotalSavings";
ChartJS.register(ArcElement);

const xmasPot = [
	{
		label: "Christmas",
		total: 300,
		goal: 750,
		width: 98,
		height: 82,
		alt: "A cartoon santa hat",
		color: "#FFA59E",
	},
];

const XmasDonut = ({}) => {
	const total = xmasPot[0].total;
	const remainder = xmasPot[0].goal - xmasPot[0].total;
	const goal = xmasPot[0].goal;

	const labels = ["total", "goal"];
	const xmasDonutData = {
		labels: ["total", "goal"],
		datasets: [
			{
				label: "Pot 1",
				data: [goal, total],
				backgroundColor: ["#FFA59E", "#3D4767"],
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
			<div className="absolute left-1/2 top-1/2 h-full w-full translate-y-[-50%] translate-x-[-50%]">
				{/* Budget-breakdown outer donut chart */}
				<Doughnut data={xmasDonutData} options={savingsOptions} />
			</div>
		</div>
	);
};

export default XmasDonut;
