import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUserName } from "../redux/slices/userSlice";



// export function AuthService() {
//     const username = useSelector(state => state.userSlice.username);

//     return username === '' ? false : username;
// }

export const AuthService = () => {

    const dispatch = useDispatch();

    const login = async (name, password) => {
        console.log('login method');

        const response = await fetch("http://localhost:8000/api/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name, password
            })
        }).then((response) => {
            if (!response.ok)
                alert('Введены некорректные данные');
        }).catch(console.error);

        const { token } = await response.json();
        sessionStorage.setItem('jwt', token);
        dispatch(setUserName(name));
    };

    const register = async (name, email, password) => {
        await fetch("http://localhost:8000/api/register", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name, email, password
            })
        }).then((response) => {
            if (!response.ok)
                alert('Введены некорректные данные');
        }).catch(console.error);
    };

    function isAuth() {
        return sessionStorage.getItem('jwt');
    }

    return {
        login,
        register,
        isAuth
    };

}

