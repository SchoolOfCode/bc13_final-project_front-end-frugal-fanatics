import DashboardLayout from "../components/DashboardLayout";
import {
	primaryNavigation,
	secondaryNavigation,
	setCurrentPage
} from "../utils/navigation";
//CHART.JS
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);

setCurrentPage(primaryNavigation, "Overview");

const Overview = () => {
	return (
		<DashboardLayout
			primaryNavigation={primaryNavigation}
			secondaryNavigation={secondaryNavigation}
			title="Overview Page"
		>
			<h1 className="text-9xl">HelloWorld</h1>
			<div className="h-96 w-96">
				{/* CHART.JS TEST */}
				<Doughnut
					data={{
						labels: [
							"Rent or Mortgage",
							"Food and Groceries",
							"Home Energy Bills",
							"Council Tax",
							"Credit Repayments",
							"Leftover Income"
						],
						datasets: [
							{
								label: "My First Dataset",
								data: [60, 50, 100, 80, 50, 100],
								backgroundColor: [
									"#B884FF",
									"#FFD482",
									"#F68DFF",
									"#ABE6FF",
									"#FFA59E",
									"#F5F5F5"
								],
								hoverOffset: 4,
								cutout: 140,
								responsive: true,
								maintainAspectRatio: true,
								borderWidth: 0
							}
						]
					}}
				/>
			</div>
		</DashboardLayout>
	);
};

export default Overview;
