import React, {useEffect, useState} from 'react';
import HeaderText from '../../../components/headerText';
import Table from '../../../components/table';
import {GetUserDataFromReduxStore} from '../../../components/usrdataredux';
import axios from '../../../services/axios';
import { useDispatch, useSelector } from 'react-redux';
import {storeContentId} from '../../../services/redux/slices/contentSlice';
import { useNavigate } from 'react-router-dom';

function ContentCreate() {
 const[contentName, setContentName] = useState();
 const[contentDescription, setContentDescription] = useState();
 const[owner, setOwner] = useState();
 const [contents, setContents] = useState([]);


const navigate = useNavigate();

let usrData = GetUserDataFromReduxStore();
const dispatch = useDispatch();

useEffect(()=>{
    axios.get(`content?id=${usrData.userData.id}`, {
        headers:{
            Authorization: `Bearer ${usrData.token}`
        }
    }).then(res=>setContents(res.data.data));
},[])


const submitHandler = ()=>{
   const data = {contentName, contentDescription, owner, owner : usrData.userData.id};
   
  
   axios.post('/content/create', data,{
    headers:{
        Authorization : `Bearer ${usrData.token}`
    }
   }).then(res=>{
         
         axios.get(`content?id=${usrData.userData.id}`,{
            headers:{
                Authorization: `Bearer ${usrData.token}`
            }
        })
        .then(res=>setContents(res.data.data));
   });

   
 }

 const handleContentClick = (id)=>{
   dispatch(storeContentId(id));
   navigate('/dashboard/email');
 }

  return (
    <div className='m-5 h-full'>
       
        <HeaderText title = "Create your content" />


        <div className='grid grid-cols-12 gap-4 spacing-bottom-two mt-4'>

            <div className='border rounded col-span-5 p-2'>
                <div className='mb-2'>
                    <label className='text-xs flex flex-col'>Content Heading:</label>
                    <input type='text' className='border rounded w-full py-1 text-sm px-1' onChange = {e=>setContentName(e.target.value)}/>
                </div>

                <div className='mb-3'>
                    <label className='text-xs flex flex-col'>Content Body:</label>
                    <textarea type='text' className='border rounded w-full py-1 px-1 text-sm' onChange = {e=> setContentDescription(e.target.value)}> </textarea>
                </div>

                <div className='flex justify-end'>
                    <button className='bg-blue-500 p-2 text-white rounded text-xs' onClick = {submitHandler}>Create Content</button>
                </div>
            </div>

        </div>

        <div className=''>
          
                <p className='text-sm mb-3 font-semibold'>Content created</p>
                <div className='flex gap-2 mb-5 content-grid'>
                    {
                        contents.length > 0 ?

                        contents.map(i=> 
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

    </div>
  )
}

export default ContentCreate;