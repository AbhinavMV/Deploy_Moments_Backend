import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT;

const env = {
  development: process.env.NODE_ENV === "development",
  staging: process.env.NODE_ENV === "staging",
  test: process.env.NODE_ENV === "test",
  production: process.env.NODE_ENV === "production",
};

const mongo = { url: process.env.MONGO_URI };

const jwtSecret = process.env.JWT_SECRET;

const projectId = process.env.GCLOUD_PROJECT_ID;

const keyFilename = process.env.GCLOUD_APPLICATION_CREDENTIALS;

const bucketURL = process.env.GCLOUD_STORAGE_BUCKET_URL;
// console.log(process.env.PRIVATE_KEY.toString());
const credentials = {
  type: "service_account",
  project_id: projectId,
  private_key_id: process.env.PRIVATE_KEY_ID,
  private_key: process.env.PRIVATE_KEY,
  client_email: process.env.CLIENT_EMAIL,
  client_id: process.env.CLIENT_ID,
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url: process.env.CLIENT_CERT_URL,
};

export { port, env, mongo, jwtSecret, projectId, credentials, bucketURL };
