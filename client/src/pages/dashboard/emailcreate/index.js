import React,{useState, useEffect} from 'react';
import HeaderText from '../../../components/headerText';
import Table from '../../../components/table';
import axios from '../../../services/axios';
import {GetUserDataFromReduxStore} from '../../../components/usrdataredux';
import { useSelector } from 'react-redux';

function EmailCreate() {
    const [titleMsg, setTitle] = useState();
    const [bodyMsg, setBody] = useState();
    
    let usrData = GetUserDataFromReduxStore();
    
    let cont = useSelector(state=>state.contentS.value);
    console.log('THIS CONTNET',cont.contentID);

    const handleSubmit = ()=>{
        console.log(titleMsg, bodyMsg);
        axios.post('/emailtosub/send',{titleMsg, bodyMsg,},{
            headers:{
                Authorization: `Bearer ${usrData.token}`
            }
        })
        .then(res=>{
            console.log(res.data);
        })

    }

  return (
    <div className='m-5 h-full'>
       
       <HeaderText title = "Send emails to subscribers" />


        <div className='grid grid-cols-12 gap-4 spacing-bottom-two mt-4'>

            <div className='border rounded col-span-5 p-2'>
                <div className='mb-2'>
                    <label className='text-xs flex flex-col'>Email Heading:</label>
                    <input type='text' className='border rounded w-full py-1 text-sm' onChange = {e=>setTitle(e.target.value)}/>
                </div>

                <div className='mb-3'>
                    <label className='text-xs flex flex-col'>Email Body:</label>
                    <textarea type='text' className='border rounded w-full px-1 text-sm' onChange = {e=>setBody(e.target.value)}> </textarea>
                </div>

                <div className='flex justify-end'>
                    <button className='bg-purple-600 p-2 text-white rounded text-xs' onClick = {handleSubmit}>Send email</button>
                </div>
            </div>

            <div className='flex flex-col col-span-7 gap-2 border rounded p-5'>
                <p>{cont.contentID.contentName}</p>
                <p className='text-sm font-light'>{cont.contentID.contentDescription}</p>
               
               
               
            </div>


        </div>
            
        <div>
            <p className='text-sm mb-3 font-semibold'>Subscribers</p>
            <Table />
    
        </div>
       


    </div>
  )
}

export default EmailCreate