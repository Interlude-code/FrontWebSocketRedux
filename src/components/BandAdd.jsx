import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const BandAdd = () => {

  const {socket} = useSelector(state=>state.socket)
  const [value, setValue] = useState("")

  const submiteForm=(e)=>{
    e.preventDefault()
    socket.emit('add-band',(value))
  }

  return (
    <>
      <form onSubmit={e=>submiteForm(e)}  >
        <input className="border" onChange={(e)=>setValue(e.target.value)} type="text" placeholder="nuevo nombre banda" />
        <button className="bg-green-500 text-white rounded-md px-4  py-1  border">agregar band</button>
      </form>
    
    </>
  )
}

export default BandAdd