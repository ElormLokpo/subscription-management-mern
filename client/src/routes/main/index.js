import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import SignUp from '../../pages/auth/signup';
import SignIn from '../../pages/auth/signin';
import Dashboard from '../../pages/dashboard';

function MainRoute() {
  return (
        <BrowserRouter>
            <Routes>
                <Route path ='/signup' element = {<SignUp />} />
                <Route path ='/signin' element = {<SignIn/>} />
                <Route path ='/dashboard' element = {<Dashboard />} />

            </Routes>
        
        </BrowserRouter>
  )
}

export default MainRoute;