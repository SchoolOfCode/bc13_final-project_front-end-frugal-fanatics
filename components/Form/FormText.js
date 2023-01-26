import React from "react";

const FormText = ({ step, question, description }) => {
	return (
		<>
			<h2 className="font-sans text-lg font-medium tracking-wide text-[#8C939D]">
				Step {step} of 3
			</h2>
			<h1
				className="text-[27px] text-[#EDEDEE]"
				style={{ fontFamily: "Shapiro Welter Wide", fontWeight: "400" }}
			>
				{question}
			</h1>
			<p className="font-sans text-lg font-normal leading-8 text-[#AFB5BE]">
				{description}
			</p>
		</>
	);
};

export default FormText;
