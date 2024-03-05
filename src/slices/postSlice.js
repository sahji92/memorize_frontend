import { createSlice } from "@reduxjs/toolkit";

const initialState={
  creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: ""
}
 
export const postSlice=createSlice({
name:"posts",
initialState,
reducers:{
  createPost:(state,action)=>{
    console.log(action.payload+state.creator)
    return action.payload
    },
  getPosts:(state,action)=>{
    return action.payload
  }
}
})
export const {createPost,getPosts}=postSlice.actions
export default postSlice.reducer