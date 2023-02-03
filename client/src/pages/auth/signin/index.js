import React from 'react'

function SignIn() {
  return (
    <div className='h-full grid grid-cols-3 main-signup-container'>
        
        <div className='col-span-2 right-pane flex justify-center items-center'>
            <div className='bg-gray-900 w-2/5 rounded p-3'>
                <h2 className='text-2xl mb-2'>Sign In</h2>
                <p className='text-sm font-light'>It is a long established fact that a reader will be distracted by 
                    the readable content of a page when  
                </p>

                <div className='mt-4'>
                   

                    <div className='flex flex-col mb-3'>
                        <label className='text-xs mb-1'>Email:</label>
                        <input type = 'email' className='py-1 rounded bg-gray-700' />
                    </div>

                    <div className='flex flex-col mb-3'>
                        <label className='text-xs mb-1'>Password:</label>
                        <input type = 'password' className='py-1 rounded bg-gray-700' />
                    </div>

                    

                    <div className='w-full my-5'>
                        <button className='btn hover:bg-yellow-700 w-full py-2 rounded text-sm'>Sign Up</button>
                    </div>
                    {/* <p className='flex justify-center my-2'>
                        OR
                    </p>
                    <div className='w-full'>
                        <button className='bg-blue-600 w-full py-2 rounded text-sm'>Continue with Google</button>
                    </div> */}
                </div>
            </div>
        </div>

        <div className=''>
            
        </div>
    </div>
  )
}

export default SignIn;