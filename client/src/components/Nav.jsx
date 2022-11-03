import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setUserName } from '../redux/slices/userSlice';


const Nav = () => {

    const dispatch = useDispatch();
    const username = useSelector((state) => state.userSlice.username);
    const [redirectTo, setRedirectTo] = React.useState(false);

    const logout = async (e) => {
        e.preventDefault();
        sessionStorage.removeItem('jwt');
        dispatch(setUserName(''));
    };

    let menu;

    if (username === '') {
        menu = (
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/register">Register</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/users">Users</Link>
                </li>
            </ul>
        )
    } else {
        menu = (
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <span className="nav-link active" >{`Hello, ${username}`}</span>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/users">Users</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/login" onClick={logout}>Logout</Link>
                </li>
            </ul >
        )
    }

    return (
        <nav className="navbar navbar-expand navbar-light fixed-top">
            <div className="container">
                <Link className="navbar-brand" to="/">Home</Link>

                <div className="">
                    {menu}
                </div>

            </div>
        </nav>
    );
}

export default Nav;