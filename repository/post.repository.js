import { ObjectId } from "mongodb";
import { getClientConnection } from "./mongo.db.js";

async function createPost(post) {
  const client = getClientConnection();
  try {
    await client.connect();
    await client.db("pet-api").collection("posts").insertOne(post);
  } catch (error) {
    throw error;
  } finally {
    await client.close();
  }
}

async function getAllPosts() {
  const client = getClientConnection();
  try {
    await client.connect();
    return await client.db("pet-api").collection("posts").find({}).toArray();
  } catch (error) {
    throw error;
  } finally {
    client.close();
  }
}

async function createComment(comment, id) {
  const client = getClientConnection();
  try {
    await client.connect();
    const post = await client
      .db("pet-api")
      .collection("posts")
      .findOne({ _id: new ObjectId(id) });
    post.comentarios.push(comment);
    await client
      .db("pet-api")
      .collection("posts")
      .findOneAndUpdate({ _id: new ObjectId(id) }, { $set: { post } });
  } catch (error) {
    throw error;
  } finally {
    client.close();
  }
}

export default {
  createPost,
  getAllPosts,
  createComment,
};
