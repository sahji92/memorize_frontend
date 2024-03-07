import React, { useEffect } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core/";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import moment from "moment";
import { useDispatch } from "react-redux";
import useStyles from "./styles";
import { apiEndpoints, httpMethods } from "../../../constants/constants";
import apiConnection from "../../../apiConnection";

const Post = ({ post }) => {
  const classes = useStyles();
  const deletePost = async (id) => {
    const data = await apiConnection(
      `${apiEndpoints.DELETE_POST_ENDPOINT}/${id}`,
      httpMethods.DELETE
    );
    if (data.status === 200) {
      console.log("post deleted");
    } else {
      console.log("error in delete");
    }
  };

  const likePost = async (id) => {
    const data = await apiConnection(
      `${apiEndpoints.LIKE_POST_ENDPOINT}/${id}/likePost`,
      httpMethods.PUT
    );
    if (data.status === 200) {
      console.log("post liked");
    } else {
      console.log("error in like");
    }
  };

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={
          post.selectedFile ||
          "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
        }
        title={post.title}
      />
      <div className={classes.overlay}>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">
          {moment(post.createdAt).fromNow()}
        </Typography>
      </div>
      <div className={classes.overlay2}>
        <Button style={{ color: "white" }} size="small" onClick={() => {}}>
          <MoreHorizIcon fontSize="default" />
        </Button>
      </div>
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary" component="h2">
          {post.tags.map((tag) => `#${tag} `)}
        </Typography>
      </div>
      <Typography
        className={classes.title}
        gutterBottom
        variant="h5"
        component="h2"
      >
        {post.title}
      </Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {post.message}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" onClick={() => {likePost(post._id)}}>
          <ThumbUpAltIcon fontSize="small" /> Like {post.likeCount}{" "}
        </Button>
        <Button
          size="small"
          color="primary"
          onClick={() => deletePost(post._id)}
        >
          <DeleteIcon fontSize="small" /> Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
