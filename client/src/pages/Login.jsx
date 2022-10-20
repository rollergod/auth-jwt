import React from 'react';
import { Navigate } from 'react-router-dom';

const Login = (props) => {

    const [email, setEmail] = React.useState('');
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
                email, password
            })
        });

        const { name, token } = await response.json();
        consolelog('login', name);
        consolelog('login', token);
        props.setName(name);
        sessionStorage.setItem('jwt', token);

        setRedirectTo(true);
    }

    if (redirectTo) {
        console.log('good')
        return <Navigate to="/" />
    }

    return (
        <form onSubmit={submit}>
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

            <input type="email" className="form-control" placeholder="name@example.com" required onChange={(e) => setEmail(e.target.value)} value={email} />
            <input type="password" className="form-control" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} value={password} />

            <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
        </form>
    )
};

export default Login;