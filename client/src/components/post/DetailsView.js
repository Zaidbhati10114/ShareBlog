import React, { useState, useEffect } from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";
import { Edit } from "@material-ui/icons";
import { Delete } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { getPost, deletePost } from "../../service/api";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  image: {
    width: "100%",
    height: "50vh",
    objectFit: "cover",
  },
  container: {
    padding: "0 100px",
    [theme.breakpoints.down("md")]: { padding: 0 },
  },
  icons: {
    float: "right",
  },
  icon: {
    margin: 5,
    border: "1px solid #878787",
    padding: "5px",
    borderRadius: "10px",
    cursor: "pointer",
  },
  heading: {
    fontSize: 30,
    fontWeight: 600,
    textAlign: "center",
    margin: "50px 0 10 0px",
  },
  subHeading: {
    color: "#878787",
    display: "flex",
    margin: "20px 0",
    [theme.breakpoints.down("md")]: { display: "block" },
  },

  link: {
    textDecoration: "none",
    color: "inherit",
  },
}));

const DetailsView = ({ match }) => {
  const classes = useStyles();
  const url =
    "https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80";

  const [post, setPost] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      let data = await getPost(match.params.id);
      console.log(data);
      setPost(data);
    };

    fetchData();
  }, []);

  const deleteBlog = async () => {
    await deletePost(post._id);
    history.push("/");
  };

  return (
    <Box className={classes.container}>
      <img src={post.picture || url} alt="banner" className={classes.image} />
      <Box className={classes.icons}>
        <Link to={`/update/${post._id}`}>
          <Edit
            className={classes.icon}
            variant="contained"
            color="primary"
            style={{ cursor: "pointer" }}
          />
        </Link>
        <Delete
          onClick={() => deleteBlog()}
          className={classes.icon}
          color="error"
        />
      </Box>
      <Typography className={classes.heading}>{post.title}</Typography>
      <Box className={classes.subHeading}>
        <Link to={`/?userName=${post.userName}`} className={classes.link}>
          <Typography className={classes.author}>
            Author:<span style={{ fontWeight: 600 }}>{post.userName}</span>
          </Typography>
        </Link>
        <Typography style={{ marginLeft: "auto" }} className={classes.date}>
          {new Date(post.createdAt).toDateString()}
        </Typography>
      </Box>
      <Typography>{post.description}</Typography>
    </Box>
  );
};

export default DetailsView;
