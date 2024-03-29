/* eslint-disable react/prop-types */
export const Input = ({ type, id, name, value, autoComplete, onChange, aria, desc, onFocus, onBlur }) => {
    return (
        <input
            type={type}
            id={id}
            name={name}
            value={value}
            autoComplete={autoComplete}
            onChange={onChange}
            aria-invalid={aria}
            aria-describedby={desc}
            onFocus={onFocus}
            onBlur={onBlur}
            required
        />
    );
};

export const RadioInput = ({ id, name, value, onChange }) => {
    return (
        <input
            type='radio'
            id={id}
            name={name}
            value={value}
            onChange={onChange}
        />
    );
};

export const DateInput = ({ id, name, value, array, onChange }) => {
    return (
        <select
            className='date'
            id={id}
            name={name}
            onChange={onChange}
            value={value}>
            {array?.map((val, i) => (
                <option
                    key={i}
                    value={val}>
                    {val}
                </option>
            ))}
        </select>
    );
};