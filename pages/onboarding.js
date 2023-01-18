import LandingContainer from "../components/LandingContainer";
import FormButton from "./../components/FormButton";
import LandingLayout from "../components/LandingLayout";
import FormContainer from "../components/FormContainer";
import FormInput from "./../components/FormInput";
import FormText from "./../components/FormText";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { formInputShape } from "../data/states";
import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import {
	useSession,
	useUser,
	useSupabaseClient,
} from "@supabase/auth-helpers-react";

export default function LandingPage() {
	const [formInput, setFormInput] = useState(formInputShape);
	const [isFormComplete, setIsFormComplete] = useState(false);
	const supabase = useSupabaseClient();
	const session = useSession();
	const router = useRouter();
	const user = useUser();

	useEffect(() => {
		if (session && !isFormComplete) {
			router.push("/savings");
		}
		// if (!session && isFormComplete) {
		// 	router.push("#auth-sign-up");
		// }
		if (session && isFormComplete) {
			handleSubmit(formInput, router);
		}
	}, [session, isFormComplete]);

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

	async function updateProfile(formInput) {
		try {
			const updates = {
				user_id: user.id,
				total: formInput.savings.total,
				goal: formInput.savings.goal,
				inserted_at: new Date().toISOString(),
			};

			let { error } = await supabase.from("savings").insert(updates);
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
					{!isFormComplete ? (
						<form
							className="flex flex-col gap-5"
							onSubmit={() => setIsFormComplete(true)}
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
					) : !session ? (
						<>
							<p
								className="text-center text-[27px] text-slate-800"
								style={{ fontFamily: "Shapiro Middle Wide", weight: "500" }}
							>
								{"Log in to get your"}
								<br></br>
								{"personalised dashboard!"}
							</p>
							<Auth
								supabaseClient={supabase}
								appearance={{
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
											color: "#1e293b",
											letterSpacing: "0.025em",
											marginTop: "10px",
										},
										input: {
											height: "58px",
											fontSize: "20px",
											color: "#1e293b",
											border: "0px",
											backgroundColor: "#f8fafc",
										},
										anchor: {
											fontSize: "16px",
											paddingTop: "20px",
											color: "#475569",
											textDecoration: "none",
											letterSpacing: "0.025em",
										},
									},
								}}
								// theme="dark"
							/>
						</>
					) : (
						<p>Loading...</p>
					)}
				</FormContainer>
			</LandingContainer>
		</LandingLayout>
	);
}
