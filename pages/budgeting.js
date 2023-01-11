import DashboardLayout from "../components/DashboardLayout";

import {
	primaryNavigation,
	secondaryNavigation,
	setCurrentPage,
} from "../utils/navigation";

setCurrentPage(primaryNavigation, "Budgeting");

const Overview = () => {
	return (
		<DashboardLayout
			primaryNavigation={primaryNavigation}
			secondaryNavigation={secondaryNavigation}
			title="Overview Page"
		>
			<div className="flex flex-col items-center gap-8 xl:flex-row">
				hello world
			</div>
		</DashboardLayout>
	);
};

export default Overview;
