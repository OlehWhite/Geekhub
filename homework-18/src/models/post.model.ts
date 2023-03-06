import { getModelForClass, modelOptions, prop } from "@typegoose/typegoose";
import { Types } from "mongoose";

@modelOptions({
  schemaOptions: {
    versionKey: false,
    timestamps: true,
  },
})
export class Post {
  @prop({ required: true })
  topic!: string;

  @prop({ required: true })
  text!: string;

  @prop({ required: true })
  user!: Types.ObjectId;

  @prop({ id: true })
  id!: Types.ObjectId;
}

export class Posts {
  @prop({ required: true })
  user!: Types.ObjectId;

  @prop({ required: true })
  skip!: string;

  @prop({ required: true })
  take!: string;

  @prop({ id: true })
  id!: Types.ObjectId;
}

export const PostModel = getModelForClass(Post);
export const PostsModel = getModelForClass(Posts);
