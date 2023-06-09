import { FETCH_DATA_REQUEST, FETCH_DATA_ERROR, FETCH_DATA_SUCCESS } from '../actions/boredFetch';


const initialState = {
    activity:"Press a button",
    loading: false,
    data: null,
    error: null
  };


  
  const boredReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_DATA_REQUEST:
        return {
          ...state,
          loading: true,
          error: null
        };
      case FETCH_DATA_SUCCESS:
        return {
          ...state,
          loading: false,
          data: action.payload,
          error: null
        };
      case FETCH_DATA_ERROR:
        return {
          ...state,
          loading: false,
          data: null,
          error: action.payload
        };
      default:
        return state;
    }
  };
  


  export default boredReducer;
  

