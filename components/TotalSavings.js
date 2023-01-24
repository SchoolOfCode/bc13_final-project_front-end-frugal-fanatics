/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Fragment, useRef, useState, useEffect } from "react";
import { PlusCircleIcon } from "@heroicons/react/24/outline";

import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/outline";

const TotalSavings = ({ data }) => {
  const totalSavings = data.savings.total.toLocaleString("en-GB");
  const savingsGoal = data.savings.goal.toLocaleString("en-GB");
  const percentage = Math.ceil((data.savings.total / data.savings.goal) * 100);
  const [barWidth, setBarWidth] = useState(0);
  useEffect(() => {
    setBarWidth(percentage);
  }, [percentage, barWidth]);
  const [addToSavingsPot, setAddToSavingsPot] = useState(false);

  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef(null);

  const [updatedSavings, setUpdatedSavings] = useState({
    savingsTotal: 0,
    savingsGoal: 0,
  });

  const handleChangeTotal = () => {};

  useEffect(() => {
    console.log(updatedSavings);
  }, [updatedSavings]);

  const handleChangeGoal = (event) => {
    setUpdatedSavings({ ...updatedSavings, savingsGoal: event.target.value });
  };

  return (
    <section className="stack flex w-full flex-col gap-4 rounded-2xl bg-[#212637] px-12 py-9 pb-10 xl:w-full">
      <div className="flex justify-between">
        <h2
          className="text-2xl font-medium leading-none text-[#EDEDEE]"
          style={{ fontFamily: "Shapiro Welter Wide", fontWeight: "400" }}
        >
          Total Savings
        </h2>
        <button
          className="flex items-center gap-2 rounded-lg py-2.5 pr-6 pl-4"
          onClick={() => setOpen(true)}
        >
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

      {/* ******************** */}

      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-[#1A1E2C] bg-opacity-90 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative flex transform flex-col gap-6 overflow-hidden rounded-lg bg-[#212637] px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div className="">
                    <div className="mt-3 flex flex-col gap-2 text-center sm:mt-5">
                      <Dialog.Title
                        as="h3"
                        className="text-left text-2xl font-medium leading-6 text-[#EDEDEE]"
                        style={{
                          fontFamily: "Shapiro Welter Wide",
                          fontWeight: "400",
                        }}
                      >
                        Update Savings
                      </Dialog.Title>
                      <div className="mt-2">
                        <p
                          className="text-left text-base text-slate-400"
                          style={{
                            fontFamily: "sans-serif",
                            fontWeight: "500",
                          }}
                        >
                          Add to your savings progress or update your total
                          savings goal!
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* ------------------- */}
                  <div
                    style={{
                      fontFamily: "sans-serif",
                      fontWeight: "400",
                    }}
                  >
                    <label
                      htmlFor="price"
                      className="block font-sans text-base font-medium leading-8 text-[#dfdfe2]"
                    >
                      Add New Savings
                    </label>
                    <div className="relative mt-2 h-[58px] rounded-md">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex  items-center pl-3">
                        <span className="flex h-[58px] items-center pl-2 text-xl text-[#dfdfe2]">
                          £
                        </span>
                      </div>
                      <input
                        type="number"
                        name="price"
                        className="block h-[58px] w-full rounded-lg border-0 bg-[#282E43] pl-11 pr-4 text-xl placeholder:font-medium placeholder:text-[#646A7E] focus:ring-2 focus:ring-indigo-500"
                        placeholder="0"
                      />
                    </div>
                  </div>
                  <div
                    style={{
                      fontFamily: "sans-serif",
                      fontWeight: "400",
                    }}
                  >
                    <label
                      htmlFor="price"
                      className="block font-sans text-base font-medium leading-8 text-[#dfdfe2]"
                    >
                      {"Update Savings Goal (optional)"}
                    </label>
                    <div className="relative mt-2 h-[58px] rounded-md">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex  items-center pl-3">
                        <span className="flex h-[58px] items-center pl-2 text-xl text-[#dfdfe2]">
                          £
                        </span>
                      </div>
                      <input
                        type="number"
                        className="block h-[58px] w-full rounded-lg border-0 bg-[#282E43] pl-11 pr-4 text-xl placeholder:font-medium placeholder:text-[#646A7E] focus:ring-2 focus:ring-indigo-500"
                        placeholder="0"
                        value={updatedSavings.savingsGoal}
                        onChange={handleChangeGoal}
                      />
                    </div>
                  </div>
                  {/* ------------------ */}
                  <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                    <button
                      type="button"
                      className="hover:149C72 inline-flex h-[48px] w-full items-center justify-center rounded-md border border-transparent bg-[#149C72] px-4 py-2 pt-[9px] font-medium text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:col-start-2 sm:text-sm"
                      onClick={() => setOpen(false)}
                      style={{
                        fontFamily: "sans-serif",
                        fontWeight: "600",
                        fontSize: "16px",
                      }}
                    >
                      Update Savings
                    </button>
                    <button
                      type="button"
                      className="mt-3 inline-flex h-[48px] w-full items-center justify-center rounded-md bg-[#2b3144] px-4 py-2 pt-[9px] text-xl font-medium text-[#EDEDEE] focus:outline-none sm:col-start-1 sm:mt-0 sm:text-sm"
                      onClick={() => setOpen(false)}
                      ref={cancelButtonRef}
                      style={{
                        fontFamily: "sans-serif",
                        fontWeight: "600",
                        fontSize: "16px",
                      }}
                    >
                      Cancel
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </section>
  );
};
export default TotalSavings;
