import React from 'react'

function index() {
  return (
    <div>

         <div className='border rounded col-span-5 p-2'>
                <div className='mb-2'>
                    <label className='text-xs flex flex-col'>Content Name:</label>
                    <input type='text' className='border rounded w-full py-1' />
                </div>

                <div className='mb-3'>
                    <label className='text-xs flex flex-col'>Content Description:</label>
                    <textarea type='text' className='border rounded w-full py-1'> </textarea>
                </div>

                <div className='flex justify-end'>
                    <button className='btn text-white p-2 rounded text-xs'>Create Content</button>
                </div>
            </div>
    </div>
  )
}

export default index;