import { useState } from "react";
import { useRouter } from "next/router";
import { formInputShape } from "../data/states";
import FormButton from "./../components/FormButton";
import LandingLayout from "../components/LandingLayout";
import LandingContainer from "../components/LandingContainer";
import FormContainer from "../components/FormContainer";
import FormInput from "./../components/FormInput";
import FormText from "./../components/FormText";

export default function LandingPage({ data, setData }) {
	const router = useRouter();
	const [formInput, setFormInput] = useState(formInputShape);

	const handleChange = (e, formInput, setFormInput) => {
		if (e.target.id === "total") {
			const updatedSavings = { ...formInput.savings, total: +e.target.value };
			setFormInput({ ...formInput, savings: updatedSavings });
		}
		if (e.target.id === "goal") {
			const updatedSavings = { ...formInput.savings, goal: +e.target.value };
			setFormInput({ ...formInput, savings: updatedSavings });
		}
	};

	const handleSubmit = (e, formInput, data, setData, router) => {
		e.preventDefault();
		setData({ ...data, savings: formInput.savings });
		router.push("/savings");
	};

	return (
		<LandingLayout>
			<LandingContainer>
				<FormContainer>
					<form
						className="flex flex-col gap-5"
						onSubmit={(e) => handleSubmit(e, formInput, data, setData, router)}
					>
						<FormText
							question="Do you have any savings?"
							description="Gastropub hoodie vegan air plant kickstarter ascot 
								adipisicing, hoodie twee small batch incididunt fit freegan meh."
						/>
						<div className="py-5">
							<div className="flex flex-col gap-8">
								<FormInput
									id="total"
									text="Total savings"
									handleChange={handleChange}
									formInput={formInput}
									setFormInput={setFormInput}
								/>
								<FormInput
									id="goal"
									text="Savings goal"
									handleChange={handleChange}
									formInput={formInput}
									setFormInput={setFormInput}
								/>
							</div>
							<FormButton text="Get your tailored results" />
						</div>
					</form>
				</FormContainer>
			</LandingContainer>
		</LandingLayout>
	);
}
