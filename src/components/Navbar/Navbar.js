import { AppBar, Avatar, Button, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import memories from "../../images/memories.png";
import useStyles from "./styles";
import { Link } from "react-router-dom";
export default function Navbar() {
  const classes = useStyles();
  const user=null;
  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.brandContainer}>
        <Typography
          className={classes.heading}
          variant="h2"
          align="center"
          component={Link}
          to="/"
        >
          Memorize
        </Typography>
        <img
          className={classes.image}
          src={memories}
          alt="memories"
          height="60"
        />
      </div>
      <Toolbar className={classes.toolbar}>
        {user ? (
          <div className={classes.profile}>
            <Avatar
              className={classes.purple}
              alt={user.result.name}
              src={user.result.imageUrl}
            />
            <Typography className={classes.userName} variant="h6">
              {user.result.name}
            </Typography>
            <Button
              variant="contained"
              className={classes.logout}
              color="secondary"
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
