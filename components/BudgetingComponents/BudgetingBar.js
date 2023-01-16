import React from "react";

const BudgetingBar = ({
	label,
	amount,
	percentage,
	color,
	paddedPercentage,
}) => {
	return (
		<div className="flex flex-col gap-3">
			<div className="flex justify-between">
				<p className="leading-none text-[#202834] md:text-base md:leading-none">
					{label}
					<span className=" text-[#bfc9d5]"> / per month</span>
				</p>

				<p className="leading-none text-[#bfc9d5] md:text-base md:leading-none">
					{`£${amount}`}
					<span className="tracking-[0.3em]"> /</span>
					<span className="text-[#202834]"> {`${percentage}%`}</span>
				</p>
			</div>

			<div className="h-3 w-full bg-[#F5F5F5]">
				<div
					style={{
						width: `${paddedPercentage}%`,
						backgroundColor: color,
					}}
					className="h-full"
				></div>
			</div>
		</div>
	);
};

export default BudgetingBar;
