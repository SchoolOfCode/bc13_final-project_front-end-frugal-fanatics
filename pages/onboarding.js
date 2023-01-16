import { useState, useEffect } from "react";
import { extractLabels } from "../utils/helpers";
import { useRouter } from "next/router";
import { steps } from "../utils/navigation";
import { formInputShape } from "../data/states";
import FormButton from "../components/OnboardingComponents/FormButton"
import LandingLayout from "../components/OnboardingComponents/LandingLayout";
import LandingContainer from "../components/OnboardingComponents/LandingContainer";
import FormContainer from "../components/OnboardingComponents/FormContainer";
import FormInput from "../components/OnboardingComponents/FormInput";
import FormText from "../components/OnboardingComponents/FormText";
import FormSteps from "../components/OnboardingComponents/FormSteps";
import {
	handleChange1,
	handleChange2,
	handleChange3,
	handleSubmit1,
	handleSubmit2,
	handleSubmit3,
} from "../utils/helpers";

export default function LandingPage({ data, setData }) {
	const router = useRouter();
	const [formInput, setFormInput] = useState(formInputShape);
	const [formStep, setFormStep] = useState(1);
	const nextFormStep = () => setFormStep((currentStep) => currentStep + 1);
	const labels = extractLabels(data.expenses);

	return (
		<LandingLayout>
			<LandingContainer>
				<FormContainer>
					<FormSteps steps={steps} />
					{formStep === 1 && (
						<form
							className="flex flex-col gap-5"
							onSubmit={(e) =>
								handleSubmit1(e, formInput, data, setData, steps, nextFormStep)
							}
						>
							<FormText
								step="1"
								question="What's your income after tax?"
								description="Gastropub hoodie vegan air plant kickstarter ascot 
								adipisicing, hoodie twee small batch incididunt fit freegan meh."
							/>
							<div className="py-5">
								<FormInput
									text="Total Income (per month)"
									handleChange={handleChange1}
									formInput={formInput}
									setFormInput={setFormInput}
								/>
								<FormButton text="Next step" />
							</div>
						</form>
					)}
					{formStep === 2 && (
						<form
							className="flex flex-col gap-5"
							onSubmit={(e) =>
								handleSubmit2(e, formInput, data, setData, steps, nextFormStep)
							}
						>
							<FormText
								step="2"
								question="What are your expenses?"
								description="Gastropub hoodie vegan air plant kickstarter ascot
									adipisicing, hoodie twee small batch incididunt fit freegan meh."
							/>
							<div className="py-5">
								<div className="flex flex-col gap-8">
									{labels.map((label, i) => (
										<FormInput
											key={i}
											text={label}
											handleChange={handleChange2}
											formInput={formInput}
											setFormInput={setFormInput}
											labels={labels}
											id={i}
										/>
									))}
								</div>
								<FormButton text="Almost there" />
							</div>
						</form>
					)}
					{formStep === 3 && (
						<form
							className="flex flex-col gap-5"
							onSubmit={(e) =>
								handleSubmit3(e, formInput, data, setData, steps, router)
							}
						>
							<FormText
								step="3"
								question="Do you have any savings?"
								description="Gastropub hoodie vegan air plant kickstarter ascot 
								adipisicing, hoodie twee small batch incididunt fit freegan meh."
							/>
							<div className="py-5">
								<div className="flex flex-col gap-8">
									<FormInput
										id="total"
										text="Total savings"
										handleChange={handleChange3}
										formInput={formInput}
										setFormInput={setFormInput}
									/>
									<FormInput
										id="goal"
										text="Savings goal"
										handleChange={handleChange3}
										formInput={formInput}
										setFormInput={setFormInput}
									/>
								</div>
								<FormButton text="Get your tailored results" />
							</div>
						</form>
					)}
				</FormContainer>
			</LandingContainer>
		</LandingLayout>
	);
}
