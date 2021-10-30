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
import { createPost, uploadFile } from "../../service/api.js";
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

    addCircle: {
      cursor: "pointer",
    },
  },
}));

// INITIAL VALUES FOR INSERTION FOR DATABASE

const InitialValue = {
  title: "",
  description: "",
  picture: "",
  userName: "Zaid Bhati",
  categories: "All",
  createdAt: new Date(),
};

const CreateBlog = () => {
  const classes = useStyles();

  const history = useHistory();
  const [post, setPost] = useState(InitialValue);
  const [file, setFile] = useState("");
  const [image, setImage] = useState("");

  const url = post.picture
    ? post.picture
    : "https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80";

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        // Send to database Image

        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);
        const image = await uploadFile(data);
        post.picture = image.data;
        setImage(image.data);
      }
    };
    getImage();
  }, [file]);

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const savePost = async () => {
    await createPost(post);
    history.push("/");
  };

  return (
    <Box className={classes.container}>
      <img className={classes.image} src={url} alt="Blog_image" />
      <FormControl className={classes.form}>
        <label htmlFor="fileInput">
          <AddCircle
            className={classes.addCircle}
            fontSize="large"
            color="action"
          />
        </label>

        <input
          type="file"
          id="fileInput"
          style={{ display: "none" }}
          onChange={(e) => setFile(e.target.files[0])}
        />
        <InputBase
          onChange={(e) => handleChange(e)}
          className={classes.textField}
          placeholder="Title"
          name="title"
        />
        <Button onClick={savePost} variant="contained" color="primary">
          Publish
        </Button>
      </FormControl>
      <TextareaAutosize
        rowsMin={5}
        placeholder="Tell Your Blog"
        className={classes.textArea}
        name="description"
        onChange={(e) => handleChange(e)}
      />
    </Box>
  );
};

export default CreateBlog;
