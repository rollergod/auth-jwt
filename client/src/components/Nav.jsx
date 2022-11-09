import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setUserName } from '../redux/slices/userSlice';
import { FaBars, FaTimes } from 'react-icons/fa';

import { selectCurrentUser } from '../redux/slices/authSlice';
import { logOut } from '../redux/slices/authSlice';

const Nav = () => {


    const user = useSelector(selectCurrentUser);

    const navigate = useNavigate();

    //перенести в сервис
    const logout = async (e) => {
        e.preventDefault();
        dispatch(logOut());

        navigate("/login", { replace: true });
    };

    const regLinks = [
        {
            id: 1,
            link: 'login',
            href: '/login'
        },
        {
            id: 2,
            link: 'register',
            href: '/register'
        },
    ]

    const links = [
        {
            id: 1,
            link: 'home',
            href: '/'
        },
        {
            id: 2,
            link: 'users',
            href: '/users'
        },
        {
            id: 3,
            link: 'logout',
            click: logout
        }
    ]

    const dispatch = useDispatch();
    //const username = useSelector((state) => state.userSlice.username);
    const [nav, setNav] = React.useState(false);

    let menu;

    if (user === null) {
        menu = (
            <ul className='hidden md:flex'>
                {
                    regLinks.map(({ id, link, href }) => (
                        <li key={id} className='px-4 cursor-pointer capitalize fint-medium text-gray-500 hover:scale-105 duration 200'>
                            <Link to={href}>{link}</Link>
                        </li>
                    ))
                }
            </ul>
        )
    } else {
        menu = (
            <ul className='hidden md:flex'>
                {
                    links.map(({ id, link, href, click }) => (
                        <li key={id} className='px-4 cursor-pointer capitalize fint-medium text-gray-500 hover:scale-105 duration 200'>
                            <Link to={href} onClick={click}>{link}</Link>
                        </li>
                    ))
                }
            </ul>
        )
    }

    return (

        <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
            <div>
                <h1 className='text-5xl font-signature'>Renat</h1>
            </div>

            {menu}

            <div onClick={() => setNav(!nav)} className='cursour-pointer pr-4 z-10 text-gray-500 md:hidden'>
                {
                    nav ? <FaTimes size={30} /> : <FaBars size={30} />
                }
            </div>

            {nav && (
                <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>
                    {
                        links.map(({ id, link }) => (
                            <li key={id} className='px-4 cursor-pointer capitalize py-6 text-4xl'>{link}</li>
                        ))
                    }
                </ul>
            )}

        </div>
    );
}

export default Nav;