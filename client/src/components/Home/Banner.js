import React from "react";
import { makeStyles, Box, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  image: {
    background: "#FDF6F0",
    width: "100%",
    height: "50vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",

    "& :first-child": {
      marginTop: 20,
      fontSize: 66,
      color: "#1768AC",
    },

    "& :last-child": {
      fontSize: 20,
      color: "#1768AC",
    },
  },
});

const Banner = () => {
  const classes = useStyles();
  return (
    <Box className={classes.image}>
      <Typography> Share Blogs</Typography>
      <Typography>Made By Zaid</Typography>
    </Box>
  );
};

export default Banner;

// `url(${"https://images.pexels.com/photos/5077056/pexels-photo-5077056.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}) center/55% repeat-x #000`
