import { Link, useFetcher } from 'react-router-dom';
import { useEffect, useState } from 'react';

// ** import auth
import { createAccount, getCurrentUser } from '../../auth/appwrite-helpers';
import { useAuth } from '../../auth/hooks';

// ** action
import { registerAction } from '../../util/actions/registerAction';

// ** import UI
import { EmailAlert, Label, PWFormatAlert, PWMatchLabel, UsernameAlert } from '../elements/Forms/labels';
import { validateEmail } from '../../util/helpers';
import { H1Title } from '../elements/titles';
import { Input } from '../elements/Forms/input';
import { Wrapper } from '../elements/wrappers/form-wrapper';

const PASSCODE_CHECK = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Register = () => {
    const { authUser } = useAuth();

    const [user, setUser] = useState({
        username: '',
        email: '',
        password: '',
    });

    const fetcher = useFetcher();

    const { username, email, password } = user;

    const [validEmail, setValidEmail] = useState(false);
    const [usernameFocus, setUsernameFocus] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [validUsername, setValidUsername] = useState(false);
    const [validPc, setValidPc] = useState(false);
    const [pcFocus, setPcFocus] = useState(false);

    const [matchPc, setMatchPc] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => { // ** validate email
        const result = validateEmail(email);
        setValidEmail(result);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [email]);

    useEffect(() => { // ** validate passwords
        const result = PASSCODE_CHECK.test(password);
        setValidPc(result);

        const match = password === matchPc;
        setValidMatch(match);
    }, [password, matchPc]);

    useEffect(() => { // ** validate username
        const result = username.trim().length >= 6;
        setValidUsername(result);
    }, [username]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            await createAccount(username, email, password);

            const authSesh = await getCurrentUser();
            authUser(authSesh);

            setUser({
                username: '',
                email: '',
                password: '',
            });

            registerAction(username, authSesh.$id);
        } catch (e) {
            console.log('register error', e);
        }
        setIsSubmitting(false);
    };

    return (
        <div>
            <H1Title>Create an Account</H1Title>
            <div>
                <fetcher.Form method='post' className='register' onSubmit={handleSubmit}>
                    <Wrapper>
                        <Label
                            text='Username:'
                            label='username'
                            valid={validUsername}
                            value={username}
                        />
                        <Input
                            type='text'
                            name='username'
                            id='username'
                            autoComplete='none'
                            onChange={(e) => setUser({
                                ...user,
                                username: e.target.value
                            })}
                            value={username}
                            desc='usernamenote'
                            onFocus={() => setUsernameFocus(true)}
                            onBlur={() => setUsernameFocus(false)}
                            required
                        />
                    </Wrapper>
                    <UsernameAlert
                        userFocus={usernameFocus}
                        username={username}
                        validUsername={validUsername}
                    />

                    <Wrapper>
                        <Label
                            text='Email:'
                            label='emailAddress'
                            valid={validEmail}
                            value={email}
                        />
                        <Input
                            type='email'
                            name='emailAddress'
                            id='emailAddress'
                            autoComplete='none'
                            onChange={(e) => setUser({
                                ...user,
                                email: e.target.value
                            })}
                            value={email}
                            aria={validEmail ? 'false' : 'true'}
                            desc='emailnote'
                            onFocus={() => setEmailFocus(true)}
                            onBlur={() => setEmailFocus(false)}
                            required
                        />
                    </Wrapper>
                    <EmailAlert
                        userFocus={emailFocus}
                        email={email}
                        validEmail={validEmail}
                    />

                    <Wrapper>
                        <Label
                            text='Password:'
                            label='password'
                            valid={validPc}
                            value={password}
                        />
                        <Input
                            type='password'
                            name='password'
                            id='password'
                            autoComplete='none'
                            onChange={(e) => setUser({
                                ...user,
                                password: e.target.value
                            })}
                            value={password}
                            aria={validPc ? 'false' : 'true'}
                            desc='pcnote'
                            onFocus={() => setPcFocus(true)}
                            onBlur={() => setPcFocus(false)}
                            required
                        />
                    </Wrapper>
                    <PWFormatAlert
                        pcFocus={pcFocus}
                        password={password}
                        validPc={validPc}
                    />

                    <Wrapper>
                        <PWMatchLabel
                            text='Confirm Password:'
                            label='confirm_pc'
                            valid={validMatch}
                            value={matchPc}
                        />
                        <Input
                            type='password'
                            id='confirm_pc'
                            onChange={(e) => setMatchPc(e.target.value)}
                            value={matchPc}
                            aria-invalid={validMatch ? 'false' : 'true'}
                            aria-describedby='confirmnote'
                            onFocus={() => setMatchFocus(true)}
                            onBlur={() => setMatchFocus(false)}
                            required
                        />
                    </Wrapper>
                    <PWMatchLabel
                        matchFocus={matchFocus}
                        validMatch={validMatch}
                    />

                    <input
                        type='hidden'
                        name='_action'
                        value='newUser'
                    />
                    <button
                        type='submit'
                        className='submit'>
                        {isSubmitting ? 'Creating...' : 'Create Account'}
                    </button>

                    <p className='after-button'>Already have an account? <Link to='/login' className='linx text'>Sign in here</Link>.</p>
                </fetcher.Form>
            </div>
        </div>
    );
};

export default Register;
