import React from "react";
import SavingsDonut from "./SavingsDonut";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const SavingsPot = ({ title, progress, goal, data, image, width, height, alt,color}) => {
	
  return (
    <div className="flex flex-col items-center gap-5 ">
      <div className="relative h-[180px] w-[180px]">
      <SavingsDonut data={data}/>
      <div className="absolute top-1/4 left-1/4">
				<Image src={image} alt={alt} width={width} height={height}/>
			</div>
      </div>
      <h3 className="mb-[-7px] text-xl font-medium">{title}</h3>
      <div className="flex flex-col items-center gap-3">
        <p className="font-light tracking-wide text-slate-500">
          Progress: £{progress}
        </p>
        <p className="font-light tracking-wide text-slate-500">Goal: £{goal}</p>
      </div>
      <button className="flex items-center gap-2 rounded-lg py-2.5 pr-6 pl-4" style={color={color}}>
        <PlusCircleIcon className="h-5.5 w-6" style={color={color}} />
        <p className="text-base tracking-wide"> Add Savings </p>
      </button>
    </div>
  );
};

export default SavingsPot;

