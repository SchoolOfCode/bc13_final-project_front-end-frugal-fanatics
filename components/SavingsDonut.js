/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { Chart as ChartJS, ArcElement, Chart } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { savingsOptions } from "../data/charts";
import TotalSavings from "./TotalSavings";
ChartJS.register(ArcElement);


const SavingsDonut = ({ data,color}) => {
	const total = data.savings.total;
	const remainder = data.savings.goal - data.savings.total;

	const labels = ["total", "remainder"]
	const savingsDonutData = {
		labels: ["total", "remainder"],
		datasets: [
		  {
			label: "Pot 1",
			data: [55, 95],
			backgroundColor: [
			  "#FFA59E","#F5F5F5"
		,],
			hoverOffset: 0,
			responsive: true,
			maintainAspectRatio: true,
			borderWidth: 0,
		  }],
	}

	return (
		<div className="relative h-[180px] w-[180px]">
			{/* Use relative parent and absolute children so donut charts overlay each other */}
			<div className="absolute left-1/2 top-1/2 h-full w-full translate-y-[-50%] translate-x-[-50%]">
				{/* Budget-breakdown outer donut chart */}
				<Doughnut data={savingsDonutData} options={savingsOptions}/>
			</div>
			
		</div>
	);
};

export default SavingsDonut;
