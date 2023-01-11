import React from "react";
import SavingsDonut from "./../components/SavingsDonut";

function SavingsOverview() {
	return (
		<div className="stack flex w-full flex-col gap-10 rounded-2xl bg-white px-12 py-8 pb-14 max-[560px]:w-[60%] xl:w-[50%]">
			<h2 className="text-202834  text-2xl text-[#202834]">Savings Pots</h2>
			<div className="flex flex-col gap-6 min-[560px]:flex-row">
				<SavingsDonut />
			</div>
		</div>
	);
}

export default SavingsOverview;
