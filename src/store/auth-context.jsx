/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useReducer } from 'react';
import { authReducer } from './reducer';

export const AuthProvider = createContext({
    currUser: false,
    authUser: (data) => { },
});

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, []);

    const authUser = async (data) => {
        if (!state.currUser) {
            dispatch({
                type: 'AUTH_USER', payload: {
                    userID: data.$id,
                    user: data.name,
                }
            });
        }
    };

    const value = {
        currUser: state.currUser,
        authUser: authUser,
    };

    return <AuthProvider.Provider value={value}>{children}</AuthProvider.Provider>;
};