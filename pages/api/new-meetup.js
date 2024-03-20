import { MongoClient } from "mongodb";
export default async function handleClientScriptLoad(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    const client = await MongoClient.connect(
      "mongodb+srv://mada:root@mmetup.dakvvbb.mongodb.net/?retryWrites=true&w=majority&appName=mmetup"
    );
    const db = client.db();
    const meetupCollection = db.collection("meetups");
    const result = await meetupCollection.insertOne(data);
    console.log(result);
    client.close();
    res.status(201).json({ message: "Meetup updated successfully" });
  }
}
