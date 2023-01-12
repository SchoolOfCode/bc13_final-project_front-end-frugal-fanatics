import React from "react";
import "react-step-progress-bar/styles.css";
import FormSteps from "../FormSteps";
import Heading from "../Heading";
import SubHeading from "../SubHeading";
import FormInput from "../FormInput";
import SubmitButton from "../SubmitButton";

const Expenses = ({ formStep, nextFormStep }) => {
	return (
		<>
			<FormSteps formstep={formStep} />
			<Heading title="What are your expenses?" />
			<SubHeading subHeading="Gastropub hoodie vegan air plant kickstarter ascot adipisicing, hoodie twee small batch incididunt fit freegan meh." />
			{/* <FormInput labelname="Rent or Mortgage (per month)" placeholder="" />
      <FormInput labelname="Food and Groceries (per month)" placeholder="" />
      <FormInput labelname="Home Energy Bills (per month)" placeholder="" />
      <FormInput labelname="Council Tax (per month)" placeholder="" />
      <FormInput labelname="Credit Payments (per month)" placeholder="" /> */}
			<SubmitButton nextFormStep={nextFormStep} buttonText="Almost there ->" />
		</>
	);
};

export default Expenses;
