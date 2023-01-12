import BudgetOverview from "../components/BudgetOverview";
import DashboardLayout from "../components/DashboardLayout";
import SavingsOverview from "../components/SavingsOverview";
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
			<div className="flex flex-col items-center gap-8 xl:flex-row">
				<BudgetOverview data={data} />
				<SavingsOverview data={data} />
			</div>
		</DashboardLayout>
	);
};

export default Overview;
