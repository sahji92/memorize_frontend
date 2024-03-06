import React, { useEffect, useState } from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import Post from './Post/Post';
import useStyles from './styles';
import apiConnection from '../../apiConnection';
import { apiEndpoints, httpMethods } from '../../constants/constants';

const Posts = () => {
  const classes = useStyles();
  const [postData,setPostData] = useState([]);

  const getPosts = async () => {
    const data = await apiConnection(apiEndpoints.GET_POSTS_ENDPOINT,httpMethods.GET);
    if (data.status === 200) {
      setPostData([...data.data])
      console.log("success"+data)
      console.log("success"+postData)
    } 
    else
    console.log(data+"error")
  };
  useEffect(() => {getPosts()},[]);

  return (
    !(postData.length) ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {postData.map((post) => (
          <Grid key={post._id} item xs={12} sm={6} md={6}>
            <Post post={post} />
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default Posts;