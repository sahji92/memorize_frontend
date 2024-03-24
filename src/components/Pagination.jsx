import React from 'react'
import {Pagination,PaginationItem} from '@material-ui/lab'
import { Link } from 'react-router-dom';
import useStyles from './styles'
const Paginate=()=> {
    const classes=useStyles();
  return (
    <Pagination
    classes={{ul:classes.ul}}
    count={5}
    page={1}
    varient='outlined'
    color='primary'
    renderItem={(item)=>{
    <PaginationItem {...item} element={Link} to={`posts?page=${1}`}/>
    }}/>
  )
}
export default  Paginate
