import {MongoClient} from "mongodb";


export async function connectToDatabase () {


    const clientConection = await MongoClient.connect(process.env.DB_CNN_AUTH)
    return clientConection;
  
}