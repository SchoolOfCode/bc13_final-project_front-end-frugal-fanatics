import React from "react";
import "react-step-progress-bar/styles.css";
import FormSteps from "../FormSteps";
import Heading from "../Heading";
import SubHeading from "../SubHeading";
import FormInput from "../FormInput";
import SubmitButton from "../SubmitButton";

const Income = ({ formStep, nextFormStep, formInput, setFormInput }) => {
  const handleChange = (e) => {
    setFormInput({ ...formInput, totalIncome: e.target.value });
  };

  return (
    <>
      <FormSteps formstep={formStep} />
      <Heading title="What's your income after tax?" />
      <SubHeading subHeading="Gastropub hoodie vegan air plant kickstarter ascot adipisicing, hoodie twee small batch incididunt fit freegan meh." />

      {/* Need to create a Form that wraps the input and the button */}

      <div className="flex w-4/5 flex-col pt-4">
        <label className="pb-2">Total Income (per month) </label>
        <input
          handleChange={handleChange}
          placeholder="0"
          type="number"
          onChange={handleChange}
          className="h-12 w-full rounded-md bg-gray-200 p-4"
          defaultValue="£"
        ></input>
      </div>

      <div>
        <button
          className="text-1xl mt-12 w-max rounded-md border border-black p-2"
          onClick={nextFormStep}
        >
          Next Step
        </button>
      </div>
    </>
  );
};

export default Income;
