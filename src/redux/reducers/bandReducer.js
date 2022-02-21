import actionsTypesBand from "../actionsTypes/bandActionsTyps"

const initialState = {
  isLoading: false,
  bands: []
}

const bandReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionsTypesBand.LOADING_BANDS:
      return {
        ...state,
        isLoading: true
      }
    case actionsTypesBand.LOAD_SUCCESS_BANDS:
      return {
        ...state,
        isLoading: false,
        bands: payload
      }
    case actionsTypesBand.UPDATE_NAME_BAND:
      return{
        ...state,
        bands: state.bands.map(band=>{
          if(band.id===payload.id){
            band.name=payload.name
          }
          return band
        })
      }

    default: return state
  }
}

export default bandReducer