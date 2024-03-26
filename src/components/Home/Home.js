import { Container, Grow, Grid, Paper, AppBar, TextField, Button, Chip } from '@material-ui/core';
import Posts from '../Posts/Posts';
import Form from '../Form/Form';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getPosts, getPostsBySearch } from '../../actions/posts';
import useStyles from "./styles";
import Pagination from '../Pagination';
import ChipInput from 'material-ui-chip-input';

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
  const [search,setSearch]=useState('');
  const[tags,setTags]=useState([]);

  const handleKeyPress=(e)=>{
   if(e.keyCode===13){
     //handle search
     searchPost()
   }
  }
  const handleAdd=(tag)=>{
    setTags([...tags,tag])
   }
   const handleDelete=(tagToDelete)=>{
    setTags(tags.filter((tag)=>tag!==tagToDelete))
   }
   const searchPost=()=>{
    if(search.trim()||tags){
      //dispatch search posts
      dispatch(getPostsBySearch({search,tags:tags.join(',')}))
      navigate(`/posts/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`)
    }
    else{
      navigate('/')
    }
   }
  return (
    <Grow in>
      <Container maxWidth='xl'>
        <Grid className={classes.mainContainer} container justifyContent="space-between" alignItems="stretch" spacing={3}>
          <Grid item xs={12} sm={6} md={9}>
            <Posts setCurrentId={setCurrentId}/>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
          <AppBar className={classes.appBarSearch} position="static" color="inherit">
              <TextField name="search" variant="outlined" 
              label="Search Memories" 
              fullWidth value={search} onChange={(e) =>setSearch(e.target.value) }
              onKeyDown={handleKeyPress} />
              <ChipInput
              value={tags}
              onDelete={handleDelete}
              onAdd={handleAdd}
              label="search tags"
              style={{margin:"10px 0"}}
              variant="outlined"/>
              <Button onClick={searchPost} variant='contained' className={classes.searchButton} color='primary'>Search</Button>
            </AppBar>
            <Form currentId={currentId} setCurrentId={setCurrentId}/>
            <Paper elevation={6}>
               <Pagination page={page}/>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;