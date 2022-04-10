import {axiosRequest} from "../utils/apis";

import {setUser, setUserLoggingIn, setUserCreating} from '../store/user';
import {devUserData} from '../static/dev';

export const tryLoginUser = (email, password) => {
    return async dispatch => {
        dispatch(setUserLoggingIn(true));
        const user = await axiosRequest('https://pantrypalbackend.azurewebsites.net/login', "POST", {email: email, password: password}, devUserData);
        await dispatch(setUser(user));
        dispatch(setUserLoggingIn(false));
        return user;
    }
};

export const tryCreateUser = (name, email, password) => {
    return async dispatch => {
        dispatch(setUserCreating(true));
        const user = await axiosRequest('https://pantrypalbackend.azurewebsites.net/foodbanks', "POST", {name: name, email: email, password: password}, {});
        await dispatch(setUser(user));
        dispatch(setUserCreating(false));
        return user;
    }
};