import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import Postt from "../Home/Postt";
import { Link, useLocation } from "react-router-dom";
import { getPosts } from "../../service/api.js";

const Post = () => {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();
  // let postsCheck = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  useEffect(() => {
    const fetchData = async () => {
      let data = await getPosts(search);
      console.log(data);
      setPosts(data);
    };

    fetchData();
  }, [search]);

  return posts.map((post) => (
    <Grid item lg={3} sm={4} xs={12}>
      <Link
        to={`/details/${post._id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <Postt post={post} />
      </Link>
    </Grid>
  ));
};

export default Post;
