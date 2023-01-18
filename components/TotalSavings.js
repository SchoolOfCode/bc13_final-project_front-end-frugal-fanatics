import React from "react";
import { useState, useEffect } from "react";

function TotalSavings({ userData }) {
	const totalSavings = userData.savings.total.toLocaleString("en-GB");
	const savingsGoal = userData.savings.goal.toLocaleString("en-GB");
	const percentage = (userData.savings.total / userData.savings.goal) * 100;
	const [barWidth, setBarWidth] = useState(0);
	useEffect(() => {
		setBarWidth(percentage);
	}, [percentage]);

	return (
		<div className="stack flex w-full flex-col gap-10 rounded-2xl bg-white px-12 py-8 pb-14 max-[560px]:items-center xl:w-[100%]">
			<h2
				className="text-2xl font-medium text-[#202834]"
				style={{ fontFamily: "Shapiro Welter Wide", weight: "500" }}
			>
				Total Savings
			</h2>
			<div className="flex flex-col gap-8">
				<div className="flex items-end gap-1.5">
					<p
						className="text-xl leading-none text-[#202834] md:text-[35px]"
						style={{ fontFamily: "Shapiro Welter Wide", weight: "500" }}
					>
						£{totalSavings}.00
					</p>
					<p
						className="text-lg text-[#bfc9d5] md:text-2xl"
						style={{ fontFamily: "Shapiro Welter Wide", weight: "500" }}
					>
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
		</div>
	);
}
export default TotalSavings;
