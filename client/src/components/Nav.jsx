import React from 'react'
import { Link } from 'react-router-dom';

const Nav = () => {

    const logout = async (e) => {
        e.preventDefault();
        await fetch('http://localhost:8000/api/delete', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include'
        });

        // .setName('');
    };

    // let menu;

    // if (.name === '') {
    //     console.log('ПЕРЕРИСОВКА')
    //     menu = (
    //         <ul className="navbar-nav me-auto mb-2 mb-md-0">
    //             <li className="nav-item">
    //                 <Link className="nav-link active" aria-current="page" to="/login">Login</Link>
    //             </li>
    //             <li className="nav-item">
    //                 <Link className="nav-link active" aria-current="page" to="/register">Register</Link>
    //             </li>
    //         </ul>
    //     )
    // } else {
    //     console.log('ПЕРЕРИСОВКА')
    //     menu = (
    //         <ul className="navbar-nav me-auto mb-2 mb-md-0">
    //             <li className="nav-item active">
    //                 <Link className="nav-link" aria-current="page" to="/login" onClick={logout}>Logout</Link>
    //             </li>
    //         </ul>
    //     )
    // }

    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Home</Link>

                <div>
                    <ul className="navbar-nav me-auto mb-2 mb-md-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/register">Register</Link>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
    );
}

export default Nav;