import React from "react";

const Mindfulness = () => {
	return (
		<div className="stack flex w-full flex-col gap-1 rounded-2xl bg-white px-12 py-9 pb-4 max-[560px]:items-center xl:w-[50%]">
			<h2 className="text-2xl font-medium text-[#202834]">Mindfulness</h2>
			<div className="relative flex flex-col justify-center gap-5 min-[560px]:flex-row">
				<div className="flex h-full w-full flex-col pt-10">
					"It's better to try and fail, than fail to try at all"
				</div>
				<div className="flex pb-2 opacity-95">
					<img src="Mindfulness_lady.png" />
				</div>
			</div>
		</div>
	);
};
export default Mindfulness;
