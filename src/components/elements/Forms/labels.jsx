/* eslint-disable react/prop-types */
import { FcCheckmark } from 'react-icons/fc';
import { MdError } from 'react-icons/md';

//general label to wap input and display in/valid symbol
export const Label = ({ text, label, valid, value }) => {
    return (
        <label htmlFor={label}>
            {text}
            <FcCheckmark className={valid ? 'valid' : 'hide'} />
            <MdError className={valid || !value ? 'hide' : 'invalid'} />
        </label>
    );
};

//label to wrap matching passwords
export const PWMatchLabel = ({ text, label, valid, value }) => {
    return (
        <label htmlFor={label}>
            {text}
            <FcCheckmark className={valid && value ? 'valid' : 'hide'} />
            <MdError className={valid || !value ? 'hide' : 'invalid'} />
        </label>
    );
};

//alert for invalid username
export const UsernameAlert = ({ userFocus, username, validName }) => {
    return (
        <div id='usernamenote'
        className={userFocus && username && !validName ? 'instructions' : 'offscreen'}>
            <p>
                Username must be at least six characters long with no trailing spaces.
            </p>
        </div>
    );
};

//alert for invalid email address
export const EmailAlert = ({ userFocus, email, validEmail }) => {
    return (
        <div id='emailnote' className={userFocus && email && !validEmail ? 'instructions' : 'offscreen'}>
            <p>
                Valid email address must include an <span aria-label='at symbol'>@</span>.
            </p>
        </div>
    );
};

//alert for password requirements
export const PWFormatAlert = ({ pcFocus, password, validPc }) => {
    return (
        <div id='pcnote' className={pcFocus && password && !validPc ? 'instructions' : 'offscreen'}>
            <p>
                8 to 24 characters.
            </p>
            <p>
                Must include uppercase and lowercase letters, a number and a special character.
            </p>
            <p>
                Allowed special characters: <span aria-label='exclamation mark'>!</span> <span aria-label='at symbol'>@</span> <span aria-label='pound sign'>#</span> <span aria-label='dollar sign'>$</span> <span aria-label='percent sign'>%</span>
            </p>
        </div>
    );
};

//alert that passwords don't match
export const PWMatchAlert = ({ matchFocus, validMatch }) => {
    return (
        <div id='confirmnote' className={matchFocus && !validMatch ? 'instructions' : 'offscreen'}>
            <p>Must match the first password input field.</p>
        </div>
    );
};