import { connect, connection } from 'mongoose';

import { DB_CONNECTION_CONFIG } from '../common/env';

const DATABASE_CONNECTION = `mongodb://${DB_CONNECTION_CONFIG}`;

const initializeMongo = (): void => {
  connect(
    DATABASE_CONNECTION,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    () => console.log(`===> Connecting database... ${DATABASE_CONNECTION}`),
  );

  const db = connection;

  db.on('error', console.error.bind(console, 'connection error!'));
  db.once('open', () => {
    console.log('===> Mongo connected');
  });
};

export default initializeMongo;

