import React from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import FormSteps from "../FormSteps";
import FormDescription from "../FormDescription";
import Heading from "../Heading";
import FormInput from "../FormInput";
import SubmitButton from "../SubmitButton";

const Expenses = () => {
  return (
    <>
      <FormSteps />
      <Heading />
      <FormDescription />
      <FormInput />
      <SubmitButton />
    </>
  );
};

export default Expenses;
