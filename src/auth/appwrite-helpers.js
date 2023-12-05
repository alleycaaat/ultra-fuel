import { ID } from 'appwrite';

import { account } from '../config/appwrite';

// ** get user's account data
export const getCurrentUser = async () => {
    return await account.get();
};

// ** start user session
export const signIn = async (email, password) => {
    try {
        return await account.createEmailSession(
            email, password
        );
    } catch (e) {
        console.log('error',e)
    }
};

export const createAccount = async (name, email, password) => {
    try {
        // ** create user account
        await account.create(ID.unique(), email, password, name);

        return await signIn(email, password);
    } catch (e) {
        return console.log('create account error', e.code, e);
    }
};