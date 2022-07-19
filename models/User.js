import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name'],
    maxlength: [60, 'Name cannot be more than 60 characters'],
  },
  email: {
    type: String,
    required: [true, 'Please provide a email'],
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
  },
});

export default mongoose.models.User || mongoose.model('User', UserSchema);