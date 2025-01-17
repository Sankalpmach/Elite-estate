import User from "../modules/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res , next) => {
  //res.json({ message: "Hello world auth controller" });
  const { username, email, password } = req.body;
  // console.log(req.body);

  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });
  try {
    await newUser.save();
    res.status(201).json("user created successfuly!");
  } catch (error) {
    //if user already exit then send error
    next(error);
  }
};
