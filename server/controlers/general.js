import { User } from "../models/user.js";
export const getuser = async (req, res) => {
  try {
    const find = await User.findById(req.params.id).select("-password");
    if (!find) {
      throw new Error("there is no user with this id!!!!!");
    }
    res.status(200).json(find);
  } catch (err) {
    res.status(404).json({
      message: err,
    });
  }
};
export const getcustomers = async (req, res) => {
  try {
    const find = await User.find({ role: "user" }).select("-password");
    if (!find) {
      throw new Error("there is no user with this id!!!!!");
    }
    res.status(200).json(find);
  } catch (err) {
    res.status(404).json({
      message: err,
    });
  }
};
