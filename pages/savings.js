/* eslint-disable react/jsx-key */
import CardComponent from "../components/CardComponent";
import DashboardLayout from "../components/DashboardLayout";
import SavingsPotsSection from "../components/SavingsPotsSection";
import TotalSavings from "../components/TotalSavings";
import { savingArticlesData } from "../data/savingsArtData";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { getUserSavings } from "../utils/queries";
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
import { userSavingsState } from "../data/states";

const Savings = () => {
	setCurrentPage(primaryNavigation, "Savings");
	const router = useRouter();
	const session = useSession();
	const supabase = useSupabaseClient();
	const user = useUser();

	const [userSavings, setUserSavings] = useState(userSavingsState);
	useEffect(() => {
		if (session) {
			getUserSavings(supabase, user, setUserSavings);
		}
	}, [session]);
	// //If there is no user session, push to homepage
	useEffect(() => {
		if (!session) {
			router.push("/");
		}
	});
	return (
		<DashboardLayout
			primaryNavigation={primaryNavigation}
			secondaryNavigation={secondaryNavigation}
			title="Savings Page"
		>
			<div className="flex flex-col items-start gap-8">
				<TotalSavings data={userSavings} />
				<SavingsPotsSection />
				<div className="mb-8 flex w-full flex-col gap-8 md:flex-row">
					{savingArticlesData.map((articles) => (
						<CardComponent
							imageSrc={articles.imageSrc}
							altSrc={articles.altSrc}
							title={articles.title}
							description={articles.description}
							link={articles.link}
							ariaLabelSrc={articles.ariaLabelSrc}
						/>
					))}
				</div>
			</div>
		</DashboardLayout>
	);
};

export default Savings;
