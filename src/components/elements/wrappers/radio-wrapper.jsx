/* eslint-disable react/prop-types */
const RadioWrapper = ({ data, setData }) => {
    return (
        <div className='radio-wrap'>
            <fieldset>
                <legend className='sr-only'>Select the race measurement:</legend>
                <input
                    type='radio'
                    id='miles'
                    name='measurement'
                    value='miles'
                    onClick={(e) => setData({
                        ...data,
                        format: e.target.value
                    })}
                />
                <label htmlFor='miles'>mi</label>

                <input
                    type='radio'
                    id='kilometers'
                    name='measurement'
                    value='kilometers'
                    onClick={(e) => setData({
                        ...data,
                        format: e.target.value
                    })}
                />
                <label htmlFor='kilometers'>km</label>
            </fieldset>
        </div>
    );
};

export default RadioWrapper;
