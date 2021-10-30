import axios from "axios";
const URL = "http://localhost:8000";

export const createPost = async (post) => {
  try {
    return await axios.post(`${URL}/create`, post);
  } catch (error) {
    console.log("Error while Posting Posts", error);
  }
};

export const getPosts = async (param) => {
  try {
    let response = await axios.get(`${URL}/posts${param}`);
    return response.data;
  } catch (error) {
    console.log("Error While getting the Posts");
  }
};

export const getPost = async (id) => {
  try {
    let response = await axios.get(`${URL}/post/${id}`);
    return response.data;
  } catch (error) {
    console.log("Error While getting the Posts");
  }
};

export const updatePost = async (id, post) => {
  try {
    await axios.post(`${URL}/update/${id}`, post);
  } catch (error) {
    console.log("Error While Updating the Posts", error);
  }
};

export const deletePost = async (id) => {
  try {
    await axios.delete(`${URL}/update/${id}`);
  } catch (error) {
    console.log("Error While Deleting the Posts", error);
  }
};

export const uploadFile = async (data) => {
  try {
    return await axios.post(`${URL}/file/upload`, data);
  } catch (error) {
    console.log("Error While Uploading Image File", error);
  }
};
