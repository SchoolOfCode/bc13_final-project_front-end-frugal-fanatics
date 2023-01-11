import FormSteps from "../components/FormSteps.js";
import FormDescription from "../components/FormDescription";
import Heading from "../components/Heading";
import Form from "../components/Form";
import FormInput from "../components/FormInput";
import SubmitButton from "../components/SubmitButton";

const Expenses = () => {
  return (
    <>
      <FormSteps />
      <Heading />
      <FormDescription />
      <FormInput />
      <SubmitButton />
    </>
  );
};

export default Expenses;
