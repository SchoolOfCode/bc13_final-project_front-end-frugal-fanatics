/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { Chart as ChartJS, ArcElement, Chart } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { savingsOptions } from "../../data/charts";
import TotalSavings from "../TotalSavings";
ChartJS.register(ArcElement);

const holidaysPot = [
    { label: "Holiday", total: 340, goal: 1000, width: 98, height: 82, alt: "Cartoon palm trees", color: "#AFF192" },]

const HolidaysDonut = ({}) => {
	const total = holidaysPot[0].total;
	const remainder = holidaysPot[0].goal - holidaysPot[0].total;
    const goal = holidaysPot[0].goal;

	const labels = ["total", "goal"]
	const holidayDonutData = {
		labels: ["total", "goal"],
		datasets: [
		  {
			label: "Holidays",
			data: [holidaysPot[0].total, holidaysPot[0].goal],
			backgroundColor: [
			"#AFF192",
		"#3D4767"],
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
				<Doughnut data={holidayDonutData} options={savingsOptions}/>
			</div>
		</div>
	);
};

export default HolidaysDonut;
