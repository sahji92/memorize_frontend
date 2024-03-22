import apiConnection from "../apiConnection.js";
import { apiEndpoints, httpMethods } from "../constants/constants.js";

export const signin = (formData,navigate) => async (dispatch) => {
  try {
    const  data  = await apiConnection(
      `${apiEndpoints.SIGNIN_ENDPOINT}/signin`,
      httpMethods.POST,
      formData
    );
    dispatch({ type: "AUTH", data });
    navigate('/');
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData,navigate) => async (dispatch) => {
  try {
    console.log({formData})
    console.log("in signup action")
    const  data = await apiConnection(
      `${apiEndpoints.SIGNUP_ENDPOINT}/signup`,
      httpMethods.POST,
      formData
    );
    dispatch({ type: "AUTH",data });
    navigate('/');
  } catch (error) {
    console.log(error.message);
  }
};

