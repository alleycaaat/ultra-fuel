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