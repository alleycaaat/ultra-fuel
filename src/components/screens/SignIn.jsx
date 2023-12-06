import { Link, useLocation, useNavigate } from 'react-router-dom';
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

import '../../util/forms.scss';

const SignIn = () => {
    const { authUser } = useAuth();

    const navigate = useNavigate();
    const location = useLocation();

    const [isSubmitting, setIsSubmitting] = useState(false);

    const from = location.state?.from?.pathname || '/dashboard';

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
            console.log('from', from);
            navigate(from, { replace: true });
            return;
        } catch (e) {
            console.log('log in error', e);
        }
        setIsSubmitting(false);
    };

    return (
        <section>
            <h2>Sign In</h2>
            <form
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

                <div className='button-wrap'>
                    <button
                        className='submit'
                    >
                        {isSubmitting ? 'Signing In...' : 'Sign In'}
                    </button>
                    <p>Need an account?
                        <Link className='link-text' to='/register'>Sign up now</Link>
                    </p>
                </div>
            </form>
        </section>
    );
};

export default SignIn;