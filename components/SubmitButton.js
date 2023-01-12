const SubmitButton = ({ children,  nextFormStep, buttonText}) => {
    return ( 
        <div>
        <button className="w-max mt-12 p-2 rounded-md border border-black text-1xl" onClick={nextFormStep}>
        {buttonText}
        </button>
        </div>
     );
}
 
export default SubmitButton;