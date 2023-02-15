import React from 'react';
import Table from '../../../components/table';

function ContentCreate() {
  return (
    <div className='m-5 h-full'>
       
        <div className='mb-5'>
            <p className='font-semibold text-xl'>Create Content</p>
            <div className='text-sm'>
                <p>Kwesi Bareth</p>
                <p>kwsibar@gmail.com</p>
            </div>
        </div>


        <div className='grid grid-cols-12 gap-4 spacing-bottom-two'>

            <div className='border rounded col-span-5 p-2'>
                <div className='mb-2'>
                    <label className='text-xs flex flex-col'>Content Heading:</label>
                    <input type='text' className='border rounded w-full py-1' />
                </div>

                <div className='mb-3'>
                    <label className='text-xs flex flex-col'>Content Body:</label>
                    <textarea type='text' className='border rounded w-full py-1'> </textarea>
                </div>

                <div className='flex justify-end'>
                    <button className='bg-purple-600 p-2 text-white rounded text-xs'>Create Content</button>
                </div>
            </div>

        </div>

        <div className=''>
          
                <p className='text-sm mb-3 font-semibold'>Content created</p>
                <div className='flex gap-2 mb-5 content-grid'>
                    {
                        [1,2,3,4].map(i=> 
                            <div className='card-main-page p-2 border rounded flex flex-col w-full text-xs content-grid-item'>
                                <p className='font-semibold mb-2'><span className='bg-green-400 rounded-full'></span>Title Content</p>
                                <p className='mb-3'>28th Something 2022</p>
                                <p className='w-4/5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                                    standard dummy text ever since the</p>
                                    
                            
                            </div>)
                    }
                
                
                

            </div>
    
        </div>

    </div>
  )
}

export default ContentCreate;