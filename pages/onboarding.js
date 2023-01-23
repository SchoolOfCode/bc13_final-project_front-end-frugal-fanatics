import { useState, useEffect } from "react";
import { extractLabels } from "../utils/helpers";
import { useRouter } from "next/router";
import { steps } from "../utils/navigation";
import { formInputState } from "../data/states";
import FormButton from "./../components/FormButton";
import OnboardingLayout from "../components/OnboardingLayout";
import OnboardingContainer from "../components/OnboardingContainer";
import FormContainer from "../components/FormContainer";
import FormInput from "./../components/FormInput";
import FormText from "./../components/FormText";
import FormSteps from "./../components/FormSteps";
import {
	handleChange1,
	handleChange2,
	handleChange3,
	nextStep,
} from "../utils/helpers";
import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import {
	useSession,
	useUser,
	useSupabaseClient,
} from "@supabase/auth-helpers-react";

export default function Onboarding() {
	const router = useRouter();
	const [formInput, setFormInput] = useState(formInputState);
	const [formStep, setFormStep] = useState(1);
	// const nextFormStep = () => setFormStep((currentStep) => currentStep + 1);
	const labels = extractLabels(formInput.expenses);
	const [isFormComplete, setIsFormComplete] = useState(false);
	const supabase = useSupabaseClient();
	const session = useSession();
	const user = useUser();

	useEffect(() => {
		if (session && !isFormComplete) {
			router.push("/savings");
		}

		// Tried to force auth to default to sign up rather than sign in
		// This doesn't work could potentialy revisit this to improve UX:

		// if (!session && isFormComplete) {
		// 	router.push("#auth-sign-up");
		// }

		if (session && isFormComplete) {
			handleSubmit(formInput, router);
		}
	}, [session, isFormComplete]);

	async function uploadUserData(formInput) {
		try {
			const savingsUpdates = {
				user_id: user.id,
				savings_total: formInput.savings.total,
				savings_goal: formInput.savings.goal,
				inserted_at: new Date().toISOString(),
			};
			let { error } = await supabase.from("savings").insert(savingsUpdates);
			if (error) throw error;
		} catch (error) {
			alert("Error updating the savings data!");
			console.log(error);
		}
		try {
			const expensesUpdates = formInput.expenses.map((expense) => {
				return {
					user_id: user.id,
					expenses_type: expense.label,
					expenses_amount: expense.amount,
					inserted_at: new Date().toISOString(),
				};
			});
			let { error } = await supabase.from("expenses").insert(expensesUpdates);
			if (error) throw error;
		} catch (error) {
			alert("Error updating the expenses data!");
			console.log(error);
		}
		try {
			const incomeUpdates = {
				user_id: user.id,
				total_income: formInput.totalIncome,
				inserted_at: new Date().toISOString(),
			};
			let { error } = await supabase.from("income").insert(incomeUpdates);
			if (error) throw error;
		} catch (error) {
			alert("Error updating the income data!");
			console.log(error);
		}
	}

	const handleSubmit = (formInput, router) => {
		uploadUserData(formInput);
		router.push("/overview");
	};

	return (
		<OnboardingLayout>
			<OnboardingContainer>
				<FormContainer>
					{!isFormComplete && <FormSteps steps={steps} />}
					{formStep === 1 && !isFormComplete && (
						<form
							className="flex flex-col gap-5"
							onSubmit={() => nextStep(steps, setFormStep, 0, 1)}
						>
							<FormText
								step="1"
								question="What's your income after tax?"
								description="This could be your wages, 
								any money you get from a lodger or anyone else living with you, 
								any money you get from a pension, any money you get from investments, 
								and or any child maintenance or support you receive."
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
					{formStep === 2 && !isFormComplete && (
						<form
							className="flex flex-col gap-5"
							onSubmit={() => nextStep(steps, setFormStep, 1, 2)}
						>
							<FormText
								step="2"
								question="What are your expenses?"
								description="Enter the amount you spend on each of these expenses. Please skip any that don't apply to you."
							/>
							<div className="py-5">
								<div className="flex flex-col gap-8">
									<FormInput
										key={0}
										text="Rent or Mortgage (per month)"
										handleChange={handleChange2}
										formInput={formInput}
										setFormInput={setFormInput}
										labels={labels}
										id={0}
									/>
									<FormInput
										key={1}
										text="Food and Groceries (per month)"
										handleChange={handleChange2}
										formInput={formInput}
										setFormInput={setFormInput}
										labels={labels}
										id={1}
									/>
									<FormInput
										key={2}
										text="Home Energy Bills (per month)"
										handleChange={handleChange2}
										formInput={formInput}
										setFormInput={setFormInput}
										labels={labels}
										id={2}
									/>
									<FormInput
										key={3}
										text="Council Tax (per month)"
										handleChange={handleChange2}
										formInput={formInput}
										setFormInput={setFormInput}
										labels={labels}
										id={3}
									/>
									<FormInput
										key={4}
										text="Credit Payments (per month)"
										handleChange={handleChange2}
										formInput={formInput}
										setFormInput={setFormInput}
										labels={labels}
										id={4}
									/>
								</div>
								<FormButton text="Almost there" />
							</div>
						</form>
					)}
					{formStep === 3 && !isFormComplete && (
						<form
							className="flex flex-col gap-5"
							onSubmit={() => setIsFormComplete(true)}
						>
							<FormText
								step="3"
								question="Do you have any savings?"
								description="Please list your total savings and any savings goal."
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
					{isFormComplete && !session ? (
						<>
							<p
								className="text-center text-[27px] text-[#EDEDEE]"
								style={{ fontFamily: "Shapiro Middle Wide", weight: "500" }}
							>
								{"Log in to get your"}
								<br></br>
								{"personalised dashboard!"}
							</p>
							<Auth
								supabaseClient={supabase}
								appearance={{
									theme: ThemeSupa,
									style: {
										button: {
											// --> button needs hover styling if custom colors
											// background: "white",
											// color: "#1e293b",
											// borderColor: "#1e293b",
											// borderWidth: "2px",
											fontSize: "20px",
											borderRadius: "8px",
											fontWeight: "400",
											marginTop: "30px",
											height: "58px",
											paddingTop: "11px",
											letterSpacing: "0.025em",
										},
										label: {
											fontSize: "16px",
											fontWeight: "500",
											color: "#B3B3C1",
											letterSpacing: "0.025em",
											marginTop: "10px",
										},
										input: {
											height: "58px",
											fontSize: "20px",
											color: "#EDEDEE",
											border: "0px",
											backgroundColor: "#282E43",
										},
										anchor: {
											fontSize: "16px",
											paddingTop: "20px",
											color: "#8C939D",
											textDecoration: "none",
											letterSpacing: "0.025em",
										},
									},
								}}
								// theme="dark"
							/>
						</>
					) : (
						<p></p>
					)}
				</FormContainer>
			</OnboardingContainer>
		</OnboardingLayout>
	);
}
