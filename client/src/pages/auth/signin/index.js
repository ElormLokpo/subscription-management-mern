import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {storeToken, storeUserData} from '../../../services/redux/slices/loginSlice';
import axios from '../../../services/axios';
import { useNavigate, Link } from 'react-router-dom';

function SignIn() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
   
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleSubmit = ()=>{
        axios.post('/auth/login', {email, password})
        .then(res=>{
            if(res.data.token){
                dispatch(storeToken(res.data.token));
                dispatch(storeUserData(res.data.sendData));
                console.log({success:true})
            }
        })
    
    }
    const current = useSelector(state=>state.loginS.value);

   
    useEffect(()=>{       
        console.log(current.token);     
        if(current.token){
           navigate('/dashboard');
          
        }
    },[current]);
   
   

  return (
    <div className='h-full main-signup-container flex items-center justify-center'>
        
        <div className='right-pane flex justify-center items-center'>
            <div className='bg-white box rounded p-5'>
                <h2 className='text-3xl mb-4 font-semibold'>Sign In</h2>
                <p className='text-sm font-light'>It is a long established fact that a reader will be distracted by 
                    the readable content of a page when  
                </p>

                <div className='mt-4'>
                   

                    <div className='flex flex-col mb-3'>
                        <label className='text-xs mb-1'>Email:</label>
                        <input type = 'email' className='py-2 rounded bg-gray-100' onChange={e=>setEmail(e.target.value)}/>
                    </div>

                    <div className='flex flex-col mb-3'>
                        <label className='text-xs mb-1'>Password:</label>
                        <input type = 'password' className='py-2 rounded bg-gray-100' onChange = {e=>setPassword(e.target.value)} />
                    </div>

                    

                    <div className='w-full my-5'>
                        <button className='bg-blue-500 hover:bg-blue-900 w-full py-3 text-white rounded text-xs' onClick= {handleSubmit}>Sign In</button>
                    </div>

                    <div className='text-xs flex justify-center text-blue-700'>
                        <Link to = '/signup'>Don't have an account? Create one</Link>
                    </div>
                    {/* <p className='flex justify-center my-2'>
                        OR
                    </p>
                    <div className='w-full'>
                        <button className='bg-blue-500 text-white w-full py-3 rounded text-xs'>Continue with Google</button>
                    </div> */}
                </div>
            </div>
        </div>

       
    </div>
  )
}

export default SignIn;