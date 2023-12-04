/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useReducer } from 'react';
import { authReducer } from './reducer';

export const AuthProvider = createContext({});

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, []);

    const value = {};

    return <AuthProvider.Provider value={value}>{children}</AuthProvider.Provider>;
};