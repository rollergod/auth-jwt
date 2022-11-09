import React from 'react';
import '../App.css';
import UserItem from '../components/UserItem';
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setUserName, getCurrentUser, getUsersAsync } from '../redux/slices/userSlice';

import { useGetUsersQuery } from '../redux/slices/userApi';


const Users = () => {

    const dispatch = useDispatch();
    //const username = useSelector(state => state.userSlice.username);
    // const users = useSelector(state => state.userSlice.users);
    const [redirectTo, setRedirectTo] = React.useState(false);

    const { data = [], isLoading } = useGetUsersQuery();

    React.useEffect(() => {
        // getUser();
        // getUsers();

    }, []);

    return (
        <div class="parent">
            {
                data.map((obj) => <UserItem key={obj.id} {...obj} />)
            }
        </div>
    )
}

export default Users;