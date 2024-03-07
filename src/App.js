import "./App.css";
import { AppBar, Container, Grid, Grow, Typography } from "@material-ui/core";
import memories from "./images/memories.png";
import Form from './components/Form/Form';
import Posts from './components/Posts/Posts';
import useStyles from './styles'
import { useEffect } from "react";

function App() {
  const classes=useStyles();

   useEffect(() => {

   }, [])
  
  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          Memorize
        </Typography>
        <img className={classes.image} src={memories} alt="memories" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid className={classes.mainContainer} container justifyContent="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
               <Posts/>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form/>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
