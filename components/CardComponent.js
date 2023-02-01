/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import { savingArticlesData } from "../data/savingsArtData";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";
//button text has a default to read more or you can pass props
function CardComponent({
	imageSrc,
	altSrc,
	title,
	description,
	buttonText = "Read More",
	link,
	ariaLabelSrc,
}) {
	return (
		<a
			href={link}
			target="_blank"
			aria-label={ariaLabelSrc}
			className="group flex w-full justify-center"
		>
			<div className="w-full rounded-2xl bg-[#212637]">
				{/* <a href="#!">
					<Image
						className="rounded-t-lg"
						src={imageSrc}
						alt={altSrc}
						height="368"
						width="full"
					/>
				</a> */}
				<div className="flex w-full flex-col gap-3 px-9 pb-9 pt-10">
					<h3
						className="text-xl font-medium text-[#EDEDEE]"
						style={{ fontFamily: "Shapiro Welter Wide", weight: "400" }}
					>
						{title}
					</h3>
					<p className="font-sans text-base text-[#8c939d]">{description}</p>
					<button
						type="submit"
						className=" mt-4 inline-flex w-[162px] items-center rounded-lg bg-[#353c56] px-6 py-2.5 font-sans text-base font-medium tracking-wide text-[#EDEDEE] transition-colors group-hover:bg-[#4D29AA]"
					>
						<ArrowTopRightOnSquareIcon
							className="mr-1.5 -ml-1 h-6 w-6 translate-y-[-0.5px] text-[#8c939d] "
							aria-hidden="true"
						/>
						{buttonText}
					</button>
				</div>
			</div>
		</a>
	);
}
export default CardComponent;
