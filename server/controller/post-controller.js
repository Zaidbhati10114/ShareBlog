import mongoose from "mongoose";
import post from "../schema/post-schema.js";
import Post from "../schema/post-schema.js";

export const createPost = async (request, response) => {
  console.log(request.body);
  try {
    const post = await new Post(request.body);
    post.save();
    response.status(200).json("Blog Saved");
  } catch (error) {
    response.status(500).json(error);
  }
};

export const getPosts = async (request, response) => {
  let userName = request.query.userName;
  let categories = request.query.categories;
  let posts;
  try {
    if (userName) posts = await Post.find({ userName: userName });
    else if (categories) posts = await Post.find({ categories: categories });
    else posts = await Post.find({});
    response.status(200).json(posts);
  } catch (error) {
    response.status(500).json(error);
  }
};

export const getPost = async (request, response) => {
  try {
    let post = await Post.findById(request.params.id);
    response.status(200).json(post);
  } catch (error) {
    response.status(500).json(error);
  }
};

export const updatePost = async (request, response) => {
  try {
    await Post.findByIdAndUpdate(request.params.id, {
      $set: request.body,
    });
    response.status(200).response("Blog Updated");
  } catch (error) {
    response.status(500).json(error);
  }
};

export const deletePost = async (request, response) => {
  try {
    let post = await Post.findById(request.params.id);
    await post.delete();
    response.status(200).response("Blog Deleteds");
  } catch (error) {
    response.status(500).json(error);
  }
};
