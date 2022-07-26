import { Db, MongoClient } from "mongodb";
import mongoose from "mongoose";

interface dataMapper {
  client: MongoClient;
  database: Db;
}

export async function connect(): Promise<null | undefined> {
  const client = await mongoose
    .connect(
      "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.5.1"
    )
    .catch((err): void => {
      console.log("Error: ", err);
    });
  if (!client) {
    return null;
  }

  const db = mongoose.connection;

  db.on("error", console.error.bind(console, "connection error: "));
  db.once("open", function () {
    console.log("Connected successfully");
  });
}

export async function disconnect(client: MongoClient): Promise<void> {
  await client.close();
}
