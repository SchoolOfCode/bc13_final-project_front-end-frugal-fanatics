import BudgetOverview from "../components/BudgetingComponents/BudgetOverview";
import DashboardLayout from "../components/DashboardLayout";
import SavingsOverview from "../components/SavingsComponents/SavingsOverview";
import Mindfulness from "../components/Mindfulness";
import TotalSavings from "../components/SavingsComponents/TotalSavings";
import {
  primaryNavigation,
  secondaryNavigation,
  setCurrentPage,
} from "../utils/navigation";

const Overview = ({ data }) => {
  setCurrentPage(primaryNavigation, "Overview");
  return (
    <DashboardLayout
      primaryNavigation={primaryNavigation}
      secondaryNavigation={secondaryNavigation}
      title="Overview Page"
    >
      <div className="flex flex-col gap-8">
        <div className="flex flex-col items-center gap-8 xl:flex-row ">
          <BudgetOverview data={data} />
          <SavingsOverview data={data} />
        </div>
        <div className="flex flex-col items-center gap-8 xl:flex-row">
          <TotalSavings data={data} />
          <Mindfulness />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Overview;
