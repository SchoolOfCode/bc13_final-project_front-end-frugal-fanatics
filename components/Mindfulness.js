import React from "react";
const Mindfulness = () => {
  return (
    <div className="stack flex w-full flex-col gap-10 rounded-2xl bg-white px-12 py-8 pb-14 max-[560px]:w-[60%] xl:w-[50%]">
      <h2 className="text-202834  text-2xl text-[#202834]">Mindfulness</h2>
      <div className="flex-col gap-6 min-[560px]:flex-row">
        <div className="text-202834  text-1xl flex flex-col gap-6 text-[#202834] min-[560px]:flex-row">
          "It's better to try and fail, then fail to try at all"
          <div className="flex max-h-fit px-10">
            <img src="Mindfulness_lady.png" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Mindfulness;
