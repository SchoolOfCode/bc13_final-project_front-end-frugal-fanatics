/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useState, useEffect } from "react";
import { PlusCircleIcon } from "@heroicons/react/24/outline";

const TotalSavings = ({ data }) => {
  const totalSavings = data.savings.total.toLocaleString("en-GB");
  const savingsGoal = data.savings.goal.toLocaleString("en-GB");
  const percentage = Math.ceil((data.savings.total / data.savings.goal) * 100);
  const [barWidth, setBarWidth] = useState(0);
  useEffect(() => {
    setBarWidth(percentage);
  }, [percentage, barWidth]);
  const [addToSavingsPot, setAddToSavingsPot] = useState(false)

  return (
    <section className="stack flex w-full flex-col gap-4 rounded-2xl bg-[#212637] px-12 py-9 pb-10 xl:w-full">
      <div className="flex justify-between">
        <h2
          className="text-2xl font-medium leading-none text-[#EDEDEE]"
          style={{ fontFamily: "Shapiro Welter Wide", fontWeight: "400" }}
        >
          Total Savings
        </h2>
        <button className="flex items-center gap-2 rounded-lg py-2.5 pr-6 pl-4" onClick={}>
          <PlusCircleIcon className="h-5.5 w-6" />
          <p className="text-base tracking-wide text-[#EDEDEE]">
            {" "}
            Add Savings{" "}
          </p>
        </button>
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex items-end gap-2">
          <p
            className="text-lg leading-none text-[#EDEDEE] sm:text-3xl md:text-[40px]"
            style={{ fontFamily: "Shapiro Welter Extd", fontWeight: "400" }}
          >
            £{totalSavings}.00
          </p>
          <p
            className="translate-y-[-1px] text-sm leading-none text-[#7C848F] sm:text-2xl md:translate-y-[2px] md:text-3xl"
            style={{ fontFamily: "Shapiro Welter Extd", fontWeight: "400" }}
          >
            / £{savingsGoal}.00
          </p>
        </div>

        <div className="h-3 w-full bg-[#3D4767]">
          <div
            style={{
              width: `${barWidth}%`,
              transition: "width 1s ease-in-out",
            }}
            className="h-full bg-[#10B981] transition-transform"
          ></div>
        </div>
      </div>
    </section>
  );
};
export default TotalSavings;
