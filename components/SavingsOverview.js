import React from "react";
import { Doughnut } from "react-chartjs-2";
import { savingsOptions } from "../data/charts";
import { Chart as ChartJS, ArcElement, Chart } from "chart.js";
ChartJS.register(ArcElement);
// import XmasDonut from "./donuts/XmasDonut";
import xmas from "../public/xmas.png";
import presents from "/public/present.png";
import palmtree from "/public/palmtree.png";
import baby from "/public/baby.png";
import Image from "next/image";

// const xmasPot = [
// 	{
// 		label: "Christmas",
// 		total: 300,
// 		goal: 750,
// 		img: xmas,
// 		width: 98,
// 		height: 82,
// 		alt: "A cartoon santa hat",
// 		color: "#FFA59E",
// 	},
// ];

// const xmasDonutData = {
// 	labels: ["total", "goal"],
// 	datasets: [
// 		{
// 			label: "Xmas",
// 			data: [300, 750],
// 			backgroundColor: ["#FFA59E", "#3D4767"],
// 			hoverOffset: 0,
// 			responsive: true,
// 			maintainAspectRatio: true,
// 			borderWidth: 0,
// 		},
// 	],
// };

const birthdaysPot = [
	{
		label: "Birthday",
		total: 300,
		goal: 500,
		img: presents,
		width: 86,
		height: 82,
		alt: "A cartoon present with blue ribbons",
		color: "#2D7DBC",
	},
];

const birthdaysDonutData = {
	labels: ["goal", "total"],
	datasets: [
		{
			label: "Birthdays",
			data: [300, 500],
			backgroundColor: ["#2D7DBC", "#3D4767"],
			hoverOffset: 0,
			responsive: true,
			maintainAspectRatio: true,
			borderWidth: 0,
		},
	],
};

const holidaysPot = [
	{
		label: "Holiday",
		total: 340,
		goal: 1000,
		img: palmtree,
		width: 98,
		height: 82,
		alt: "Cartoon palm trees",
		color: "#4EBE81",
	},
];

const holidaysDonutData = {
	labels: ["total", "goal"],
	datasets: [
		{
			label: "Holidays",
			data: [340, 1000],
			backgroundColor: ["#4EBE81", "#3D4767"],
			hoverOffset: 0,
			responsive: true,
			maintainAspectRatio: true,
			borderWidth: 0,
		},
	],
};

// const nurseryPot = [
// 	{
// 		label: "Nursery",
// 		total: 1200,
// 		goal: 5000,
// 		img: baby,
// 		width: 98,
// 		height: 82,
// 		alt: "A cartoon baby bottle and baby grow",
// 		color: "#B884FF",
// 	},
// ];

// const nurseryDonutData = {
// 	labels: ["total", "goal"],
// 	datasets: [
// 		{
// 			label: "Nursey",
// 			data: [1200, 5000],
// 			backgroundColor: ["#B884FF", "#3D4767"],
// 			hoverOffset: 0,
// 			responsive: true,
// 			maintainAspectRatio: true,
// 			borderWidth: 0,
// 		},
// 	],
// };

function SavingsOverview({}) {
	return (
		<div className="stack flex w-full flex-col gap-10 rounded-2xl bg-[#212637] px-12 py-8 pb-14 max-[560px]:items-center xl:w-[50%]">
			<h2
				className="text-2xl font-medium text-[#EDEDEE]"
				style={{ fontFamily: "Shapiro Welter Wide", weight: "500" }}
			>
				Savings Pots
			</h2>
			<div className="flex flex-col flex-wrap gap-12 overflow-auto md:flex-row">
				{/* Bday pot */}
				<div className="relative h-[180px] w-[180px]">
					<div className="absolute left-1/2 top-1/2 h-full w-full translate-y-[-50%] translate-x-[-50%]">
						<Doughnut data={birthdaysDonutData} options={savingsOptions} />
					</div>
					<div className="absolute top-[26%] left-[28%]">
						<Image
							src={birthdaysPot[0].img}
							alt="A cartoon present with blue ribbons"
							width={birthdaysPot[0].width}
							height={birthdaysPot[0].height}
						/>
					</div>
				</div>
				{/* {/* Holiday pot */}
				<div className="relative h-[180px] w-[180px]">
					<div className="absolute left-1/2 top-1/2 h-full w-full translate-y-[-50%] translate-x-[-50%]">
						<Doughnut data={holidaysDonutData} options={savingsOptions} />
					</div>
					<div className="absolute top-[25%] left-[24%]">
						<Image
							src={holidaysPot[0].img}
							alt="A cartoon present with blue ribbons"
							width={holidaysPot[0].width}
							height={holidaysPot[0].height}
						/>
					</div>
				</div>
				{/* Xmas pot */}
				{/* <div className="relative h-[180px] w-[180px]">
					<div className="absolute left-1/2 top-1/2 h-full w-full translate-y-[-50%] translate-x-[-50%]">
						<Doughnut data={xmasDonutData} options={savingsOptions} />
					</div>
					<div className="absolute top-1/4 left-1/4">
						<Image
							src={xmasPot[0].img}
							alt="A cartoon present with blue ribbons"
							width={xmasPot[0].width}
							height={xmasPot[0].height}
						/>
					</div>
				</div> */}
				{/* Nursery pot */}
				{/* <div className="relative h-[180px] w-[180px]">
					<div className="absolute left-1/2 top-1/2 h-full w-full translate-y-[-50%] translate-x-[-50%]">
						<Doughnut data={nurseryDonutData} options={savingsOptions} />
					</div>
					<div className="absolute top-1/4 left-1/4">
						<Image
							src={nurseryPot[0].img}
							alt="A cartoon present with blue ribbons"
							width={nurseryPot[0].width}
							height={nurseryPot[0].height}
						/>
					</div>
				</div>  */}
			</div>
		</div>
	);
}

export default SavingsOverview;
