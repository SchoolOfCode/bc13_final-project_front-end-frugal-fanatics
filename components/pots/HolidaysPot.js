import React from "react";
import HolidaysDonut from "../donuts/HolidaysDonut";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import palmtree from "/public/palmtree.png"

const holidaysPot = [
  { label: "Holiday", total: 340, goal: 1000, img: palmtree, width: 98, height: 82, alt: "Cartoon palm trees", color: "#AFF192" },]

const HolidaysPot = ({}) => {
		
	
  return (
    <div className="flex flex-col items-center gap-5 ">
      <div className="relative h-[180px] w-[180px]">
	  <div className="absolute left-1/2 top-1/2 h-full w-full translate-y-[-50%] translate-x-[-50%]">
      <HolidaysDonut data={holidaysPot}/>
	  </div>
      <div className="absolute top-1/4 left-1/4">
				<Image src={holidaysPot[0].img} alt={holidaysPot[0].alt} width={holidaysPot[0].width} height={holidaysPot[0].height}/>
			</div>
      </div>
      <h3 className="mb-[-7px] text-xl font-medium text-[#EDEDEE]">{holidaysPot[0].label}</h3>
      <div className="flex flex-col items-center gap-3">
        <p className="font-light tracking-wide text-[#EDEDEE]">
          Progress: £{holidaysPot[0].goal-holidaysPot[0].total}
        </p>
        <p className="font-light tracking-wide text-[#EDEDEE]">Goal: £{holidaysPot[0].goal}</p>
      </div>
      <button className="flex items-center gap-2 rounded-lg py-2.5 pr-6 pl-4" color={holidaysPot[0].color}>
        <PlusCircleIcon className="h-5.5 w-6" color={holidaysPot[0].color} />
        <p className="text-base tracking-wide text-[#EDEDEE]"> Add Savings </p>
      </button>
    </div>
  );
}

export default HolidaysPot;