import { Grid } from "@material-ui/core";
import React from "react";
import Banner from "./Banner";
import Category from "./Categories";
import Post from "./Posts";

const Home = () => {
  return (
    <>
      <Banner />
      <Grid container>
        <Grid item lg={2} xs={12} sm={2}>
          <Category />
        </Grid>
        <Grid container item lg={10} xs={12} sm={10}>
          <Post />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
