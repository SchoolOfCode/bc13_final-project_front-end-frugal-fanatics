import React from "react";
import SavingsDonut from "./../components/SavingsDonut";

function SavingsOverview({ data }) {
	return (
		<div className="stack flex w-full flex-col gap-10 rounded-2xl bg-[#212637] px-12 py-8 pb-14 max-[560px]:items-center xl:w-1/2">
			<h2
				className="text-2xl font-medium text-[#EDEDEE]"
				style={{ fontFamily: "Shapiro Welter Wide", fontWeight: "400" }}
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
