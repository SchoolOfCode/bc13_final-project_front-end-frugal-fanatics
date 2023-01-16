import SavingsPot from "./SavingsPot";
import React from "react";

function SavingsPotsSection({ data }) {
	return (
		<section className="flex w-full flex-col gap-10 rounded-2xl bg-white px-12 py-8 pb-14 max-[560px]:items-center xl:w-full">
			<h2 className="text-202834 text-2xl font-medium text-[#202834]">
				Savings Pots
			</h2>
			<div className="flex flex-col gap-20 px-4 min-[560px]:flex-row">
				<SavingsPot data={data} title="Savings" progress="600" goal="1500" />
				<SavingsPot
					data={data}
					title="More Savings"
					progress="700"
					goal="900"
				/>
			</div>
		</section>
	);
}

export default SavingsPotsSection;
