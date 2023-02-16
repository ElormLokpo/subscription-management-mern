import React from 'react';
import {GetUserDataFromReduxStore} from '../usrdataredux';

function HeaderText(props) {

  const usrData = GetUserDataFromReduxStore();
  return (
        <div className='mb-2'>
            <p className='font-semibold text-xl'>{props.title}</p>
            <div className='text-sm font-light'>
                <p>{usrData.fullname}</p>
                <p>{usrData.email}</p>
            </div>
        </div>
  )
}

export default HeaderText