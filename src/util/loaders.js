import { getCurrentUser } from '../auth/appwrite-helpers';
import { fetchData } from './helpers';

export function mainLoader() {
    const user = fetchData('user')
    return { user };
}

export async function profileLoader() {
    const data = await getCurrentUser()
    return data
}