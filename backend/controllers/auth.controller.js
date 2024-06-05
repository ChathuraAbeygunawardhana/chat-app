import User from '../models/user.model.js';

export const signUp = async (req, res) => {
  try {
    const { fullName, userName, password, confirmPassword, gender } = req.body;
    if (password !== confirmPassword) {
      return res.status(400).json({ message: 'Passwords do not match' });
    }

    const user = await User.findOne({ userName });

    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }
    /* hash password here */

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=[${userName}]`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=[${userName}]`;

    const newUser = new User({
      fullName,
      userName,
      password,
      gender,
      profilePic: gender == 'male' ? boyProfilePic : girlProfilePic,
    });

    await newUser.save();

    res.status(201).json({
      _id: newUser._id,
      fullName: newUser.fullName,
      userName: newUser.userName,
      profilePic: newUser.profilePic,
    });
  } catch (error) {
    console.log('error in sign up controller ', error.message);
    res.status(500).json({ error: 'internal server error' });
  }
};

export const login = (req, res) => {
  res.send('login user');
};

export const logout = (req, res) => {
  res.send('logout user');
};
