/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { Chart as ChartJS, ArcElement, Chart } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { savingsOptions } from "../../data/charts";
import TotalSavings from "../TotalSavings";
ChartJS.register(ArcElement);

const birthdaysPot= [{ label: "Birthday", total: 300, goal: 500, width: 98, height: 82, alt: "A cartoon present with blue ribbons", color: "#ABE6FF"},
]

const BirthdaysDonut = ({}) => {
	const total = birthdaysPot[0].total;
	const remainder = birthdaysPot[0].goal - birthdaysPot[0].total;
	const goal = birthdaysPot[0].goal

	const labels = ["total", "goal"]
	const birthdaysDonutData = {
		labels: ["total", "goal"],
		datasets: [
		  {
			label: "Birthdays",
			data: [birthdaysPot[0].total, birthdaysPot[0].goal],
			backgroundColor: ["#ABE6FF"
		,"#3D4767"],
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
				<Doughnut data={birthdaysDonutData} options={savingsOptions}/>
			</div>
			
		</div>
	);
};

export default BirthdaysDonut;
