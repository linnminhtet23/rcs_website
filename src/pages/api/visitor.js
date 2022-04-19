import { connectToDatabase } from "../../lib/db";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const client = await connectToDatabase();
    const collection = client.db().collection("visitors");

    const visitor = await collection.findOne();
    res.status(200).json({ visitors: visitor.visitors });
  }

  if (req.method === "POST") {
    if (req.headers.authorization === "rcs-website-secret-token") {
      const client = await connectToDatabase();
      const collection = client.db().collection("visitors");

      let { _id, visitors } = await collection.findOne();
      visitors++;

      await collection.updateOne(
        { _id: _id },
        { $set: { visitors: visitors } }
      );

      res.status(201).json({ visitors });
    } else {
      res.status(403).json({ message: "Unauthorized!" });
    }
  }
}
