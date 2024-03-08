import { AppBar, Typography } from '@material-ui/core'
import React from 'react'
import memories from "../../images/memories.png";
import useStyles from './styles';
export default function Navbar() {
    const classes=useStyles()
  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
    <Typography className={classes.heading} variant="h2" align="center">
      Memorize
    </Typography>
    <img className={classes.image} src={memories} alt="memories" height="60" />
  </AppBar>
  )
}
