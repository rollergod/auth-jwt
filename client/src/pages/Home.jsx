import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setUserName, getCurrentUser } from '../redux/slices/userSlice';
import HeroImage from '../assets/heroImage.png';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import About from '../components/About';
import Experience from '../components/Experience';

import { selectCurrentUser } from '../redux/slices/authSlice';


const Home = () => {


    const dispatch = useDispatch();
    // const username = useSelector(state => state.userSlice.username);

    const user = useSelector(selectCurrentUser);
    console.log('user', user);


    const HomePage = () => {
        return (
            <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
                <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
                    <div className='flex flex-col justify-center h-full'>
                        <h2 className='text-4xl sm:text-7xl font-bold text-white'>
                            Test text test text
                        </h2>
                        <p className='text-gray-500 py-4 max-w-md'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem pariatur dolores similique dolore architecto ipsum praesentium sed quis aliquid quas ad eius, dicta nisi quo. Et, aspernatur sit! Labore, mollitia?
                        </p>
                        <div>

                            <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                                Portfolio
                                {/* animation */}
                                <span className='group-hover:rotate-90 duration-300'>
                                    <MdOutlineKeyboardArrowRight size={20} className="ml-1" />
                                </span>
                            </button>

                        </div>
                    </div>
                    <div>
                        <img src={HeroImage} alt="my profile" className='rounded-2xl mx-auto w-2/3 md:w-full'></img>
                    </div>
                </div>
                <About />
                <Experience />
            </div>
        )
    }

    return (
        <>
            {user === null ? <h1>Loggin in</h1> : <HomePage />}
        </>
    )
}

export default Home;