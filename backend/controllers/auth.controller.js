import User from "../models/user.model.js";

export const signup = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;

    if (password !== confirmPassword)
      return res.status(400).json({ error: "Passwords don't match" });

    const user = await User.findOne({ username });

    if (user) return res.status(400).json({ error: "Username already exists" });

    // HASH PASSWORD
  } catch (error) {
    console.log(error);
  }
};

export const login = (req, res) => {
  console.log("Login user");
};

export const logout = (req, res) => {
  console.log("logout user");
};
