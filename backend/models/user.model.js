import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minLength: 6,
    },
    gender: {
      type: String,
      required: true,
      enum: {
        values: ['male', 'female'],
        message: 'Gender must be either male or female',
      },
    },
    profilePic: {
      type: String,
      default: '',
    },
  },
  /* created at | updated at | Member since -> <created_at> */
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;
