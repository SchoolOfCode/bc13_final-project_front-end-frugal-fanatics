import React from "react";
const Mindfulness = () => {
	return (
		<div className="stack relative flex w-full flex-col gap-10 rounded-2xl bg-white px-12 py-8 pb-14 max-[560px]:w-[60%] xl:w-[50%]">
			<h2 className=" text-202834 text-2xl text-[#202834]">Mindfulness</h2>
			<div className=" absolute top-1/2 right-1/2 flex flex-col gap-0 min-[560px]:flex-row">
				"It's better to try and fail, then fail to try at all"
				<div className="absolute right-1/4 left-1/2 flex h-full flex-col opacity-90">
					<img src="Mindfulness_lady.png" />
				</div>
			</div>
		</div>
	);
};
export default Mindfulness;
