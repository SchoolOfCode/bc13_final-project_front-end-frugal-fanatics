import BudgetDonut from "./../components/BudgetDonut";
import DashboardLayout from "../components/DashboardLayout";
import {
	primaryNavigation,
	secondaryNavigation,
	setCurrentPage
} from "../utils/navigation";

setCurrentPage(primaryNavigation, "Overview");

const Overview = () => {
	return (
		<DashboardLayout
			primaryNavigation={primaryNavigation}
			secondaryNavigation={secondaryNavigation}
			title="Overview Page"
		>
			<div className="flex flex-col gap-8 xl:flex-row">
				<div className="stack flex w-full flex-col gap-10 rounded-2xl bg-white px-12 py-8 pb-14 xl:w-[50%]">
					<h2 className="text-202834 font-shapiro text-2xl text-[#202834]">
						Budget
					</h2>
					<BudgetDonut />
				</div>
				<div className="stack flex w-full flex-col gap-10 rounded-2xl bg-white px-12 py-8 pb-14 xl:w-[50%]">
					<h2 className="text-202834 font-shapiro text-2xl text-[#202834]">
						Savings Pots
					</h2>
				</div>
			</div>
		</DashboardLayout>
	);
};

export default Overview;
