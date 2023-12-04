import { useContext } from 'react';
import { AuthProvider } from '../store/auth-context';

export const useAuth = () => {
    return useContext(AuthProvider);
};