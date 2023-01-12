import React from "react";
import "react-step-progress-bar/styles.css";
import FormSteps from "../FormSteps";
import Heading from "../Heading";
import SubHeading from "../SubHeading";
import FormInput from "../FormInput";
import SubmitButton from "../SubmitButton";

const Income = ({
	formStep,
	nextFormStep,
	formInput,
	setFormInput,
	setData,
	data,
}) => {
	const handleSubmit = () => {
		setData({ ...data, totalIncome: formInput.totalIncome });
	};

	return (
		<>
			<FormSteps formstep={formStep} />
			<Heading title="What's your income after tax?" />
			<SubHeading subHeading="Gastropub hoodie vegan air plant kickstarter ascot adipisicing, hoodie twee small batch incididunt fit freegan meh." />

			<FormInput
				formStep={formStep}
				handleSubmit={handleSubmit}
				nextFormStep={nextFormStep}
				formInput={formInput}
				setFormInput={setFormInput}
				label="Total Income (per month)"
				data={data}
			/>
		</>
	);
};

export default Income;
