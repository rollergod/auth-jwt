import React from 'react';
import { Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUserName } from '../redux/slices/userSlice';

const Login = () => {

    const [name, setName] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [redirectTo, setRedirectTo] = React.useState(false);

    const submit = async (e) => {
        e.preventDefault();

        const response = await fetch("http://localhost:8000/api/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name, password
            })
        });

        const { token } = await response.json();

        sessionStorage.setItem('jwt', token);
        setRedirectTo(true);
    }

    if (redirectTo) {
        return <Navigate to="/" />
    }

    return (
        <form onSubmit={submit}>
            <h1 className="h3 mb-3 fw-normal text-center">Please sign in</h1>

            <div className="form-group">
                <label>Username</label>
                <input type="text" className="form-control" placeholder="Username" required onChange={(e) => setName(e.target.value)} value={name} />
            </div>

            <div className="form-group">
                <label>Username</label>
                <input type="password" className="form-control" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} value={password} />
            </div>

            <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
        </form>
    )
};

export default Login;