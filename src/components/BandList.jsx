import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateNameBand } from '../redux/actions/bandActions'


const BandList = () => {

  const {socket} = useSelector(state=>state.socket)
  const {bands} = useSelector(state=>state.bands)

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ADD</th>
            <th>Nombre</th>
            <th>Votos</th>
            <th>Borrar</th>
          </tr>
        </thead>
        <tbody>
          {bands.map((band)=>{
            return(
              <CrearRows key={band.id} band={band} socket={socket} bands={bands}/>
            )
          })}
     
        </tbody>
      </table>
    
    </>
  )
}
const CrearRows=({band , socket , bands })=>{
  const dispatch = useDispatch()

  const cambioNombre=(id,name)=>{
    socket.emit('change-name',({
      id,
      name
    }))
  }

  const cambioString=(id, name)=>{
    dispatch(updateNameBand (id,name))
  }

  const aumentarVoto=(id)=>{
    socket.emit('increment-votes',(id))
  }

  const remove=(id)=>{
    socket.emit('remove-band',(id))
  }


  return(

    <tr className=" shadow" >

      <td>
        <button className=" bg-blue-500 text-white rounded-md px-4  py-1  border" onClick={()=>aumentarVoto(band.id)}>+1</button>
      </td>
      <td>
        <input type="text"  className=" border "value={band.name} onChange={(e)=>cambioString(band.id, e.target.value)} onBlur={(e)=>cambioNombre(band.id, e.target.value)}/>
      </td>
      <td>{band.votes}</td>
      <td>
        <button className='bg-red-500 text-white px-4 py-1 rounded-md border' onClick={()=>remove(band.id)}>
          Borrar
        </button>
      </td>
    </tr>
  )

}
export default BandList