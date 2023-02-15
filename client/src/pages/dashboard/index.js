import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ContentCreate from './contentcreate'
import EmailCreate from './emailcreate'
import DashboardMainPage from './main'

function Dashboard() {
  return (
    <div>
        <nav className='bg-gray-900 text-white py-2 px-3 flex justify-between text-sm'>
            <div>Logo</div>
            <div className='inline-flex gap-3'>
                <p>Dashboard</p>
                <p>Create Email</p>
                <p>Profile</p>
                <p>Logout</p>
                
            </div>
        </nav>
        <Routes>
          <Route path = '/main' element = {<DashboardMainPage />} />
          <Route path = '/email' element = {<EmailCreate />} />
          <Route path = '/content' element = {<ContentCreate />} />

        </Routes>
        
    </div>
  )
}

export default Dashboard