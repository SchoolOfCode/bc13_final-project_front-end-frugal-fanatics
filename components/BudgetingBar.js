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
		<div className="flex flex-col gap-3">
			<div className="flex justify-between">
				<p className="leading-none text-[#EDEDEE] md:text-base md:leading-none">
					{label}
					<span className=" text-[#6a727c]"> / per month</span>
				</p>

				<p className="leading-none text-[#6a727c] md:text-base md:leading-none">
					{`£${amount}`}
					<span className="tracking-[0.3em]"> /</span>
					<span className="text-[#EDEDEE]"> {`${percentage}%`}</span>
				</p>
			</div>

			<div className="h-3 w-full bg-[#3D4767]">
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
