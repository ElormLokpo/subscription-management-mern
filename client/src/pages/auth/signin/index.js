import React from 'react'

function SignIn() {
  return (
    <div className='h-full main-signup-container flex items-center justify-center'>
        
        <div className='right-pane flex justify-center items-center'>
            <div className='bg-white box rounded p-5'>
                <h2 className='text-3xl mb-4 font-semibold'>Sign In</h2>
                <p className='text-sm font-light'>It is a long established fact that a reader will be distracted by 
                    the readable content of a page when  
                </p>

                <div className='mt-4'>
                   

                    <div className='flex flex-col mb-3'>
                        <label className='text-xs mb-1'>Email:</label>
                        <input type = 'email' className='py-2 rounded bg-gray-100' />
                    </div>

                    <div className='flex flex-col mb-3'>
                        <label className='text-xs mb-1'>Password:</label>
                        <input type = 'password' className='py-2 rounded bg-gray-100' />
                    </div>

                    

                    <div className='w-full my-5'>
                        <button className='btn hover:bg-yellow-600 w-full py-3 rounded text-sm'>Sign Up</button>
                    </div>
                    <p className='flex justify-center my-2'>
                        OR
                    </p>
                    <div className='w-full'>
                        <button className='bg-black text-white w-full py-3 rounded text-sm'>Continue with Google</button>
                    </div>
                </div>
            </div>
        </div>

       
    </div>
  )
}

export default SignIn;