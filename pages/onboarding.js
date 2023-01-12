import { useState } from "react";
import LandingLayout from "../components/LandingLayout";
import LandingContainer from "../components/LandingContainer";
import Form from "../components/Form";
import Income from "../components/Form-Components/Income";
import Expenses from "../components/Form-Components/Expenses";
import Savings from "../components/Form-Components/Savings";

export default function LandingPage({ data, setData }) {
  const [formInput, setFormInput] = useState({
    totalIncome: 0,
    expenses: [
      { label: "", amount: 0 },
      { label: "", amount: 0 },
      { label: "", amount: 0 },
      { label: "", amount: 0 },
      { label: "", amount: 0 },
      { label: "", amount: 0 },
    ],
    savings: { total: 0, goal: 0 },
  });

  // The state which determines the active form page rendered to the user.
  const [formStep, setFormStep] = useState(0);

  // This function is used when the 'next step' button is clicked.
  const nextFormStep = () => setFormStep((currentStep) => currentStep + 1);

  // This function in not currently used and should be added as an onClick if we want to add a back button to the form.
  const prevFormStep = () => setFormStep((currentStep) => currentStep - 1);

  return (
    <LandingLayout>
      <LandingContainer>
        <h1>{data.totalIncome}</h1>
        <h1>{formInput.totalIncome}</h1>
        <Form currentStep={formStep} prevFormStep={prevFormStep}>
          {formStep == 0 && (
            <Income formStep={formStep} nextFormStep={nextFormStep} formInput={formInput} setFormInput={setFormInput} />
          )}
          {formStep == 1 && (
            <Expenses formStep={formStep} nextFormStep={nextFormStep} formInput={formInput} setFormInput={setFormInput} />
          )}
          {formStep == 2 && (
            <Savings formStep={formStep} nextFormStep={nextFormStep} formInput={formInput} setFormInput={setFormInput} />
          )}
          {formStep > 2 && <FormCompleted />}
        </Form>
      </LandingContainer>
    </LandingLayout>
  );
}
