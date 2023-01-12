const FormInput = ({ labelname, placeholder }) => {
    return (
        <div className="pt-4 flex flex-col w-4/5">
            <label className="pb-2">{labelname}</label>
            <input /*type="number"*/ placeholder={placeholder} className="w-full h-12 rounded-md p-4 bg-gray-200" defaultValue="£"></input>
        </div>
    );
}

// There was a choice here to either have the pound symbol show as a default value or use type="number" which removed the default value as it was not an integer. Probably an easy work around.

// Might also be worth further organising the components into folders relating to the pages where they are rendered.
 
export default FormInput;