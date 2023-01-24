const FormContainer = ({ children }) => {
	return (
		<section className="flex w-[540px] flex-col gap-6 px-6 pb-40 pt-16 md:px-0">
			{children}
		</section>
	);
};

export default FormContainer;
