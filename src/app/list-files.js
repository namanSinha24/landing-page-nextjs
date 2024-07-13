import { listFiles } from "../../s3config";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const folderPath = "blog-database"; // Or set a default path
    const files = await listFiles(folderPath);
    res.status(200).json(files);
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
