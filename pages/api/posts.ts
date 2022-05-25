import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("theBlogDB");
  const posts = await db.collection("posts").find().toArray();
  res.json(posts);
}
