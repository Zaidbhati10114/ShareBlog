import React, { useState, useEffect } from "react";
import {
  Box,
  makeStyles,
  FormControl,
  InputBase,
  Button,
  TextareaAutosize,
} from "@material-ui/core";
import { AddCircle } from "@material-ui/icons";
import { getPost, updatePost } from "../../service/api";
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
  form: {
    display: "flex",
    flexDirection: "row",
    marginTop: 10,
  },

  textField: {
    flex: 1,
    margin: "0 30px",
    fontSize: "25",
  },

  textArea: {
    width: "100%",
    marginTop: 50,
    border: "none",
    fontSize: 18,
    "&:focus-visible": {
      outline: "none",
    },
  },
}));

const InitialValue = {
  title: "",
  description: "",
  picture: "",
  userName: "Zaid Bhati",
  categories: "All",
  createdAt: new Date(),
};

const UpdateBlog = ({ match }) => {
  const classes = useStyles();
  const url =
    "https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80";

  const [post, setPost] = useState(InitialValue);
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      let data = await getPost(match.params.id);
      setPost(data);
      console.log(data);
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const updateBlog = async () => {
    await updatePost(match.params.id, post);
    history.push(`/details/${match.params.id}`);
  };

  return (
    <Box className={classes.container}>
      <img className={classes.image} src={url} alt="Blog_image" />
      <FormControl className={classes.form}>
        <AddCircle fontSize="large" color="action" />
        <InputBase
          onChange={(e) => handleChange(e)}
          name="title"
          value={post.title}
          className={classes.textField}
          placeholder="Title"
        />
        <Button
          onClick={() => updateBlog()}
          variant="contained"
          color="primary"
        >
          Update
        </Button>
      </FormControl>
      <TextareaAutosize
        value={post.description}
        name="description"
        onChange={(e) => handleChange(e)}
        rowsMin={5}
        placeholder="Tell Your Blog"
        className={classes.textArea}
      />
    </Box>
  );
};

export default UpdateBlog;
