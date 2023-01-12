import { useState } from "react";
import LandingLayout from "../components/LandingLayout";
import LandingContainer from "../components/LandingContainer";
import Form from "../components/FormContainer";
import Income from "../components/Form-Components/Income";
import Expenses from "../components/Form-Components/Expenses";
import Savings from "../components/Form-Components/Savings";
import FormContainer from "../components/FormContainer";

// 1. First we will remove current components
// 2. Pull all the JSX one by one into this file to preserve the styling
// 3. Hook everything up to interact with the mock data
// 4. Revisit adstracting the file into seperate components once all the functionality is working

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

  const handleSubmit1 = () => {
    setData({ ...data, totalIncome: formInput.totalIncome });
  };

  return (
    <LandingLayout>
      <LandingContainer>
        <FormContainer>
          <h1>{data.totalIncome}</h1>
          <h1>{formInput.totalIncome}</h1>
          <h1 className="pt-20 pb-10 text-3xl">
            What's your income after tax?
          </h1>
          <p className="pb-8 text-gray-500">
            Gastropub hoodie vegan air plant kickstarter ascot adipisicing,
            hoodie twee small batch incididunt fit freegan meh.
          </p>
          <div className="flex w-4/5 flex-col pt-4">
            <label className="pb-2">Total Income (per month) </label>
            <input
              handleChange={handleChange}
              placeholder="0"
              type="number"
              onChange={handleChange}
              className="h-12 w-full rounded-md bg-gray-200 p-4"
              defaultValue="£"
            ></input>
          </div>
        </FormContainer>
      </LandingContainer>
    </LandingLayout>
  );
}

// Previous components
/*  <Form currentStep={formStep} prevFormStep={prevFormStep}>
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
        </Form> */
