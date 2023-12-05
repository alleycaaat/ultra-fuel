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
