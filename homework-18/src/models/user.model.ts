import { getModelForClass, modelOptions, prop } from "@typegoose/typegoose";
import { Types } from "mongoose";

@modelOptions({
  schemaOptions: {
    versionKey: false,
    timestamps: true,
  },
})
export class User {
  @prop({ id: true })
  id!: Types.ObjectId;

  @prop({ required: true })
  login!: string;

  @prop({ required: true })
  password!: string;

  @prop({ required: true })
  email!: string;

  @prop({ required: false })
  avatar?: string;

  @prop({ required: false })
  firstName?: string;

  @prop({ required: false })
  lastName?: string;

  @prop({ required: true })
  social!: Object[];

  @prop({ required: true })
  age!: number;

  @prop({ required: false })
  interests?: number;

  @prop({ required: true })
  address1!: string;

  @prop({ required: false })
  address2?: string;

  @prop({ required: true })
  postIndex!: string;

  @prop({ required: false, default: false })
  isAdmin?: boolean;
}

export const UserModel = getModelForClass(User);
