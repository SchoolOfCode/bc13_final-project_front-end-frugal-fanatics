import React from "react";
import XmasDonut from "../donuts/XmasDonut";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import xmas from "/public/xmas.png"

const XmasPot = ({}) => {
	
  const xmasPot = [
    { label: "Christmas", total: 300, goal: 750, img: xmas, width: 98, height: 82, alt: "A cartoon santa hat", color: "#FFA59E"},
  ]
	
  return (
    <div className="flex flex-col items-center gap-5 ">
      <div className="relative h-[180px] w-[180px]">
	  <div className="absolute left-1/2 top-1/2 h-full w-full translate-y-[-50%] translate-x-[-50%]">
      <XmasDonut/>
	  </div>
      <div className="absolute top-1/4 left-1/4">
				<Image src={xmasPot[0].img} alt={xmasPot[0].alt} width={xmasPot[0].width} height={xmasPot[0].height}/>
			</div>
      </div>
      <h3 className="mb-[-7px] text-xl font-medium text-[#EDEDEE]">{xmasPot[0].label}</h3>
      <div className="flex flex-col items-center gap-3">
        <p className="font-light tracking-wide text-[#EDEDEE]">
          Progress: £{xmasPot[0].goal-xmasPot[0].total}
        </p>
        <p className="font-light tracking-wide text-[#EDEDEE]">Goal: £{xmasPot[0].goal}</p>
      </div>
      <button className="flex items-center gap-2 rounded-lg py-2.5 pr-6 pl-4" color={xmasPot[0].color}>
        <PlusCircleIcon className="h-5.5 w-6" color={xmasPot[0].color} />
        <p className="text-base tracking-wide text-[#EDEDEE]"> Add Savings </p>
      </button>
    </div>
  );
}

export default XmasPot;