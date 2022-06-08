import { MongoClient } from 'mongodb';

export async function connectToDb(){
    const dbClient = await MongoClient.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_NAME}/?retryWrites=true&w=majority`);
    return dbClient;
}