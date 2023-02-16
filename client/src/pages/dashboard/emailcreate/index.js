import React from 'react';
import HeaderText from '../../../components/headerText';
import Table from '../../../components/table';

function EmailCreate() {
  return (
    <div className='m-5 h-full'>
       
       <HeaderText title = "Send emails to subscribers" />


        <div className='grid grid-cols-12 gap-4 spacing-bottom-two mt-4'>

            <div className='border rounded col-span-5 p-2'>
                <div className='mb-2'>
                    <label className='text-xs flex flex-col'>Email Heading:</label>
                    <input type='text' className='border rounded w-full py-1' />
                </div>

                <div className='mb-3'>
                    <label className='text-xs flex flex-col'>Email Body:</label>
                    <textarea type='text' className='border rounded w-full py-1'> </textarea>
                </div>

                <div className='flex justify-end'>
                    <button className='bg-purple-600 p-2 text-white rounded text-xs'>Send email</button>
                </div>
            </div>

            <div className='flex flex-col col-span-7 gap-2 border rounded p-5'>
                <p>Content Title</p>
                <p className='text-sm font-light'>It is a long established fact that a reader will be distracted by the readable content of a page when 
                    looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, 
                    as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing 
                    packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncove</p>
               
               
               
            </div>


        </div>
            
        <div>
            <Table />
    
        </div>
       


    </div>
  )
}

export default EmailCreate