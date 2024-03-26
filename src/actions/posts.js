import apiConnection from "../apiConnection.js";
import { apiEndpoints, httpMethods } from "../constants/constants.js";

export const getPosts = (page) => async (dispatch) => {
  try {
    dispatch({ type: 'START_LOADING' });
    const { data } = await apiConnection(
      `${apiEndpoints.GET_POSTS_ENDPOINT}?page=${page}`,
      httpMethods.GET
    );
    dispatch({ type: "FETCH_ALL", payload: data });
    dispatch({ type: 'END_LOADING' });

  } catch (error) {
    console.log(error.message);
  }
};

export const getPost = (id) => async (dispatch) => {
  try {
    dispatch({ type: 'START_LOADING' });
    const { data } = await apiConnection(
      `${apiEndpoints.GET_POST_ENDPOINT}/${id}`,
      httpMethods.GET
    );
    dispatch({ type: "FETCH_POST", payload: data });
    dispatch({ type: 'END_LOADING' });

  } catch (error) {
    console.log(error.message);
  }
};

export const getPostsBySearch = (searchQuery) => async (dispatch) => {
  try {
    dispatch({ type: 'START_LOADING' });
    const  {data: {data} } = await apiConnection(
      `${apiEndpoints.GET_POSTS_BY_SEARCH_ENDPOINT}/search?searchQuery=${searchQuery.search || 'none'}&tags=${searchQuery.tags}`,
      httpMethods.GET
    );
    dispatch({ type: "FETCH_BY_SEARCH", payload: data });
    dispatch({ type: 'END_LOADING' });

  } catch (error) {
    console.log(error);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    dispatch({ type: 'START_LOADING' });
    const { data } = await apiConnection(
      apiEndpoints.CREATE_POST_ENDPOINT,
      httpMethods.POST,
      post
    );
    dispatch({ type: "CREATE", payload: data });
    dispatch({ type: 'END_LOADING' });

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
        httpMethods.PUT
      );
      dispatch({ type: 'UPDATE', payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };
