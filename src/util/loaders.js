import { getCurrentUser, getUserEvents } from '../auth/appwrite-helpers';
import { fetchData } from './helpers';

export function mainLoader() {
    const user = fetchData('user');
    return { user };
}

export async function profileLoader() {
    const data = await getCurrentUser();
    return data;
}

export async function userEventsLoader() {
    const user = await getCurrentUser();
    const data = await getUserEvents(user.$id);
    return data;
}