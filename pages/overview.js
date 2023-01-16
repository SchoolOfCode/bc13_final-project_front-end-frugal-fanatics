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
					<div className="flex w-full xl:w-[50%]">
						<TotalSavings data={data} />
					</div>
					<Mindfulness />
				</div>
			</div>
		</DashboardLayout>
	);
};

export default Overview;
