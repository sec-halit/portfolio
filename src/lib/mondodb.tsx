import { MongoClient, MongoClientOptions } from "mongodb"
import { Promise } from "mongoose"

const uri = String(process.env.MONGODB_URI)


let client

if (!process.env.MONGODB_URI) {
  throw new Error("Please add your Mongo URI to .env.local")
}


client = new MongoClient(uri)
export default client.connect()