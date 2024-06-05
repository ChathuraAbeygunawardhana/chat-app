import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import generateTokenAndSetCookie from '../utils/generateToken.js';

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
    const salt = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(password, salt);

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=[${userName}]`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=[${userName}]`;

    const newUser = new User({
      fullName,
      userName,
      password: hashedPassword,
      gender,
      profilePic: gender == 'male' ? boyProfilePic : girlProfilePic,
    });

    generateTokenAndSetCookie(newUser._id, res);
    await newUser.save();

    res.status(201).json({
      _id: newUser._id,
      fullName: newUser.fullName,
      userName: newUser.userName,
      profilePic: newUser.profilePic,
    });
  } catch (error) {
    console.log('error in sign up controller ', error.message);
    res.status(500).json({ error: error.message });
  }
};

export const login = async (req, res) => {
  try {
  } catch (error) {
    console.log('error in login controller ', error.message);
    res.status(500).json({ error: error.message });
  }
};

export const logout = (req, res) => {
  res.send('logout user');
};
