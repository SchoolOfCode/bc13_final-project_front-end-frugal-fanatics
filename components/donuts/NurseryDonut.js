/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { Chart as ChartJS, ArcElement, Chart } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { savingsOptions } from "../../data/charts";
import TotalSavings from "../TotalSavings";
ChartJS.register(ArcElement);

const nurseryPot= [{ label: "Nursery", total: 1200, goal: 5000, width: 98, height: 82, alt: "A cartoon baby bottle and baby grow", color: "#B884FF"},]

const NurseryDonut = () => {
	const total = nurseryPot[0].total;
	const remainder = nurseryPot[0].goal - nurseryPot[0].total;
	const goal = nurseryPot[0].goal;

	const labels = ["total", "goal"]
	const nurseryDonutData = {
		labels: ["total", "goal"],
		datasets: [
		  {
			label: "Nursery",
			data: [nurseryPot[0].total, nurseryPot[0].goal],
			backgroundColor: [
			"#B884FF"
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
				<Doughnut data={nurseryDonutData} options={savingsOptions}/>
			</div>
		</div>
	);
};

export default NurseryDonut;
