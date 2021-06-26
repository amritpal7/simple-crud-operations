import User from "../models/User.js";

const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      success: true,
      count: users.length,
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      res.status(400).json({ success: false });
    }

    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

const updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!user) {
      res.status(400).json({ success: false });
    }

    res.status(200).json({ success: true, data: user });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);

    res.status(201).json({
      success: true,
      data: user,
    });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) {
      res.status(400).json({ success: false });
    }

    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

export { getUsers, getUser, createUser, updateUser, deleteUser };
