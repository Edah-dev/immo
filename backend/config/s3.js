const AWS = require('aws-sdk');
const dotenv = require('dotenv');

dotenv.config();

const s3 = new AWS.S3({
  endpoint: process.env.IDRIVE_E2_ENDPOINT, // Endpoint IDrive e2
  accessKeyId: process.env.IDRIVE_E2_ACCESS_KEY, // Access Key IDrive e2
  secretAccessKey: process.env.IDRIVE_E2_SECRET_KEY, // Secret Key IDrive e2
  s3ForcePathStyle: true, // Nécessaire pour IDrive e2
  signatureVersion: 'v4', // Nécessaire pour IDrive e2
});

module.exports = s3;