/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useState, useEffect } from "react";

const TotalSavings = ({ data }) => {
	const totalSavings = data.savings.total.toLocaleString("en-GB");
	const savingsGoal = data.savings.goal.toLocaleString("en-GB");
	const percentage = Math.ceil((data.savings.total / data.savings.goal) * 100);
	const [barWidth, setBarWidth] = useState(0);
	useEffect(() => {
		setBarWidth(percentage);
	}, [percentage, barWidth]);

	return (
		<section className="stack flex w-full flex-col gap-5 rounded-2xl bg-[#212637] px-12 py-9 pb-11 xl:w-full">
			<h2 className="text-2xl font-medium leading-none text-[#EDEDEE]">
				Total Savings
			</h2>
			<div className="flex flex-col gap-8">
				<div className="flex items-end gap-1.5">
					<p className="text-4xl leading-none text-[#EDEDEE] md:text-[40px] max-[450px]:text-[30px]">
						£{totalSavings}.00
					</p>
					<p className="text-2xl text-[#7C848F] md:text-3xl max-[450px]:text-[20px]">
						/ £{savingsGoal}.00
					</p>
				</div>

				<div className="h-3 w-full bg-[#3D4767]">
					<div
						style={{
							width: `${barWidth}%`,
							transition: "width 1s ease-in-out",
						}}
						className="h-full bg-[#10B981] transition-transform"
					></div>
				</div>
			</div>
		</section>
	);
};
export default TotalSavings;
