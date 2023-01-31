/* eslint-disable react/jsx-key */
import BudgetingSection from "../components/Budgeting/BudgetingSection";
import CardComponent from "../components/CardComponent";
import DashboardLayout from "../components/DashboardLayout";
import { budgetArticlesData } from "../data/budgetArtData";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { getUserExpenses } from "../utils/queries";
import { userExpensesState, userIncomeState } from "../data/states";
import {
	primaryNavigation,
	secondaryNavigation,
	setCurrentPage,
} from "../utils/navigation";
import {
	useUser,
	useSession,
	useSupabaseClient,
} from "@supabase/auth-helpers-react";

const Budgeting = () => {
	setCurrentPage(primaryNavigation, "Budgeting");
	const router = useRouter();
	const session = useSession();
	const supabase = useSupabaseClient();
	const user = useUser();

	const [userExpenses, setUserExpenses] = useState(userExpensesState);
	const [userIncome, setUserIncome] = useState(userIncomeState);
	// If user session is active, get user data
	// Could be refactored to custom hook?
	useEffect(() => {
		if (session) {
			getUserExpenses(supabase, user, setUserExpenses, setUserIncome);
			console.log("supabase user ->", user);
		}
	}, [session, supabase, user]);

	// If there is no user session, push to homepage
	// useEffect(() => {
	// 	if (!session) {
	// 		router.push("/");
	// 	}
	// });
	return (
		<DashboardLayout
			primaryNavigation={primaryNavigation}
			secondaryNavigation={secondaryNavigation}
			title="Budgeting Page"
		>
			<div className="flex flex-col items-start gap-8">
				<BudgetingSection data={userExpenses} income={userIncome} />
				<div className="mb-8 flex w-full flex-col gap-8 md:flex-row">
					{/* {budgetArticlesData.map((articles) => (
						<CardComponent
							imageSrc={articles.imageSrc}
							altSrc={articles.altSrc}
							title={articles.title}
							description={articles.description}
							link={articles.link}
							ariaLabelSrc={articles.ariaLabelSrc}
						/>
					))} */}
				</div>
			</div>
		</DashboardLayout>
	);
};

export default Budgeting;
