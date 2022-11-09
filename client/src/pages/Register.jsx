import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


import { useRegisterMutation } from '../redux/slices/authApiSlice';

const Register = () => {

    const navigate = useNavigate();

    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const [register] = useRegisterMutation();


    const handleSubmit = async (e) => {
        e.preventDefault();
        await register({ name, email, password }).unwrap();
        navigate('/login', { replace: true });
    }


    return (
        <div className='flex flex-col items-center justify-center w-screen h-screen bg-gray-200 text-gray-700'>
            <h1 class="font-bold text-2xl">Registration</h1>

            <form class="flex flex-col bg-white rounded shadow-lg p-12 mt-12" onSubmit={handleSubmit}>
                <label class="font-semibold text-xs" for="usernameField">Username</label>
                <input class="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" type="text" onChange={(e) => setName(e.target.value)} value={name} />

                <label class="font-semibold text-xs" for="usernameField">Email</label>
                <input class="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" type="text" onChange={(e) => setEmail(e.target.value)} value={email} />

                <label class="font-semibold text-xs mt-3" for="passwordField">Password</label>
                <input class="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" type="password" onChange={(e) => setPassword(e.target.value)} value={password} />

                <button type='submit' class="flex items-center justify-center h-12 px-6 w-64 bg-blue-600 mt-8 rounded font-semibold text-sm text-blue-100 hover:bg-blue-700">Register</button>

                <div class="flex mt-6 justify-center text-xs">
                    <Link class="text-blue-400 hover:text-blue-500" to="/login">Sign in</Link>
                </div>

            </form>
        </div>
    )
}

export default Register;