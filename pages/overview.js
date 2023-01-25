import BudgetOverview from "../components/BudgetOverview";
import DashboardLayout from "../components/DashboardLayout";
import SavingsOverview from "../components/SavingsOverview";
import TotalSavings from "../components/TotalSavings";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { getUserOverview } from "../utils/queries";
import {
  userIncomeState,
  userExpensesState,
  userSavingsState,
} from "../data/states";
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

const Overview = ({}) => {
  setCurrentPage(primaryNavigation, "Overview");
  const router = useRouter();
  const session = useSession();
  const supabase = useSupabaseClient();
  const user = useUser();

  const [userIncome, setUserIncome] = useState(userIncomeState);
  const [userExpenses, setUserExpenses] = useState(userExpensesState);
  const [userSavings, setUserSavings] = useState(userSavingsState);

  // If user session is active, get user data
  // Could be refactored to custom hook?
  useEffect(() => {
    if (session) {
      getUserOverview(
        supabase,
        user,
        setUserIncome,
        setUserExpenses,
        setUserSavings
      );
      console.log("supabase user ->", user);
    }
  }, [session, supabase, user]);

  //If there is no user session, push to homepage
  useEffect(() => {
  if (!session) {
  router.push("/");
  }
  });

  return (
    <DashboardLayout
      primaryNavigation={primaryNavigation}
      secondaryNavigation={secondaryNavigation}
      title="Overview Page"
    >
      <div className="flex flex-col gap-8">
        <div className="flex flex-col items-center gap-8 xl:flex-row ">
          <BudgetOverview data={userExpenses} />
          <SavingsOverview data={userSavings} />
        </div>
        <div className="flex flex-col items-center gap-8 xl:flex-row">
          <TotalSavings data={userSavings} />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Overview;
