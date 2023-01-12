import React from "react";
import "react-step-progress-bar/styles.css";
import FormSteps from "../FormSteps";
import Heading from "../Heading";
import SubHeading from "../SubHeading";
import FormInput from "../FormInput";
import SubmitButton from "../SubmitButton";

const Income = ({ formStep, nextFormStep }) => {
  return (
    <>
      <FormSteps formstep={formStep}/>
      <Heading title="What's your income after tax?" />
      <SubHeading subHeading="Gastropub hoodie vegan air plant kickstarter ascot adipisicing, hoodie twee small batch incididunt fit freegan meh." />
      <FormInput labelname="Total Income (per month)" placeholder="0" />
      <SubmitButton nextFormStep={nextFormStep} buttonText="Next Step ->"/>
    </>
  );
};

export default Income;
