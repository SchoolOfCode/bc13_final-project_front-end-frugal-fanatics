import LandingLayout from "../components/LandingLayout"
import LandingContainer from "../components/LandingContainer";
import FormSteps from "../components/FormSteps";
import FormDescription from "../components/FormDescription";
import Heading from "../components/Heading";
import Form from "../components/Form";
import FormInput from "../components/FormInput";
import SubmitButton from "../components/SubmitButton";

export default function LandingPage() {
	return (
		<LandingLayout>
			<LandingContainer>
				<h1>This is the landing page</h1>
			</LandingContainer>
		</LandingLayout>
	);
}