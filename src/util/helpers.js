// ** local storage functions

import isEmail from 'validator/lib/isEmail';
import isURL from 'validator/lib/isURL';

export const fetchData = (key) => {
    return JSON.parse(localStorage.getItem(key));
};

export const setData = (key, value) => {
    return localStorage.setItem(key, JSON.stringify(value));
};

export const deleteItem = ({ key }) => {
    return localStorage.removeItem(key);
};

export const validateEmail = (email) => {
    return isEmail(email);
};

export const validateURL = (url) => {
    return isURL(url);
};