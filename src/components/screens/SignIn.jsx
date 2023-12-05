import { Form, Link, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';

//** import helpers
import { getCurrentUser, signIn } from '../../auth/appwrite-helpers';
import { setData } from '../../util/helpers';

//** import hooks
import { useAuth } from '../../auth/hooks';

//** import UI
import { Wrapper } from '../elements/wrappers/form-wrapper';
import { Label } from '../elements/Forms/labels';
import { Input } from '../elements/Forms/input';
import { H1Title } from '../elements/titles';


const SignIn = () => {
    const { authUser } = useAuth();

    const navigate = useNavigate();
    const location = useLocation();

    const [isSubmitting, setIsSubmitting] = useState(false);

    const from = location.state?.from?.pathway || '/dashboard';

    const [user, setUser] = useState({
        email: '',
        password: '',
    });
    const { email, password } = user;

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsSubmitting(true);
        //send entered email and password to appwrite helper to try and create a valid session
        //get the current user, store data in context and locally
        try {
            await signIn(email, password);
            const promise = await getCurrentUser();
            authUser(promise);

            setData('user', promise.name);
            setData('userID', promise.$id);

            setUser({
                email: '',
                password: '',
            });

            navigate(from, { replace: true });
            return;
        } catch (e) {
            console.log('log in error', e);
        }
        setIsSubmitting(false);
    };

    return (
        <>
            <h2>Sign In</h2>
            <Form
                method='post'
                className='register'
                onSubmit={handleSubmit}>
                <Wrapper>
                    <Label
                        text='Email:'
                        label='emailAddress'
                    />
                    <Input
                        type='email'
                        id='emailAddress'
                        name='emailAddress'
                        autoComplete='off'
                        onChange={(e) => setUser({
                            ...user,
                            email: e.target.value
                        })}
                        value={email}
                        required
                    />
                </Wrapper>
                <Wrapper>
                    <Label
                        text='Password:'
                        label='password'
                    />
                    <Input
                        type='password'
                        id='password'
                        name='password'
                        autoComplete='off'
                        onChange={(e) => setUser({
                            ...user,
                            password: e.target.value
                        })}
                        value={password}
                        required
                    />
                </Wrapper>

                <input
                    type='hidden'
                    name='_action'
                    value='signIn'
                />
                <button
                    disabled={email === '' || password === ''}
                    className='submit'
                >
                    {isSubmitting ? 'Loading...' : 'Sign In'}
                </button>
                <p>Need an account?
                    <Link to='/register'>Sign up now</Link>
                </p>
            </Form>
        </>
    );
};

export default SignIn;