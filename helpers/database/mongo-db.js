import { MongoClient } from 'mongodb';

export async function connectToDb(){
    const dbClient = await MongoClient.connect(`mongodb+srv://admin:k9rGHYLTxHGyiYLM@cluster0.kb72pix.mongodb.net/?retryWrites=true&w=majority`);
    return dbClient;
}