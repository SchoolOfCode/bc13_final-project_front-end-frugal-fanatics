import React from "react";
const FormText = ({ step, question, description }) => {
	return (
		<>
			<h2 className="font-light tracking-wide text-[#B0B6C0]">
				Step {step} of 3
			</h2>
			<h1
				className="text-[27px] text-slate-800"
				style={{ fontFamily: "Shapiro Middle Wide", weight: "500" }}
			>
				{question}
			</h1>
			<p className="text-[17.5px] font-light leading-8 tracking-wide text-slate-500">
				{description}
			</p>
		</>
	);
};

export default FormText;
