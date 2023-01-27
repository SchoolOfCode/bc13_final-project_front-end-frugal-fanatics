import { useEffect, useState } from "react";
import Image from "next/image";
import { Tab } from "@headlessui/react";
import clsx from "clsx";

import { FeaturesContainer } from "../Features/FeaturesContainer";
import screenshotOverview from "../../images/screenshots/edited_overview.png";
import screenshotBudgeting from "../../images/screenshots/edited_budget.png";
import screenshotSavings from "../../images/screenshots/edited_pots.png";

const features = [
	{
		title: "Overview",
		description:
			"Obtain a personalised dashboard of your current budget position.",
		image: screenshotOverview,
	},
	{
		title: "Budgeting",
		description: "Get a comprehensive visualisation of your spending habits.",
		image: screenshotBudgeting,
	},
	{
		title: "Savings",
		description:
			"Break up your saving targets and assign imagery to motivate and push you to your goals.",
		image: screenshotSavings,
	},
];

export function FeaturesSection() {
	let [tabOrientation, setTabOrientation] = useState("horizontal");

	useEffect(() => {
		let lgMediaQuery = window.matchMedia("(min-width: 1024px)");

		function onMediaQueryChange({ matches }) {
			setTabOrientation(matches ? "vertical" : "horizontal");
		}

		onMediaQueryChange(lgMediaQuery);
		lgMediaQuery.addEventListener("change", onMediaQueryChange);

		return () => {
			lgMediaQuery.removeEventListener("change", onMediaQueryChange);
		};
	}, []);

	return (
		<section
			id="features"
			aria-label="Features for running your books"
			className="relative overflow-hidden pt-[10vw] pb-28 sm:py-32"
		>
			{/* <div className="absolute top-1/2 left-1/2 h-[1636px] w-[2245px] max-w-none translate-x-[-44%] translate-y-[-42%] bg-[#ae8ffe]/5" /> */}
			<FeaturesContainer className="relative">
				<div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
					<h2
						className="font-display text-[7vw] tracking-tight text-white lg:text-[2.8vw]"
						style={{ fontFamily: "Shapiro Light Heavy Wide" }}
					>
						Manage your
						{/* <span className="bg-gradient-to-b from-[#7bc0fd] to-[#5AB2FF] bg-clip-text text-transparent"> */}{" "}
						budget
						{/* </span> */} and
						{/* <span className="bg-gradient-to-b from-[#ae8ffe] to-[#A27EFF] bg-clip-text text-transparent"> */}{" "}
						savings
						{/* </span> */}
					</h2>
					<p className="mt-6 text-[3.9vw] text-slate-300 lg:text-[1.25vw] lg:leading-[1vw]">
						Let the Frumo app, help you visualise your choices and plan for your
						future.
					</p>
				</div>
				<Tab.Group
					as="div"
					className="mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0"
					vertical={tabOrientation === "vertical"}
				>
					{({ selectedIndex }) => (
						<>
							<div className="-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5">
								<Tab.List className="relative z-10 flex gap-x-4 whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal">
									{features.map((feature, featureIndex) => (
										<div
											key={feature.title}
											className={clsx(
												"group relative rounded-lg py-1 px-6 lg:rounded-r-none lg:rounded-l-xl lg:py-[2vw] lg:px-[2.4vw] 2xl:py-8 2xl:px-12",
												selectedIndex === featureIndex
													? "bg-[#4D29AB] lg:bg-[#202638]"
													: "hover:bg-[#2b334c] lg:hover:bg-[#202638]/50"
											)}
										>
											<h3>
												<Tab
													className={clsx(
														"font-display focus:outline-none lg:text-[1.5vw] 2xl:text-[24px]",
														selectedIndex === featureIndex
															? "text-white"
															: "text-slate-300 hover:text-white lg:text-white"
													)}
													style={{ fontFamily: "Shapiro Middle Wide" }}
												>
													<span className="absolute inset-0 rounded-full lg:rounded-r-none lg:rounded-l-xl" />
													{feature.title}
												</Tab>
											</h3>
											<p className="mt-2 hidden text-sm text-slate-300 lg:block lg:text-[1.1vw] lg:leading-[1.8vw] 2xl:text-[18px] 2xl:leading-8">
												{feature.description}
											</p>
										</div>
									))}
								</Tab.List>
							</div>
							<Tab.Panels className="lg:col-span-7">
								{features.map((feature) => (
									<Tab.Panel key={feature.title} unmount={false}>
										<div className="relative sm:px-6 lg:hidden">
											<div className="absolute -inset-x-4 top-[-6.5rem] bottom-[-3.25rem] bg-[#202638] sm:inset-x-0 sm:rounded-t-xl" />
											<p className="relative mx-auto max-w-2xl text-[3vw] text-slate-300 sm:text-center">
												{feature.description}
											</p>
										</div>
										<div className="mt-14 w-[45rem] overflow-hidden rounded-2xl bg-[#181D29] shadow-xl shadow-black/10 sm:w-auto lg:mt-0 lg:w-[67.8125rem]">
											<Image
												className=" w-full"
												src={feature.image}
												alt=""
												priority
												sizes="(min-width: 1024px) 67.8125rem, (min-width: 640px) 100vw, 45rem"
											/>
										</div>
									</Tab.Panel>
								))}
							</Tab.Panels>
						</>
					)}
				</Tab.Group>
			</FeaturesContainer>
		</section>
	);
}
