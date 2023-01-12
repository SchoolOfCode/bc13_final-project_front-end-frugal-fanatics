import BudgetingSection from "../components/BudgetingSection";
import DashboardLayout from "../components/DashboardLayout";
import {
	primaryNavigation,
	secondaryNavigation,
	setCurrentPage,
} from "../utils/navigation";

const Budgeting = ({ data }) => {
	setCurrentPage(primaryNavigation, "Budgeting");
	return (
		<DashboardLayout
			primaryNavigation={primaryNavigation}
			secondaryNavigation={secondaryNavigation}
			title="Budgeting Page"
		>
			<div className="flex flex-col items-center gap-8">
				<BudgetingSection data={data} />
			</div>
		</DashboardLayout>
	);
};

export default Budgeting;
