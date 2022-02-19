import { useEffect, useState } from 'react'
import { io } from 'socket.io-client'
import BandAdd from './components/BandAdd'
import BandList from './components/BandList'


const connectScoketServer =()=>{
  const socket = io('http://localhost:5000',{
    transports:['websocket']
  })
  return socket
}

function App() {

  const [online,setOnline]= useState(false)
  const [socket] = useState(connectScoketServer())
  const [bands, setBands] = useState([])

  useEffect(()=>{
    setOnline(socket.connected)
  },[socket])

  useEffect(()=>{

    socket.on('connect',()=>{
      setOnline(true)
    })

  },[socket])
  
  useEffect(()=>{

    socket.on('disconnect',()=>{
      setOnline(false)
    })

  },[socket])

  useEffect(()=>{

    socket.on('current-bands',(bands)=>{
      console.log(bands)
      setBands(bands)
    })

  },[socket])


  return (
    <div className="h-screen container max-w-lg mx-auto ">
      <div>
         <span className=' text-2xl'>Service Status :</span>
         {online?(<span className="text-green-500 text-2xl">Online</span>):
         (<span className="text-red-500 text-2xl">Offline</span>)}
      </div>
      <hr/>
      <div>
        <table className="w-full text-center">
          <thead>
            <tr>
              <th>BandList</th>
              <th>Agregar banda</th>
            </tr>
          </thead>
          <tbody>
            <td>
              <BandList bands={bands} socket={socket} setBands={setBands}/>
            </td>
            <td>
              <BandAdd socket={socket}/>
            </td>
          </tbody>
        </table>

      </div>
    </div>
  )
}

export default App
