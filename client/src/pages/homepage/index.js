import React from 'react';
import ImageOne from '../../assets/images/home.jpg'
import {useNavigate} from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();


  return (
    <div className='h-full flex justify-center items-center'>
        <div className=' flex w-full h-4/6 mx-28'>
            <div className='w-6/12 flex items-center justify-center mx-5'>
                <div className=' mx-5 w-9/12'>
                    <h1 className='font-semibold text-5xl mb-6'>Welcome to SubMail</h1>
                    <p className='text-sm font-light mb-8'>Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. L
                        orem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of typ
                        e and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typ
                       </p>
                    <div>
                        <button className='bg-blue-500 p-3 mr-3 w-3/12 rounded text-sm font-light text-white' onClick={()=>navigate('/signup')}>Get Started</button>
                        <button className='bg-blue-800 p-3 w-3/12 rounded text-sm font-light text-white' onClick={()=>navigate('/signin')}>Sign In</button>
                    </div>
                </div>
            </div>
            <div className='w-6/12 flex items-center justify-center'>
                <img src = {ImageOne} className = 'w-3/4'/>
            </div>
        </div>
        
    </div>
  )
}

export default HomePage