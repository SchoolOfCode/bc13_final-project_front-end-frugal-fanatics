import SavingsPot from "./SavingsPot";
import React from "react";
import baby from '../public/baby.png'
import xmas from "../public/xmas.png"
import palmtree from "../public/palmtree.png"
import presents from "../public/present.png"

const pots = [
	{ label: "Christmas", total: 300, goal: 750, img: xmas, width: 98, height: 82, alt: "A cartoon santa hat", color: "#FFA59E"},
	{ label: "Holiday", total: 340, goal: 1000, img: palmtree, width: 98, height: 82, alt: "Cartoon palm trees", color: "#AFF192" },
	{ label: "Nursery", total: 1200, goal: 5000, img: baby, width: 98, height: 82, alt: "A cartoon baby bottle and baby grow", color: "#B884FF"},
	{ label: "Birthday", total: 300, goal: 500, img:presents, width: 98, height: 82, alt: "A cartoon present with blue ribbons", color: "#ABE6FF"},
  ]

function SavingsPotsSection({ data }) {
	return (
		<section className="flex w-full flex-col gap-10 rounded-2xl bg-white px-12 py-8 pb-14 max-[560px]:items-center xl:w-full">
			<h2 className="text-202834 text-2xl font-medium text-[#202834]">
				Savings Pots
			</h2>
			<div className="flex flex-col gap-10 min-[950px]:flex-row">
			
			{pots.map((pot, i,) => (
			<SavingsPot 
			label={pot.label}
			data={data}
			progress={pot.total}
			goal={pot.goal}
			key={i}
			image={pot.img}
			width={pot.width}
			height={pot.height}
			alt={pot.alt}
			backgroundcolor={pot.color}
			/>
			 ))}	
			</div>
		</section>
	);
}

export default SavingsPotsSection;
