import { Post, PostModel, Posts, PostsModel } from "../models";
import { Types } from "mongoose";
import { HttpError } from "../common/errors";

export class PostService {
  async addPost(topic: string, text: string, userId: string): Promise<Post> {
    return PostModel.create({
      topic,
      text,
      user: new Types.ObjectId(userId),
    });
  }

  async takePosts(user: number, skip: number, take: number): Promise<Posts[]> {
    return PostsModel.find({ user }).skip(skip).limit(take);
  }

  async redactPost(id: string, topic: string, text: string) {
    const redPost = await PostModel.findByIdAndUpdate(id, {
      topic: topic,
      text: text,
    });

    if (!redPost) {
      throw new HttpError(404, "Not Found", "PostService");
    }

    return redPost;
  }

  async deletePost(id: number) {
    return PostModel.deleteOne({ _id: id });
  }
}

export const postService = new PostService();
