import { ID, Permission, Query, Role } from 'appwrite';
import { account, databases } from '../config/appwrite';

const DATABASE_ID = '656e36651e99327e908c';
const EVENT_COLLECTION = '6574e211cca4eeb0c544';

//** get user's account data
export const getCurrentUser = async () => {
    return await account.get();
};

//** start user session
export const signIn = async (email, password) => {
    try {
        return await account.createEmailSession(
            email, password
        );
    } catch (e) {
        console.log('error', e);
    }
};

//** end user session
export const signOut = async () => {
    try {
        await account.deleteSession('current');
    } catch (e) {
        console.log('error logging out', e);
    }
};

//** create new user account
export const createAccount = async (name, email, password) => {
    try {
        // ** create user account
        await account.create(ID.unique(), email, password, name);

        return await signIn(email, password);
    } catch (e) {
        return console.log('create account error', e.code, e);
    }
};

//** create new event document tied to user
export const createUserEvent = async (eventInfo, userID) => {
    let promise = databases.createDocument(
        DATABASE_ID,
        EVENT_COLLECTION,
        ID.unique(),
        eventInfo,
        [
            Permission.delete(Role.user(userID)),
            Permission.update(Role.user(userID)),
            Permission.read(Role.user(userID)),
        ]
    );
    promise.then(function
        (response) {
        console.log('res', response);
    }, function (error) {
        console.log('error', error);
    });

};

//** get users past events
export const getUserEvents = async (userid) => {
    try {
        let promise = await databases.listDocuments(DATABASE_ID, EVENT_COLLECTION,
            [
                Query.search('userID', userid)
            ]);
        return promise;
    } catch (e) {
        console.log('error getting user events:', e);
    }
};