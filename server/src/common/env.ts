import { resolve } from 'path';
import * as dotenv from 'dotenv';

dotenv.config({ path: resolve(__dirname, '../../.env') });

const DB_CONNECTION_CONFIG = process.env.DB_CONNECTION;

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;

const IMDB_API_KEY = process.env.OMDB_API_KEY;

export { DB_CONNECTION_CONFIG, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, IMDB_API_KEY };
