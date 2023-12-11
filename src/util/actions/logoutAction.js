import { deleteData } from '../helpers';

export async function logoutAction() {
    deleteData({
        key: 'user'
    });
    deleteData({
        key: 'userID'
    });
}