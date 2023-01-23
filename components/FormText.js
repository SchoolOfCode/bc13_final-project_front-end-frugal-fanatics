import React from "react";
const FormText = ({ step, question, description }) => {
	return (
		<>
			<h2 className="font-medium tracking-wide text-[#606A77]">
				Step {step} of 3
			</h2>
			<h1
				className="text-[27px] text-[#EDEDEE]"
				style={{ fontFamily: "Shapiro Middle Wide", weight: "500" }}
			>
				{question}
			</h1>
			<p className="text-[17.5px] font-normal leading-8 tracking-wide text-[#8C939D]">
				{description}
			</p>
		</>
	);
};

export default FormText;
