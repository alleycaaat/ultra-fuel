import { redirect } from 'react-router-dom';

export async function registerAction(username, userID) {
    try {
        localStorage.setItem('user', JSON.stringify(username));
        localStorage.setItem('userID', JSON.stringify(userID));

        return redirect('/dashboard');
    } catch (error) {
        console.log(error, 'error');
    }
}