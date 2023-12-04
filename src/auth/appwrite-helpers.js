import { account } from '../config/appwrite';

// ** get user's account data
export const getCurrentUser = async () => {
    return await account.get();
};