import React from 'react';
import { Navigate } from 'react-router-dom';

const Register = () => {

    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [redirectTo, setRedirectTo] = React.useState(false);

    const submit = async (e) => {
        e.preventDefault();

        await fetch("http://localhost:8000/api/register", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name, email, password
            })
        });

        setRedirectTo(true);

    }

    if (redirectTo) {
        console.log('good')
        return <Navigate to="/login" />
    }

    return (
        <form onSubmit={submit}>
            <h1 className="h3 mb-3 fw-normal">Please register</h1>


            <input className="form-control" placeholder="Name" required onChange={(e) => setName(e.target.value)} value={name} />
            <input type="email" className="form-control" placeholder="name@example.com" required onChange={(e) => setEmail(e.target.value)} value={email} />
            <input type="password" className="form-control" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} value={password} />

            <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
        </form>
    )
}

export default Register;