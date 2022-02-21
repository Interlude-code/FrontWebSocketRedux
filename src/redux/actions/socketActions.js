import actionsTypesSocket from "../actionsTypes/socketActionsTypes"

export const socketError=()=>{
    return{
        type : actionsTypesSocket.LOAD_FAILURE_SOCKET
    }
}

export const socketLoadSucces = (socket)=>{
    return{
        type: actionsTypesSocket.LOAD_SUCCESS_SOCKET,
        payload: socket
    }
}

export const socketLoadiang = (socket)=>{
    return{
        type: actionsTypesSocket.LOADING_SOCKET,
        payload: socket
    }
}
