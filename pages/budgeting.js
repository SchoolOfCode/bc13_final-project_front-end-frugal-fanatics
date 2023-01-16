import BudgetingSection from "../components/BudgetingSection";
import CardComponent from "../components/CardComponent";
import DashboardLayout from "../components/DashboardLayout";
import { budgetArticlesData } from "../data/budgetArtData";
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
			<div className="flex py-10">
				{budgetArticlesData.map((articles, key) => (
					<CardComponent
						imageSrc={articles.imageSrc}
						title={articles.title}
						description={articles.description}
						link={articles.link}
						key={key}
					/>
				))}
			</div>
		</DashboardLayout>
	);
};

export default Budgeting;
