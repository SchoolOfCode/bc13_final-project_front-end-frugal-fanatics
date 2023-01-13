import React from "react";
import { ArrowRightIcon } from "@heroicons/react/20/solid";

const FormButton = ({ text, onClick }) => {
	return (
		<button
			type="submit"
			className="mt-16 inline-flex items-center justify-center rounded-lg border-2 border-slate-800 bg-white
										px-7 py-2.5 text-lg font-normal tracking-wide text-slate-800 transition-colors hover:bg-slate-900 
										hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
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
