import actionsTypesBand from "../actionsTypes/bandActionsTyps";


export const bandLoading=()=>{
    return{
        type : actionsTypesBand.LOADING_BANDS
    }
}

export const bandLoadSucces = (bands)=>{
    return{
        type: actionsTypesBand.LOAD_SUCCESS_BANDS,
        payload: bands
    }
}

export const updateNameBand=(id,name)=>{
   return{
       type: actionsTypesBand.UPDATE_NAME_BAND,
       payload:{
           id,
           name
       } 
    } 
}
