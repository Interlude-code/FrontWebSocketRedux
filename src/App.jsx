import BandAdd from './components/BandAdd'
import BandList from './components/BandList'
import configSocketRedux  from './services/configSocketRedux'
import {useSelector} from 'react-redux'
import loadBands from './services/loadBands'
import ChartBand from './components/ChartBand'



function App() {

  const {online} = useSelector(state=>state.socket)
  configSocketRedux('http://localhost:5000/')
  loadBands()



  return (
    <div className="h-screen container max-w-lg mx-auto ">
      <div>
         <span className=' text-2xl'>Service Status :</span>
         {online?(<span className="text-green-500 text-2xl">Online</span>):
         (<span className="text-red-500 text-2xl">Offline</span>)}
      </div>
      <hr/>
      <div>
        <ChartBand/>
        <table className="w-full text-center">
          <thead>
            <tr>
              <th>BandList</th>
              <th>Agregar banda</th>
            </tr>
          </thead>
          <tbody>
            <td>
              <BandList />
            </td>
            <td>
              <BandAdd />
            </td>
          </tbody>
        </table>

      </div>
    </div>
  )
}

export default App
