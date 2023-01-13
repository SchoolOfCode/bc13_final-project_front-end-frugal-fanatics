import CardComponent from "../components/CardComponent";
import DashboardLayout from "../components/DashboardLayout";
import SavingsPotsSection from "../components/SavingsPotsSection";
import TotalSavings from "../components/TotalSavings";
import {
  primaryNavigation,
  secondaryNavigation,
  setCurrentPage,
} from "../utils/navigation";
import { savingArticlesData } from "../data/savingsArtData";
const Savings = ({ data }) => {
  setCurrentPage(primaryNavigation, "Savings");
  return (
    <DashboardLayout
      primaryNavigation={primaryNavigation}
      secondaryNavigation={secondaryNavigation}
      title="Savings Page"
    >
      <div className="flex flex-col items-center gap-8">
        <TotalSavings data={data} />
        <SavingsPotsSection data={data} />
        <div className="flex">
          {savingArticlesData.map((articles) => (
            <CardComponent
              imageSrc={articles.imageSrc}
              title={articles.title}
              description={articles.description}
              link={articles.link}
            />
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Savings;
