import React from "react";
import SavingsDonut from "./SavingsDonut";
import { PlusCircleIcon } from "@heroicons/react/24/outline";

const SavingsPot = ({ title, progress, goal, data }) => {
  return (
    <div className="flex flex-col items-center gap-5 ">
      <SavingsDonut data={data} />
      <h3 className="mb-[-7px] text-xl font-medium">{title}</h3>
      <div className="flex flex-col items-center gap-3">
        <p className="font-light tracking-wide text-slate-500">
          Progress: £{progress}
        </p>
        <p className="font-light tracking-wide text-slate-500">Goal: £{goal}</p>
      </div>
      <button className="flex items-center gap-2 rounded-lg bg-[#EAFFE0] py-2.5 pr-6 pl-4 transition-colors hover:bg-[#dbfdca]">
        <PlusCircleIcon className="h-5.5 w-6 stroke-[#90D073]" />
        <p className="text-base tracking-wide"> Add Savings </p>
      </button>
    </div>
  );
};

export default SavingsPot;

