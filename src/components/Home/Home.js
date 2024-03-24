import { Container, Grow, Grid, Paper, AppBar, TextField } from '@material-ui/core';
import Posts from '../Posts/Posts';
import Form from '../Form/Form';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getPosts } from '../../actions/posts';
import useStyles from "./styles";
import Pagination from '../Pagination';
import { useLocation, useNavigate } from 'react-router-dom';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Home = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch=useDispatch();  
  const classes = useStyles();
  const query=useQuery();
  const page=query.get('page')||1;
  const searchQuery=query.get('searchQuery');
  const navigate=useNavigate();
  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch,currentId])
  
  return (
    <Grow in>
      <Container maxWidth='xl'>
        <Grid className={classes.mainContainer} container justifyContent="space-between" alignItems="stretch" spacing={3}>
          <Grid item xs={12} sm={6} md={9}>
            <Posts setCurrentId={setCurrentId}/>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
          <AppBar className={classes.appBarSearch} position="static" color="inherit">
              <TextField name="search" variant="outlined" label="Search Memories" fullWidth value="test" onChange={() => { }} />
            </AppBar>
            <Form currentId={currentId} setCurrentId={setCurrentId}/>
            <Paper elevation={6}>
               <Pagination/>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;