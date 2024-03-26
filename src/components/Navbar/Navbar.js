import { AppBar, Avatar, Button, Toolbar, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import memorieslogo from "../../images/memories-Logo.png";
import memoriestext from "../../images/memories-Text.png";
import useStyles from "./styles";
import { Link, useLocation, useNavigate} from "react-router-dom";
import { useDispatch } from "react-redux";
const jwtDecode = require('jwt-decode');
export default function Navbar() {
  const classes = useStyles();
 // const user=null;
    const [user,setUser]=useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const location=useLocation();
    console.log(user)

     useEffect(() => {
       const token=user?.data.token;
       if (token) {
        const decodedToken = jwtDecode.jwtDecode(token);
        if (decodedToken.exp * 1000 < new Date().getTime())
         logout();
      }
  
       setUser(JSON.parse(localStorage.getItem('profile')))
     }, [location])

    const logout=()=>{
        dispatch({type:'LOGOUT'});
        navigate('/auth');
        setUser(null);
     }
  
  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <Link to='/' className={classes.brandContainer}>
      <img
          className={classes.image}
          src={memoriestext}
          alt="memories"
          height="60"
        />
        <img
          className={classes.image}
          src={memorieslogo}
          alt="memories"
          height="60"
        />
      </Link>
      <Toolbar className={classes.toolbar}>
        {user ? (
          <div className={classes.profile}>
            <Avatar
              className={classes.purple}
              alt={user?.data?.result?.name}
              src={user?.data?.result?.picture}
            />
            <Typography className={classes.userName} variant="h6">
              {user?.data?.result?.name}
            </Typography>
            <Button
              variant="contained"
              className={classes.logout}
              color="secondary"
              onClick={logout}
            >
               Logout
            </Button>
          </div>
        ) : (
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/auth"
          >
            Sign In
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
}
