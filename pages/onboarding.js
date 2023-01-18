import { useState, useEffect } from "react";
import { extractLabels } from "../utils/helpers";
import { useRouter } from "next/router";
import { steps } from "../utils/navigation";
import { formInputShape } from "../data/states";
import FormButton from "./../components/FormButton";
import LandingLayout from "../components/LandingLayout";
import LandingContainer from "../components/LandingContainer";
import FormContainer from "../components/FormContainer";
import FormInput from "./../components/FormInput";
import FormText from "./../components/FormText";
import FormSteps from "./../components/FormSteps";
import {
	handleChange1,
	handleChange2,
	handleChange3,
	handleSubmit1,
	handleSubmit2,
	handleSubmit3,
} from "../utils/helpers";
import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import {
	useSession,
	useUser,
	useSupabaseClient,
} from "@supabase/auth-helpers-react";

export default function Onboarding({ data, setData }) {
	const router = useRouter();
	const [formInput, setFormInput] = useState(formInputShape);
	const [formStep, setFormStep] = useState(1);
	const nextFormStep = () => setFormStep((currentStep) => currentStep + 1);
	const labels = extractLabels(data.expenses);
	const [isFormComplete, setIsFormComplete] = useState(false);
	const supabase = useSupabaseClient();
	const session = useSession();
	const user = useUser();
	
	useEffect(() => {
		if (session && !isFormComplete) {
			router.push("/savings");
		}
		// Tried to force auth to default to sign up rather than sign in
		// This doesn't work could potentialy revisit this to improve UX

		// if (!session && isFormComplete) {
		// 	router.push("#auth-sign-up");
		// }
		if (session && isFormComplete) {
			handleSubmit(formInput, router);
		}
	}, [session, isFormComplete]);
	
	async function updateProfile(formInput) {
		try {
			const savingsUpdates = {
				user_id: user.id,
				savings_total: formInput.savings.total,
				savings_goal: formInput.savings.goal,
				inserted_at: new Date().toISOString(),
			};
			let { error } = await supabase.from("savings").insert(savingsUpdates);
			if (error) throw error;
			// alert("Profile updated!");
		} catch (error) {
			// alert("Error updating the data!");
			console.log(error);
		}
		try {
			const expensesUpdates = {
				user_id: user.id,
				expenses_type: formInput.expenses.type,
				expenses_amount: formInput.expenses.amount,
				inserted_at: new Date().toISOString(),
			};
			let { error } = await supabase.from("savings").insert(expensesUpdates);
			if (error) throw error;
			// alert("Profile updated!");
		} catch (error) {
			// alert("Error updating the data!");
			console.log(error);
		}
		try {
			const incomeUpdates = {
				user_id: user.id,
				total_income: formInput.income.total,
				inserted_at: new Date().toISOString(),
			};
			let { error } = await supabase.from("savings").insert(incomeUpdates);
			if (error) throw error;
			// alert("Profile updated!");
		} catch (error) {
			// alert("Error updating the data!");
			console.log(error);
		}
	}

	const handleSubmit = (formInput, router) => {
		updateProfile(formInput);
		router.push("/savings");
	};
	
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
