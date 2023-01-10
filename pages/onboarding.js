import LandingLayout from "../components/LandingLayout"
import LandingContainer from "../components/LandingContainer";
import FormSteps from "../components/FormSteps";
import FormDescription from "../components/FormDescription";
import Heading from "../components/Heading";
import Form from "../components/Form";
import FormInput from "../components/FormInput";
import SubmitButton from "../components/SubmitButton";

export default function LandingPage() {

	const [formStep, setFormStep] = useState(0);

	const nextFormStep = () => setFormStep((currentStep) => currentStep + 1);
  
	const prevFormStep = () => setFormStep((currentStep) => currentStep - 1);
  

	return (
		<LandingLayout>
			<LandingContainer>
				<FormSteps />
				<FormDescription>
					<Heading />
				</FormDescription>
				<Form>
					<FormInput />
					<SubmitButton />
				</Form>
			</LandingContainer>
		</LandingLayout>
	);
}