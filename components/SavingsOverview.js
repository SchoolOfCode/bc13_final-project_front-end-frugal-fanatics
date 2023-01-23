import React from "react";

import XmasDonut from "./donuts/XmasDonut";
import XmasPot from "./pots/xmasPot";
import xmas from "../public/xmas.png"
import Image from "next/image";

const xmasPot = [
    { label: "Christmas", total: 300, goal: 750, img: xmas, width: 98, height: 82, alt: "A cartoon santa hat", color: "#FFA59E"},
  ]

function SavingsOverview({ }) {
	return (
		<div className="stack flex w-full flex-col gap-10 rounded-2xl bg-[#212637] px-12 py-8 pb-14 max-[560px]:items-center xl:w-[50%]">
			<h2
				className="text-2xl font-medium text-[#EDEDEE]"
				style={{ fontFamily: "Shapiro Welter Wide", weight: "500" }}
			>
				Savings Pots
			</h2>
			<div className="flex flex-col gap-3 min-[560px]:flex-row">
				<div className="relative h-[180px] w-[180px]">
	  <div className="absolute left-1/2 top-1/2 h-full w-full translate-y-[-50%] translate-x-[-50%]">
      <XmasDonut/>
	  </div>
      <div className="absolute top-1/4 left-1/4">
				<Image src={xmasPot[0].img} alt={xmasPot[0].alt} width={xmasPot[0].width} height={xmasPot[0].height}/>
			</div>
      </div>
			</div>
		</div>
	);
}

export default SavingsOverview;
