import { MongoClient } from "mongodb";

export async function connectToDatabase() {
    const client = await MongoClient.connect('mongodb+srv://kaung:r1W1lnyjChE0baN1@cluster0.qsm8m.mongodb.net/RCSDB?retryWrites=true&w=majority');

    return client;
}