import { MongoClient } from 'mongodb' 

export default function getChats(req, res) {




// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb://root:example@localhost:6666";

// create mongo connection client
const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db("courses");
    const movies = database.collection("chats");

    // query for movies that have a runtime less than 15 minutes
    const query = { };
    const options = { };

    const cursor = movies.find(query, options);

    let buffer = '';

    // loop over the documents 
    cursor.forEach(element => {
        console.log(element);
        buffer = buffer + element;
    });

    // async return back the records
    res.status(200).json(buffer);



  } finally {

  }
}


run().catch(console.dir);



}