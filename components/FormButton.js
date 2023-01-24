import React from "react";
import { ArrowRightIcon } from "@heroicons/react/20/solid";

const FormButton = ({ text }) => {
	return (
		<button
			type="submit"
			className="mt-16 inline-flex items-center justify-center rounded-lg border-2 border-[#108F68] bg-[#108F68] px-7 py-2.5 font-sans text-lg font-medium tracking-wide text-white transition-colors hover:border-[#10B981] hover:bg-[#10B981] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
		>
			{text}
			<ArrowRightIcon
				className="ml-1.5 -mr-1 h-6 w-6 translate-y-px"
				aria-hidden="true"
			/>
		</button>
	);
};

export default FormButton;
