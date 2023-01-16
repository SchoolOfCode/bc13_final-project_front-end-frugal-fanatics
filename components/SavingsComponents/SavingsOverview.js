import React from "react";
import SavingsDonut from "../../components/SavingsComponents/SavingsDonut";

function SavingsOverview({ data }) {
	return (
		<div className="stack flex w-full flex-col gap-10 rounded-2xl bg-white px-12 py-8 pb-14 max-[560px]:items-center xl:w-[50%]">
			<h2
				className="text-2xl font-medium text-[#202834]"
				style={{ fontFamily: "Shapiro Welter Wide", weight: "500" }}
			>
				Savings Pots
			</h2>
			<div className="flex flex-col gap-6 min-[560px]:flex-row">
				<SavingsDonut data={data} />
			</div>
		</div>
	);
}

export default SavingsOverview;