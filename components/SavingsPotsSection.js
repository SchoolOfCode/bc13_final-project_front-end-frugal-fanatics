import BirthdaysPot from "../components/SavingsPots/BirthdaysPot";
import XmasPot from "../components/SavingsPots/XmasPot";
import NurseryPot from "../components/SavingsPots/NurseryPot";
import HolidaysPot from "../components/SavingsPots/HolidaysPot";
import React from "react";

function SavingsPotsSection({}) {
	return (
		<section className="flex w-full flex-col gap-10 rounded-2xl bg-[#212637] px-12 py-8 pb-14 max-[560px]:items-center xl:w-full">
			<h2
				className="text-202834 text-2xl font-medium text-[#EDEDEE]"
				style={{ fontFamily: "Shapiro Welter Wide", fontWeight: "400" }}
			>
				Savings Pots
			</h2>
			<div className="m-auto grid gap-16 min-[280px]:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
				<XmasPot />

				<HolidaysPot />

				<NurseryPot />

				<BirthdaysPot />
			</div>
		</section>
	);
}

export default SavingsPotsSection;
