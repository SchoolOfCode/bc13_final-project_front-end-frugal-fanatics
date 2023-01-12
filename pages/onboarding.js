import { useState } from "react";
import LandingLayout from "../components/LandingLayout";
import LandingContainer from "../components/LandingContainer";
import Form from "../components/Form";
import Income from "../components/Form-Components/Income";
import Expenses from "../components/Form-Components/Expenses";
import Savings from "../components/Form-Components/Savings";

export default function LandingPage() {

  // The state which determines the active form page rendered to the user.
  const [formStep, setFormStep] = useState(0);

  // This function is used when the 'next step' button is clicked.
  const nextFormStep = () => setFormStep((currentStep) => currentStep + 1);

  // This function in not currently used and should be added as an onClick if we want to add a back button to the form.
  const prevFormStep = () => setFormStep((currentStep) => currentStep - 1);
  

  return (
    <LandingLayout>
      <LandingContainer>

        <Form currentStep={formStep} prevFormStep={prevFormStep}>
          {formStep == 0 && (
            <Income formStep={formStep} nextFormStep={nextFormStep} />
          )}
          {formStep == 1 && (
            <Expenses formStep={formStep} nextFormStep={nextFormStep} />
          )}
          {formStep == 2 && (
            <Savings formStep={formStep} nextFormStep={nextFormStep} />
          )}
          {formStep > 2 && <FormCompleted />}
        </Form>
        
      </LandingContainer>
    </LandingLayout>
  );
}
