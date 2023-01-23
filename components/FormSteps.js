import React from "react";
import { classNames } from "../utils/helpers";
import { CheckIcon } from "@heroicons/react/20/solid";

const FormSteps = ({ steps }) => {
	return (
		<nav aria-label="Progress" className="pb-10">
			<ol role="list" className="flex items-center justify-between">
				{steps.map((step, stepIdx) => (
					<li
						key={step.name}
						className={classNames(
							stepIdx !== steps.length - 1 ? "w-full pr-8 sm:pr-20" : "",
							"relative"
						)}
					>
						{step.status === "complete" ? (
							<>
								<div
									className="absolute inset-0 flex items-center"
									aria-hidden="true"
								>
									<div className="h-[3px] w-full bg-[#108F68]" />
								</div>
								<a
									href="#"
									className="relative flex h-9 w-9 items-center justify-center rounded-full bg-[#108F68]"
								>
									<CheckIcon
										className="h-5 w-5 text-white"
										aria-hidden="true"
									/>
									<span className="sr-only">{step.name}</span>
								</a>
							</>
						) : step.status === "current" ? (
							<>
								<div
									className="absolute inset-0 flex items-center"
									aria-hidden="true"
								>
									<div className="h-[3px] w-full bg-[#404760]" />
								</div>
								<a
									href="#"
									className="relative flex h-9 w-9 items-center justify-center rounded-full border-[3px] border-[#108F68] bg-[#212637]"
									aria-current="step"
								>
									<span
										className="h-3 w-3 rounded-full bg-[#108F68]"
										aria-hidden="true"
									/>
									<span className="sr-only">{step.name}</span>
								</a>
							</>
						) : (
							<>
								<div
									className="absolute inset-0 flex items-center"
									aria-hidden="true"
								>
									<div className="h-[3px] w-full bg-[#212637]" />
								</div>
								<a
									href="#"
									className="group relative flex h-9 w-9 items-center justify-center rounded-full border-[3px] border-[#404760] bg-[#212637]"
								>
									<span
										className="h-3 w-3 rounded-full bg-transparent group-hover:bg-slate-300"
										aria-hidden="true"
									/>
									<span className="sr-only">{step.name}</span>
								</a>
							</>
						)}
					</li>
				))}
			</ol>
		</nav>
	);
};

export default FormSteps;
