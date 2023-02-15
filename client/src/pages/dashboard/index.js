import React from 'react'
import {Outlet} from 'react-router-dom';


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

        <div>
          <Outlet />
        </div>
       
        
    </div>
  )
}

export default Dashboard