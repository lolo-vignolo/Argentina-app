// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { MongoClient } from 'mongodb';

export default async function handler(req, res) {

  let client;
  
  try {
    client = await MongoClient.connect(
      process.env.DB_CNN,
      { useNewUrlParser: true, useUnifiedTopology: true });
  } catch (error) {
    res.status(500).json({ message: 'Could not connect to database.' }); /// este mensage lo agarro luego desde el fron para mostrarlo
    return;
  }
  
  const db = client.db()

  if (req.method === 'POST') {
    const { title , image, description } = req.body;

    if (
      !title ||
      !title.includes('') ||
      !image ||
      image.trim() === '' ||
      !description ||
      description.trim() === ''
    ) {
      res.status(422).json({ message: 'Invalid input.' });
      return;
    }

    ///object to storage in my DB

    const newMessage = {
      title,
      image,
      description,
    };

  

    try {
      const result = await db.collection('messages').insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({ message: 'Storing message failed!' });
      return;
    }

    client.close();

    res
    .status(201)
    .json({ message: 'Successfully stored message!', message: newMessage });
}



  if (req.method === "GET"){

    
  try{
    const documents = await db
    .collection("messages")
    .find()
    .sort({_id:-1})
    .toArray()
    res.status(200).json({comments:documents})
  } catch{
    (err)=>console.log(err);
  }
 }

 client.close()


}









