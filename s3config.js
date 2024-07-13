const AWS = require("aws-sdk");

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

const listFiles = async (folderPath) => {
	const params = {
		Bucket: process.env.S3_BUCKET_NAME,
		Prefix: folderPath, // your folder path in the bucket
	};

	try {
		const data = await s3.listObjectsV2(params).promise();
		return data.Contents.map((file) => ({
			key: file.Key,
			lastModified: file.LastModified,
			size: file.Size,
		}));
	} catch (error) {
		console.error('Error fetching files:', error);
		return [];
	}
};

module.exports = { listFiles };
