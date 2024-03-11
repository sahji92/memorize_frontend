import apiConnection from "../apiConnection.js";
import { apiEndpoints, httpMethods } from "../constants/constants.js";

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await apiConnection(
      apiEndpoints.GET_POSTS_ENDPOINT,
      httpMethods.GET
    );
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await apiConnection(
      apiEndpoints.CREATE_POST_ENDPOINT,
      httpMethods.POST,
      post
    );
    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await apiConnection(
      `${apiEndpoints.LIKE_POST_ENDPOINT}/${id}/likePost`,
      httpMethods.PUT
    );

    dispatch({ type: 'LIKE', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await apiConnection(
      `${apiEndpoints.DELETE_POST_ENDPOINT}/${id}`,
      httpMethods.DELETE
    );
    dispatch({ type: 'DELETE', payload: id });
  } catch (error) {
    console.log(error.message);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
    try {
      const { data } = await apiConnection(
        `${apiEndpoints.UPDATE_POST_ENDPOINT}/${id}`,
        httpMethods.PUT,post
      );
      dispatch({ type: 'UPDATE', payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };
