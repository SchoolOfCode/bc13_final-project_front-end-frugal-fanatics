import React from "react";
const FormText = ({ question, description }) => {
	return (
		<>
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
