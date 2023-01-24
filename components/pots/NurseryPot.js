import React from "react";
import NurseryDonut from "../donuts/NurseryDonut";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import baby from "/public/baby.png";

const nurseryPot= [{ label: "Nursery", total: 1200, goal: 5000, img: baby, width: 98, height: 82, alt: "A cartoon baby bottle and baby grow", color: "#B884FF"},]

const NurseryPot = ({}) => {
		
	
  return (
    <div className="flex flex-col items-center gap-5 ">
      <div className="relative h-[180px] w-[180px]">
	  <div className="absolute left-1/2 top-1/2 h-full w-full translate-y-[-50%] translate-x-[-50%]">
      <NurseryDonut/>
	  </div>
      <div className="absolute top-1/4 left-1/4">
				<Image src={nurseryPot[0].img} alt={nurseryPot[0].alt} width={nurseryPot[0].width} height={nurseryPot[0].height}/>
			</div>
      </div>
      <h3 className="mb-[-7px] text-xl font-medium text-[#EDEDEE]">{nurseryPot[0].label}</h3>
      <div className="flex flex-col items-center gap-3">
        <p className="font-light tracking-wide text-[#EDEDEE]">
          Progress: £{nurseryPot[0].goal-nurseryPot[0].total}
        </p>
        <p className="font-light tracking-wide text-[#EDEDEE]">Goal: £{nurseryPot[0].goal}</p>
      </div>
      <button className="flex items-center gap-2 rounded-lg py-2.5 pr-6 pl-4" color={nurseryPot[0].color}>
        <PlusCircleIcon className="h-5.5 w-6" color={nurseryPot[0].color} />
        <p className="text-base tracking-wide text-[#EDEDEE]"> Add Savings </p>
      </button>
    </div>
  );
}

export default NurseryPot;