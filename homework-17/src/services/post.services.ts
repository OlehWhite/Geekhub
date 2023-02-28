import { Post, PostModel } from "../models";
import { Types } from "mongoose";

export class PostService {
  async addPost(topic: string, text: string, userId: string): Promise<Post> {
    return PostModel.create({
      topic,
      text,
      user: new Types.ObjectId(userId),
    });
  }
}

export const postService = new PostService();
