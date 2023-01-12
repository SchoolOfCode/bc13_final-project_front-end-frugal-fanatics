import React from "react";
import { extractLabels } from "../utils/helpers";

const FormInput = ({
	handleSubmit,
	formStep,
	nextFormStep,
	formInput,
	title,
	setFormInput,
	data,
}) => {
	const labels = extractLabels(data.expenses);
	const handleChange1 = (e) => {
		setFormInput({ ...formInput, totalIncome: e.target.value });
	};

	const handleChange2 = (e) => {
		// formInput.expenses.forEach((e, i) => {
		// 	formInput.expenses = labels[i]
		// })
		setFormInput({
			...formInput,
			expenses: formInput.expenses.map((e, i) => {
				return { ...expenses[i], amount: e.target.value };
			}),
		});
	};

	return (
		<form onClick={handleSubmit}>
			<h1>{formStep}</h1>
			{/* Total Income (per month) onClick={handleSubmit} onChange={handleChange} array of labels for step 2, and array of savings data for step 3 */}

			{formStep === 0 && (
				<div>
					<label className="pb-2">{title} </label>
					<input
						placeholder="0"
						type="number"
						onChange={handleChange1}
						className="h-12 w-full rounded-md bg-gray-200 p-4"
					></input>
				</div>
			)}
			{formStep === 1 &&
				labels.map((label) => {
					<>
						<label className="pb-2">{label}</label>
						<input
							placeholder="0"
							type="number"
							onChange={handleChange2}
							className="h-12 w-full rounded-md bg-gray-200 p-4"
						></input>
					</>;
				})}

			<button
				className="text-1xl mt-12 w-max rounded-md border border-black p-2"
				onClick={nextFormStep}
			>
				Next Step
			</button>
		</form>
	);
};

export default FormInput;

// {
// 	formStep == 1 && (
// 		<Expenses
// 			formStep={formStep}
// 			nextFormStep={nextFormStep}
// 			formInput={formInput}
// 			setFormInput={setFormInput}
// 		/>
// 	);
// }
// {
// 	formStep == 2 && (
// 		<Savings
// 			formStep={formStep}
// 			nextFormStep={nextFormStep}
// 			formInput={formInput}
// 			setFormInput={setFormInput}
// 		/>
// 	);
// }
// {
// 	formStep > 2 && <FormCompleted />;
// }
