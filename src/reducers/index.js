import { FETCH_DATA } from '../actions/boredFetch';


const initialState = {
    activity:"Press a button"
  };


  
  const boredReducer = (state = initialState, action) => {
    switch (action.type) {
      // Handle different action types and update the state accordingly
      // For example:
      case FETCH_DATA:
        return {
          ...state
        };
      // Add more cases as needed
      default:
        return state;
    }
  };


  export default boredReducer;
  

