import { comparePassword, hashedPassword } from "../Helpers/authHelper.js";
import userModel from "../Models/userModel.js";
import JWT from "jsonwebtoken";

export const registerController = async (req, res) => {
  try {
    const { name, email, password, phone, address } = req.body;
    if (!name) {
      return res.send({ error: " Name is required" });
    }
    if (!email) {
      return res.send({ error: " Email is required" });
    }
    if (!password) {
      return res.send({ error: " Password is required" });
    }
    if (!phone) {
      return res.send({ error: " Phone is required" });
    }
    if (!address) {
      return res.send({ error: " Address is required" });
    }

    //existing user

    const existingUser = await userModel.findOne({ email: email });

    //existing user
    if (existingUser) {
      return res.status(200).send({
        success: true,
        message: "User already exists Please login",
      });
    }

    const hashedpassword = await hashedPassword(password);

    const user = await new userModel({
      name,
      email,
      phone,
      address,
      password: hashedpassword,
    }).save();

    res.status(200).send({
      success: true,
      message: "User Registered successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Registration",
      error,
    });
  }
};

export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(401).send({
        success: false,
        message: "Invalid Email or Password",
      });
    }

    const user = await userModel.findOne({ email: email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Email is not registered",
      });
    }
    const match = await comparePassword(password, user.password);

    if (!match) {
      return res.status(200).send({
        success: false,
        message: "Invalid Password",
      });
    }
    // token
    const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "3h",
    });

    res.status(200).send({
      success: true,
      message: "login successful",
      user: {
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address,
      },
      token
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false, message: " Error in login", error });
  }
};
