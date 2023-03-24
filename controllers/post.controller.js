import postService from "../services/post.service.js";

async function createPost(request, response, next) {
  try {
    const post = request.body;
    response.send(await postService.createPost(post));
    logger.info(`POST on /post - ${JSON.stringify(post)}`);
  } catch (error) {
    next(error);
  }
}

async function getAllPosts(request, response, next) {
  try {
    response.send(await postService.getAllPosts());
    logger.info(`GET on /post `);
  } catch (error) {
    next(error);
  }
}

async function createComment(request, response, next) {
  try {
    const params = request.body;
    if (!params.comment || !params.id) {
      throw new Error("The fields comment and Id are required.");
    }
    response.send(await postService.createComment(params.comment, params.id));
    logger.info(`POST on /post - ${JSON.stringify(params)}`);
  } catch (error) {
    next(error);
  }
}

export default {
  createPost,
  getAllPosts,
  createComment,
};
