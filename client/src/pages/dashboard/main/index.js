import React, { useEffect, useState } from 'react'
import HeaderText from '../../../components/headerText';
import axios from '../../../services/axios';
import { storeContentId } from '../../../services/redux/slices/contentSlice';
import {GetUserDataFromReduxStore} from '../../../components/usrdataredux';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { BiTrashAlt } from 'react-icons/bi';

function DashboardMainPage() {
    const [emailList, setEmailList] = useState([]);
    const [contents, setContents] = useState([]);
    const usrData = GetUserDataFromReduxStore();
  
    const dispatch = useDispatch();
    const navigate = useNavigate();

    let cont = useSelector(state=>state.contentS.value);
    console.log(usrData.userData.id);

    useEffect(()=>{
        // axios.get(`/useremails?content=${cont.contentID._id}`,{
        //     headers:{
        //         Authorization: `Bearer ${usrData.token}`
        //     }
        //     })
        //     .then(res=>{
        //         setEmailList(res.data.data);
            //})



         axios.get(`content?id=${usrData.userData.id}`,{
        headers:{
            Authorization: `Bearer ${usrData.token}`
        }
        })
        .then(res=>setContents(res.data.data));
    
       


    
        console.log(usrData);
  },[])
  
  const handleContentClick = (id)=>{
    dispatch(storeContentId(id));
    navigate('/dashboard/email');
    }
  
  return (
    <div className='m-5 h-full'>
       
       <HeaderText title = "Welcome to your Dashboard" />


        <div className='grid gap-4 w-2/4 mb-5 spacing-bottom'>
            <div className=''>
               <p className='text-sm '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                standard dummy text ever since the 1500s, when an unknown printer took a galley of type 
                remaining essentially unchanged
                standard dummy text ever since the 1500s, when an unknown printer took a galley of type 
                remaining essentially unchanged standard dummy text ever since the 1500s, when an unknown printer took a galley of type 
                remaining essentially unchanged
                </p>
            </div>

        </div>
            

        <div className='grid grid-cols-12 gap-2'>
            <div className='col-span-5'>

                <p className='text-sm mb-3 font-semibold'>Content created</p>
                <div className='flex gap-2 mb-5 content-grid'>
                    {
                         contents.length > 0 ?

                         contents.slice(0,4).map(i=> 
                             <div className='card-main-page p-2 border rounded flex flex-col w-full text-xs content-grid-item' onClick = {()=>handleContentClick(i)}>
                                 <p className='font-semibold mb-2'><span className='bg-green-400 rounded-full'></span>{i.contentName}</p>
                                 <p className='mb-3'>28th Something 2022</p>
                                 <p className='w-4/5'>{i.contentDescription}</p>
                                     
                             
                             </div>): <div className='w-full h-full'>
                                         <p className='text-gray-500 text-sm'>No Content to show</p>
                                     </div>
                    }
                
                
                </div>

            </div>

           <div className='col-span-7'>
                <p className='text-sm mb-3 font-semibold'>Subscribers</p>
                {
              
                <table className='border w-full  text-sm'>
                        <thead className=''>
                            <tr className='border-b bg-gray-100'>
                                <td className='py-2 px-2 font-semibold'>Email</td>
                                <td className='py-2 px-2 font-semibold'>Content</td>
                                <td className='py-2 px-2 font-semibold'>Delete</td>
                            </tr>
                        </thead>

                        {
                            <tr className='border-b'>
                                    <td className='py-2 px-2 text-sm'>
                                       <p className='text-sm'> Kinldy click on <Link to = '/dashboard/content' className='text-blue-400 underline'>Manage Content</Link> to see Subscribers.</p>
                                    </td>
                                    <td className='py-2 px-2 text-sm'>
                                       
                                    </td>
                                    <td className='py-2 px-2 text-sm text-red-400'>
                                       
                                    </td>
                                </tr>
                        }
                    
                        
                        
                </table>
            }     
              
           </div>
    
        </div>
       


    </div>
  )
}

export default DashboardMainPage;