import React from "react";

const Mindfulness = () => {
	return (
		// <div className="stack flex w-full flex-col gap-1 rounded-2xl bg-white px-12 py-9 pb-4 max-[560px]:items-center xl:w-[50%]">
		<div className="stack flex w-full flex-col gap-5 rounded-2xl bg-white px-12 py-8 pb-14 max-[560px]:items-center xl:w-[50%]">
			<h2
				className="text-2xl font-medium text-[#202834]"
				style={{ fontFamily: "Shapiro Welter Wide", weight: "500" }}
			>
				Mindfulness
			</h2>
			<div className="relative flex flex-col justify-center gap-5 min-[560px]:flex-row">
				<div
					className="flex h-full w-full flex-col pt-5 text-slate-400"
					style={{ fontFamily: "Shapiro Welter Wide", weight: "500" }}
				>
					"It's better to try and fail, than fail to try at all"
				</div>
				<div className="absolute flex h-48 translate-y-[-19%] translate-x-[80%] pb-2 opacity-95">
					<img src="Mindfulness_lady.png" />
				</div>
			</div>
		</div>
	);
};
export default Mindfulness;
