import postRepository from "../repository/post.repository.js";

async function createPost(post) {
  return await postRepository.createPost(post);
}

async function getAllPosts() {
  return await postRepository.getAllPosts();
}

async function createComment(comment, id) {
  return await postRepository.createComment(comment, id);
}

export default {
  createPost,
  getAllPosts,
  createComment,
};
