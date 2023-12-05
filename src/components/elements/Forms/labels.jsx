/* eslint-disable react/prop-types */
import { FcCheckmark } from 'react-icons/fc';
import { MdError } from 'react-icons/md';

export const Label = ({ text, label, valid, value }) => {
    return (
        <label htmlFor={label}>
            {text}
            <FcCheckmark className={valid ? 'valid' : 'hide'} />
            <MdError className={valid || !value ? 'hide' : 'invalid'} />
        </label>
    );
};

export const PWMatchLabel = ({ text, label, valid, value }) => {
    return (
        <label htmlFor={label}>
            {text}
            <FcCheckmark className={valid && value ? 'valid' : 'hide'} />
            <MdError className={valid || !value ? 'hide' : 'invalid'} />
        </label>
    );
};


export const UsernameAlert = ({ userFocus, username, validName }) => {
    return (
        <div id='usernamenote' className={userFocus && username && !validName ? 'instructions' : 'offscreen'}>
            <p>
                Username must be at least six characters long with no trailing spaces.
            </p>
        </div>
    );
};

export const EmailAlert = ({ userFocus, email, validEmail }) => {
    return (
        <div id='emailnote' className={userFocus && email && !validEmail ? 'instructions' : 'offscreen'}>
            <p>
                Valid email address must include an <span aria-label='at symbol'>@</span>.
            </p>
        </div>
    );
};

export const PWFormatAlert = ({ pcFocus, password, validPc }) => {
    return (
        <div id='pcnote' className={pcFocus && password && !validPc ? 'instructions' : 'offscreen'}>
            <p>
                8 to 24 characters.</p>
            <p>
                Must include uppercase and lowercase letters, a number and a special character.</p>
            <p>
                Allowed special characters: <span aria-label='exclamation mark'>!</span> <span aria-label='at symbol'>@</span> <span aria-label='pound sign'>#</span> <span aria-label='dollar sign'>$</span> <span aria-label='percent sign'>%</span>
            </p>
        </div>
    );
};

export const PWMatchAlert = ({ matchFocus, validMatch }) => {
    return (
        <div id='confirmnote' className={matchFocus && !validMatch ? 'instructions' : 'offscreen'}>
            <p> Must match the first password input field.</p>
        </div>
    );
};