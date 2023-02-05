import React from 'react'
import Table from '../../../components/table';

function DashboardMainPage() {
  return (
    <div className='m-5 h-full'>
       
        <div className='mb-5'>
            <p className='font-semibold text-xl'>Welcome to your dashboard</p>
            <div className='text-sm'>
                <p>Kwesi Bareth</p>
                <p>kwsibar@gmail.com</p>
            </div>
        </div>


        <div className='grid grid-cols-12 gap-4 spacing-bottom'>

            <div className='border rounded col-span-5 p-2'>
                <div className='mb-2'>
                    <label className='text-xs flex flex-col'>Content Name:</label>
                    <input type='text' className='border rounded w-full py-1' />
                </div>

                <div className='mb-3'>
                    <label className='text-xs flex flex-col'>Content Name:</label>
                    <textarea type='text' className='border rounded w-full py-1'> </textarea>
                </div>

                <div className='flex justify-end'>
                    <button className='bg-yellow-400 p-2 rounded text-xs'>Create Content</button>
                </div>
            </div>

            <div className='flex flex-row col-span-7 gap-2 overflow-x'>
                {
                    [1,2,3,4,5,].map(i=> 
                        <div className='card-main-page p-4 border rounded flex flex-col justify-center items-center'>
                          

                            <div>
                                <p className='text-center font-light'>Brown Content</p>
                            </div>
                            
                            {/* <div className=''>
                                <button className='text-yellow-400 underline  px-5 py-1 '>View</button>
                            </div> */}
                        
                        </div>)
                }
               
               
            </div>


        </div>
            
        <div>
            <Table />
    
        </div>
       


    </div>
  )
}

export default DashboardMainPage;