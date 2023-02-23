import React,{useState, useEffect} from 'react';
import HeaderText from '../../../components/headerText';
import Table from '../../../components/table';
import axios from '../../../services/axios';
import {GetUserDataFromReduxStore} from '../../../components/usrdataredux';
import { useSelector } from 'react-redux';
import { BiTrashAlt } from 'react-icons/bi';

function EmailCreate() {
    const [titleMsg, setTitle] = useState();
    const [bodyMsg, setBody] = useState();
    const [emailList, setEmailList] = useState([]);


    let usrData = GetUserDataFromReduxStore();
    
    let cont = useSelector(state=>state.contentS.value);
  //  console.log('THIS CONTNET',cont.contentID);


        axios.get(`/useremails?content=${cont.contentID._id}`,{
            headers:{
                Authorization: `Bearer ${usrData.token}`
            }
        })
        .then(res=>{
            setEmailList(res.data.data);
        })
    

    const handleSubmit = ()=>{
        
        axios.post('/emailtosub/send',{titleMsg, bodyMsg, contentid: cont.contentID._id},{
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


        <div className='grid grid-cols-12 gap-4 mt-4 spacing-bottom-two'>

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
                    <button className='bg-blue-500 p-2 text-white rounded text-xs' onClick = {handleSubmit}>Send email</button>
                </div>
            </div>

            <div className='flex flex-col col-span-7 gap-2 border rounded p-5'>
                <p>{cont.contentID.contentName}</p>
                <p className='text-sm font-light'>{cont.contentID.contentDescription}</p>
               
              
               
            </div>


        </div>

        
       
            
        <div>
            <p className='text-sm mb-3 font-semibold'>Subscribers({emailList.length})</p>
                    
            {
                emailList.length !== 0 ? 
                <table className='border w-full h-full text-sm'>
                        <thead className=''>
                            <tr className='border-b bg-gray-100'>
                                <td className='py-2 px-2 font-semibold'>Email</td>
                                <td className='py-2 px-2 font-semibold'>Content</td>
                                <td className='py-2 px-2 font-semibold'>Delete</td>
                            </tr>
                        </thead>

                        {
                            emailList.map(i=>  <tr className='border-b'>
                                                        <td className='py-2 px-2 text-sm'>
                                                            {i.email}
                                                        </td>
                                                        <td className='py-2 px-2 text-sm'>
                                                            {cont.contentID.contentName}
                                                        </td>
                                                        <td className='py-2 px-2 text-sm text-red-400'>
                                                            <BiTrashAlt />
                                                        </td>
                                                    </tr>)
                        }
                    
                        
                        
                </table>: <p>No subscribers.</p>
            }     
           
    
        </div>
       


    </div>
  )
}

export default EmailCreate