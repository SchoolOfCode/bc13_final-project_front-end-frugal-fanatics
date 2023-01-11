import FormSteps from "../components/FormSteps";
import FormDescription from "../components/FormDescription";
import Heading from "../components/Heading";
import Form from "../components/Form";
import FormInput from "../components/FormInput";
import SubmitButton from "../components/SubmitButton";

const Income = () => {
    return ( 
    <>
        <Form>
            <FormSteps />
            <Heading />
            <FormDescription />
            <FormInput />
            <SubmitButton />
        </Form>
    </>
     );
}
 
export default Income;