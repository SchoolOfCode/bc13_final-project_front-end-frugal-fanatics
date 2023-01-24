import React, { useState } from "react";
import BirthdaysDonut from "../donuts/BirthdaysDonut";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import presents from "/public/present.png";
import Modal from "react-modal";

const birthdaysPot = [
  {
    label: "Birthday",
    progress: 300,
    goal: 500,
    img: presents,
    width: 98,
    height: 82,
    alt: "A cartoon present with blue ribbons",
    color: "#ABE6FF",
  },
];

const BirthdaysPot = ({}) => {
  // state to keep track of the current progress and goal
  const [progress, setProgress] = useState(birthdaysPot[0].progress);
  const [goal, setGoal] = useState(birthdaysPot[0].goal);
  // state to keep track of whether the modal is open or closed
  const [modalIsOpen, setModalIsOpen] = useState(false);
  // function to open the modal
  const openModal = () => {
    setModalIsOpen(true);
  };
  // function to close the modal
  const closeModal = () => {
    setModalIsOpen(false);
  };
  // function to handle the form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    setProgress(event.target.progress.value);
    setGoal(event.target.goal.value);
    closeModal();
  };

  return (
    <div className="flex flex-col items-center gap-5 ">
      <div className="relative h-[180px] w-[180px]">
        <div className="absolute left-1/2 top-1/2 h-full w-full translate-y-[-50%] translate-x-[-50%]">
          <BirthdaysDonut />
        </div>
        <div className="absolute top-1/4 left-1/4">
          <Image
            src={birthdaysPot[0].img}
            alt="A cartoon present with blue ribbons"
            width={birthdaysPot[0].width}
            height={birthdaysPot[0].height}
          />
        </div>
      </div>
      <h3 className="mb-[-7px] text-xl font-medium text-[#EDEDEE]">
        {birthdaysPot[0].label}
      </h3>
      <div className="flex flex-col items-center gap-3">
        <p className="font-light tracking-wide text-[#EDEDEE]">
          Progress: £{progress}
        </p>
        <p className="font-light tracking-wide text-[#EDEDEE]">Goal: £{goal}</p>
      </div>
      <button
        className="flex items-center gap-2 rounded-lg py-2.5 pr-6 pl-4"
        color={birthdaysPot[0].color}
        onClick={openModal}
      >
        <PlusCircleIcon className="h-5.5 w-6" color={birthdaysPot[0].color} />
        <p className="text-base tracking-wide text-[#EDEDEE]"> Add Savings </p>
      </button>
      <Modal
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
        <div classname="py-6 px-6 lg:px-8 text-left">
          <h1 className="mb-4 text-xl font-medium text-gray-900">
            Add to your pot
          </h1>
          <form className="rounded bg-white p-20" onSubmit={handleSubmit}>
            <label>
              Progress:
              <input type="number" name="progress" defaultValue={progress} />
            </label>
            <label>
              Goal:
              <input type="number" name="goal" defaultValue={goal} />
            </label>
            <button type="submit">Save</button>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default BirthdaysPot;
