/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useReducer } from 'react';
import { authReducer } from './reducer';

export const AuthProvider = createContext({
    currUser: false,
    authUser: (data) => { },
    loadingState: false,
    setLoading: (data) => { },
    logout: () => {},
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

    const setLoading = (data) => {
        dispatch({ type: 'SET_LOADING', payload: data });
    };

    const logout = () => {
        dispatch({type: 'LOG_OUT'})
    }

    const value = {
        currUser: state.currUser,
        authUser: authUser,
        loadingState: state.loadingState,
        setLoading: setLoading,
        logout: logout,
    };

    return <AuthProvider.Provider value={value}>{children}</AuthProvider.Provider>;
};