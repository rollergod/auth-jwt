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
    const status = useSelector(state => state.userSlice.status);
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

            if (status === 'error')
                setRedirectTo(true);
            else
                setRedirectTo(false);

        } catch (error) {
            console.log(error, 'ERROR')
            alert('Ошибка при получении данных')
        }
    }

    React.useEffect(() => {
        getUser();
        getUsers();

    }, []);

    if (redirectTo) {
        return <Navigate to="/login" />
    }





    return (

        // <div className="FlexContainer">
        <div class="parent">
            {
                users.map((obj) => <UserItem key={obj.id} {...obj} />)
            }
        </div>

    )
}

export default Users;