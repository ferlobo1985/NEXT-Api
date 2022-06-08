import mongoose from "mongoose";

export async function connectToDb(){
    if(mongoose.connection.readyState >= 1) return;
    
    return mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_NAME}/?retryWrites=true&w=majority`)
}