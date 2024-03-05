import React from 'react'
import {Post} from './Post/Post'
import useStyles from './styles'
import { useSelector } from 'react-redux';
import { CircularProgress, Grid } from '@material-ui/core';

export default function Posts() {
  const classes=useStyles();
   const posts=useSelector((state)=>state.posts);
   console.log(posts)
   console.log(posts+"in posts.js-10")
  return (
    !posts.length?<CircularProgress/> :(
      <Grid className={classes.mainContainer} container alignItems='stretch' spacing={3}>
        {posts.map((post)=>(
        <Grid key={post._id} item xs={12} sm={6}>
           <Post post={post}/>
        </Grid>
        ))}
      </Grid>
    )
  )
}
