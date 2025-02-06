const { User } = require('./model/user'); // Adjust the path to where your User model is defined

// Create a new user
const createUser = async (req, res) => {
  try {
    const { username, password, email } = req.body;

    // Validate input before creating
    if (!username || !password || !email) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    const newUser = await User.create({
      username,
      password,
      email,
    });

    return res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error creating user', error: error.message });
  }
};

// Get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    return res.status(200).json(users);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error fetching users', error: error.message });
  }
};

// Get a user by ID
const getUserById = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findByPk(id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    return res.status(200).json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error fetching user', error: error.message });
  }
};

// Update a user
const updateUser = async (req, res) => {
  const { id } = req.params;
  const { username, password, email } = req.body;

  try {
    const user = await User.findByPk(id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    user.username = username || user.username;
    user.password = password || user.password;
    user.email = email || user.email;

    await user.save();

    return res.status(200).json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error updating user', error: error.message });
  }
};

// Delete a user
const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findByPk(id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    await user.destroy();
    return res.status(204).send(); // Successfully deleted, no content to return
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error deleting user', error: error.message });
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
};
