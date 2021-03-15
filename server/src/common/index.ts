import { resolve } from 'path';
import * as dotenv from 'dotenv';

dotenv.config({ path: resolve(__dirname, '../../.env') });

const dbConnectionConfig = process.env.DB_CONNECTION;

export default dbConnectionConfig;
