const RadioWrapper = () => {
    return (
        <div className='radio-wrap'>
            <fieldset>
                <legend className='sr-only'>Select the race measurement:</legend>
                <input type='radio' id='miles' name='measurement' value='email' />
                <label htmlFor='miles'>mi</label>

                <input type='radio' id='kilometers' name='measurement' value='email' />
                <label htmlFor='kilometers'>km</label>
            </fieldset>
        </div>
    );
};

export default RadioWrapper;
