import { MongoClient } from 'mongodb' 

export default function getChats(req, res) {

// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb://root:example@0.0.0.0:6666";

// create mongo connection client
const client = new MongoClient(uri);

async function run() {

  try {

    const database = client.db("courses");
    const col = database.collection("chats");
    
    const cursor = await col.find({}).project({ _id: 0, username: 1, content: 1 }).toArray();
    console.log("Mongo Results:");
    console.log(cursor);
    res.status(200).json(cursor);

  } finally {
    
    await client.close();
  }
}

run().catch(console.dir);
  
}