import React from 'react';
import '../App.css';
import UserItem from '../components/UserItem';
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setUserName, getCurrentUser, getUsersAsync } from '../redux/slices/userSlice';


const Users = () => {

    const dispatch = useDispatch();
    const username = useSelector(state => state.userSlice.username);
    const users = useSelector(state => state.userSlice.users);
    const [redirectTo, setRedirectTo] = React.useState(false);

    const getUser = () => {
        try {
            dispatch(getCurrentUser());

        } catch (error) {
            console.log(error, 'ERROR')
            alert('Ошибка при получении данных')
        }
    }

    const getUsers = () => {
        try {
            dispatch(getUsersAsync());

        } catch (error) {
            console.log(error, 'ERROR')
            alert('Ошибка при получении данных')
        }
    }

    React.useEffect(() => {
        getUser();
        getUsers();

    }, []);

    return (
        <div class="parent">
            {
                users.map((obj) => <UserItem key={obj.id} {...obj} />)
            }
        </div>
    )
}

export default Users;