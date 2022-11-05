import React from 'react';
import './App.css';
import Register from './pages/Register';
import Login from './pages/Login';
import Nav from './components/Nav';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setUserName, getCurrentUser } from './redux/slices/userSlice'
import Users from './pages/Users';
import SocialLinks from './components/SocialLinks';

import { RequireAuth } from './hoc/RequireAuth';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <div className='auth-wrapper'>
          <div className='auth-inner'>
            <Routes>
              {/* exact убирает совпадание путей (главный путь начинается на /, и если перейти на /login то там будет и /home) */}
              <Route path='/' exact element={
                <RequireAuth>
                  <Home />
                </RequireAuth>
              } />
              <Route path='/login' element={<Login />} />
              <Route path='/users' element={
                <RequireAuth>
                  <Users />
                </RequireAuth>
              } />
              <Route path='/register' element={<Register />} />
            </Routes>
          </div>
        </div>
        <SocialLinks />
      </BrowserRouter>
    </div>
  );
}

export default App;
