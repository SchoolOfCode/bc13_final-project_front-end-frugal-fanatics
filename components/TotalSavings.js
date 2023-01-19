/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useState, useEffect } from "react";

function TotalSavings({ data }) {
	const totalSavings = data.savings.total.toLocaleString("en-GB");
	const savingsGoal = data.savings.goal.toLocaleString("en-GB");
	const percentage = Math.round((data.savings.total / data.savings.goal) * 100);
	const [barWidth, setBarWidth] = useState(0);
	useEffect(() => {
		setBarWidth(percentage);
	}, []);

	return (
		<section className="stack flex w-full flex-col gap-5 rounded-2xl bg-white px-12 py-9 pb-11 xl:w-full">
			<h2 className="text-2xl font-medium leading-none text-[#202834]">
				Total Savings
			</h2>
			<div className="flex flex-col gap-8">
				<div className="flex items-end gap-1.5">
					<p className="text-4xl leading-none text-[#202834] md:text-[40px]">
						£{totalSavings}.00
					</p>
					<p className="text-2xl text-[#bfc9d5] md:text-3xl">
						/ £{savingsGoal}.00
					</p>
				</div>

				<div className="h-3 w-full bg-[#F5F5F5]">
					<div
						style={{
							width: `${barWidth}%`,
							transition: "width 1s ease-in-out",
						}}
						className="h-full bg-[#AFF192] transition-transform"
					></div>
				</div>
			</div>
		</section>
	);
}
export default TotalSavings;
