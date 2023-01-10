
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
    >
      <h1 className="text-9xl">HelloWorld</h1>
    </DashboardLayout>
  );
};

export default Overview;
