import { config } from 'dotenv';

config();

const {
  MONGO_DB_PROTOCOL,
  MONGO_DB_HOST,
  MONGO_DB_USERNAME,
  MONGO_DB_PASSWORD,
  LOCAL,
} = process.env;

export const getMongoDbConnectionString = () =>
  LOCAL
    ? 'mongodb://127.0.0.1:27017/forum'
    : `${MONGO_DB_PROTOCOL}${MONGO_DB_USERNAME}:${encodeURIComponent(
        MONGO_DB_PASSWORD,
      )}${MONGO_DB_HOST}`;
