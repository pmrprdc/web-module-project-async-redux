export const FETCH_DATA_REQUEST = "FETCH DATA"
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS"
export const FETCH_DATA_ERROR = "FETCH_DATA_ERROR"
import axiosInstance from "../axiosService";


export const fetchDataRequest = () => {
  return {
    type: FETCH_DATA_REQUEST
  };
};

export const fetchDataSuccess = (data) => {
    console.log(data)
  return {
    type: FETCH_DATA_SUCCESS,
    payload: data.activity
  };
};

export const fetchDataError = (error) => {
  return {
    type: FETCH_DATA_ERROR,
    payload: error
  };
};





export const fetchData = () => {
  return async (dispatch) => {
    dispatch(fetchDataRequest());
    try {
      const response = await axiosInstance.get();
      dispatch(fetchDataSuccess(response.data));
    } catch (error) {
      dispatch(fetchDataError(error.message));
    }
  };
};