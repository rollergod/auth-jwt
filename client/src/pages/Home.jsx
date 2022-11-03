import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUserName, getCurrentUser } from '../redux/slices/userSlice';


const Home = () => {


    const dispatch = useDispatch();
    const username = useSelector(state => state.userSlice.username);

    const getUser = () => {
        try {
            dispatch(getCurrentUser());
        } catch (error) {
            console.log('ERROR', error);
            alert('Ошибка при получении данных')
        }
    }

    React.useEffect(() => {
        getUser();
    }, []);

    return (
        <div className='auth-wrapper'>
            <div className='auth-inner'>
                <h2>{username === '' ? 'Your are not logged in' : `Hello ${username}`}</h2>
            </div>
        </div>
    )
}

export default Home;