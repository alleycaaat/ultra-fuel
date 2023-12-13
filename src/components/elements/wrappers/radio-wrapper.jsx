/* eslint-disable react/prop-types */
const RadioWrapper = ({ children, label }) => {
    return (
        <div className='radio-wrap'>
            <fieldset>
                <legend className='sr-only'>{label}</legend>
                <label>Race measurement:</label>
                {children}
            </fieldset>
        </div>
    );
};

export default RadioWrapper;
