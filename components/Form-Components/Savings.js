import FormSteps from "../FormSteps";
import Heading from "../Heading";
import SubHeading from "../SubHeading";
import FormInput from "../FormInput";
import SubmitButton from "../SubmitButton";

const Savings = ({ formStep, nextFormStep }) => {
  return (
    <>
      <FormSteps formstep={formStep}/>
      <Heading title="Do you have any savings?"/>
      <SubHeading subHeading="Gastropub hoodie vegan air plant kickstarter ascot adipisicing, hoodie twee small batch incididunt fit freegan meh." />
      <FormInput labelname="Total Savings (Optional)"/>
      <SubmitButton buttonText="Get your tailored results ->"/>
    </>
  );
};

export default Savings;
