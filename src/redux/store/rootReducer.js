import { combineReducers } from 'redux'
import bandReducer from '../reducers/bandReducer'
import socketReducer from '../reducers/socketReducers'

const rootReducer = () => {
  return combineReducers(
    {
      bands: bandReducer,
      socket:socketReducer
    }
  )
}

export default rootReducer