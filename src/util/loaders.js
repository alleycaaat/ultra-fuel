import { fetchData } from './helpers';

export function mainLoader() {
    const user = fetchData('user')
    return { user };
}