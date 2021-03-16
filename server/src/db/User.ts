import { model, Schema } from 'mongoose';

const UserSchema = new Schema({
  googleId: {
    required: false,
    type: String,
  },
  username: {
    required: true,
    type: String,
  },
  favourites: {
    required: false,
    type: [String],
  },
});

const User = model('Users', UserSchema);

export default User;
