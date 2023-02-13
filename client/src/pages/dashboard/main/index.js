import React from 'react'
import Table from '../../../components/table';

function DashboardMainPage() {
  return (
    <div className='m-5 h-full'>
       
        <div className='mb-2'>
            <p className='font-semibold text-xl'>Welcome to your dashboard</p>
            <div className='text-sm font-light'>
                <p>Kwesi Bareth</p>
                <p>kwsibar@gmail.com</p>
            </div>
        </div>


        <div className='grid gap-4 w-2/4 mb-5 spacing-bottom'>
            <div className=''>
               <p className='text-sm '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                standard dummy text ever since the 1500s, when an unknown printer took a galley of type 
                remaining essentially unchanged</p>
            </div>

        </div>
            

        <div className='grid grid-cols-12 gap-2'>
            <div className='col-span-5'>
                
                <div className='flex gap-2 mb-5 content-grid'>
                    {
                        [1,2,3,4].map(i=> 
                            <div className='card-main-page p-2 border rounded flex flex-col w-full text-xs content-grid-item'>
                                <p className='font-semibold mb-2'><span className='bg-green-400 rounded-full'></span>Title Content</p>
                                <p className='mb-3'>28th Something 2022</p>
                                {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                                    standard dummy text ever since the</p> */}
                                    <p>Refactoring code</p>

                                    <p>Second Refactoring</p>
                                    <p>Third refacotrdd</p>
                            
                            </div>)
                    }
                
                
                </div>

            </div>

           <div className='col-span-7'>
               
                <Table />
           </div>
    
        </div>
       


    </div>
  )
}

export default DashboardMainPage;