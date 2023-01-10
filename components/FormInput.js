const FormInput = ({labelname, placeholder}) => {
    return (
        <>
            <label>{labelname}</label>
            <input placeholder={placeholder}></input>
        </>
    );
}
 
export default FormInput;