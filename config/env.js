import { config } from "dotenv";

// Fallback to "development" if NODE_ENV is not set
const env = process.env.NODE_ENV || "development";

// Build correct file path
const envFile = `.env.${env}.local`;

// Load environment variables
config({ path: envFile });

export const {
  PORT,
  NODE_ENV,
  DB_URI,
  JWT_SECRET,
  JWT_EXPIRES_IN,
  ARCJET_KEY,
  ARCJET_ENV,
} = process.env;
