import LandingLayout from "../components/LandingLayout";
import LandingContainer from "../components/LandingContainer";
import Form from "../components/Form";
import { useState } from "react";
import Income from "../components/Form-Components/Income";
import Expenses from "../components/Form-Components/Expenses";
import Savings from "../components/Form-Components/Savings";

export default function LandingPage() {
  const [formStep, setFormStep] = useState(0);

  const nextFormStep = () => setFormStep((currentStep) => currentStep + 1);

  const prevFormStep = () => setFormStep((currentStep) => currentStep - 1);

  const nextPage = (formstep) => {
    setFormStep(formStep);
  };

  const nextPageNumber = (pageNumber) => {
    switch (pageNumber) {
      case "1":
        setFormStep(0);
        break;
      case "2":
        setFormStep(1);
        break;
      case "3":
        setFormStep(2);
        break;
      default:
        setFormStep("1");
    }
  };
  

  return (
    <LandingLayout>
      <LandingContainer>

        <Form currentStep={formStep} prevFormStep={prevFormStep}>
          {formStep >= 0 && (
            <Income formStep={formStep} nextFormStep={nextFormStep} />
          )}
          {formStep >= 1 && (
            <Expenses formStep={formStep} nextFormStep={nextFormStep} />
          )}
          {formStep >= 2 && (
            <Savings formStep={formStep} nextFormStep={nextFormStep} />
          )}
          {formStep > 2 && <FormCompleted />}
        </Form>
        
      </LandingContainer>
    </LandingLayout>
  );
}
