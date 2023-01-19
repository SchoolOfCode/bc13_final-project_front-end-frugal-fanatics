/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import piggybank from "../public/piggy-bank.png";
import { Chart as ChartJS, ArcElement } from "chart.js";
import Image from "next/image";
import { Doughnut } from "react-chartjs-2";
import { savingsOptions } from "../data/charts";
ChartJS.register(ArcElement);


const SavingsDonut = ({ data }) => {
	const total = data.savings.total;
	const remainder = data.savings.goal - data.savings.total;
	const img = data.pots.img;
	const savingsDonutData = {
		labels: ["Savings", "Target Savings"],
		datasets: [
			{
				label: "My First Dataset",
				data: [total, remainder],
				backgroundColor: ["#AFF192", "#F5F5F5"],
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
				<Doughnut data={savingsDonutData} options={savingsOptions} />
			</div>
			<div className="absolute top-1/2 left-1/2 h-full w-full translate-y-[-50%] translate-x-[-50%] px-11 pt-9 opacity-90">
				<Image src= {piggybank} alt="cartoon piggy bank" width="98" height="92"/>
			</div>
		</div>
	);
};

export default SavingsDonut;
