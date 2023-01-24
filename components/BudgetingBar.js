import React from "react";
import { useState, useEffect } from "react";

const BudgetingBar = ({
	label,
	amount,
	percentage,
	color,
	paddedPercentage,
}) => {
	const [barWidth, setBarWidth] = useState(0);
	useEffect(() => {
		setBarWidth(paddedPercentage);
	}, [paddedPercentage, barWidth]);

	return (
		<div
			className="flex flex-col gap-2 md:gap-3"
			style={{ fontFamily: "Shapiro Welter Wide", weight: "400" }}
		>
			<div className="flex justify-between">
				<p className="text-[10px] leading-none text-[#EDEDEE] sm:text-sm md:text-lg md:leading-none">
					{label}
					<span className=" text-[#6a727c]"> / month</span>
				</p>

				<p className="text-[10px] leading-none text-[#6a727c] sm:text-sm md:text-lg md:leading-none">
					{`£${amount}`}
					<span className="tracking-[0.3em]"> /</span>
					<span className="text-[#EDEDEE]"> {`${percentage}%`}</span>
				</p>
			</div>

			<div className="h-[6px] w-full bg-[#3D4767] sm:h-2 md:h-3">
				<div
					style={{
						width: `${barWidth}%`,
						backgroundColor: color,
						transition: "width 1s ease-in-out",
					}}
					className="h-full"
				></div>
			</div>
		</div>
	);
};

export default BudgetingBar;
