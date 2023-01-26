import clsx from "clsx";

export function FeaturesContainer({ className, ...props }) {
	return (
		<div
			className={clsx("mx-auto px-4 sm:px-6 lg:px-[10vw]", className)}
			{...props}
		/>
	);
}
