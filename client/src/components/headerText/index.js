import React from 'react';
import {GetUserDataFromReduxStore} from '../usrdataredux';

function HeaderText(props) {

  const usrData = GetUserDataFromReduxStore();
  return (
        <div className='mb-2'>
            <p className='font-semibold text-xl'>{props.title}</p>
            <div className='text-sm font-light'>
                <p>{usrData.userData.fullname}</p>
                <p>{usrData.userData.email}</p>
            </div>
        </div>
  )
}

export default HeaderText