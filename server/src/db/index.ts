import { connect, connection, model, Schema } from 'mongoose';

import dbConnectionConfig from '../common/index';

const DATABASE_CONNECTION = `mongodb://${dbConnectionConfig}`;

const UserSchema = new Schema({
  name: String,
  email: String,
  favourites: [String],
});

const Users = model('Users', UserSchema);

const initializeMongo = (): void => {
  connect(DATABASE_CONNECTION, { useNewUrlParser: true }, () =>
    console.log(`===> Connecting database... ${DATABASE_CONNECTION}`),
  );

  const db = connection;

  db.on('error', console.error.bind(console, 'connection error!'));
  db.once('open', () => {
    console.log('===> Mongo connected');
  });
};

export default {
  initializeMongo,
  Users,
};
