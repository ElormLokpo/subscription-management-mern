import React from 'react';
import {Outlet, Link} from 'react-router-dom';


function Dashboard() {
  return (
    <div>
        <nav className='bg-gray-900 text-white py-2 px-3 flex justify-between text-sm'>
            <div>Logo</div>
            <div className='inline-flex gap-3'>
                <Link to=''>Dashboard</Link>
                <Link to = 'content'>Create Content</Link>
                <Link to = 'email'>Create Email</Link>

                <Link to = ''>Profile</Link>
                <Link to = ''>Logout</Link>
                
            </div>
        </nav>

        <div>
          <Outlet />
        </div>
       
        
    </div>
  )
}

export default Dashboard