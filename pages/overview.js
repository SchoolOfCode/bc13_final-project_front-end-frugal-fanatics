import BudgetOverview from "../components/BudgetOverview";
import DashboardLayout from "../components/DashboardLayout";
import SavingsOverview from "../components/SavingsOverview";
import Mindfulness from "../components/Mindfulness";
import TotalSavings from "../components/TotalSavings";
import {
  primaryNavigation,
  secondaryNavigation,
  setCurrentPage,
} from "../utils/navigation";
import { useRouter } from "next/router";
import { useUser, useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useState, useEffect } from "react";


const Overview = ({ }) => {
  setCurrentPage(primaryNavigation, "Overview");

  const router = useRouter();
	const session = useSession();
	const supabase = useSupabaseClient();
	const user = useUser();

	const [userData, setUserData] = useState({
		totalIncome: 0,
		expenses: [
			{ label: "Rent or Mortgage", amount: 0 },
			{ label: "Food and Groceries", amount: 0 },
			{ label: "Home Energy Bills", amount: 0 },
			{ label: "Council Tax", amount: 0 },
			{ label: "Credit Payments", amount: 0 },
			{ label: "Leftover Income", amount: 0 },
		],
		savings: { total: 0, goal: 0 },
	});

		useEffect(() => {
		if (user) {
			getUserData();
			console.log("supabase user ->", user);
		}
	}, [user]);

	useEffect(() => {
		if (!session) {
			router.push("/");
		}
	});

	const getUserData = async () => {
		try {
			let { data, error, status } = await supabase
				.from("savings")
				.select(`savings_total, savings_goal`)
				.eq("user_id", user.id)
				.single();

			if (error && status !== 406) {
				throw error;
			}

			if (data) {
	      setUserData({ ...userData, 
        savings: { total: data.savings_total, goal: data.savings_goal },
				});
			}
		} catch (error) {
			console.log("catch error ->", error);
		}
    try {
			let { data, error, status } = await supabase
				.from("expenses")
				.select(`expenses_type, expenses_amount`)
				.eq("user_id", user.id)

			if (error && status !== 406) {
				throw error;
			}

			if (data) {
				console.log("user data ->", userData);
        console.log("supabase data ->", data);
        // setUserData({ ...userData, 
        //   expenses: { label: data.expenses_type, amount: data.expenses_amount },
				// });
				console.log("should be updated", userData);
			}
		} catch (error) {
			console.log("catch error ->", error);
		}

	};

  return (
    <DashboardLayout
      primaryNavigation={primaryNavigation}
      secondaryNavigation={secondaryNavigation}
      title="Overview Page"
    >
      <div className="flex flex-col gap-8">
        <div className="flex flex-col items-center gap-8 xl:flex-row ">
          <BudgetOverview data={userData} />
          <SavingsOverview data={userData} />
        </div>
        <div className="flex flex-col items-center gap-8 xl:flex-row">
          <TotalSavings data={userData} />
          <Mindfulness />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Overview;
