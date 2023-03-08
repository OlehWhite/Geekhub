import Joi from "joi";

export const registerBodySchema = Joi.object({
  login: Joi.string().min(3).max(255).required(),
  password: Joi.string()
    .regex(
      /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,255}$/
    )
    .required(),
  email: Joi.string().min(3).max(255).email().required(),
  avatar: Joi.string().min(3).max(255),
  firstName: Joi.string().min(3).max(255),
  lastName: Joi.string().min(3).max(255),
  socials: Joi.object({
    facebook: Joi.string().min(3).max(255),
    instagram: Joi.string().min(3).max(255),
    twitter: Joi.string().min(3).max(255),
  }),
  age: Joi.number().min(18).max(150).required(),
  interests: Joi.array().items(Joi.string()),
  address1: Joi.string().min(10).max(255).required(),
  address2: Joi.string().min(10).max(255),
  postIndex: Joi.string().length(6).pattern(/^[0-9]+$/).required(),
});

export const postBodySchema = Joi.object({
  topic: Joi.string().min(10).max(64).required(),
  text: Joi.string().min(10).max(1000).required(),
  userId: Joi.string().required(),
})