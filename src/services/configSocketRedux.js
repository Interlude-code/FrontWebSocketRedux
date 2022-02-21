import {useEffect } from 'react'
import io from 'socket.io-client'
import { socketError,socketLoadSucces,socketLoadiang } from '../redux/actions/socketActions'
import {useDispatch ,useSelector} from 'react-redux'

const configSocketRedux =(serverPath)=>{
  
  const dispatch = useDispatch()
  const { socket } = useSelector(state=>state.socket)
      useEffect(()=>{
        dispatch(socketLoadiang( io.connect(serverPath,{
          transports:['websocket']
        })))
      },[])

      useEffect(()=>{
        if(socket){
          socket.on('connect',()=>{
            dispatch(socketLoadSucces(socket))
        })
        }
    
      },[socket])
      
      useEffect(()=>{
        if(socket){
          socket.on('disconnect',()=>{
            dispatch(socketError())
        })
        }
        
    
      },[socket])
    

}

export default configSocketRedux