import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import SignUp from '../../pages/auth/signup';
import SignIn from '../../pages/auth/signin';
import Dashboard from '../../pages/dashboard';
import EmailCreate from '../../pages/dashboard/emailcreate';
import ContentCreate from '../../pages/dashboard/contentcreate';
import DashboardMainPage from '../../pages/dashboard/main';


function MainRoute() {
  return (
        <BrowserRouter>
            <Routes>
                <Route path ='/signup' element = {<SignUp />} />
                <Route path ='/signin' element = {<SignIn/>} />
                <Route path ='dashboard' element = {<Dashboard />}>
                        <Route path = 'main' element = {<DashboardMainPage />} />
                        <Route path = 'email' element = {<EmailCreate />} />
                        <Route path = 'content' element = {<ContentCreate />} />
                </Route>
               
            </Routes>
        
        </BrowserRouter>
  )
}

export default MainRoute;