import React, { useState } from 'react';
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Icon from './icon';
import useStyles from './styles';
import Input from './input';
import { useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode }  from 'jwt-decode';
import { signin, signup } from '../../actions/auth';

    const Auth = () => {

  const initialState={firstName:"",lastName:"",email:"",password:"",confirmPassword:""}
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const navigate=useNavigate()
  const dispatch=useDispatch();
  const[formData,setFormData]=useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData+"in handlesubmit");
    if(isSignup){
     dispatch(signup(formData,navigate))
    }
    else{
     dispatch(signin(formData,navigate))
    }
  };

  const handleChange = (e) => {
    console.log(formData)
    setFormData({...formData,[e.target.name]:e.target.value})
  };
  const handleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
     setShowPassword(false);
  };

  const googleSuccess=async(res)=>{
    // const cre=jwtDecode(res.credential)
    // console.log(cre)
    //  const result=res?.profileObj;
    //  const token=res?.tokenId;
    // try {
    //    dispatch({type:'AUTH',data:{cre}});
    //    navigate('/')
    // } catch (error) {
    //   console.log(error)
    // }
  }

  const googleFailure=(error)=>{
    console.log(error)
    alert('Google Sign In was unsuccessful, try again lator!')
  }
  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.Paper} elevation={3}>
        <Avatar className={classes.Avatar}>
          <LockOutlinedIcon/>
        </Avatar>
        <Typography component='h1' variant="h5">{isSignup ? "Sign Up" : "Sign In"}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <Input
                  name="firstName"
                  label="First Name"
                  handleChange={handleChange}
                  autoFocus
                  half
                />
                <Input
                  name="lastName"
                  label="Last Name"
                  handleChange={handleChange}
                  half
                />
              </>
            )}
            <Input
              name="email"
              label="Email Address"
              type="email"
              handleChange={handleChange}
            />
            <Input
              name="password"
              label="Password"
              type={showPassword ? "text" : "password"}
              handleChange={handleChange}
              handleShowPassword={handleShowPassword}
            />
            {isSignup && (
              <Input
                name="confirmPassword"
                label="Repeat Password"
                handleChange={handleChange}
                type="password"
              />
            )}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {isSignup ? "Sign Up" : "Sign In"}
          </Button>
          <GoogleLogin
            render={(renderProps) => (
              <Button
                className={classes.googleButton}
                color="primary"
                fullWidth
                onClick={renderProps.onClick}
                variant="contained"
                disabled={renderProps.disabled}
                startIcon={<Icon />}
              >
                Google Sign In
              </Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy='single_host_origin'
          />
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                {isSignup
                  ? "Already have an account? Sign in"
                  : "Don't have an account? Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};
export default Auth;
