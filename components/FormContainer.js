const FormContainer = ({
    children,
} ) => {
    return (
        <section className="w-2/5 flex flex-col items-left">
        {children}
        </section>
     );
}
 
export default FormContainer;