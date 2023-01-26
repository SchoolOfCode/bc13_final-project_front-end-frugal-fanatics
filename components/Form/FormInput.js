import React from "react";
const FormInput = ({
	text,
	handleChange,
	formInput,
	setFormInput,
	id,
	labels,
}) => {
	return (
		<div>
			<label
				htmlFor="price"
				className="block font-sans text-lg font-medium leading-8 text-[#dfdfe2]"
			>
				{text}
			</label>
			<div className="relative mt-2 h-[58px] rounded-md">
				<div className="pointer-events-none absolute inset-y-0 left-0 flex  items-center pl-3">
					<span className="flex h-[58px] items-center pl-2 text-xl text-[#dfdfe2]">
						£
					</span>
				</div>
				<input
					type="number"
					name="price"
					id={id}
					onChange={(e) => handleChange(e, formInput, setFormInput, id, labels)}
					className="block h-[58px] w-full rounded-lg border-0 bg-[#282E43] pl-11 pr-4 text-xl placeholder:font-medium placeholder:text-[#646A7E] focus:ring-2 focus:ring-indigo-500"
					placeholder="0"
				/>
			</div>
		</div>
	);
};
export default FormInput;
