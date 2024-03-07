import React, { useEffect, useState } from "react";
import useStyles from "./styles";
import { Button, Paper, TextField, Typography } from "@material-ui/core";
import FileBase from 'react-file-base64'
import apiConnection from "../../apiConnection";
import { apiEndpoints, httpMethods } from "../../constants/constants";



export default function Form() {
  const classes = useStyles();
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: ""
  });


  const handleSubmit =async (e) => {
e.preventDefault();
console.log(postData+"in form.js-24")
const data=await apiConnection(apiEndpoints.CREATE_POST_ENDPOINT,httpMethods.POST,{...postData});
if(data.status===201){
  console.log("post created")
  postData.creator=data.creator
      postData.title=data.title
      postData.message=data.message
      postData.tags=data.tags
      postData.selectedFile=data.selectedFile
}
else{
  console.log("error"+data)
}
  };

  const clear = () => {};
  
  return (
    <Paper className={classes.paper}>
      <form
        className={`${classes.form} ${classes.root}`}
        autoComplete="off"
        noValidate
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">creating a memory</Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={postData.creator}
          onChange={(e)=>setPostData({...postData,creator:e.target.value})}
        />
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={(e)=>setPostData({...postData,title:e.target.value})}
        />
        <TextField 
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          value={postData.message}
          onChange={(e)=>setPostData({...postData,message:e.target.value})}
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tags"
          fullWidth
          value={postData.tags}
          onChange={(e)=>setPostData({...postData,tags:e.target.value.split(',')})}
        />
        <div className={classes.fileInput}><FileBase type='file' multiple={false} onDone={({base64})=>{setPostData({...postData,selectedFile:base64})}}/></div>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
  );
}
