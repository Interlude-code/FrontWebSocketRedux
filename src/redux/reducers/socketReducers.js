import actionsTypesSocket from "../actionsTypes/socketActionsTypes"

const initialState = {
  online: false,
  socket: null
}

const socketReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionsTypesSocket.LOAD_FAILURE_SOCKET:
      return {
        ...state,
        online: false
      }
    case actionsTypesSocket.LOAD_SUCCESS_SOCKET:
      return {
        ...state,
        online: true,
        socket: payload
      }
      case actionsTypesSocket.LOADING_SOCKET:
        return {
          ...state,
          socket: payload
        }

    default: return state
  }
}

export default socketReducer