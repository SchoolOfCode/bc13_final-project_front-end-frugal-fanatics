import React from "react";
import BirthdaysDonut from "../donuts/BirthdaysDonut";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import presents from "/public/present.png"

const birthdaysPot= [{ label: "Birthday", total: 300, goal: 500, img:presents, width: 98, height: 82, alt: "A cartoon present with blue ribbons", color: "#ABE6FF"},
]

const BirthdaysPot = ({}) => {
		
	
  return (
    <div className="flex flex-col items-center gap-5 ">
      <div className="relative h-[180px] w-[180px]">
	  <div className="absolute left-1/2 top-1/2 h-full w-full translate-y-[-50%] translate-x-[-50%]">
      <BirthdaysDonut/>
	  </div>
      <div className="absolute top-1/4 left-1/4">
				<Image src={birthdaysPot[0].img} alt="A cartoon present with blue ribbons" width={birthdaysPot[0].width} height={birthdaysPot[0].height}/>
			</div>
      </div>
      <h3 className="mb-[-7px] text-xl font-medium text-[#EDEDEE]">{birthdaysPot[0].label}</h3>
      <div className="flex flex-col items-center gap-3">
        <p className="font-light tracking-wide text-[#EDEDEE]">
          Progress: £{birthdaysPot[0].goal-birthdaysPot[0].total}
        </p>
        <p className="font-light tracking-wide text-[#EDEDEE]">Goal: £{birthdaysPot[0].goal}</p>
      </div>
      <button className="flex items-center gap-2 rounded-lg py-2.5 pr-6 pl-4" color={birthdaysPot[0].color}>
        <PlusCircleIcon className="h-5.5 w-6" color={birthdaysPot[0].color} />
        <p className="text-base tracking-wide text-[#EDEDEE]"> Add Savings </p>
      </button>
    </div>
  );
}

export default BirthdaysPot;
