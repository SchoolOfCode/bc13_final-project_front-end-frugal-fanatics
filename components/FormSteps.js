import MultiStepProgressBar from "./MultiStageProgressBar/MultiStepProgressBar.js";

const FormSteps = ({ children, formStep, nextFormStep }) => {
    return ( 
        <div className="w-full pt-24">
            <MultiStepProgressBar formStep={formStep} onPageNumberClick={nextFormStep} />
        </div>
     );
}
 
export default FormSteps;