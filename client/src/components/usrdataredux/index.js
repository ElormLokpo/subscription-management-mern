import {useEffect} from 'react';
import {useSelector} from 'react-redux';


export function GetUserDataFromReduxStore(){
    const usrData = useSelector(state=>state.loginS.value);
    return usrData;
}