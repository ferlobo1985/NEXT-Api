import mongoose from "mongoose";

export async function connectToDb(){
    if(mongoose.connection.readyState >= 1) return;
    
    return mongoose.connect(`mongodb+srv://admin:k9rGHYLTxHGyiYLM@cluster0.kb72pix.mongodb.net/?retryWrites=true&w=majority`)
}