
import {useDispatch ,useSelector } from 'react-redux'
import { bandLoadSucces } from '../redux/actions/bandActions'
import { useEffect } from 'react';

const loadBands=()=>{

    const { socket } = useSelector(state=>state.socket)
    const dispatch = useDispatch();
    useEffect(()=>{
        
          socket?.on('current-bands',(bands)=>{
            dispatch(bandLoadSucces(bands))
          })
      
      },[socket])

}

export default loadBands
