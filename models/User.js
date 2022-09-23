import mongoose from "mongoose";
import validator from "validator";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name"],
    minlength: 3,
    maxlength: 20,
  },
  email: {
    type: String,
    required: [true, "Please provide a email"],
    validate: {
        validator: validator.isEmail,
        message: "Please provide a valid email"
    },
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
    minlength: 6,
  },
  lastName: {
    type: String,
    maxlength: 20,
    trim: true,
    default: ' ',
  },
  location: {
    type: String,
    maxlength: 20,
    trim: true,
    default: ' my city ',
  },
});

export default mongoose.model('User', UserSchema);
